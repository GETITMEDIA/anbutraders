const fs = require('fs');
const glob = require('path');

const files = fs.readdirSync('anbu-paint').filter(f => f.endsWith('.html'));
for (const f of files) {
  const content = fs.readFileSync('anbu-paint/' + f, 'utf8');
  const scripts = [...content.matchAll(/src=["']([^"']*\.js[^"']*)["']/g)].map(m => m[1]);
  console.log(f, scripts);
}

