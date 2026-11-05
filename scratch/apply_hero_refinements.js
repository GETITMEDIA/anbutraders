const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

// Replace the 4 pills with the 3 reference pills
const oldPills = `<div class="hero-docked-pills-bar" role="tablist" aria-label="Core Industrial Divisions">
                            <button type="button" class="ref-dock-pill is-active" data-target-bg="hero-bg-all" data-link="#products" role="tab" aria-selected="true" aria-label="Show All Building Materials Depot">
                                <div class="dock-pill-header">
                                    <i class="fa fa-industry dock-pill-icon" aria-hidden="true"></i>
                                    <span class="dock-pill-text">All Depot</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>
                            <button type="button" class="ref-dock-pill" data-target-bg="hero-bg-steel" data-link="#products" role="tab" aria-selected="false" aria-label="Show Steel and TMT Rods">
                                <div class="dock-pill-header">
                                    <i class="fa fa-layer-group dock-pill-icon" aria-hidden="true"></i>
                                    <span class="dock-pill-text">Steel &amp; TMT</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>
                            <button type="button" class="ref-dock-pill" data-target-bg="hero-bg-cement" data-link="cement/anbucement/index-demo-3.html" role="tab" aria-selected="false" aria-label="Show Cement and Concrete">
                                <div class="dock-pill-header">
                                    <i class="fa fa-cubes dock-pill-icon" aria-hidden="true"></i>
                                    <span class="dock-pill-text">Cement</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>
                            <button type="button" class="ref-dock-pill" data-target-bg="hero-bg-sheets" data-link="a-steel/index.html" role="tab" aria-selected="false" aria-label="Show Roofing Sheets and Structural Pipes">
                                <div class="dock-pill-header">
                                    <i class="fa fa-warehouse dock-pill-icon" aria-hidden="true"></i>
                                    <span class="dock-pill-text">Sheets &amp; Pipes</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>
                        </div>`;

const newPills = `<div class="hero-docked-pills-bar" role="tablist" aria-label="Core Industrial Divisions">
                            <button type="button" class="ref-dock-pill is-active" data-target-bg="hero-bg-all" data-link="#products" role="tab" aria-selected="true" aria-label="Show Steel &amp; TMT Division">
                                <div class="dock-pill-header">
                                    <i class="fa fa-layer-group dock-pill-icon" aria-hidden="true"></i>
                                    <span class="dock-pill-text">Steel &amp; TMT</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>
                            <button type="button" class="ref-dock-pill" data-target-bg="hero-bg-cement" data-link="cement/anbucement/index-demo-3.html" role="tab" aria-selected="false" aria-label="Show Cement and Concrete">
                                <div class="dock-pill-header">
                                    <i class="fa fa-cubes dock-pill-icon" aria-hidden="true"></i>
                                    <span class="dock-pill-text">Cement</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>
                            <button type="button" class="ref-dock-pill" data-target-bg="hero-bg-sheets" data-link="a-steel/index.html" role="tab" aria-selected="false" aria-label="Show Roofing Sheets and Structural Pipes">
                                <div class="dock-pill-header">
                                    <i class="fa fa-warehouse dock-pill-icon" aria-hidden="true"></i>
                                    <span class="dock-pill-text">Sheets &amp; Pipes</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>
                        </div>`;

// Replace trusted-brands-strip-section (restore brand strip to before as requested by user)
const stripPattern = /\s*<!-- "OUR TRUSTED BRANDS" PROMINENT DOCKED CARD[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

if (html.includes(oldPills)) {
  html = html.replace(oldPills, newPills);
  console.log('Replaced 4 pills with 3 reference pills.');
} else {
  // Normalize CRLF
  const normHtml = html.replace(/\r\n/g, '\n');
  const normOldPills = oldPills.replace(/\r\n/g, '\n');
  if (normHtml.includes(normOldPills)) {
    html = normHtml.replace(normOldPills, newPills.replace(/\r\n/g, '\n'));
    console.log('Replaced pills after CRLF normalization.');
  } else {
    console.warn('Could not match old pills exactly.');
  }
}

if (stripPattern.test(html)) {
  html = html.replace(stripPattern, '');
  console.log('Removed trusted-brands-strip-section as requested.');
} else {
  console.warn('Could not match trusted-brands-strip-section.');
}

// Update UltraTech logo in marquee if needed
html = html.replace('<img src="img/brands/2.png" alt="UltraTech Cement"', '<img src="img/ultratechlogo.png" alt="UltraTech Cement"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully.');

// 2. Update css/style.css
let css = fs.readFileSync('css/style.css', 'utf8');

// Replace hero-angled-accent and hero-visual-container styling
const oldAccentBlock = `/* Diagonal orange divider slash */
.hero-angled-accent {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 22px;
  background: linear-gradient(180deg, #F36A21 0%, #EA580C 100%);
  z-index: 5;
  box-shadow: 0 0 16px rgba(243, 106, 33, 0.4);
  transform: skewX(-14deg);
  transform-origin: top left;
}

.hero-visual-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  clip-path: polygon(72px 0, 100% 0, 100% 100%, 0 100%);
}`;

const newAccentBlock = `/* Diagonal orange divider slash - Pixel-Perfect Slant Boundary */
.hero-angled-accent {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #F36A21 0%, #EA580C 100%);
  z-index: 5;
  pointer-events: none;
  clip-path: polygon(92px 0, 110px 0, 18px 100%, 0 100%);
  filter: drop-shadow(-4px 0 14px rgba(243, 106, 33, 0.45));
}

.hero-visual-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  clip-path: polygon(110px 0, 100% 0, 100% 100%, 18px 100%);
}`;

if (css.includes(oldAccentBlock)) {
  css = css.replace(oldAccentBlock, newAccentBlock);
  console.log('Updated hero-angled-accent and hero-visual-container in css/style.css.');
} else {
  const normCss = css.replace(/\r\n/g, '\n');
  const normOldAccent = oldAccentBlock.replace(/\r\n/g, '\n');
  if (normCss.includes(normOldAccent)) {
    css = normCss.replace(normOldAccent, newAccentBlock.replace(/\r\n/g, '\n'));
    console.log('Updated hero-angled-accent after CRLF normalization.');
  } else {
    console.warn('Could not match oldAccentBlock in css/style.css');
  }
}

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('css/style.css updated successfully.');

