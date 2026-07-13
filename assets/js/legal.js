const THEME_KEY = 'nf_theme';
const LANG_KEY  = 'nf_lang';

function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem(THEME_KEY, t);
  ['auto','dark','light'].forEach(x => document.getElementById('btn-'+x).classList.toggle('active', x===t));
}

function setLang(l) {
  const effective = (l === 'auto')
    ? (navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en')
    : l;
  document.body.classList.toggle('lang-tr', effective === 'tr');
  document.documentElement.lang = effective;
  localStorage.setItem(LANG_KEY, l);
  document.getElementById('btn-lang-auto').classList.toggle('active', l === 'auto');
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  document.getElementById('btn-tr').classList.toggle('active', l === 'tr');
  document.querySelectorAll('.tr-tab').forEach(b => b.style.display = effective === 'tr' ? '' : 'none');
  document.querySelectorAll('.en-tab').forEach(b => b.style.display = effective === 'en' ? '' : 'none');
}

(function() {
  const t = localStorage.getItem(THEME_KEY) || 'auto';
  const l = localStorage.getItem(LANG_KEY)  || 'auto';
  setTheme(t);
  setLang(l);
})();
