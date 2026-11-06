const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

console.log('=== CSS CONTAINER & SECTION RULES IN STYLE.CSS ===');
const idx1 = css.indexOf('.container-xxl');
console.log('Index of .container-xxl:', idx1);
if (idx1 !== -1) {
  console.log(css.substring(idx1 - 100, idx1 + 200));
}

