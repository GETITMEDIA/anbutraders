const fs = require('fs');
const files = ['404.html', 'about.html', 'contact.html', 'feature.html', 'index.html', 'project.html', 'service.html', 'team.html', 'testimonial.html'];

const regex = /\s*<div class="nav-item dropdown">\s*<a href="#" class="nav-link dropdown-toggle(?:\s+active)?" data-bs-toggle="dropdown">More<\/a>\s*<div class="dropdown-menu bg-light m-0 shadow-sm">[\s\S]*?<\/div>\s*<\/div>/i;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(regex);
  if (match) {
    console.log(`Matched in ${f}:`);
    console.log(match[0]);
  } else {
    console.log(`NO MATCH in ${f}`);
  }
});

