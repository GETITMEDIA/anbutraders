const fs = require('fs');

const paintHtml = fs.readFileSync('anbu-paint/index.html', 'utf8');

function inspectSection(name, startPattern, endPattern) {
  const s = paintHtml.indexOf(startPattern);
  const e = paintHtml.indexOf(endPattern, s);
  console.log(`\n================== ${name} ==================`);
  if (s !== -1 && e !== -1) {
    console.log(paintHtml.substring(s, Math.min(s + 600, e)));
  } else {
    console.log('NOT FOUND');
  }
}

inspectSection('NAVBAR', '<header class="anbu-navbar">', '</header>');
inspectSection('HERO CAROUSEL', '<section class="hero-paint-carousel-wrapper"', '</section>');
inspectSection('ABOUT', '<section class="get-to-know-section"', '</section>');
inspectSection('SERVICES', '<section class="services-section"', '</section>');

