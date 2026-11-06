const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
console.log('Total lines in style.css:', lines.length);
for (let i = 7250; i < lines.length; i++) {
  if (lines[i].includes('/* =====') || lines[i].includes('BRAND MARQUEE') || lines[i].includes('brand-marquee')) {
    console.log('Next major section at line:', i + 1, lines[i]);
  }
}
