const fs = require('fs');
const path = require('path');

// Identify all real production HTML pages
const rootProductionPages = [
  'index.html',
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'team.html',
  'feature.html',
  'testimonial.html',
  '404.html'
];

const steelProductionPages = [
  'a-steel/index.html',
  'a-steel/contact.html',
  'a-steel/gallery.html'
];

const paintProductionPages = [
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

const cementProductionPages = [
  'cement/anbucement/index-demo-3.html',
  'cement/anbucement/about-us.html',
  'cement/anbucement/contact-us.html',
  'cement/anbucement/services.html',
  'cement/anbucement/ourprojectcement.html',
  'cement/anbucement/faq.html'
];

const allProductionPages = [
  ...rootProductionPages,
  ...steelProductionPages,
  ...paintProductionPages,
  ...cementProductionPages
];

console.log('Production Pages Count:', allProductionPages.length);

const auditResults = {};

for (const page of allProductionPages) {
  if (!fs.existsSync(page)) {
    console.log(`MISSING PAGE: ${page}`);
    continue;
  }
  const content = fs.readFileSync(page, 'utf8');
  
  const cssMatches = [...content.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi)].map(m => m[1]);
  const cssMatches2 = [...content.matchAll(/<link[^>]+href=["']([^"']+\.css(\?[^"']*)?)["'][^>]*rel=["']stylesheet["']/gi)].map(m => m[1]);
  const allCss = Array.from(new Set([...cssMatches, ...cssMatches2]));

  const jsMatches = [...content.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  const containerMatches = [...content.matchAll(/class=["']([^"']*(?:container|site-container)[^"']*)["']/gi)].map(m => m[1]);

  auditResults[page] = {
    css: allCss,
    js: jsMatches,
    containers: containerMatches.length,
    fileSize: content.length
  };
}

console.log(JSON.stringify(auditResults, null, 2));
