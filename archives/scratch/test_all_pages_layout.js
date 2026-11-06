const fs = require('fs');
const path = require('path');

const pages = [
  'index.html',
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'team.html',
  'feature.html',
  'testimonial.html',
  '404.html',
  'a-steel/index.html',
  'a-steel/contact.html',
  'a-steel/gallery.html',
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
  'anbu-paint/ourproject.html',
  'cement/anbucement/index-demo-3.html',
  'cement/anbucement/about-us.html',
  'cement/anbucement/contact-us.html',
  'cement/anbucement/services.html',
  'cement/anbucement/ourprojectcement.html',
  'cement/anbucement/faq.html'
];

console.log('Testing asset references & container structures in all 30 pages...\n');

pages.forEach(page => {
  if (!fs.existsSync(page)) {
    console.log(`[MISSING PAGE] ${page}`);
    return;
  }
  const content = fs.readFileSync(page, 'utf8');
  const dir = path.dirname(page);
  
  // Find local CSS and JS files
  const cssMatches = [...content.matchAll(/<link[^>]+href=["']([^"']+\.css(\?[^"']*)?)["']/gi)].map(m => m[1]);
  const jsMatches = [...content.matchAll(/<script[^>]+src=["']([^"']+\.js(\?[^"']*)?)["']/gi)].map(m => m[1]);

  const missingAssets = [];
  
  cssMatches.forEach(href => {
    if (href.startsWith('http://') || href.startsWith('https://')) return;
    const cleanHref = href.split('?')[0];
    const resolvedPath = path.resolve(dir, cleanHref);
    if (!fs.existsSync(resolvedPath)) {
      missingAssets.push(`CSS: ${href}`);
    }
  });

  jsMatches.forEach(src => {
    if (src.startsWith('http://') || src.startsWith('https://')) return;
    const cleanSrc = src.split('?')[0];
    const resolvedPath = path.resolve(dir, cleanSrc);
    if (!fs.existsSync(resolvedPath)) {
      missingAssets.push(`JS: ${src}`);
    }
  });

  // Check section tags and containers
  const sectionTags = [...content.matchAll(/<section([^>]*)>/gi)];
  const containers = [...content.matchAll(/class=["']([^"']*(?:container)[^"']*)["']/gi)];

  if (missingAssets.length > 0) {
    console.log(`[PAGE: ${page}] MISSING ASSETS:`);
    missingAssets.forEach(a => console.log(`   - ${a}`));
  }
});

