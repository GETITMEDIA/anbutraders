const fs = require('fs');
const files = ['404.html', 'about.html', 'contact.html', 'feature.html', 'index.html', 'project.html', 'service.html', 'team.html', 'testimonial.html'];

const regex = /\s*<div class="nav-item dropdown">\s*<a href="#" class="nav-link dropdown-toggle(?:\s+active)?" data-bs-toggle="dropdown">More<\/a>\s*<div class="dropdown-menu bg-light m-0 shadow-sm">[\s\S]*?<\/div>\s*<\/div>/i;

let modifiedCount = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (regex.test(content)) {
    const updated = content.replace(regex, '');
    fs.writeFileSync(f, updated, 'utf8');
    console.log(`✅ Removed "More" dropdown from ${f}`);
    modifiedCount++;
  } else {
    console.log(`⚠️ No match in ${f}`);
  }
});

console.log(`\nTotal files updated: ${modifiedCount}/${files.length}`);

