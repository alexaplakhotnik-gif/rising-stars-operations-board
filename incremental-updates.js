/*
 * База таблиц зафиксирована 18.08.2026 в index.html.
 * Сюда поступают только изменения после снимка — полный повторный импорт не нужен.
 *
 * Формат contractUpdates:
 * { type: 'upsert'|'finish', key: 'artist|venue|start', cells: [...], attrs: {...}, changedAt: 'ISO date' }
 * Формат managerUpdates:
 * { manager: 'Имя', cells: [...], changedAt: 'ISO date' }
 */
window.contractUpdates = window.contractUpdates || [];
window.managerUpdates = window.managerUpdates || [];

(function applyIncrementalUpdates(){
  const contractBody=document.querySelector('#ct-table tbody');
  const managerBody=document.querySelector('#kpi-table tbody');
  if(!contractBody||!managerBody)return;

  const normalize=value=>(value||'').trim().toLowerCase().replace(/\s+/g,' ');
  const contractKey=row=>[row.cells[0]?.textContent,row.cells[2]?.textContent,(row.cells[6]?.textContent||'').split('→')[0]].map(normalize).join('|');
  const contracts=new Map([...contractBody.rows].map(row=>{row.dataset.recordKey=contractKey(row);row.dataset.source='snapshot-2026-08-18';return[row.dataset.recordKey,row]}));

  window.contractUpdates.sort((a,b)=>String(a.changedAt).localeCompare(String(b.changedAt))).forEach(change=>{
    const row=contracts.get(normalize(change.key));
    if(change.type==='finish'){
      if(row){row.hidden=true;row.dataset.finished='true'}
      return;
    }
    const target=row||contractBody.insertRow();
    (change.cells||[]).forEach((html,index)=>{const cell=target.cells[index]||target.insertCell();cell.innerHTML=html});
    Object.entries(change.attrs||{}).forEach(([key,value])=>target.dataset[key]=value);
    target.dataset.recordKey=normalize(change.key);
    target.dataset.source='incremental';
    target.dataset.changedAt=change.changedAt||'';
    contracts.set(target.dataset.recordKey,target);
  });

  const managers=new Map([...managerBody.rows].map(row=>[normalize(row.cells[0]?.textContent),row]));
  window.managerUpdates.sort((a,b)=>String(a.changedAt).localeCompare(String(b.changedAt))).forEach(change=>{
    const key=normalize(change.manager);const target=managers.get(key)||managerBody.insertRow();
    (change.cells||[]).forEach((html,index)=>{const cell=target.cells[index]||target.insertCell();cell.innerHTML=html});
    target.dataset.source='incremental';target.dataset.changedAt=change.changedAt||'';managers.set(key,target);
  });

  const snapshot=document.getElementById('manager-snapshot');
  const total=window.contractUpdates.length+window.managerUpdates.length;
  if(snapshot) snapshot.insertAdjacentHTML('beforeend',` <span class="b ${total?'s-work':'p-low'}">изменений после среза: ${total}</span>`);

  // Все относительные сроки считаются при каждом открытии от локальной даты пользователя.
  const now=new Date();
  const todayUtc=Date.UTC(now.getFullYear(),now.getMonth(),now.getDate());
  const oneDay=86400000;
  const dayWord=value=>{
    const n=Math.abs(value)%100,n1=n%10;
    if(n>10&&n<20)return'дней';
    if(n1===1)return'день';
    if(n1>=2&&n1<=4)return'дня';
    return'дней';
  };
  const activeRows=[];
  const recentlyFinished=[];
  let preparing=0;

  [...contractBody.rows].forEach(row=>{
    const finish=Number(row.cells[7]?.dataset.sort);
    if(!finish)return;
    const days=Math.round((finish-todayUtc)/oneDay);
    const aging=row.cells[7];
    aging.textContent=days===0?'сегодня':days>0?`${days} ${dayWord(days)}`:`${Math.abs(days)} ${dayWord(days)} назад`;
    aging.classList.remove('a-ok','a-warn','a-bad');
    aging.classList.add(days<=30?'a-bad':days<=60?'a-warn':'a-ok');

    if(row.dataset.st==='ct-prep'){preparing+=1;return;}
    if(row.dataset.finished==='true'||days<0){
      row.dataset.finished='true';
      if(days>=-30)recentlyFinished.push(row);
      return;
    }
    activeRows.push({row,finish,days});
    if(row.dataset.st!=='ct-prol'){
      const soon=days<=30;
      row.dataset.st=soon?'ct-soon':'ct-on';
      const badge=row.cells[8]?.querySelector('.b');
      if(badge){badge.className=`b ${soon?'ct-soon':'ct-on'}`;badge.textContent=soon?'Скоро освоб.':'На контракте';}
    }
  });

  const tiles=[...document.querySelectorAll('#view-contracts > .tiles .tv')];
  if(tiles[0])tiles[0].textContent=activeRows.length;
  if(tiles[1])tiles[1].textContent=activeRows.filter(item=>item.days<=30).length;
  if(tiles[2])tiles[2].textContent=activeRows.filter(item=>item.days>=31&&item.days<=60).length;
  if(tiles[3])tiles[3].textContent=preparing;

  const currentNames=new Set([...contractBody.rows].filter(row=>row.dataset.finished!=='true').map(row=>normalize(row.cells[0]?.textContent)));
  const withoutOffer=recentlyFinished.filter(row=>row.dataset.newOffer!=='true'&&!currentNames.has(normalize(row.cells[0]?.textContent)));
  const finishedTile=document.getElementById('recently-finished-no-offer');
  if(finishedTile)finishedTile.textContent=withoutOffer.length;

  const attention=document.querySelector('#view-contracts .attn');
  if(attention){
    attention.innerHTML=activeRows.filter(item=>item.days<=30).sort((a,b)=>a.finish-b.finish).map(({row,finish,days})=>{
      const end=new Date(finish).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit',year:'2-digit',timeZone:'UTC'});
      return `<div class="row"><div class="who">${row.cells[0].textContent}</div><div>${row.cells[2].textContent}</div><div>Ответств.: ${row.cells[4].textContent}</div><div class="days">до ${end} · ${days===0?'сегодня':`через ${days} ${dayWord(days)}`}</div></div>`;
    }).join('')||'<div class="row"><div class="who">В ближайшие 30 дней освобождений нет</div></div>';
  }
})();
