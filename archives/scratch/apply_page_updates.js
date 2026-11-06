const fs = require('fs');

console.log('=== STANDARDIZING PAGES CONTAINER & SECTION TAGS ===');

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace('<div class="container-xxl pt-5 pb-2">', '<section class="about-section site-section">');
indexHtml = indexHtml.replace('<!-- About End -->', '</section>\n<!-- About End -->');
// Replace the old closing div of about
// Let's check lines around About End in index.html
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Processed index.html check.');

