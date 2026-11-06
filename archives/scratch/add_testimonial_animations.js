const fs = require('fs');

let html = fs.readFileSync('testimonial.html', 'utf8');

// 1. Hero container
html = html.replace(
  '<section class="anbu-page-hero hero-testimonial">\n        <div class="container">',
  '<section class="anbu-page-hero hero-testimonial">\n        <div class="container wow fadeIn" data-wow-delay="0.1s">'
);

// 2. Rating summary banner
html = html.replace(
  '<section class="container my-5">\n        <div class="p-4 p-md-5 bg-white border rounded-4 shadow-sm">',
  '<section class="container my-5 wow fadeInUp" data-wow-delay="0.1s">\n        <div class="p-4 p-md-5 bg-white border rounded-4 shadow-sm">'
);

// 3. Testimonial cards
const delays = ['0.1s', '0.2s', '0.3s', '0.1s', '0.2s', '0.3s'];
let cardIdx = 0;
html = html.replace(/<div class="anbu-testi-card">/g, () => {
  const delay = delays[cardIdx % delays.length];
  cardIdx++;
  return `<div class="anbu-testi-card wow fadeInUp" data-wow-delay="${delay}">`;
});

// 4. CTA banner
html = html.replace(
  '<section class="container anbu-cta-banner-section">\n        <div class="p-4 p-md-5 rounded-4 text-white',
  '<section class="container anbu-cta-banner-section wow fadeInUp" data-wow-delay="0.2s">\n        <div class="p-4 p-md-5 rounded-4 text-white'
);

fs.writeFileSync('testimonial.html', html, 'utf8');
console.log(`✅ testimonial.html updated: ${cardIdx} cards animated!`);

