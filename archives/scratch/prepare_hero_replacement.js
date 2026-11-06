const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const heroSectionRegex = /<!-- =+\s*2026 HERO REFERENCE DESIGN[\s\S]*?<\/section>/;
const match = html.match(heroSectionRegex);

if (match) {
  console.log('Hero section found, length:', match[0].length);
  console.log('First 120 chars:\n', match[0].slice(0, 120));
  console.log('Last 120 chars:\n', match[0].slice(-120));
} else {
  console.log('Hero section regex did NOT match!');
}
