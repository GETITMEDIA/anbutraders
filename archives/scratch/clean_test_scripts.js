const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<script>[\s\S]*?DEBUG_OVERFLOW[\s\S]*?<\/script>/g, '');
html = html.replace(/<script>[\s\S]*?OVERFLOW ELEMENT[\s\S]*?<\/script>/g, '');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Cleaned index.html test scripts');
