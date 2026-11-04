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

console.log('=== AUDITING ROOT PAGES ===\n');

rootPages.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`[MISSING] ${file}`);
    return;
  }
  const content = fs.readFileSync(file, 'utf8');
  
  // Title
  const title = (content.match(/<title>([^<]*)<\/title>/i) || [])[1] || 'NO TITLE';
  
  // Meta description & keywords
  const desc = (content.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) || [])[1] || '';
  
  // Navbar structure
  const hasNavbar = content.includes('class="navbar');
  const hasFooter = content.includes('<!-- Footer') || content.includes('class="footer');
  const hasFloatingAction = content.includes('floating-contact') || content.includes('whatsapp') || content.includes('back-to-top');
  
  // Images check
  const imgMatches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  const brokenImgs = [];
  imgMatches.forEach(src => {
    if (!src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('//')) {
      // resolve relative path
      const cleanSrc = src.split('?')[0].split('#')[0];
      const fullPath = path.resolve(cleanSrc);
      if (!fs.existsSync(fullPath)) {
        brokenImgs.push(src);
      }
    }
  });

  // Links check
  const links = [...content.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
  const brokenLinks = [];
  links.forEach(href => {
    if (!href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
      const cleanHref = href.split('?')[0].split('#')[0];
      if (cleanHref) {
        const fullPath = path.resolve(cleanHref);
        if (!fs.existsSync(fullPath)) {
          brokenLinks.push(href);
        }
      }
    }
  });

  console.log(`File: ${file}`);
  console.log(`  Title: "${title}"`);
  console.log(`  Description: "${desc}"`);
  console.log(`  Navbar: ${hasNavbar ? 'YES' : 'NO'}, Footer: ${hasFooter ? 'YES' : 'NO'}, Floating: ${hasFloatingAction ? 'YES' : 'NO'}`);
  console.log(`  Total Images: ${imgMatches.length}, Broken Images: ${brokenImgs.length} ${brokenImgs.length > 0 ? JSON.stringify(brokenImgs.slice(0, 5)) : ''}`);
  console.log(`  Total Links: ${links.length}, Broken Links: ${brokenLinks.length} ${brokenLinks.length > 0 ? JSON.stringify(brokenLinks.slice(0, 5)) : ''}`);
  console.log('--------------------------------------------------');
});

