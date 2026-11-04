const fs = require('fs');

let html = fs.readFileSync('about.html', 'utf8');

// 1. Hero container
html = html.replace(
  '<section class="anbu-page-hero hero-about">\n        <div class="container">',
  '<section class="anbu-page-hero hero-about">\n        <div class="container wow fadeIn" data-wow-delay="0.1s">'
);

// 2. Stats ribbon
html = html.replace(
  '<div class="container facts-simple-wrapper">',
  '<div class="container facts-simple-wrapper wow fadeInUp" data-wow-delay="0.2s">'
);

fs.writeFileSync('about.html', html, 'utf8');
console.log('✅ about.html updated with hero & stats animations!');

