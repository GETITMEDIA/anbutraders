const fs = require('fs');

const steelPages = [
  'a-steel/index.html',
  'a-steel/contact.html',
  'a-steel/gallery.html'
];

for (const p of steelPages) {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n=================== ${p} ===================`);
  
  const matches = [...content.matchAll(/<(?:div|section)[^>]+class=["']([^"']*(?:container|section|header|grid|footer)[^"']*)["'][^>]*>/gi)];
  matches.slice(0, 20).forEach(m => {
    console.log(`  Tag class: "${m[1]}"`);
  });
}

