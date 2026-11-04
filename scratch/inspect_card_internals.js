const fs = require('fs');

function inspectCards(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  console.log(`\n========================================`);
  console.log(`INSPECTING CARD INTERNALS: ${filename}`);
  console.log(`========================================`);

  // Find all cards
  const regex = /<div class="([^"]*(?:card|col-|super-service|anbu-project|anbu-feature|anbu-team|branch-card|contact-card)[^"]*)"[^>]*>([\s\S]*?)<\/div>/gi;
  // Let's check card titles and their margins
  const titleRegex = /<h[2-5][^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/h[2-5]>/gi;
  let m;
  let count = 0;
  while ((m = titleRegex.exec(html)) !== null) {
    const cls = m[1];
    const text = m[2].replace(/<[^>]+>/g, '').trim().substring(0, 40);
    if (!cls.includes('mb-') && !cls.includes('my-')) {
      console.log(`  Missing mb/my on title: "${text}" | class: "${cls}"`);
      count++;
    }
  }
  console.log(`  Total titles without explicit margin: ${count}`);
}

['index.html', 'about.html', 'service.html', 'contact.html', 'project.html', 'feature.html', 'team.html', 'testimonial.html', '404.html'].forEach(inspectCards);

