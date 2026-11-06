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
  console.log(`\n=== Headers in ${p} ===`);
  const headers = [...content.matchAll(/<(?:div|header)[^>]+class=["']([^"']*(?:section-header|section-title|heading|title)[^"']*)["'][^>]*>([\s\S]*?)<\/(?:div|header)>/gi)];
  headers.slice(0, 5).forEach(h => {
    const textSnippet = h[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 100);
    console.log(`  Class: "${h[1]}" -> Text: "${textSnippet}"`);
  });
});

