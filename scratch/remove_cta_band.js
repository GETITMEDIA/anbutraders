const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const startMarker = '<!-- ==============================================\n         HIGH-IMPACT PRE-FOOTER CTA BAND';
const startMarkerCRLF = '<!-- ==============================================\r\n         HIGH-IMPACT PRE-FOOTER CTA BAND';

let startIdx = html.indexOf(startMarkerCRLF);
if (startIdx === -1) {
  startIdx = html.indexOf(startMarker);
}

if (startIdx === -1) {
  console.error('Could not find start marker!');
  process.exit(1);
}

const endMarker = '</section>';
const endIdx = html.indexOf(endMarker, startIdx) + endMarker.length;

console.log('startIdx:', startIdx, 'endIdx:', endIdx);
console.log('Removing snippet:\n', html.substring(startIdx, endIdx));

html = html.substring(0, startIdx).trimEnd() + '\n\n' + html.substring(endIdx).trimStart();

fs.writeFileSync(indexPath, html);
console.log('Successfully removed CTA band section from index.html!');

