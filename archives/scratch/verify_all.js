const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');

console.log('--- 1. VERIFYING HTML STRUCTURE & TAG BALANCE ---');
const tagNames = ['div', 'section', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'script'];
tagNames.forEach(tag => {
  const openCount = (html.match(new RegExp('<' + tag + '(\\s|>|$)', 'gi')) || []).length;
  const closeCount = (html.match(new RegExp('</' + tag + '>', 'gi')) || []).length;
  if (openCount !== closeCount) {
    console.error(`Mismatch for tag <${tag}>: ${openCount} open vs ${closeCount} close`);
  } else {
    console.log(`Tag <${tag}> balanced: ${openCount} pairs`);
  }
});

console.log('\n--- 2. VERIFYING LOCAL ASSETS ---');
const assetRegex = /(?:src|href)=["']([^"':#][^"']*\.(?:png|jpg|jpeg|webp|svg|gif|css|js))["']/gi;
let match;
const missingAssets = [];
const foundAssets = new Set();
while ((match = assetRegex.exec(html)) !== null) {
  const assetPath = match[1].split('?')[0].split('#')[0];
  if (assetPath.startsWith('http') || assetPath.startsWith('//')) continue;
  
  const fullPath = path.join(rootDir, assetPath.replace(/\//g, path.sep));
  if (!fs.existsSync(fullPath)) {
    missingAssets.push(assetPath);
  } else {
    foundAssets.add(assetPath);
  }
}
if (missingAssets.length > 0) {
  console.error('Missing local assets:', missingAssets);
} else {
  console.log(`All ${foundAssets.size} local assets exist on disk!`);
}

console.log('\n--- 3. CHECKING HEADING HIERARCHY ---');
const h1s = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
console.log(`Found ${h1s.length} H1 tags:`);
h1s.forEach(h => console.log('  -> ' + h.replace(/<[^>]+>/g, '').trim()));

const h2s = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
console.log(`Found ${h2s.length} H2 tags:`);
h2s.forEach(h => console.log('  -> ' + h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));

console.log('\n--- 4. CHECKING DUPLICATE ELEMENT IDs ---');
const idRegex = /\sid=["']([^"']+)["']/gi;
const idCounts = {};
while ((match = idRegex.exec(html)) !== null) {
  const id = match[1];
  idCounts[id] = (idCounts[id] || 0) + 1;
}
const duplicateIds = Object.keys(idCounts).filter(id => idCounts[id] > 1);
if (duplicateIds.length > 0) {
  console.warn('Duplicate IDs found:', duplicateIds.map(id => `${id} (${idCounts[id]}x)`));
} else {
  console.log(`All ${Object.keys(idCounts).length} IDs are unique!`);
}

console.log('\n--- 5. CHECKING PRELOADS & CRITICAL ASSETS ---');
const preloads = html.match(/<link[^>]*rel=["']preload["'][^>]*>/gi) || [];
console.log('Preloaded resources:', preloads);

console.log('\n--- VERIFICATION COMPLETE ---');
