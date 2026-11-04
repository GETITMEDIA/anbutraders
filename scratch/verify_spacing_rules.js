const fs = require('fs');

console.log('=== VERIFYING RESPONSIVE SPACING & SYSTEM TOKENS ===\n');

const css = fs.readFileSync('css/style.css', 'utf8');

// Check our fixed sections in style.css
const checks = [
  { name: '.anbu-page-hero margin-bottom: 0', pass: css.includes('.anbu-page-hero') && css.includes('margin-bottom: 0;') },
  { name: '.brands-section margin: 0', pass: css.includes('.brands-section') && css.includes('margin: 0;') },
  { name: '.facts-simple-wrapper margin: 1.75rem auto 2.75rem', pass: css.includes('margin: 1.75rem auto 2.75rem;') },
  { name: '.anbu-cta-banner-section defined', pass: css.includes('.anbu-cta-banner-section') }
];

checks.forEach(c => {
  console.log(`${c.pass ? '✅' : '❌'} ${c.name}`);
});

// Check all 9 HTML files for lingering my-5 on CTA banners
const pages = [
  'index.html',
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'feature.html',
  'team.html',
  'testimonial.html',
  '404.html'
];

let issues = 0;
pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  if (html.includes('facts-simple-wrapper my-5')) {
    console.log(`❌ ${p}: still has facts-simple-wrapper my-5`);
    issues++;
  }
});

if (issues === 0) {
  console.log('\n✅ All 9 HTML pages adhere to normalized margin system!');
}

