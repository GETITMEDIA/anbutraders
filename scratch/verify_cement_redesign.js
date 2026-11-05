const fs = require('fs');
const path = require('path');

const targetHtml = path.resolve('cement/anbucement/index-demo-3.html');
const baseDir = path.dirname(targetHtml);

if (!fs.existsSync(targetHtml)) {
  console.error('File not found: ' + targetHtml);
  process.exit(1);
}

const html = fs.readFileSync(targetHtml, 'utf8');

console.log('=== VERIFYING ANBU STEEL & CEMENT REDESIGN ===');

// 1. Check images
const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
let brokenImages = 0;
console.log(`Found ${imgMatches.length} images:`);
imgMatches.forEach(m => {
  const src = m[1];
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    console.log(`  [EXTERNAL] ${src}`);
  } else {
    const resolved = path.resolve(baseDir, src);
    if (!fs.existsSync(resolved)) {
      console.error(`  ❌ BROKEN IMAGE: ${src} -> ${resolved}`);
      brokenImages++;
    } else {
      console.log(`  ✅ OK: ${src}`);
    }
  }
});

// 2. Check CSS links
const linkMatches = [...html.matchAll(/<link\b([^>]+)>/gi)];
let brokenCss = 0;
let cssCount = 0;
console.log(`\nChecking stylesheet links:`);
linkMatches.forEach(m => {
  const attrs = m[1];
  if (/rel=["']stylesheet["']/i.test(attrs)) {
    const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
    if (hrefMatch) {
      cssCount++;
      let href = hrefMatch[1].split('?')[0];
      if (href.startsWith('http://') || href.startsWith('https://')) {
        console.log(`  [CDN] ${href}`);
      } else {
        const resolved = path.resolve(baseDir, href);
        if (!fs.existsSync(resolved)) {
          console.error(`  ❌ BROKEN CSS: ${href} -> ${resolved}`);
          brokenCss++;
        } else {
          console.log(`  ✅ OK: ${href}`);
        }
      }
    }
  }
});

// 3. Check JS scripts
const scriptMatches = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)];
let brokenScripts = 0;
console.log(`\nFound ${scriptMatches.length} external scripts:`);
scriptMatches.forEach(m => {
  let src = m[1].split('?')[0];
  if (src.startsWith('http://') || src.startsWith('https://')) {
    console.log(`  [CDN] ${src}`);
  } else {
    const resolved = path.resolve(baseDir, src);
    if (!fs.existsSync(resolved)) {
      console.error(`  ❌ BROKEN SCRIPT: ${src} -> ${resolved}`);
      brokenScripts++;
    } else {
      console.log(`  ✅ OK: ${src}`);
    }
  }
});

// 4. Check STRICT CONSTRAINT: NO VENOM BUTTONS
console.log('\n--- Checking Negative Constraint: No Venom Button Effects ---');
const venomTerms = ['venom-button', 'venom-stage', 'venom-canvas', 'venom-pill', 'venomNavWrapper', 'venom-btn-wrapper', 'venomGl', 'venomHand'];
let venomCount = 0;
venomTerms.forEach(term => {
  const matches = (html.match(new RegExp(term, 'gi')) || []).length;
  if (matches > 0) {
    console.error(`  ❌ FOUND VENOM TERM "${term}": ${matches} occurrences`);
    venomCount += matches;
  }
});

if (venomCount === 0) {
  console.log('  ✅ PASSED: 0 venom button references found in index-demo-3.html!');
} else {
  console.error(`  ❌ FAILED: Found ${venomCount} venom references!`);
}

// Summary
console.log('\n=== VERIFICATION SUMMARY ===');
console.log(`Images: ${imgMatches.length - brokenImages}/${imgMatches.length} valid`);
console.log(`CSS: ${cssCount - brokenCss}/${cssCount} valid`);
console.log(`Scripts: ${scriptMatches.length - brokenScripts}/${scriptMatches.length} valid`);
console.log(`Venom count: ${venomCount}`);

if (brokenImages === 0 && brokenCss === 0 && brokenScripts === 0 && venomCount === 0) {
  console.log('🎉 ALL CHECKS PASSED PERFECTLY!');
} else {
  process.exit(1);
}
