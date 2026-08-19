/*
 * Автоматический срез SendPulse. Обновляется read-only сценарием Make:
 * GET /campaigns?order=desc&limit=100. TEST/PREVIEW/диагностические кампании исключаются.
 */
window.sendPulseSnapshot={
 updatedAt:'2026-08-19T10:20:00+03:00',
 periodFrom:'2026-08-12',
 campaigns:[
  {id:2814101,vacancyId:'jar-world-cruise',name:'DJ World Cruise',date:'18.08',sent:2302,delivered:2259,opened:630,clicks:2,unsubscribed:1,errors:32},
  {id:2813938,vacancyId:null,name:'Aerial / Adagio Duo · Luxury Cruise',date:'18.08',sent:263,delivered:260,opened:147,clicks:3,unsubscribed:0,errors:3},
  {id:2813194,vacancyId:'bd-update',name:'Ballroom Teachers & Couples · Update',date:'17.08',sent:343,delivered:334,opened:125,clicks:0,unsubscribed:0,errors:9},
  {id:2809163,vacancyId:null,name:'TUI Milan · Open Audition',date:'14.08',sent:300,delivered:299,opened:226,clicks:0,unsubscribed:0,errors:1},
  {id:2808956,vacancyId:'dream-fv',name:'Female Vocalist · Cruise · resend',date:'14.08',sent:127,delivered:126,opened:30,clicks:0,unsubscribed:0,errors:0},
  {id:2808000,vacancyId:null,name:'Thailand · Local Musician',date:'13.08',sent:67,delivered:67,opened:36,clicks:0,unsubscribed:0,errors:0},
  {id:2807024,vacancyId:'dream-fv',name:'Female Vocalist · Cruise',date:'12.08',sent:268,delivered:266,opened:159,clicks:0,unsubscribed:2,errors:2},
  {id:2806733,vacancyId:null,name:'South Korea · Dancers',date:'12.08',sent:5117,delivered:5043,opened:1446,clicks:5,unsubscribed:4,errors:71},
  {id:2805941,vacancyId:'cameroon',name:'Cameroon · Female Dancers',date:'12.08',sent:2704,delivered:2562,opened:745,clicks:18,unsubscribed:5,errors:141},
  {id:2805942,vacancyId:'cameroon',name:'Cameroon · Female Dancers · resend',date:'13.08',sent:1973,delivered:1963,opened:223,clicks:6,unsubscribed:4,errors:9},
  {id:2805757,vacancyId:null,name:'Male Dancers · Cruise Ships',date:'12.08',sent:737,delivered:725,opened:209,clicks:3,unsubscribed:0,errors:12},
  {id:2804730,vacancyId:null,name:'Duos · South Korea',date:'12.08',sent:942,delivered:937,opened:224,clicks:1,unsubscribed:0,errors:5}
 ]
};

window.getSendPulseStats=function(vacancyId){
 const rows=window.sendPulseSnapshot.campaigns.filter(c=>c.vacancyId===vacancyId);
 if(!rows.length)return null;
 return rows.reduce((sum,row)=>{['sent','delivered','opened','clicks','unsubscribed','errors'].forEach(key=>sum[key]+=row[key]||0);return sum},{sent:0,delivered:0,opened:0,clicks:0,unsubscribed:0,errors:0,campaigns:rows.length});
};
