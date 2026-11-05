const fs = require('fs');
const pages = ['index.html', 'about.html', 'contact.html', 'service.html', 'project.html', 'team.html', 'testimonial.html', 'feature.html', '404.html'];

console.log('=== CHECKING FOOTER CONSISTENCY ACROSS PAGES ===');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const indexFooterMatch = indexHtml.match(/<!--\s*Footer Start\s*-->[\s\S]*?<!--\s*Footer End\s*-->/i) || indexHtml.match(/<footer[\s\S]*?<\/footer>/i) || indexHtml.match(/class=\"[^\"]*footer[^\"]*\"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i);

pages.forEach(p => {
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const hasOffice = html.includes('Our Office') && html.includes('Sedarapet');
    const hasQuickLinks = html.includes('Quick Links');
    const hasBusinessHours = html.includes('Business Hours') && html.includes('08:00 am – 08:00 pm');
    const hasReview = html.includes('Leave a Google Review') || html.includes('Leave a Review');
    const hasCopyright = html.includes('Anbu Traders') && html.includes('All Rights Reserved');
    const hasAosOrWow = html.includes('wow') || html.includes('data-aos') || html.includes('reveal-fade-up');
    
    console.log(`${p}: Office: ${hasOffice ? '✅' : '❌'}, Links: ${hasQuickLinks ? '✅' : '❌'}, Hours: ${hasBusinessHours ? '✅' : '❌'}, Review: ${hasReview ? '✅' : '❌'}, Wow/Fade: ${hasAosOrWow ? '✅' : '❌'}`);
  }
});

