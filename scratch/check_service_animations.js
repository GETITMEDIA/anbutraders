const fs = require('fs');
const html = fs.readFileSync('service.html', 'utf8');

const cards = (html.match(/class=["'][^"']*super-service-card[^"']*["']/g) || []);
console.log('super-service-cards:', cards.length);

const ribbon = html.includes('Trust Highlights Ribbon');
console.log('Ribbon found:', ribbon);

const steps = (html.match(/STEP 0[1-4]/g) || []);
console.log('Steps found:', steps.length);

const cta = html.includes('Quick Project CTA Banner');
console.log('CTA found:', cta);

