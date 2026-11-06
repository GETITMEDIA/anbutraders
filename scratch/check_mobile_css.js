const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

// Let's find rules for max-width: 640px and container
const mobileIdx = css.indexOf('@media (max-width: 640px)');
console.log(css.slice(mobileIdx, mobileIdx + 900));
