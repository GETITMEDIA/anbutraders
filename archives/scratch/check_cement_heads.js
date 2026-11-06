const fs = require('fs');

const pages = [
  'cement/anbucement/index-demo-3.html',
  'cement/anbucement/about-us.html',
  'cement/anbucement/contact-us.html',
  'cement/anbucement/services.html',
  'cement/anbucement/ourprojectcement.html',
  'cement/anbucement/faq.html'
];

pages.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const links = [...content.matchAll(/<link[^>]+href=["']([^"']+\.css(\?[^"']*)?)["']/gi)].map(m => m[1]);
  console.log(f, links);
});

