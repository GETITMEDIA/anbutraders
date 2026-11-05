const fs = require('fs');
const css = fs.readFileSync('cement/anbucement/css/cement-2026.css', 'utf8');
console.log(css.substring(0, 1000));

