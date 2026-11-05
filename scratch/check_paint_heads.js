const fs = require('fs');

const pages = [
  'anbu-paint/index.html',
  'anbu-paint/about.html',
  'anbu-paint/service.html',
  'anbu-paint/contact.html',
  'anbu-paint/project.html',
  'anbu-paint/gallery.html',
  'anbu-paint/price.html',
  'anbu-paint/asianpant.html',
  'anbu-paint/burger.html',
  'anbu-paint/jsw.html',
  'anbu-paint/wallputty.html',
  'anbu-paint/ourproject.html'
];

pages.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const links = [...content.matchAll(/<link[^>]+href=["']([^"']+\.css(\?[^"']*)?)["']/gi)].map(m => m[1]);
  console.log(f, links);
});

