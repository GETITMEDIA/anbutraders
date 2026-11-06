const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const mobileIdx = css.indexOf('@media (max-width: 640px)');
console.log(css.slice(mobileIdx + 850, mobileIdx + 1800));
