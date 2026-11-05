const fs = require('fs');

const paintPages = [
  'anbu-paint/index.html',
  'anbu-paint/about.html',
  'anbu-paint/service.html',
  'anbu-paint/contact.html',
  'anbu-paint/project.html',
  'anbu-paint/gallery.html',
  'anbu-paint/price.html',
  'anbu-paint/asianpant.html',
  'anbu-paint/burger.html',
  'anbu-paint/jsw.html',
  'anbu-paint/wallputty.html',
  'anbu-paint/ourproject.html'
];

for (const p of paintPages) {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n=================== ${p} ===================`);
  
  const matches = [...content.matchAll(/<(?:div|section)[^>]+class=["']([^"']*(?:container|section|header|grid|footer)[^"']*)["'][^>]*>/gi)];
  matches.slice(0, 15).forEach(m => {
    console.log(`  Tag class: "${m[1]}"`);
  });
}

