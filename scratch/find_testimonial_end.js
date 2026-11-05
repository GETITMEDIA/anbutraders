const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const idx = html.indexOf('container-xxl testimonial-section');
const footerIdx = html.indexOf('anbu-unified-footer', idx);
console.log('Snippet between testimonial and footer:');
console.log(html.substring(footerIdx - 300, footerIdx));

