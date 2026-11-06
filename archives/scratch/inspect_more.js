const fs = require('fs');
const files = ['404.html', 'about.html', 'contact.html', 'feature.html', 'index.html', 'project.html', 'service.html', 'team.html', 'testimonial.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<div class="nav-item dropdown">[\s\S]*?More[\s\S]*?<\/div>\s*<\/div>/i);
  if (match) {
    console.log('--- ' + f + ' ---');
    console.log(match[0]);
  } else {
    console.log('--- ' + f + ': No match ---');
  }
});

