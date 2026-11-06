const fs = require('fs');

['a-steel/index.html', 'a-steel/contact.html', 'a-steel/gallery.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const links = [...content.matchAll(/<link[^>]+href=["']([^"']+\.css(\?[^"']*)?)["']/gi)].map(m => m[1]);
  console.log(f, links);
});

