const fs = require('fs');

const paintHtml = fs.readFileSync('anbu-paint/index.html', 'utf8');
const lines = paintHtml.split('\n');

console.log('=== STRUCTURE OF ANBU-PAINT/INDEX.HTML ===');
lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('<nav') || l.includes('<header') || l.includes('class="hero') || l.includes('class="banner') || l.includes('id="') && l.includes('<div') || l.includes('<footer')) {
    console.log(`L${i+1}: ${l.trim().substring(0, 90)}`);
  }
});

