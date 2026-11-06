const fs = require('fs');

let html = fs.readFileSync('project.html', 'utf8');

// 1. Hero container
html = html.replace(
  '<section class="anbu-page-hero hero-project">\n        <div class="container">',
  '<section class="anbu-page-hero hero-project">\n        <div class="container wow fadeIn" data-wow-delay="0.1s">'
);

// 2. Filter bar
html = html.replace(
  '<div class="project-filter-bar">',
  '<div class="project-filter-bar wow fadeInUp" data-wow-delay="0.1s">'
);

// 3. Project cards with staggered delays
const delays = ['0.1s', '0.2s', '0.3s', '0.1s', '0.2s', '0.3s'];
let cardIdx = 0;
html = html.replace(/<div class="anbu-project-card" data-category="([^"]+)">/g, (match, cat) => {
  const delay = delays[cardIdx % delays.length];
  cardIdx++;
  return `<div class="anbu-project-card wow fadeInUp" data-wow-delay="${delay}" data-category="${cat}">`;
});

// 4. CTA banner
html = html.replace(
  '<section class="container anbu-cta-banner-section">\n        <div class="p-4 p-md-5 rounded-4 text-white',
  '<section class="container anbu-cta-banner-section wow fadeInUp" data-wow-delay="0.2s">\n        <div class="p-4 p-md-5 rounded-4 text-white'
);

fs.writeFileSync('project.html', html, 'utf8');
console.log(`✅ project.html updated: ${cardIdx} cards animated!`);

