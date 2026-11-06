const fs = require('fs');

const pages = [
  'index.html',
  'about.html',
  'contact.html',
  'service.html',
  'project.html',
  'team.html',
  'testimonial.html',
  'feature.html',
  '404.html'
];

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\n================== ${p} ==================`);
  
  // Find container-xxl occurrences and 3 lines before & after
  const lines = html.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('container-xxl') || l.includes('<!-- About End') || l.includes('<!-- Service End') || l.includes('<!-- Contact End') || l.includes('<!-- 404 End')) {
      console.log(`L${idx+1}: ${l}`);
    }
  });
});

