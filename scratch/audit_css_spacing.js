const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

console.log('=== CSS SPACING & CONTAINER AUDIT ===');

// Check container rules
const containerMatches = [...css.matchAll(/(\.container[^{]*)\{([^}]+)\}/g)].map(m => ({ selector: m[1].trim(), rules: m[2].trim() }));
console.log('Container definitions in style.css:');
containerMatches.forEach(c => console.log(' ', c.selector, '=>', c.rules));

// Check body / html overflow rules
const bodyMatches = [...css.matchAll(/(body|html)[^{]*\{([^}]+)\}/g)].map(m => ({ selector: m[1].trim(), rules: m[2].trim() }));
console.log('\nBody/HTML rules:');
bodyMatches.forEach(b => console.log(' ', b.selector, '=>', b.rules));

// Check section padding rules
const sectionPadding = [...css.matchAll(/([a-zA-Z0-9_\-\.]+(?:section|wrapper|container-xxl)[^{]*)\{([^}]*padding[^}]*)\}/gi)].map(m => ({ sel: m[1].trim(), pad: m[2].trim() }));
console.log('\nFound', sectionPadding.length, 'section padding rules.');
sectionPadding.slice(0, 15).forEach(s => console.log(' ', s.sel.substring(0, 40), '=>', s.pad.substring(0, 50)));

// Check 100vw
const vwMatches = [...css.matchAll(/100vw/g)];
console.log('\n100vw occurrences:', vwMatches.length);

// Check potential overflow negative margins
const negMargins = [...css.matchAll(/([^{]+)\{([^}]*margin-(?:left|right):\s*-[^}]*)\}/gi)].map(m => ({ sel: m[1].trim(), val: m[2].trim() }));
console.log('\nNegative left/right margins:');
negMargins.forEach(n => console.log(' ', n.sel.substring(0, 50), '=>', n.val));

