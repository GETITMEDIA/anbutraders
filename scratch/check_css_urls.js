const fs = require('fs');

const css = fs.readFileSync('anbu-paint/assets/css/anbu-paint-2026.css', 'utf8');

const urls = [...css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)].map(m => m[1]);
console.log('Total url() in anbu-paint-2026.css:', urls.length);
console.log('Unique urls:');
const unique = [...new Set(urls)];
unique.forEach(u => console.log('  ' + u));

