const fs = require('fs');
const pages = ['contact.html', 'about.html', 'service.html', 'project.html', 'team.html', 'testimonial.html', 'feature.html'];
pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  const bannerMatch = html.match(/<!--\s*Page Header Start[\s\S]*?<!--\s*Page Header End/i);
  if (bannerMatch) {
    console.log('=== ' + p + ' ===');
    console.log(bannerMatch[0]);
  }
});

