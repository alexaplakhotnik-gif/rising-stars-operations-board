const fs=require('fs');
const file=process.argv[2];
if(!file)throw new Error('Usage: node parse-telegram-export.js messages.html');
const html=fs.readFileSync(file,'utf8');
const decode=value=>value
  .replace(/<br\s*\/?\s*>/gi,'\n').replace(/<[^>]*>/g,' ')
  .replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&')
  .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#39;/g,"'")
  .replace(/\s*\n\s*/g,'\n').replace(/[ \t]+/g,' ').trim();
const chunks=html.split(/<div class="message /).slice(1).filter(part=>part.includes('default clearfix'));
let lastAuthor='';
const messages=chunks.map(part=>{
  const id=(part.match(/id="([^"]+)/)||[])[1]||'';
  const date=(part.match(/class="pull_right date details" title="([^"]+)/)||[])[1]||'';
  const authorMatch=(part.match(/<div class="from_name">([\s\S]*?)<\/div>/)||[])[1];
  if(authorMatch)lastAuthor=decode(authorMatch);
  const text=(part.match(/<div class="text">([\s\S]*?)<\/div>/)||[])[1]||'';
  const reply=(part.match(/In reply to[\s\S]*?GoToMessage\((\d+)\)/)||[])[1]||null;
  return{id,date,author:lastAuthor,replyTo:reply,text:decode(text)};
});
process.stdout.write(JSON.stringify(messages,null,2));
