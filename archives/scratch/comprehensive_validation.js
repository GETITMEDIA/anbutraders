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

console.log('=== COMPREHENSIVE PRODUCTION VALIDATION ===');
console.log(`Checking ${pages.length} production pages...\n`);

let totalErrors = 0;
let totalWarnings = 0;

pages.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`[FAIL] File missing: ${file}`);
    totalErrors++;
    return;
  }
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);

  // 1. Check local CSS links
  const cssMatches = [...content.matchAll(/<link[^>]+href=["']([^"']+\.css(\?[^"']*)?)["']/gi)].map(m => m[1]);
  cssMatches.forEach(href => {
    if (href.startsWith('http://') || href.startsWith('https://')) return;
    const clean = href.split('?')[0];
    const resolved = path.resolve(dir, clean);
    if (!fs.existsSync(resolved)) {
      console.log(`[ERR: ${file}] Missing CSS file: ${href}`);
      totalErrors++;
    }
  });

  // 2. Check local JS scripts
  const jsMatches = [...content.matchAll(/<script[^>]+src=["']([^"']+\.js(\?[^"']*)?)["']/gi)].map(m => m[1]);
  jsMatches.forEach(src => {
    if (src.startsWith('http://') || src.startsWith('https://')) return;
    const clean = src.split('?')[0];
    const resolved = path.resolve(dir, clean);
    if (!fs.existsSync(resolved)) {
      console.log(`[ERR: ${file}] Missing JS file: ${src}`);
      totalErrors++;
    }
  });

  // 3. Check for inline fixed widths > 400px that might cause overflow
  const fixedWidths = [...content.matchAll(/style=["'][^"']*width:\s*([4-9]\d{2,}px|[1-9]\d{3,}px)[^"']*["']/gi)];
  if (fixedWidths.length > 0) {
    fixedWidths.forEach(fw => {
      // Check if it's within an iframe or intentional embedded component
      if (!fw[0].includes('iframe') && !fw[0].includes('max-width')) {
        console.log(`[WARN: ${file}] Fixed inline width found: ${fw[0]}`);
        totalWarnings++;
      }
    });
  }

  // 4. Check critical tag balance (div, section, form)
  ['div', 'section', 'form'].forEach(tag => {
    const opens = (content.match(new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi')) || []).length;
    const closes = (content.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
    if (opens !== closes) {
      console.log(`[ERR: ${file}] Tag <${tag}> mismatch: open=${opens}, close=${closes}`);
      totalErrors++;
    }
  });
});

console.log(`\n===========================================`);
console.log(`Validation Complete: ${totalErrors} Errors, ${totalWarnings} Warnings`);
console.log(`===========================================`);

