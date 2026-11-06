const fs = require('fs');

// Let's check elements that might have min-width or overflow on mobile in index.html and style.css
// In .hero-stats-showcase-card:
// At line 7648:
// min-width: 450px!
// And in @media (max-width: 1080px):
// min-width: 380px!
// And in @media (max-width: 991.98px):
// min-width: auto;
// But wait! What about .hero-stats-showcase-card or .hero-stat-col or .hero-stat-label or brand marquee or navbar?
console.log('Checking overflow elements');
