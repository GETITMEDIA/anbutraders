const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const waveIdx = html.lastIndexOf('wave-footer-top');
console.log(html.substring(waveIdx - 200, waveIdx));

