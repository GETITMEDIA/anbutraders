const fs = require('fs');

const pages = [
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
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n================== ${p} ==================`);
  const lines = content.split('\n');
  const sectionComments = lines.filter(l => l.includes('<!--') && (l.includes('Start') || l.includes('End')));
  console.log('Sections: ' + sectionComments.map(s => s.trim().replace(/<!--\s*|\s*-->/g, '')).join(' -> '));
});

