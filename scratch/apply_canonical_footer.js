const fs = require('fs');

const canonicalFooter = fs.readFileSync('scratch/canonical_footer.html', 'utf8');

const pages = [
  'about.html',
  'service.html',
  'contact.html',
  'project.html',
  'feature.html',
  'team.html',
  'testimonial.html',
  '404.html'
];

const startTag = '<!-- Unified Footer Start -->';
const endTag = '<!-- JavaScript Libraries -->';

pages.forEach(p => {
  let html = fs.readFileSync(p, 'utf8');
  const sIdx = html.indexOf(startTag);
  const eIdx = html.indexOf(endTag);

  if (sIdx === -1 || eIdx === -1) {
    console.error(`ERROR: ${p} missing startTag or endTag`);
    return;
  }

  const newHtml = html.substring(0, sIdx) + canonicalFooter + '\n\n    ' + html.substring(eIdx);
  fs.writeFileSync(p, newHtml, 'utf8');
  console.log(`✅ Updated footer in ${p}`);
});

