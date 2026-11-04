const fs = require('fs');
const html = fs.readFileSync('project.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('class="container') || l.includes('class="row') || l.includes('btn') || l.includes('project-card')) {
    console.log(`${i+1}: ${l.trim().substring(0, 90)}`);
  }
});

