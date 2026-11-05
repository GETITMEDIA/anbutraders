const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const lines = html.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('<h1') || line.includes('<h2') || line.includes('eyebrow') || line.includes('section-badge') || line.includes('About Us') || line.includes('OUR 4') || line.includes('Featured Products') || line.includes('WHY CHOOSE') || line.includes('LOGISTICS') || line.includes('REVIEWS')) {
    console.log(`L${idx+1}: ${line.trim()}`);
  }
});

