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
  const html = fs.readFileSync(p, 'utf8');
  const hasAnimateCss = html.includes('lib/animate/animate.min.css');
  const hasWowJs = html.includes('lib/wow/wow.min.js');
  const hasMainJs = html.includes('js/main.js');
  const hasAnbuInteractions = html.includes('js/anbu-interactions.js');
  const hasWaveFooter = html.includes('wave-footer-top');
  const hasUnifiedFooter = html.includes('anbu-unified-footer');

  console.log(`${p}:`);
  console.log(`  animate.min.css: ${hasAnimateCss ? '✅' : '❌'}`);
  console.log(`  wow.min.js: ${hasWowJs ? '✅' : '❌'}`);
  console.log(`  main.js: ${hasMainJs ? '✅' : '❌'}`);
  console.log(`  anbu-interactions.js: ${hasAnbuInteractions ? '✅' : '❌'}`);
  console.log(`  wave-footer-top: ${hasWaveFooter ? '✅' : '❌'}`);
  console.log(`  anbu-unified-footer: ${hasUnifiedFooter ? '✅' : '❌'}`);
});

