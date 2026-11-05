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

for (const p of rootPages) {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n=================== ${p} ===================`);
  
  // Find top level sections or main content divs
  const matches = [...content.matchAll(/<(?:div|section)[^>]+class=["']([^"']*(?:container-fluid|page-header|site-section|py-|my-|px-|anbu-|section)[^"']*)["'][^>]*>/gi)];
  matches.forEach(m => {
    console.log(`  Tag class: "${m[1]}"`);
  });
}

