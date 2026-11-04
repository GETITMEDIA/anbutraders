const fs = require('fs');

let html = fs.readFileSync('feature.html', 'utf8');

// 1. Hero container
html = html.replace(
  '<section class="anbu-page-hero hero-feature">\n        <div class="container">',
  '<section class="anbu-page-hero hero-feature">\n        <div class="container wow fadeIn" data-wow-delay="0.1s">'
);

// 2. Section header
html = html.replace(
  '<div class="text-center mx-auto mb-4" style="max-width: 650px;">',
  '<div class="text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 650px;">'
);

// 3. Feature cards
const delays = ['0.1s', '0.2s', '0.3s', '0.1s', '0.2s', '0.3s'];
let cardIdx = 0;
html = html.replace(/<div class="anbu-feature-card">/g, () => {
  const delay = delays[cardIdx % delays.length];
  cardIdx++;
  return `<div class="anbu-feature-card wow fadeInUp" data-wow-delay="${delay}">`;
});

// 4. Stats ribbon
html = html.replace(
  '<div class="container facts-simple-wrapper">',
  '<div class="container facts-simple-wrapper wow fadeInUp" data-wow-delay="0.2s">'
);

// 5. CTA banner
html = html.replace(
  '<section class="container anbu-cta-banner-section">\n        <div class="p-4 p-md-5 rounded-4 text-white',
  '<section class="container anbu-cta-banner-section wow fadeInUp" data-wow-delay="0.2s">\n        <div class="p-4 p-md-5 rounded-4 text-white'
);

fs.writeFileSync('feature.html', html, 'utf8');
console.log(`✅ feature.html updated: ${cardIdx} cards animated!`);

