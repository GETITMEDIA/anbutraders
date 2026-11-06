const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('class="row') || l.includes('class="container') || l.includes('form') || l.includes('branch-card')) {
    console.log(`${i+1}: ${l.trim().substring(0, 90)}`);
  }
});

