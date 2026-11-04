const fs = require('fs');
const js = fs.readFileSync('js/anbu-interactions.js', 'utf8');
console.log('anbu-interactions.js lines:', js.split('\n').length);
console.log(js.substring(0, 800));

