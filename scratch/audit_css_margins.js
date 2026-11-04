const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

const lines = css.split('\n');
console.log('=== CSS MARGIN AUDIT ===');
lines.forEach((l, i) => {
  if (l.includes('margin') && (l.includes('-') || l.includes('clamp') || l.includes('!important') || l.includes('auto') || l.includes('rem'))) {
    if (!l.includes('margin: 0') && !l.includes('margin-bottom: 0')) {
      console.log(`L${i+1}: ${l.trim()}`);
    }
  }
});
