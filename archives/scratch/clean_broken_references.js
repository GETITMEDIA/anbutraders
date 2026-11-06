const fs = require('fs');

const targets = [
  'anbu-paint/about.html',
  'anbu-paint/service.html',
  'anbu-paint/project.html',
  'anbu-paint/price.html',
  'anbu-paint/asianpant.html'
];

targets.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Remove cdn-cgi scripts
  const cdnRegex = /<script[^>]+(?:cdn-cgi|challenge-platform)[^>]*><\/script>\s*/gi;
  if (cdnRegex.test(content)) {
    content = content.replace(cdnRegex, '');
    changed = true;
    console.log(`Cleaned cdn-cgi scripts from ${file}`);
  }

  // In asianpant.html, remove liquid-paint
  if (file.includes('asianpant.html')) {
    const liquidCssRegex = /<link[^>]+liquid-paint\.css[^>]*>\s*/gi;
    const liquidJsRegex = /<script[^>]+liquid-paint\.js[^>]*><\/script>\s*/gi;
    if (liquidCssRegex.test(content)) {
      content = content.replace(liquidCssRegex, '');
      changed = true;
      console.log(`Cleaned liquid-paint.css from ${file}`);
    }
    if (liquidJsRegex.test(content)) {
      content = content.replace(liquidJsRegex, '');
      changed = true;
      console.log(`Cleaned liquid-paint.js from ${file}`);
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});

