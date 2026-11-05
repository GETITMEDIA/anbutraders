const fs = require('fs');

const css = fs.readFileSync('cement/anbucement/css/cement-2026.css', 'utf8');
const lines = css.split('\n');

console.log('=== CSS RULES IN CEMENT-2026.CSS ===');
lines.forEach((l, i) => {
  if (l.startsWith('/* ──') || l.startsWith('/* ==')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});

