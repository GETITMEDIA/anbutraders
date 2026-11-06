const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

const classes = [
  '.anbu-features-section',
  '.anbu-team-section',
  '.anbu-cta-banner-section',
  '.testimonial-section',
  '.facts-simple-wrapper',
  '.svg-wave-divider',
  '.anbu-page-hero'
];

console.log('=== SECTION SPACING IN STYLE.CSS ===');
classes.forEach(cls => {
  const idx = css.indexOf(cls);
  if (idx !== -1) {
    const end = css.indexOf('}', idx);
    console.log(`\n${cls}:`);
    console.log(css.substring(idx, end + 1));
  } else {
    console.log(`\n${cls}: NOT FOUND`);
  }
});

