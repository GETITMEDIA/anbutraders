const fs = require('fs');
const path = require('path');

const rootPages = [
  'index.html',
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'feature.html',
  'team.html',
  'testimonial.html',
  '404.html'
];

let totalErrors = 0;

console.log('=== FULL VERIFICATION SUITE ===\n');

// 1. Check HTML validity & assets
rootPages.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`[ERROR] File missing: ${file}`);
    totalErrors++;
    return;
  }

  const content = fs.readFileSync(file, 'utf8');

  // Doctype & structure
  if (!content.includes('<!DOCTYPE html>')) {
    console.error(`[ERROR] Missing <!DOCTYPE html> in ${file}`);
    totalErrors++;
  }
  if (!content.includes('</html>')) {
    console.error(`[ERROR] Missing </html> in ${file}`);
    totalErrors++;
  }

  // Stylesheet check
  const cssMatches = [...content.matchAll(/<link[^>]+href=["']([^"']+\.css)["']/gi)].map(m => m[1]);
  cssMatches.forEach(href => {
    if (!href.startsWith('http')) {
      if (!fs.existsSync(href)) {
        console.error(`[ERROR] Missing stylesheet in ${file}: ${href}`);
        totalErrors++;
      }
    }
  });

  // JS script check
  const jsMatches = [...content.matchAll(/<script[^>]+src=["']([^"']+\.js)["']/gi)].map(m => m[1]);
  jsMatches.forEach(src => {
    if (!src.startsWith('http')) {
      if (!fs.existsSync(src)) {
        console.error(`[ERROR] Missing script in ${file}: ${src}`);
        totalErrors++;
      }
    }
  });

  // Images check
  const imgMatches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  imgMatches.forEach(src => {
    if (!src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('//')) {
      const cleanSrc = decodeURIComponent(src.split('?')[0].split('#')[0]);
      if (!fs.existsSync(cleanSrc)) {
        console.error(`[ERROR] Missing image in ${file}: ${src}`);
        totalErrors++;
      }
    }
  });

  // Links check
  const linkMatches = [...content.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
  linkMatches.forEach(href => {
    if (!href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
      const cleanHref = decodeURIComponent(href.split('?')[0].split('#')[0]);
      if (cleanHref) {
        if (!fs.existsSync(cleanHref)) {
          console.error(`[ERROR] Broken link in ${file}: ${href}`);
          totalErrors++;
        }
      }
    }
  });
});

console.log(`\nVerification complete. Total detected errors: ${totalErrors}`);
if (totalErrors === 0) {
  console.log('✅ ALL PAGES, ASSETS, SCRIPTS, AND IMAGES PASSED WITH 100% SUCCESS!');
}

