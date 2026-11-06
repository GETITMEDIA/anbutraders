const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

const target = `  .hero-bottom-shelf {
    padding: 14px 14px 18px 14px;
  }`;

const replacement = `  .hero-bottom-shelf {
    padding: 12px 10px 16px 10px;
    overflow-x: hidden;
  }
  .hero-featured-project-card {
    padding: 14px 12px;
    width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box;
  }
  .hero-stats-showcase-card {
    padding: 14px 6px;
    width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box;
  }
  .featured-thumb-frame {
    width: 100%;
    height: clamp(120px, 34vw, 150px);
  }`;

if (css.includes(target)) {
  css = css.replace(target, replacement);
  fs.writeFileSync('css/style.css', css, 'utf8');
  console.log('Mobile ultra-narrow padding applied successfully!');
} else {
  console.log('Target not found');
}
