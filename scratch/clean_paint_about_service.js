const fs = require('fs');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the cloudflare injection script
  content = content.replace(/<script>\s*\(function\(\)\s*\{\s*function c\(\)[\s\S]*?<\/script>/gi, '');

  // Remove duplicate backToTop block
  const duplicateBlock = /<!-- Back to Top \(Left side\) -->\s*<a href="#" class="back-to-top" id="backToTopBtn"[\s\S]*?<\/script>\s*(?=<!-- Floating Contact Actions -->)/i;
  content = content.replace(duplicateBlock, '');

  // Also remove rocket loader type attribute if present
  content = content.replace(/type="[a-f0-9]+-text\/javascript"/gi, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned ${filePath}`);
}

cleanFile('anbu-paint/about.html');
cleanFile('anbu-paint/service.html');

