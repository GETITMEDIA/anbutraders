const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('<div class="hero-bottom-shelf">');
const end = html.indexOf('<!-- Architectural Video Showcase Lightbox Modal -->');
console.log(html.slice(start, end));
