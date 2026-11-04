const fs = require('fs');

let html = fs.readFileSync('service.html', 'utf8');

// 1. Hero container
html = html.replace(
  '<section class="anbu-page-hero hero-service">\n        <div class="container">',
  '<section class="anbu-page-hero hero-service">\n        <div class="container wow fadeIn" data-wow-delay="0.1s">'
);

// 2. Trust highlights ribbon
html = html.replace(
  '<section class="container mb-5 mt-0">\n        <div class="p-4 p-md-5 rounded-4 bg-white border shadow-sm">',
  '<section class="container mb-5 mt-0 wow fadeInUp" data-wow-delay="0.15s">\n        <div class="p-4 p-md-5 rounded-4 bg-white border shadow-sm">'
);

// 3. 4 Steps
const delays = ['0.1s', '0.2s', '0.3s', '0.4s'];
let stepIdx = 0;
html = html.replace(/<div class="col-md-6 col-lg-3 text-center">/g, () => {
  const delay = delays[stepIdx % delays.length];
  stepIdx++;
  return `<div class="col-md-6 col-lg-3 text-center wow fadeInUp" data-wow-delay="${delay}">`;
});

// 4. CTA banner
html = html.replace(
  '<section class="container anbu-cta-banner-section">\n        <div class="p-4 p-md-5 rounded-4 text-white',
  '<section class="container anbu-cta-banner-section wow fadeInUp" data-wow-delay="0.2s">\n        <div class="p-4 p-md-5 rounded-4 text-white'
);

fs.writeFileSync('service.html', html, 'utf8');
console.log(`✅ service.html updated: ${stepIdx} steps animated!`);

