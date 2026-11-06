const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

const heroCssRegex = /\/\* =+\s*2026 HERO REFERENCE DESIGN[\s\S]*?(?=\/\* =+\s*UNIFIED 2026 SECTION HEADERS)/;
const match = css.match(heroCssRegex);

if (match) {
  console.log('Hero CSS block found, length:', match[0].length);
  console.log('First 120 chars:\n', match[0].slice(0, 120));
  console.log('Last 120 chars:\n', match[0].slice(-120));
} else {
  console.log('Hero CSS regex did NOT match!');
}
