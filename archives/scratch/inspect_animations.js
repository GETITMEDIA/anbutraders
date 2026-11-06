const fs = require('fs');

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

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  const wowMatches = (html.match(/class=["'][^"']*wow[^"']*["']/g) || []).length;
  const revealMatches = (html.match(/class=["'][^"']*reveal[^"']*["']/g) || []).length;
  console.log(`${p}: wow elements=${wowMatches}, reveal elements=${revealMatches}`);
});

