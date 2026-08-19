const vacancyFilters={all:'Все',recurring:'Цикличные',oneoff:'Разовые',closed:'Закрытые'};
const vacancyData=[
 {id:'busan-lotte-performers',employer:'Busan Lotte World',contact:'—',type:'Amusement Park',position:'Performers · prince / princess image',country:'South Korea',status:'new',statusLabel:'Новый запрос',priority:'High',manager:'Настя Ревчук / DD',submitted:0,deadline:'срочно',source:'Почта',receivedAt:'2026-08-19T04:34:01+02:00',updated:'2026-08-19',recurring:true,meta:'нужны дополнительные performers · особый акцент на внешность и образ prince / princess',crm:'Точный проект нужно подтвердить',attention:'Проверить CRM-проект и начать подбор подходящих кандидатов'},
 {id:'lotte-jamsil-dd-girls',employer:'Lotte Jamsil',contact:'—',type:'Amusement Park',position:'2 Female Actors / Dancers',country:'South Korea',status:'new',statusLabel:'Новый запрос',priority:'High',manager:'Настя Ревчук / DD',submitted:0,deadline:'срочно',source:'Почта',receivedAt:'2026-08-19T04:16:04+02:00',updated:'2026-08-19',recurring:true,meta:'нужны 2 дополнительные девушки · Cristian Rubio уже выбран как male actor',crm:'Точный проект нужно подтвердить',attention:'Проверить CRM-проект и предложить подходящих девушек'},
 {id:'dream-fv',employer:'Genting Dream',contact:'Dream Cruises',type:'Cruise Ship',position:'Female Vocalist',country:'Intl',status:'work',statusLabel:'В работе',priority:'High',manager:'Инна MD',submitted:16,deadline:'25.09',idle:0,source:'Почта + CRM',updated:'2026-08-19',recurring:false,meta:'открыта 09.08 · старт 25.09 · $2 800',crm:'Dream, singers',attention:'',social:{instagram:true},stages:{lead:[['Лидов с таргета','106','Meta Lead Ads · UK + Canada','g'],['Заведены в CRM','101','95% · потеряно 5','g'],['Ушло автописьмо','87','письмо о вакансии получили 97','g'],['Полная анкета','3','у 98 нет промо-видео','r'],['Оценено','2','остальные ждут материалов','y']],work:[['В проекте','385','кандидатов в CRM','g'],['Рассылка','280','отправлено 13.08','g'],['Отклики','17','CRM: откликнулись / ответили','y'],['Написали вручную','9','статус CRM','g'],['Отложено','57','для будущих позиций','na'],['Отсев','7','не подходят / под вопросом / молчит','na']],result:[['Презентации','16','по CRM-проекту','y'],['Подтверждение','0','—','na'],['Контракт','0','—','na'],['Деньги','$0','—','na']] }},
 {id:'marella-d2',employer:'RWS / Marella Discovery 2',contact:'James Gordon',type:'Cruise Ship',position:'Piano/Vocalist',country:'Intl',status:'check',statusLabel:'Проверка',priority:'High',manager:'Инна MD',submitted:3,deadline:'11.08',source:'Почта + Telegram + CRM',updated:'2026-08-19',recurring:false,meta:'11.08–11.12.2026 · £650/нед.',crm:'Marella Discovery 2, singing pianist',attention:'Сверить: 04.08 RWS сообщил, что Piano/Vocalist уже недоступна',stages:{work:[['В проекте','128','кандидатов','g'],['Отправлено вручную','32','по CRM','g'],['Ответили','25','на рассылку / вакансию','y'],['Презентованы','3','работодателю','y']]}},
 {id:'marella-d1',employer:'RWS / Marella Discovery',contact:'—',type:'Cruise Ship',position:'Piano/Vocalist',country:'Intl',status:'check',statusLabel:'Проверка',priority:'High',manager:'Инна MD',submitted:0,deadline:'12.08',idle:0,source:'Почта',recurring:false,meta:'12.08–04.11.2026 · £650/нед.',crm:'Отдельный проект не найден',attention:'Требуется подтвердить или создать CRM-проект'},
 {id:'cameroon',employer:'Yaoundé, Cameroon',contact:'—',type:'Venue',position:'2 Female Dancers + Aerial Performer',country:'Cameroon',status:'check',statusLabel:'Проверка',priority:'High',manager:'Настя Ревчук / CD',submitted:0,deadline:'октябрь',idle:0,source:'Почта + CRM',recurring:true,meta:'5 месяцев · $1350 + tips',crm:'Female Dancers / Cameroon; aerial указан как Douala',attention:'Проверить Yaoundé / Douala',stages:{work:[['Female dancers','4','ответили на рассылку','y'],['Aerial','7','в похожем проекте Douala','y'],['География','!','нужно подтвердить','r']]}},
 {id:'msc-bellissima',employer:'MSC Bellissima',contact:'Jack / MSC',type:'Cruise Ship',position:'High Tenor Male Singer',country:'Intl',status:'new',statusLabel:'Новый запрос',priority:'High',manager:'MD · уточнить',submitted:0,deadline:'02.09',idle:0,source:'Почта',recurring:true,meta:'02.09.2026–19.03.2027',crm:'Точный singer-проект не найден',attention:'Нет CRM-проекта'},
 {id:'msc-grandiosa',employer:'MSC Grandiosa',contact:'Jack / MSC',type:'Cruise Ship',position:'High Tenor Male Singer',country:'Intl',status:'new',statusLabel:'Новый запрос',priority:'High',manager:'MD · уточнить',submitted:0,deadline:'13.09',idle:0,source:'Почта',recurring:true,meta:'13.09.2026–24.04.2027',crm:'Точный проект не найден',attention:'Нет CRM-проекта'},
 {id:'bahrain',employer:'Ravensthorpe Restaurant · Bahrain',contact:'—',type:'Restaurant',position:'DJ / Assistant DJ / Fire & LED Show',country:'Bahrain',status:'presentation',statusLabel:'Презентация',priority:'High',manager:'Ника / Таня CD',submitted:18,deadline:'—',idle:0,source:'Почта + CRM',recurring:false,meta:'контракт 2 года',crm:'Dj/Bahrain/2 year + Bahrain - Fire Show',stages:{work:[['DJ-проект','27','кандидатов','g'],['DJ презентовано','16','по CRM','g'],['Fire Show','2','презентованы','g'],['Assistant DJ','?','проверить общий проект','y']]}},
 {id:'austria',employer:'Austria',contact:'—',type:'Venue',position:'Solo Musician/Vocalist',country:'Austria',status:'check',statusLabel:'Проверка',priority:'Medium',manager:'Инна MD',submitted:9,deadline:'ноябрь',idle:0,source:'Почта + CRM',updated:'2026-08-19',recurring:false,meta:'ноябрь 2026–27.04.2027 · около €2500 net',crm:'Austria, pianists + Austria/ Singing Guitarist',attention:'Подтвердить соответствие проекта',stages:{work:[['Austria, pianists','39','2 презентованы','g'],['Singing Guitarist','18','7 презентованы','y'],['Соответствие','?','уточнить тип музыканта','y']]}},
 {id:'rws-reading-pianist',employer:'RWS Global',contact:'James Gordon',type:'Cruise Ship',position:'Reading Pianist / Show Band',country:'Intl',status:'check',statusLabel:'Проверка',priority:'High',manager:'Инна MD',submitted:0,deadline:'13.08',source:'Telegram',updated:'2026-08-04',recurring:false,meta:'старт 13.08.2026 · sight-reading · lounge / production shows',crm:'Точный проект не найден',attention:'Проверить актуальность и CRM-проект'},
 {id:'msc-meraviglia-pole',employer:'MSC Meraviglia',contact:'Show Up',type:'Cruise Ship',position:'Ground Pole + Contortion/Lollipop',country:'Intl',status:'work',statusLabel:'Есть отклики',priority:'High',manager:'Татьяна Литвинова',submitted:15,deadline:'13.10',source:'Telegram + CRM',updated:'2026-08-19',recurring:false,meta:'13.10.2026–27.04.2027 · от €1800/мес. · C1D',crm:'MSC Bellissima & MSC Meraviglia Fixed Pole/Lollipop + MSC Mervaiglia - Pole',stages:{work:[['В основном проекте','21','15 презентованы · 1 предложен контракт','g'],['Ответ на свежую рассылку','2','MSC Mervaiglia - Pole','g'],['Навыки','Pole','+ contortion/lollipop','y'],['C1D','обязательно','требование контракта','y']]}},
 {id:'jeju-lounge',employer:'Jeju Shilla Hotel',contact:'Raon Film',type:'5★ Hotel',position:'Instrumental Duo / Piano-Vocal Duo / Solo Harp',country:'South Korea',status:'check',statusLabel:'Проверка',priority:'High',manager:'Ника',submitted:0,deadline:'01.09',source:'Telegram + CRM',updated:'2026-08-10',recurring:false,meta:'01.12.2026–28.02.2027 · $1700/чел. · возможное продление',crm:'Найдены только старые/частичные Korea-проекты',attention:'Нужен единый актуальный CRM-проект'},
 {id:'jeju-band',employer:'Jeju Shilla Hotel',contact:'Raon Film',type:'5★ Hotel',position:'5-Piece Party Band',country:'South Korea',status:'work',statusLabel:'В работе',priority:'High',manager:'Ника',submitted:17,deadline:'01.09',source:'Telegram + CRM',updated:'2026-08-19',recurring:false,meta:'01.12.2026–28.02.2027 · $15000 за состав',crm:'South Korea Jeju Shilla Hotel 5 pc',stages:{work:[['В CRM','267','кандидатов/участников','g'],['Презентованы','17','по CRM','g'],['Ожидаются материалы','5','по CRM','y'],['Состав','5 pc','keys, drums, guitar, 2 vocals','y'],['Подача до','01.09','видео полного состава','y']]}},
 {id:'melco-trio',employer:'MELCO Resorts / City of Dreams Mediterranean',contact:'Maria Ioannou',type:'Resort',position:'Trio Band',country:'Cyprus',status:'new',statusLabel:'Новый запрос',priority:'High',manager:'Елена RS',submitted:0,deadline:'02.11',source:'Telegram + почта',updated:'2026-08-10',recurring:false,meta:'02.11.2026–29.01.2027',crm:'Точный проект не найден',attention:'Создать CRM-проект'},
 {id:'vicky-piano-singer',employer:'Vicky / China Cruise',contact:'Vicky · WeChat',type:'Cruise Ship',position:'Piano Singer · Chinese songs',country:'China / Malaysia',status:'work',statusLabel:'В работе',priority:'High',manager:'Ника',submitted:0,deadline:'—',source:'Telegram + CRM',updated:'2026-08-19',recurring:false,meta:'до $2300/мес. с комиссией · 6 дней · 4 сета',crm:'China, Vicky, pianist',stages:{work:[['В CRM','89','кандидатов','g'],['Отправлено вручную','75','по CRM','g'],['Отклики','9','по CRM','y'],['Язык','中文','китайские песни обязательно','y'],['Подача','WeChat','через Нику','g']]}},
 {id:'ram-dj',employer:'Ram Agency',contact:'—',type:'Agency',position:'DJs available immediately',country:'Europe',status:'new',statusLabel:'Новый запрос',priority:'High',manager:'Ника',submitted:0,deadline:'срочно',source:'Telegram',updated:'2026-08-13',recurring:false,meta:'доступность с 14.08.2026 · кандидаты из Европы',crm:'Точный проект не найден',attention:'Срочный запрос · нет CRM-проекта'},
 {id:'explora-lounge',employer:'Explora Journeys',contact:'Handre Potgieter',type:'Luxury Cruise',position:'Piano Lounge / Guitar Lounge Entertainer',country:'Intl',status:'presentation',statusLabel:'Презентация',priority:'High',manager:'Инна MD / Елена RS',submitted:48,deadline:'окт/ноя',source:'Telegram + почта + CRM',updated:'2026-08-19',recurring:true,meta:'4–5 месяцев · одноместная каюта · 4–5 сетов',crm:'RS_Explora Journeys + Explora/Singing Guitarist',stages:{work:[['Piano CRM','21','21 презентован','g'],['Guitar CRM','27','27 презентованы','g'],['Старт','окт/ноя','2026','y']]}},
 {id:'rccl-sax',employer:'RCCL',contact:'Online Audition',type:'Cruise Ship',position:'Alto / Tenor Saxophonists · Jazz Orchestra',country:'Intl',status:'work',statusLabel:'Кастинг открыт',priority:'High',manager:'Елена RS / Ника',submitted:21,deadline:'30.08',source:'Telegram + CRM',updated:'2026-08-14',recurring:true,meta:'alto/tenor · flute + clarinet doubles · sight-reading',crm:'RCCL Sax Players',stages:{work:[['В CRM','21','кандидат','g'],['Дедлайн','30.08','онлайн-подача','y'],['Прослушивание','Online','jazz / big band / funk','y']]}},
 {id:'jar-world-cruise',employer:'JAR Productions · World Cruise',contact:'Melissa Hillmer',type:'Cruise Ship',position:'Specialty Duo / Trio / DJ / Singers',country:'Intl',status:'presentation',statusLabel:'Презентация',priority:'High',manager:'Татьяна / Ника / Инна MD',submitted:19,deadline:'03.11',source:'Почта + Telegram + CRM',updated:'2026-08-19',recurring:true,meta:'03.11.2026–15.05.2027 · Ballroom Couple ведётся во вкладке BD',crm:'Vasco da Gama -Aerial/Adagio act + JAR_GermanCD',stages:{work:[['Specialty Duo','64','17 презентованы · 41 ответили','g'],['German acts','25','2 презентованы · 9 запросов промо','g'],['DJ / Trio / Singers','DE','немецкий обязателен','y'],['Ballroom Couple','исключено','ведётся во вкладке BD','na']]}},
 {id:'dubai-sax-event',employer:'Dubai · заказчик уточняется',contact:'—',type:'Event',position:'Saxophonist',country:'UAE',status:'check',statusLabel:'Проверка',priority:'High',manager:'Ника',submitted:0,deadline:'01.09',source:'Почта',updated:'2026-08-19',recurring:false,meta:'01.09.2026 · 07:00–11:30 · разовое выступление',crm:'Точный проект не найден',attention:'Уточнить заказчика, оплату и подтвердить свободного саксофониста в Дубае'},
 {id:'oblu-nye',employer:'OBLU',contact:'—',type:'Hotel / Resort',position:'New Year Entertainment',country:'Maldives',status:'check',statusLabel:'Проверка',priority:'High',manager:'Ответственный не назначен',submitted:0,deadline:'31.12',source:'Почта',updated:'2026-08-19',recurring:false,meta:'новогодняя ночь · рассматриваются варианты из США и Колумбии',crm:'Проект OBLU не найден',attention:'Определить хозяина вакансии и подтвердить, продолжаем ли работу'},
 {id:'ge-msc',employer:'GE / Guest Entertainers',contact:'Jack · MSC',type:'Постоянная воронка',position:'Целевой набор по жанрам',country:'Intl',status:'selection',statusLabel:'Отбор',priority:'High',manager:'Команда GE',submitted:'—',deadline:'цикл 08.2026',source:'Почта + CRM',updated:'2026-08-18',recurring:true,meta:'постоянная карточка · текущий цикл MSC',crm:'Требуется связать проекты и базу RS GE',stages:{work:[['База RS GE','1000+','исходная база','g'],['Отбор по жанру','—','текущий этап','y'],['Проверка материалов','—','ожидает синхронизации','na'],['Отправлены MSC','—','ожидает синхронизации','na']]}}
];

