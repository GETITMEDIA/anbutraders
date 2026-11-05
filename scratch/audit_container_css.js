const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

const regex = /([^}]*?(?:container|\.row)[^{]*)\{([^}]+)\}/gi;
let match;
console.log('=== CONTAINER & ROW RULES IN STYLE.CSS ===');
while ((match = regex.exec(css)) !== null) {
  const sel = match[1].trim();
  const rules = match[2].trim();
  if (sel.includes('.container') || sel.includes('.row')) {
    console.log(`Selector: ${sel}\n  Rules: ${rules.replace(/\n\s*/g, ' ')}\n`);
  }
}

