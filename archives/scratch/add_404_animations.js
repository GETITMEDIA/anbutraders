const fs = require('fs');

let html = fs.readFileSync('404.html', 'utf8');

html = html.replace(
  '<div class="anbu-404-graphic">',
  '<div class="anbu-404-graphic wow fadeInUp" data-wow-delay="0.1s">'
);

html = html.replace(
  '<h2 class="anbu-404-title">',
  '<h2 class="anbu-404-title wow fadeInUp" data-wow-delay="0.2s">'
);

html = html.replace(
  '<p class="anbu-404-text">',
  '<p class="anbu-404-text wow fadeInUp" data-wow-delay="0.25s">'
);

html = html.replace(
  '<div class="anbu-404-cards">',
  '<div class="anbu-404-cards wow fadeInUp" data-wow-delay="0.3s">'
);

html = html.replace(
  '<div class="d-flex flex-wrap justify-content-center gap-3">',
  '<div class="d-flex flex-wrap justify-content-center gap-3 wow fadeInUp" data-wow-delay="0.35s">'
);

fs.writeFileSync('404.html', html, 'utf8');
console.log('✅ 404.html animated!');

