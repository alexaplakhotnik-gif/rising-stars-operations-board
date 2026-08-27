/* Подтверждённый срез живых CRM-проектов BD на конец 26.08.2026. */
(function(){
 const updates={
  'JAR BD':{count:21,date:'25.08',steps:{'Презентованы':21}},
  'Ballroom Couples · International Cruises':{count:28,date:'26.08'},
  'Ballroom Couples · Database Update':{count:22,date:'26.08'},
  'Peel BD · October 2026':{count:67,date:'26.08',steps:{'Презентованы':9,'Требуется статус':52}},
  'Belinda King · Ballroom & Jazz Couple':{count:206,date:'25.08'},
  'Ballroom Couples · World Cruise 10/7–27':{count:46,date:'25.08'},
  'Dinner Show Switzerland · Ballroom':{count:15,date:'26.08'},
  'MSC Explora · Ballroom':{count:27,date:'26.08',steps:{'Переданы на подачу':1,'Презентованы':22,'Предложен контракт':4}},
  'Maldives BD · Festive Season':{count:15,date:'26.08',steps:{'Ответили':3,'Презентованы':9,'Не подходят':3}},
  'Saga · Spirit of Discovery':{count:16,date:'26.08'},
  'BTF · Burn the Floor BD':{count:7,date:'21.08',steps:{'Презентованы':7}},
  'RWS · Fred Olsen Balmoral BD':{count:21,date:'25.08',status:'Ответы / презентация',steps:{'Ответили':9,'Презентованы':11,'Не подходят':1}},
  'TUI BD':{count:4,date:'25.08'}
 };
 document.querySelectorAll('.bdv-card').forEach(function(card){
  const name=card.querySelector('.bdv-name')?.textContent.trim(),u=updates[name];if(!u)return;
  const meta=card.querySelector('.bdv-meta');if(meta)meta.textContent=meta.textContent.replace(/обновлено\s+\d{1,2}\.\d{1,2}/,'обновлено '+u.date);
  const count=card.querySelector('.bdv-count');if(count)count.textContent=String(u.count);
  if(u.status){const status=card.querySelector('.bdv-row .b');if(status)status.textContent=u.status;}
  if(u.steps)card.querySelectorAll('.bdv-step').forEach(function(step){const label=step.querySelector('.bdv-meta')?.textContent.trim();if(Object.prototype.hasOwnProperty.call(u.steps,label))step.querySelector('b').textContent=String(u.steps[label]);});
  const note=card.querySelector('.bdv-note');if(note)note.textContent='Источник: живые CRM-проекты · срез 26.08.2026 · количество означает карточки кандидатов, не пары.';
 });
 const activity=document.querySelector('.bdv-activity');
 if(activity)activity.innerHTML='<div class="bdv-activity-title">Актуализация базы BD · работа за 26.08</div><div class="bdv-activity-grid"><div class="bdv-activity-item"><span class="bdv-meta">Изменено карточек</span><b>23</b></div><div class="bdv-activity-item"><span class="bdv-meta">Презентаций</span><b>17</b></div><div class="bdv-activity-item"><span class="bdv-meta">Ответов</span><b>3</b></div><div class="bdv-activity-item"><span class="bdv-meta">Предложен контракт</span><b>1</b></div><div class="bdv-activity-item"><span class="bdv-meta">Будущие позиции</span><b>2</b></div><div class="bdv-activity-item"><span class="bdv-meta">Александра</span><b>21</b></div><div class="bdv-activity-item"><span class="bdv-meta">Яна</span><b>1</b></div><div class="bdv-activity-item"><span class="bdv-meta">Дарья</span><b>1</b></div></div><div class="bdv-people">26.08: MSC Explora — 12 презентаций; Peel BD — 1 презентация; Maldives BD — 1 ответ; Saga — 1 предложение контракта. Источник: живые CRM-проекты, изменения за день.</div>';
})();
