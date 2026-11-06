const fs = require('fs');
const path = require('path');
const css = fs.readFileSync('css/style.css', 'utf8');
const urls = [...css.matchAll(/url\(['"]?([^'")]+)['"]?\)/gi)].map(m => m[1]);
let missing = 0;
urls.forEach(u => {
  if (!u.startsWith('http') && !u.startsWith('data:') && !u.startsWith('#') && !u.startsWith('//')) {
    // Relative to css/
    let cleanUrl = u.split('?')[0].split('#')[0];
    const resolved = path.resolve('css', cleanUrl);
    if (!fs.existsSync(resolved)) {
      console.log('Missing asset from CSS:', u, '-> Resolved:', resolved);
      missing++;
    } else {
      console.log('Valid CSS asset:', u);
    }
  }
});
console.log('Total CSS url() checked:', urls.length, 'Missing:', missing);

