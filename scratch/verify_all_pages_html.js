const fs = require('fs');

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

console.log('Verifying HTML integrity and tag balances across all 30 pages...\n');

let issuesCount = 0;

pages.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`[ERR] File does not exist: ${file}`);
    issuesCount++;
    return;
  }
  const content = fs.readFileSync(file, 'utf8');

  // Viewport check
  if (!content.includes('name="viewport"') && !content.includes("name='viewport'")) {
    console.log(`[WARN] Missing viewport meta: ${file}`);
    issuesCount++;
  }

  // Check critical tag balance
  const tagsToCheck = ['div', 'section', 'form', 'table'];
  tagsToCheck.forEach(tag => {
    const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
    const closeRegex = new RegExp(`</${tag}>`, 'gi');
    const opens = (content.match(openRegex) || []).length;
    const closes = (content.match(closeRegex) || []).length;
    if (opens !== closes) {
      console.log(`[UNBALANCED] ${file}: <${tag}> open=${opens}, close=${closes} (diff: ${opens - closes})`);
      issuesCount++;
    }
  });

  // Check duplicate IDs
  const idMatches = [...content.matchAll(/\bid=["']([^"']+)["']/gi)].map(m => m[1]);
  const idCounts = {};
  idMatches.forEach(id => {
    idCounts[id] = (idCounts[id] || 0) + 1;
  });
  const dupes = Object.entries(idCounts).filter(([id, cnt]) => cnt > 1);
  if (dupes.length > 0) {
    console.log(`[DUPLICATE IDs] ${file}: ${dupes.map(([id, cnt]) => `${id}(x${cnt})`).join(', ')}`);
  }
});

console.log(`\nIntegrity check complete. Issues flagged: ${issuesCount}`);

