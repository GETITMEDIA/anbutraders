const fs = require('fs');

const css = fs.readFileSync('anbu-paint/assets/css/anbu-paint-2026.css', 'utf8');
console.log('Size of anbu-paint-2026.css:', css.length);
console.log('Total lines:', css.split('\n').length);

// Check major section headings in the CSS
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('/* ==') || l.includes('/* ──') || l.includes(':root') || l.includes('.anbu-navbar') || l.includes('.hero-')) {
    if (l.trim().startsWith('/*') || l.includes(':root') || l.trim().startsWith('.')) {
      console.log(`L${i+1}: ${l.trim().substring(0, 80)}`);
    }
  }
});

