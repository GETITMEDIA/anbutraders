const fs = require('fs');

const html = fs.readFileSync('cement/anbucement/index-demo-3.html', 'utf8');
const lines = html.split('\n');

console.log('=== CURRENT CEMENT/ANBUCEMENT/INDEX-DEMO-3.HTML ===');
lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('<header') || l.includes('<h1') || l.includes('<h2') || l.includes('class="hero') || l.includes('class="container') || l.includes('<footer')) {
    console.log(`L${i+1}: ${l.trim().substring(0, 95)}`);
  }
});

