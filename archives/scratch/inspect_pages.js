const fs = require('fs');
const pages = ['index.html', 'about.html', 'service.html', 'contact.html', 'feature.html', 'project.html', 'team.html', 'testimonial.html', '404.html'];
pages.forEach(p => {
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const titleMatch = text.match(/<title>(.*?)<\/title>/i);
    const cssMatches = [...text.matchAll(/<link[^>]+href=["']([^"']+\.css)["']/gi)].map(m => m[1]);
    const jsMatches = [...text.matchAll(/<script[^>]+src=["']([^"']+\.js)["']/gi)].map(m => m[1]);
    console.log(`=== ${p} ===`);
    console.log(`Title: ${titleMatch ? titleMatch[1] : 'N/A'}`);
    console.log(`CSS: ${cssMatches.join(', ')}`);
    console.log(`JS: ${jsMatches.join(', ')}`);
  }
});

