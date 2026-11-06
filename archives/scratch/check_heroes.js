const fs = require('fs');
const files = ['index.html', 'about.html', 'service.html', 'contact.html', 'project.html', 'feature.html', 'team.html', 'testimonial.html', '404.html'];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = [...content.matchAll(/class=["']([^"']*(?:page-hero|page-header|hero-carousel|hero-banner)[^"']*)["']/gi)].map(m => m[1]);
  console.log(f + ' -> ' + matches.join(' | '));
});

