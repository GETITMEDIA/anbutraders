const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
console.log('Lines 140 to 255:');
console.log(lines.slice(140, 255).join('\n'));
