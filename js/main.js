'use strict';
(async()=>{
const en = document.documentElement.lang === 'en';
const toggle = document.querySelector('.menu-toggle'), navigation = document.querySelector('#navigation');
const closeMenu = () => {toggle.setAttribute('aria-expanded','false');navigation.classList.remove('open');};
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape' && toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
function node(tag, cls, text){const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;}
try {
 let projects=await ProjectStore.loadPublished();
 if(new URLSearchParams(location.search).get('preview')==='local'){
  const saved=localStorage.getItem('italoluc-projects-draft-v1');if(saved)projects=ProjectStore.parse(saved);
  const banner=node('div','preview-banner',en?'LOCAL DRAFT PREVIEW — this content has not been published.':'PRÉVIA DO RASCUNHO LOCAL — este conteúdo ainda não foi publicado.');document.body.prepend(banner);
 }
 const list=document.querySelector('#project-list');list.replaceChildren();
 projects.forEach(project=>{
  const article=node('article','project'); const visual=node('div','project-visual pulse');
  if(project.image){const img=node('img','project-image');img.src=ProjectStore.safeUrl(project.image,true);img.alt=project.title;img.loading='lazy';img.addEventListener('error',()=>{img.remove();},{once:true});visual.append(img);}
  visual.append(node('span','small-label',en?'PROJECT / '+project.title.toUpperCase():'PROJETO / '+project.title.toUpperCase()));
  const mark=node('b','',project.title==='VT Pulse'?'VT':project.title); if(project.title==='VT Pulse')mark.append(node('span','','PULSE'));visual.append(mark,node('p','','BUILD. CONNECT. REPEAT.'),node('div','pulse-wave','▁ ▂ ▅ ▃ ▇ ▄ ▂ ▆ ▃ ▁'));
  const info=node('div','project-info');const labels=en?{live:'Live project',development:'In development',experiment:'Experiment'}:{live:'Projeto no ar',development:'Em desenvolvimento',experiment:'Experimento'};
  info.append(node('span','status','● '+labels[project.status]),node('h3','',project.title),node('p','',en?(project.descriptionEn||project.description):project.description));
  const tags=node('div','tags');project.tags.forEach(t=>tags.append(node('span','',t)));info.append(tags);
  const a=node('a','button',en?'Explore project ↗':'Conhecer projeto ↗');a.href=project.url;a.target='_blank';a.rel='noopener noreferrer';info.append(a);article.append(visual,info);list.append(article);
 });
 document.querySelector('#project-count').textContent=String(projects.length).padStart(2,'0')+' '+(en?(projects.length===1?'PROJECT':'PROJECTS'):(projects.length===1?'PROJETO':'PROJETOS'));
 if(!projects.length)list.append(node('p','next-project',en?'New projects are on the way.':'Novos projetos vêm por aí.'));
} catch(error){console.warn('Project data could not be loaded; showing built-in project.',error);}
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText('italoluc.dev@gmail.com');status.textContent=en?'Email copied!':'E-mail copiado!';}catch{status.textContent=en?'Please use the email link above.':'Use o link de e-mail acima.';}});
document.querySelector('#year').textContent=new Date().getFullYear();

})();
