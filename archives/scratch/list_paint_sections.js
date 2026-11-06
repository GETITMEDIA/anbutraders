const fs = require('fs');

const html = fs.readFileSync('anbu-paint/index.html', 'utf8');

// Find all section tags and their classes
const sectionMatches = [...html.matchAll(/<section[^>]*class=["']([^"']*)["'][^>]*id=["']([^"']*)["']/gi)];
console.log('=== SECTIONS IN ANBU-PAINT/INDEX.HTML ===');
sectionMatches.forEach(m => {
  console.log(`class="${m[1]}" id="${m[2]}"`);
});

