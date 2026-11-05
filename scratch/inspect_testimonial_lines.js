const fs = require('fs');
const html = fs.readFileSync('testimonial.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(110, 160).map((l, i) => (111+i) + ': ' + l).join('\n'));

