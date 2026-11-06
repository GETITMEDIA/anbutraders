const fs = require('fs');
const orig = fs.readFileSync('index.backup.html', 'utf8');
const lines = orig.split('\n');

const milestones = [
  '<!-- Topbar Start -->',
  '<!-- Topbar End -->',
  '<!-- Navbar Start -->',
  '<!-- Navbar End -->',
  'id="anbu-hero-carousel-section"',
  '<!-- Curved Section Transition: Hero to About -->',
  '<!-- About Start -->',
  '<!-- About End -->',
  'Clean & Simple Stats Strip',
  '<!-- Clean & Simple Stats Strip End -->',
  'id="businesses"',
  '<!-- Businesses Section End -->',
  'id="products"',
  'id="why-choose-us"',
  '<!-- Why Choose Us End -->',
  'id="brands"',
  '<!-- Testimonials Section Start -->',
  '<!-- Testimonials Section End -->',
  '<!-- Curved Transition to Footer -->',
  '<!-- Footer Start -->',
  '<!-- Footer End -->',
  '<!-- Copyright Start -->',
  '<!-- Copyright End -->',
  '<!-- Floating Contact Actions -->',
  '<!-- Back to Top -->',
  '<!-- JavaScript Libraries -->'
];

lines.forEach((l, idx) => {
  milestones.forEach(m => {
    if (l.includes(m)) {
      console.log('L' + (idx+1) + ': ' + m);
    }
  });
});

