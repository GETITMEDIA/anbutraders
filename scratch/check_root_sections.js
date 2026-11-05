const fs = require('fs');

const rootPages = [
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'team.html',
  'feature.html',
  'testimonial.html',
  '404.html'
];

rootPages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n=== ${p} ===`);
  const sections = [...content.matchAll(/<(?:section|div)[^>]+class=["']([^"']*(?:section|page-hero|hero)[^"']*)["'][^>]*>/gi)];
  sections.forEach(s => console.log('  Section:', s[1]));
});

