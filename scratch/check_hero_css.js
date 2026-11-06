const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
let matches = [];
lines.forEach((l, i) => {
  if (l.includes('anbu-reference-hero-section') || l.includes('hero-fluid-wrapper') || l.includes('2026 HERO REFERENCE DESIGN')) {
    matches.push(i + 1);
  }
});
console.log('Matches at lines:', matches);
if (matches.length > 0) {
  const start = Math.max(0, matches[0] - 5);
  console.log(lines.slice(start, start + 60).join('\n'));
}
