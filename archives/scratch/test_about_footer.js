const fs = require('fs');

const html = fs.readFileSync('about.html', 'utf8');
const startTag = '<!-- Unified Footer Start -->';
const endTag = '<!-- JavaScript Libraries -->';

const sIdx = html.indexOf(startTag);
const eIdx = html.indexOf(endTag);

console.log('about.html: startIdx =', sIdx, 'endIdx =', eIdx);
if (sIdx !== -1 && eIdx !== -1) {
  console.log('Matched block in about.html:');
  console.log(html.substring(sIdx, sIdx + 150));
  console.log('...');
  console.log(html.substring(eIdx - 150, eIdx));
}

