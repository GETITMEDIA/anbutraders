const fs = require('fs');
const pages = ['index.html', 'about.html', 'contact.html', 'service.html', 'project.html', 'team.html', 'testimonial.html', 'feature.html', '404.html'];

console.log('=== CHECKING NAVBARS & BANNERS ACROSS PAGES ===');
pages.forEach(p => {
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const hasMore = html.includes('>More<') || html.includes('>More <');
    const navMatch = html.match(/<nav[\s\S]*?<\/nav>/i);
    const navHtml = navMatch ? navMatch[0] : '';
    const hasPhoneInNav = navHtml.includes('+91') || navHtml.includes('96263 25204');
    const hasEnquiryInNav = navHtml.includes('Enquiry') || navHtml.includes('enquiry');
    console.log(`${p}: More dropdown: ${hasMore ? '❌ YES' : '✅ NO'}, Phone in nav: ${hasPhoneInNav ? '❌ YES' : '✅ NO'}, Enquiry button: ${hasEnquiryInNav ? '✅ YES' : '❌ NO'}`);
  }
});

