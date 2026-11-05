const fs = require('fs');
const path = require('path');

const candidates = [
  'js/brand-logos-data.js',
  'js/brand-flex-carousel.js',
  'js/hero-carousel.js',
  'cement/anbucement/js/cement-2026.js',
  'anbu-paint/assets/js/aero-shards.js',
  'anbu-paint/assets/js/OrbitControls.js',
  'anbu-paint/assets/js/three.min.js',
  'anbu-paint/js'
];

function checkAllHtml(candidate) {
  const allHtml = [];
  function walk(d) {
    fs.readdirSync(d).forEach(f => {
      const full = path.join(d, f);
      if (['node_modules', '.git', 'scratch', 'completed sites'].includes(f)) return;
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (f.endsWith('.html')) allHtml.push(full);
    });
  }
  walk('.');

  const base = path.basename(candidate);
  const foundIn = [];
  allHtml.forEach(h => {
    const c = fs.readFileSync(h, 'utf8');
    if (c.includes(base)) foundIn.push(h);
  });
  return foundIn;
}

candidates.forEach(c => {
  const refs = checkAllHtml(c);
  console.log(`${c}: found in ${refs.length} files -> ${refs.join(', ')}`);
});

