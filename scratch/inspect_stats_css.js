const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(7635, 7700).join('\n'));
