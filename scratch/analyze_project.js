const fs = require('fs');
const path = require('path');

function walk(dir, ext = '.js', ignoreDirs = ['node_modules', '.git', '.vscode', 'scratch', 'completed sites']) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      if (ignoreDirs.includes(file)) continue;
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        results = results.concat(walk(fullPath, ext, ignoreDirs));
      } else {
        if (fullPath.endsWith(ext)) {
          results.push(fullPath.replace(/\\/g, '/'));
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
  return results;
}

const jsFiles = walk('.', '.js');
console.log('--- ALL JS FILES ---');
jsFiles.forEach(f => console.log(f));

const htmlFiles = walk('.', '.html');
console.log('\n--- ALL HTML FILES ---');
htmlFiles.forEach(f => console.log(f));

// Check JS file usage in HTML files
console.log('\n--- JS FILE USAGE IN HTML ---');
const jsUsage = {};
jsFiles.forEach(f => {
  const base = path.basename(f);
  jsUsage[f] = [];
  for (const h of htmlFiles) {
    const content = fs.readFileSync(h, 'utf8');
    if (content.includes(base) || content.includes(f)) {
      jsUsage[f].push(h);
    }
  }
});

for (const [f, htmls] of Object.entries(jsUsage)) {
  console.log(`${f} -> referenced in ${htmls.length} files: ${htmls.slice(0, 3).join(', ')}${htmls.length > 3 ? '...' : ''}`);
}

