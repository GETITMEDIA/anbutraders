const fs = require('fs');

const pages = ['index.html', 'about.html', 'contact.html', 'service.html', 'project.html', 'team.html', 'testimonial.html', 'feature.html', '404.html'];

console.log('=== CONTAINER USAGE & NESTING AUDIT ===');
pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\n--- ${p} ---`);
  
  // Find all container-xxl and check if inside them there is another container
  const lines = html.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('class="container-xxl') || l.includes("class='container-xxl")) {
      console.log(`  Line ${idx+1}: ${l.trim().substring(0, 80)}`);
    }
  });

  // Check for nested .container inside .container-xxl
  const nested = [...html.matchAll(/class=["'][^"']*container-xxl[^"']*["'][\s\S]{1,150}?<div\s+class=["'][^"']*container[^"']*["']/g)];
  if (nested.length > 0) {
    console.log(`  ⚠️ Found ${nested.length} nested container instances!`);
  }
});

