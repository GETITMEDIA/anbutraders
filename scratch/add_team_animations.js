const fs = require('fs');

let html = fs.readFileSync('team.html', 'utf8');

// 1. Hero container
html = html.replace(
  '<section class="anbu-page-hero hero-team">\n        <div class="container">',
  '<section class="anbu-page-hero hero-team">\n        <div class="container wow fadeIn" data-wow-delay="0.1s">'
);

// 2. Section header
html = html.replace(
  '<div class="text-center mx-auto mb-4" style="max-width: 650px;">',
  '<div class="text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 650px;">'
);

// 3. Team cards
const delays = ['0.1s', '0.2s', '0.3s', '0.4s'];
let cardIdx = 0;
html = html.replace(/<div class="anbu-team-card">/g, () => {
  const delay = delays[cardIdx % delays.length];
  cardIdx++;
  return `<div class="anbu-team-card wow fadeInUp" data-wow-delay="${delay}">`;
});

// 4. Ribbon
html = html.replace(
  '<section class="container anbu-cta-banner-section">\n        <div class="p-4 p-md-5 rounded-4 bg-light border">',
  '<section class="container anbu-cta-banner-section wow fadeInUp" data-wow-delay="0.2s">\n        <div class="p-4 p-md-5 rounded-4 bg-light border">'
);

fs.writeFileSync('team.html', html, 'utf8');
console.log(`✅ team.html updated: ${cardIdx} cards animated!`);

