const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

let pos = 0;
console.log('Occurrences of container-xxl in css/style.css:');
while ((pos = css.indexOf('.container-xxl', pos)) !== -1) {
  console.log(`Position ${pos}:`);
  console.log(css.substring(pos - 40, pos + 120).replace(/\n/g, ' '));
  pos += '.container-xxl'.length;
}