const requestSection=document.getElementById('view-requests');
const oldStyle=requestSection.querySelector('style');
requestSection.innerHTML='';requestSection.appendChild(oldStyle);
requestSection.insertAdjacentHTML('beforeend','<div id="request-dashboard"></div>');
const root=document.getElementById('request-dashboard');
let activeFilter='all',query='';
const today=new Date(),todayUtc=Date.UTC(today.getFullYear(),today.getMonth(),today.getDate());
const idleDays=v=>v.updated?Math.max(0,Math.round((todayUtc-Date.parse(`${v.updated}T00:00:00Z`))/86400000)):null;
const statusClass=s=>s==='new'?'s-new':s==='check'?'s-wait':s==='presentation'?'s-pres':s==='closed'?'s-stall':'s-work';
const priorityClass=p=>p==='High'?'p-high':p==='Medium'?'p-med':'p-low';
const vacancyIdentity={
 'dream-fv':{client:'Dream Cruises',contact:'—'},
 'marella-d2':{client:'RWS Global / Marella Cruises',contact:'James Gordon'},
 'marella-d1':{client:'RWS Global / Marella Cruises',contact:'—'},
 'cameroon':{client:'Не указан / уточнить',contact:'—'},
 'msc-bellissima':{client:'MSC Cruises',contact:'Jack'},
 'msc-grandiosa':{client:'MSC Cruises',contact:'Jack'},
 'bahrain':{client:'Ravensthorpe Restaurant',contact:'—'},
 'austria':{client:'Не указан / уточнить',contact:'—'},
 'rws-reading-pianist':{client:'RWS Global',contact:'James Gordon'},
 'msc-meraviglia-pole':{client:'MSC Cruises / Show Up',contact:'—'},
 'jeju-lounge':{client:'Jeju Shilla Hotel / Raon Film',contact:'—'},
 'jeju-band':{client:'Jeju Shilla Hotel / Raon Film',contact:'—'},
 'melco-trio':{client:'MELCO Resorts',contact:'Maria Ioannou'},
 'vicky-piano-singer':{client:'China Cruise',contact:'Vicky · WeChat'},
 'ram-dj':{client:'Ram Agency',contact:'—'},
 'explora-lounge':{client:'Explora Journeys',contact:'Handre Potgieter'},
 'rccl-sax':{client:'RCCL',contact:'—'},
 'jar-world-cruise':{client:'JAR Productions',contact:'Melissa Hillmer'},
 'dubai-sax-event':{client:'Не указан / уточнить',contact:'—'},
 'oblu-nye':{client:'OBLU',contact:'—'},
 'ge-msc':{client:'MSC / Guest Entertainers',contact:'Jack'}
 ,'busan-lotte-performers':{client:'Busan Lotte World',contact:'—'}
 ,'lotte-jamsil-dd-girls':{client:'Lotte Jamsil',contact:'—'}
};
const vacancyTitle=v=>`${v.position} · ${v.employer}`;
const clientName=v=>vacancyIdentity[v.id]?.client||v.client||v.employer;
const clientContact=v=>vacancyIdentity[v.id]?.contact??v.contact??'—';
const projectName=v=>v.client?v.employer:(v.id==='cameroon'||v.id==='austria'?v.employer:'');
const funnelSchema={
 lead:[['leads','Лиды с таргета'],['crm','Заведены в CRM'],['autoEmail','Ушло автописьмо'],['registered','Регистрация на сайте'],['promo','Есть промо'],['evaluated','Оценено'],['manager','Переданы менеджеру']],
 work:[['projectCandidates','Кандидатов в CRM-проекте'],['mailing','Рассылка'],['opened','Открыли рассылку'],['replies','Ответили на рассылку'],['manual','Написали вручную'],['manualReplies','Ответили менеджеру'],['talking','Идёт общение'],['waiting','Ожидаются материалы'],['submittedToClient','Переданы работодателю'],['deferred','Отложено'],['rejected','Отсев']],
 result:[['presented','Презентации'],['clientResponse','Ответ клиента'],['offered','Предложен контракт'],['confirmed','Подтверждение'],['contract','Контракт'],['money','Деньги']]
};
const emptyMetrics=()=>Object.fromEntries(Object.values(funnelSchema).flat().map(([key])=>[key,{value:key==='money'?'$0':'0',note:'—'}]));
function normalizeMetrics(v){
 const metrics=emptyMetrics();
 const all=[...(v.stages?.lead||[]),...(v.stages?.work||[]),...(v.stages?.result||[])];
 const set=(key,value,note)=>{if(!/^(?:\$?\d+(?:[.,]\d+)?|\d+\+)$/.test(String(value).trim()))return;metrics[key]={value:String(value),note:note||'По данным CRM / почты'}};
 all.forEach(([label,value,note])=>{
  const s=label.toLowerCase();let key='';
  if(s.includes('лид'))key='leads';
  else if(s.includes('заведены в crm'))key='crm';
  else if(s==='в crm'||s.includes('в проекте')||s.includes('основном проекте')||(s.includes('проект')&&(note||'').toLowerCase().includes('кандидат')))key='projectCandidates';
  else if(s.includes('автопись'))key='autoEmail';
  else if(s.includes('полная анкета')||s.includes('регистрац')||s.includes('подали на формы'))key='registered';
  else if(s.includes('есть промо'))key='promo';
  else if(s.includes('оценено'))key='evaluated';
  else if(s.includes('открыли'))key='opened';
  else if(s.includes('получили рассылку')||s==='рассылка')key='mailing';
  else if(s.includes('отклик')||s.includes('ответ на свежую')||s.includes('ответили на рассылку'))key='replies';
  else if(s==='ответили')key='manualReplies';
  else if(s.includes('вручную'))key='manual';
  else if(s.includes('общение')||s.includes('связались'))key='talking';
  else if(s.includes('запрошено промо')||s.includes('готовится')||s.includes('материал'))key='waiting';
  else if(s.includes('отлож')||s.includes('будущ'))key='deferred';
  else if(s.includes('отсев')||s.includes('не подходит')||s.includes('молчит'))key='rejected';
  else if(s.includes('презент'))key='presented';
  else if(s.includes('ответ клиента'))key='clientResponse';
  else if(s.includes('предложен контракт'))key='offered';
  else if(s.includes('подтвержд')||s.includes('принят'))key='confirmed';
  else if(s.includes('контракт'))key='contract';
  else if(s.includes('деньги'))key='money';
  if(key)set(key,value,note);
 });
 const sp=window.getSendPulseStats?.(v.id);
 if(sp){
  metrics.mailing={value:String(sp.sent),note:`SendPulse: доставлено ${sp.delivered} · ошибок ${sp.errors}`};
  metrics.opened={value:String(sp.opened),note:`SendPulse: переходов ${sp.clicks} · отписок ${sp.unsubscribed}`};
 }
 const replyCount=Number(metrics.replies.value)||0,mailingCount=Number(metrics.mailing.value)||0;
 if(replyCount>mailingCount)metrics.mailing={value:`≥${replyCount}`,note:'Точное число отправок не зафиксировано; минимум равен числу ответов'};
 const manualReplyCount=Number(metrics.manualReplies.value)||0,manualCount=Number(metrics.manual.value)||0;
 if(manualReplyCount>manualCount)metrics.manual={value:`≥${manualReplyCount}`,note:'Точное число исходящих сообщений не зафиксировано'};
 if(Number(v.submitted)>Number(metrics.presented.value||0))metrics.presented={value:String(v.submitted),note:'Подано / презентовано по карточке вакансии'};
 const presentedCount=Number(metrics.presented.value)||0;
 if(presentedCount>0){
  if((Number(metrics.manager.value)||0)<presentedCount)metrics.manager={value:`≥${presentedCount}`,note:'Минимум: эти кандидаты дошли до работы менеджера'};
  metrics.submittedToClient={value:String(presentedCount),note:'Подтверждено фактом презентации в CRM'};
 }
 return metrics;
}
const cards=(schema,metrics)=>`<div class="fun-grid funnel-unified">${schema.map(([key,label])=>{const item=metrics[key],zero=item.value==='0'||item.value==='$0';return `<div class="fun-c ${zero?'na':'g'}"><div class="fun-n">${label}</div><div class="fun-v ${zero?'zero':''}">${item.value}</div><div class="fun-x">${item.note}</div></div>`}).join('')}</div>`;
const socialChannels=[['facebook','Facebook'],['instagram','Instagram'],['telegram','Telegram'],['linkedin','LinkedIn'],['tiktok','TikTok']];
const socialChecks=v=>`<div class="social-checks">${socialChannels.map(([key,label])=>`<span class="social-check ${v.social?.[key]?'done':''}"><span class="box">${v.social?.[key]?'✓':''}</span>${label}</span>`).join('')}</div>`;
function detail(v){const metrics=normalizeMetrics(v),project=projectName(v);return `<div class="vac-panel"><div class="vac-note"><b>Вакансия:</b> ${vacancyTitle(v)} · <b>Клиент / заказчик:</b> ${clientName(v)} · <b>Контакт:</b> ${clientContact(v)}${project?` · <b>Проект / объект:</b> ${project}`:''}</div><div class="fun-h">0 · Публикация вакансии</div>${socialChecks(v)}<div class="fun-h">1 · Входящий поток</div>${cards(funnelSchema.lead,metrics)}<div class="fun-h">2 · Работа менеджера</div>${cards(funnelSchema.work,metrics)}<div class="fun-h">3 · Результат</div>${cards(funnelSchema.result,metrics)}${v.recurring?'<div class="vac-cycle"><b>Циклы</b><div class="cycle-list"><span class="cycle current">Август 2026 · открыт</span><span class="cycle">Следующий · ожидается</span></div></div>':''}<div class="vac-note">${v.meta} · CRM: ${v.crm} · каналы без галочки пока не подтверждены.</div></div>`}
const receivedTime=v=>Date.parse(v.receivedAt||v.received||v.updated||'1970-01-01')||0;
function filtered(){return vacancyData.filter(v=>(activeFilter==='all'||(activeFilter==='recurring'&&v.recurring&&v.status!=='closed')||(activeFilter==='oneoff'&&!v.recurring&&v.status!=='closed')||(activeFilter==='closed'&&v.status==='closed'))&&(!query||`${vacancyTitle(v)} ${clientName(v)} ${clientContact(v)} ${v.manager} ${v.country}`.toLowerCase().includes(query))).sort((a,b)=>receivedTime(b)-receivedTime(a))}
function render(){const rows=filtered(),active=vacancyData.filter(v=>v.status!=='closed'),attention=active.filter(v=>v.attention||(idleDays(v)!==null&&idleDays(v)>=5));root.innerHTML=`
 <div class="tiles"><div class="tile"><div class="tv">${active.length}</div><div class="tl">Активных запросов</div></div><div class="tile hi"><div class="tv">${active.filter(v=>v.status==='new'||v.status==='check').length}</div><div class="tl">Нужно проверить / создать проект</div></div><div class="tile bad"><div class="tv">${attention.length}</div><div class="tl">Требуют внимания</div></div><div class="tile warn"><div class="tv">${active.filter(v=>idleDays(v)!==null&&idleDays(v)>=5).length}</div><div class="tl">Без движения ≥ 5 дней</div></div><div class="tile ok"><div class="tv">${vacancyData.filter(v=>v.status==='closed').length}</div><div class="tl">Закрыто</div></div><div class="tile"><div class="tv">${active.filter(v=>v.recurring).length}</div><div class="tl">Цикличных воронок</div></div></div>
 <details class="req-attn-box"><summary><span>⚠ Требуют внимания сегодня</span><span>${attention.length}</span></summary><div class="req-attn">${attention.length?attention.map(v=>`<div class="req-attn-row"><strong>${v.employer} — ${v.position}</strong><span>${v.attention||`Нет обновлений ${idleDays(v)} дн.`}</span><span class="b ${statusClass(v.status)}">${v.statusLabel}</span><span class="req-danger">Ответств.: ${v.manager}</span></div>`).join(''):'<div class="req-attn-row"><strong>Критичных действий нет</strong></div>'}</div></details>
 <div class="vac-toolbar" id="vac-filters">${Object.entries(vacancyFilters).map(([k,l])=>`<button class="vac-filter ${k===activeFilter?'active':''}" data-filter="${k}">${l}</button>`).join('')}</div>
 <div class="req-controls"><input id="req-search" value="${query}" placeholder="Поиск: вакансия, клиент, контакт, менеджер…"></div><div class="legend">Кликните по строке вакансии — этапы раскроются под ней. Бальные пары в эту таблицу не включаются.</div>
 <div class="req-table-wrap"><table class="req-table"><thead><tr><th>Вакансия</th><th>Клиент / заказчик</th><th>Контакт</th><th>Тип</th><th>Страна</th><th>Статус</th><th>Приоритет</th><th>Ответственный</th><th>Подано</th><th>Дедлайн / старт</th><th>Без движения</th><th>Источник</th><th></th></tr></thead><tbody>${rows.map(v=>{const idle=idleDays(v),idleText=idle===null?'нет даты':idle===0?'сегодня':idle+' дн.';return`<tr class="req-main" data-id="${v.id}"><td>${vacancyTitle(v)}</td><td>${clientName(v)}</td><td>${clientContact(v)}</td><td>${v.type}</td><td class="req-country">${v.country}</td><td><span class="b ${statusClass(v.status)}">${v.statusLabel}</span></td><td><span class="b ${priorityClass(v.priority)}">${v.priority}</span></td><td>${v.manager}</td><td>${v.submitted}</td><td class="req-date">${v.deadline}</td><td class="${idle!==null&&idle>=5?'aging a-warn':'req-zero'}">${idleText}</td><td class="req-source">${v.source}</td><td class="req-chevron">этапы ▾</td></tr><tr class="req-detail" data-detail="${v.id}" hidden><td colspan="13">${detail(v)}</td></tr>`}).join('')}</tbody></table></div>`;
 root.querySelector('#vac-filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;activeFilter=b.dataset.filter;render()});
 root.querySelector('#req-search').addEventListener('input',e=>{const position=e.target.selectionStart;query=e.target.value.toLowerCase();render();const next=root.querySelector('#req-search');next.focus();next.setSelectionRange(position,position)});
 root.querySelectorAll('.req-main').forEach(row=>row.addEventListener('click',()=>{const d=root.querySelector(`[data-detail="${row.dataset.id}"]`);d.hidden=!d.hidden;row.querySelector('.req-chevron').textContent=d.hidden?'этапы ▾':'свернуть ▴'}));
}
render();
