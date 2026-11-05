const fs = require('fs');
const path = require('path');

function searchFiles(dir, term) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.git' || e.name === '.agents') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      searchFiles(full, term);
    } else if (e.name.endsWith('.html') || e.name.endsWith('.css') || e.name.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.toLowerCase().includes(term.toLowerCase())) {
        console.log(`Found "${term}" in ${full}`);
      }
    }
  }
}

searchFiles('.', 'venom');
searchFiles('.', 'venom-button');
searchFiles('.', 'liquid');
searchFiles('.', 'jelly');
searchFiles('.', 'gooey');

