const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// The block starts at the wave divider before footer
const startStr = '<!-- Curved Transition to Footer -->';
const endStr = '<script>// JavaScript to toggle active class';

const startIdx = indexHtml.indexOf(startStr);
const endIdx = indexHtml.indexOf(endStr);

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find start or end in index.html!');
  process.exit(1);
}

const canonicalFooter = indexHtml.substring(startIdx, endIdx).trim();
console.log('Canonical footer length:', canonicalFooter.length);
console.log('--- Canonical footer snippet ---');
console.log(canonicalFooter.substring(0, 200));
console.log('...');
console.log(canonicalFooter.substring(canonicalFooter.length - 200));

fs.writeFileSync('scratch/canonical_footer.html', canonicalFooter, 'utf8');
console.log('\nSaved canonical footer to scratch/canonical_footer.html');

