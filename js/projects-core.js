'use strict';
window.ProjectStore = (() => {
 const safeUrl = (value, image = false) => {
  if (!value && image) return '';
  if (image && /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value)) return value;
  try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol) ? u.href : ''; } catch { return ''; }
 };
 function validate(input) {
  if (!Array.isArray(input) || input.length > 100) throw Error('O arquivo precisa conter uma lista de até 100 projetos.');
  const ids = new Set();
  return input.map(item => {
   if (!item || typeof item !== 'object') throw Error('Projeto inválido.');
   const text = (key, max, required = false) => { const value = typeof item[key] === 'string' ? item[key].trim() : ''; if (value.length > max || (required && !value)) throw Error('Preencha '+key+' (máximo '+max+' caracteres).'); return value; };
   const id = text('id', 100, true); if (ids.has(id)) throw Error('Existem IDs repetidos.'); ids.add(id);
   const url = safeUrl(text('url', 2000, true)); if (!url) throw Error('Use uma URL http ou https para o projeto.');
   const image = text('image', 1600000); if (image && !safeUrl(image, true)) throw Error('Imagem inválida. Use uma URL http/https ou PNG, JPEG, WebP.');
   if (!Array.isArray(item.tags) || item.tags.length > 15 || item.tags.some(t => typeof t !== 'string' || !t.trim() || t.length > 40)) throw Error('Use até 15 tags de até 40 caracteres.');
   if (!['live', 'development', 'experiment'].includes(item.status)) throw Error('Status inválido.');
   return {id, title:text('title',100,true), description:text('description',1500,true), descriptionEn:text('descriptionEn',1500), url, tags:item.tags.map(t=>t.trim()), status:item.status, image};
  });
 }
 const serialize = projects => 'window.PORTFOLIO_PROJECTS = '+JSON.stringify(validate(projects),null,2)+';\n';
 function parse(source) {
  if (source.length > 12000000) throw Error('Arquivo muito grande.');
  const trimmed = source.trim(); const match = trimmed.match(/^window\.PORTFOLIO_PROJECTS\s*=\s*([\s\S]*?);?$/);
  return validate(JSON.parse(match ? match[1].replace(/;$/, '') : trimmed));
 }
 async function loadPublished() {
  try {
   const response=await fetch('data/projects.js?fresh='+Date.now(),{cache:'no-store'});
   if(!response.ok)throw Error('Project request failed');
   const projects=parse(await response.text());window.PORTFOLIO_PROJECTS=projects;return projects;
  } catch { return validate(window.PORTFOLIO_PROJECTS); }
 }
 return {validate, safeUrl, serialize, parse, loadPublished};
})();
