const fs = require('fs');
const html = fs.readFileSync('feature.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('class="container') || l.includes('facts-simple') || l.includes('anbu-feature') || l.includes('class="row')) {
    console.log(`${i+1}: ${l.trim().substring(0, 90)}`);
  }
});

