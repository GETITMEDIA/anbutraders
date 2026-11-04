const fs = require('fs');

const pages = [
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'feature.html',
  'team.html',
  'testimonial.html'
];

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  const start = html.indexOf('<section class="anbu-page-hero');
  const end = html.indexOf('</section>', start);
  console.log(`\n=== ${p} HERO ===`);
  console.log(html.substring(start, end + 10));
});

