const fs = require('fs');

const cementPages = [
  'cement/anbucement/index-demo-3.html',
  'cement/anbucement/about-us.html',
  'cement/anbucement/contact-us.html',
  'cement/anbucement/services.html',
  'cement/anbucement/ourprojectcement.html',
  'cement/anbucement/faq.html'
];

for (const p of cementPages) {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n=================== ${p} ===================`);
  
  const matches = [...content.matchAll(/<(?:div|section)[^>]+class=["']([^"']*(?:container|section|header|grid|footer)[^"']*)["'][^>]*>/gi)];
  matches.slice(0, 20).forEach(m => {
    console.log(`  Tag class: "${m[1]}"`);
  });
}

