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

pages.forEach(p => {
  let html = fs.readFileSync(p, 'utf8');
  // Match the navbar CTA container with btn-call-nav
  const pattern = /<div class="d-none d-lg-flex align-items-center gap-2">\s*<a href="tel:\+919626325204" class="btn btn-call-nav"[^>]*>[\s\S]*?<\/a>\s*(<a href="https:\/\/wa\.me\/9626325204[^"]*" class="btn btn-primary btn-glow btn-ripple px-4 py-2"[^>]*>\s*Enquiry\s*<\/a>)\s*<\/div>/g;

  if (pattern.test(html)) {
    html = html.replace(pattern, (match, enquiryBtn) => {
      return `<div class="d-none d-lg-flex align-items-center">\n                ${enquiryBtn.trim()}\n            </div>`;
    });
    fs.writeFileSync(p, html, 'utf8');
    console.log(`✅ Removed phone number button from navbar in ${p}`);
  } else {
    console.log(`⚠️ Pattern did not match in ${p}, checking manual regex...`);
  }
});

