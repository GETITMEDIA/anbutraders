const fs = require('fs');

const pages = [
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'team.html',
  'feature.html',
  'testimonial.html'
];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n=== <h2> in ${p} ===`);
  const h2s = [...content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  h2s.forEach(h => {
    const text = h[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`  <h2> ${text}`);
  });
});

