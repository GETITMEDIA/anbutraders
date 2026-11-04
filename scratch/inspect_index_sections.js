const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf8');
const lines = index.split('\n');

const sections = [];
lines.forEach((l, i) => {
  if (l.includes('<section') || (l.includes('<div class="container') && (lines[i-1] && lines[i-1].includes('Start')))) {
    sections.push({ line: i+1, text: l.trim(), prev: lines[i-1] ? lines[i-1].trim() : '' });
  }
});

console.log('Sections in index.html:');
sections.forEach(s => {
  console.log(`Line ${s.line}: ${s.prev} -> ${s.text}`);
});

