const fs = require('fs');

const pages = [
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

console.log('=== VERIFYING NAVBAR & HERO BANNER STANDARDIZATION ===\n');

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  const hasCallNav = html.includes('btn-call-nav');
  const hasEnquiry = html.includes('Enquiry');
  
  let heroTitle = 'N/A (index/404)';
  const heroMatch = html.match(/<h1 class="hero-title-main">([^<]+)<\/h1>/);
  if (heroMatch) {
    heroTitle = heroMatch[1];
  }

  console.log(`${p}:`);
  console.log(`  Navbar Phone Number Removed: ${!hasCallNav ? '✅ Yes' : '❌ No'}`);
  console.log(`  Navbar Enquiry Button: ${hasEnquiry ? '✅ Present' : '❌ Missing'}`);
  console.log(`  Compact Hero Title: "${heroTitle}"`);
});

