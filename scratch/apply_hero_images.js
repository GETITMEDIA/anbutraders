const fs = require('fs');

// 1. Update css/style.css
let css = fs.readFileSync('css/style.css', 'utf8');

const oldHeroCss = `/* ── 1. Unified Page Hero Component ── */
.anbu-page-hero {
  position: relative;
  background: linear-gradient(135deg, #031836 0%, #062B5B 60%, #0b3d7d 100%);
  padding: clamp(3.5rem, 7vw, 5.5rem) 0;
  color: #FFFFFF;
  overflow: hidden;
  margin-bottom: 3.5rem;
}
.anbu-page-hero::before {
  content: "";
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background: radial-gradient(circle at 80% 20%, rgba(243, 106, 33, 0.18), transparent 45%),
              radial-gradient(circle at 20% 80%, rgba(2, 132, 199, 0.18), transparent 50%);
  pointer-events: none;
}
.anbu-page-hero .container {
  position: relative;
  z-index: 2;
}`;

const newHeroCss = `/* ── 1. Unified Page Hero Component with Photographic Banners ── */
.anbu-page-hero {
  position: relative;
  background-color: #031836;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: clamp(4.5rem, 8vw, 6.5rem) 0;
  color: #FFFFFF;
  overflow: hidden;
  margin-bottom: 3.5rem;
}
.anbu-page-hero::before {
  content: "";
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background: linear-gradient(135deg, rgba(3, 24, 54, 0.90) 0%, rgba(6, 43, 91, 0.82) 55%, rgba(11, 61, 125, 0.76) 100%);
  pointer-events: none;
  z-index: 1;
}
.anbu-page-hero::after {
  content: "";
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background: radial-gradient(circle at 80% 20%, rgba(243, 106, 33, 0.25), transparent 45%),
              radial-gradient(circle at 20% 80%, rgba(2, 132, 199, 0.22), transparent 50%);
  pointer-events: none;
  z-index: 1;
}
.anbu-page-hero .container {
  position: relative;
  z-index: 2;
}

/* Page-specific photographic banners */
.anbu-page-hero.hero-about {
  background-image: url('../img/banners/about-hero.jpg');
}
.anbu-page-hero.hero-service {
  background-image: url('../img/banners/services-hero.jpg');
}
.anbu-page-hero.hero-contact {
  background-image: url('../img/banners/contact-hero.jpg');
}
.anbu-page-hero.hero-project {
  background-image: url('../img/banners/project-hero.jpg');
}
.anbu-page-hero.hero-feature {
  background-image: url('../img/banners/feature-hero.jpg');
}
.anbu-page-hero.hero-team {
  background-image: url('../img/banners/team-hero.jpg');
}
.anbu-page-hero.hero-testimonial {
  background-image: url('../img/banners/testimonial-hero.jpg');
}
.anbu-page-hero.hero-404 {
  background-image: url('../img/banners/404-hero.jpg');
}`;

if (css.includes(oldHeroCss)) {
  css = css.replace(oldHeroCss, newHeroCss);
  fs.writeFileSync('css/style.css', css, 'utf8');
  console.log('css/style.css hero section updated with photographic banner styles!');
} else {
  // If not exact match, append or replace
  console.log('Exact block not found in style.css, replacing with regex...');
  css = css.replace(/\/\* ── 1\. Unified Page Hero Component ── \*\/[\s\S]*?\.anbu-page-hero \.container \{\s*position: relative;\s*z-index: 2;\s*\}/, newHeroCss);
  fs.writeFileSync('css/style.css', css, 'utf8');
  console.log('css/style.css updated via regex!');
}

// 2. Update HTML pages with page-specific banner classes
const pageMap = {
  'service.html': 'hero-service',
  'about.html': 'hero-about',
  'contact.html': 'hero-contact',
  'project.html': 'hero-project',
  'feature.html': 'hero-feature',
  'team.html': 'hero-team',
  'testimonial.html': 'hero-testimonial'
};

Object.entries(pageMap).forEach(([file, heroClass]) => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/class="anbu-page-hero"/g, `class="anbu-page-hero ${heroClass}"`);
    fs.writeFileSync(file, html, 'utf8');
    console.log(`Updated ${file} -> class="anbu-page-hero ${heroClass}"`);
  }
});

console.log('All hero banner images successfully applied!');

