const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const referenceHeroCss = `

/* ========================================================
   2026 HERO REFERENCE DESIGN (PIXEL-PERFECT SPLIT LAYOUT)
   Matches Reference Mockup (1e13236a)
   ======================================================== */

.anbu-reference-hero-section {
  position: relative;
  background: #FFFFFF;
  overflow: hidden;
  border-bottom: 1px solid rgba(6, 43, 91, 0.06);
}

.hero-subtle-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(6, 43, 91, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 43, 91, 0.025) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 1;
}

.hero-fluid-wrapper {
  max-width: 1560px;
  margin: 0 auto;
}

.hero-split-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  min-height: 590px;
  position: relative;
}

/* ── LEFT CONTENT COLUMN ── */
.hero-content-col {
  display: flex;
  align-items: center;
  padding: clamp(2.5rem, 4.5vw, 4.5rem) clamp(1.5rem, 3.5vw, 4rem);
  background: linear-gradient(135deg, #FFFFFF 0%, #FFFDFB 100%);
  position: relative;
  z-index: 3;
}

.hero-content-inner {
  max-width: 650px;
  width: 100%;
}

/* Eyebrow Pill */
.hero-ref-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(243, 106, 33, 0.08);
  border: 1px solid rgba(243, 106, 33, 0.22);
  padding: 6px 16px;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-size: 0.813rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: #EA580C;
  margin-bottom: 20px;
}

.ref-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--primary-orange);
  box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.6);
  animation: refDotPulse 2s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes refDotPulse {
  0% { box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(243, 106, 33, 0); }
  100% { box-shadow: 0 0 0 0 rgba(243, 106, 33, 0); }
}

/* Bold Display Headline */
.hero-ref-h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 4.2vw, 3.85rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.025em;
  margin-bottom: 20px;
}

.ref-h1-navy {
  color: var(--primary-navy);
}

.ref-h1-orange {
  color: var(--primary-orange);
}

/* Subtitle Paragraph */
.hero-ref-lead {
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  line-height: 1.65;
  color: #475569;
  max-width: 540px;
  margin-bottom: 30px;
}

/* Dual CTA Buttons */
.hero-ref-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  margin-bottom: 36px;
}

.btn-ref-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F36A21 0%, #EA580C 100%);
  color: #FFFFFF !important;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 13px 26px;
  border-radius: 9999px;
  text-decoration: none !important;
  box-shadow: 0 8px 24px rgba(243, 106, 33, 0.35);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.btn-ref-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(243, 106, 33, 0.45);
  color: #FFFFFF !important;
}

.btn-ref-primary:hover .ref-cta-arrow {
  transform: translateX(4px);
}

.btn-ref-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  color: var(--primary-navy) !important;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 9999px;
  border: 1.5px solid var(--primary-navy);
  text-decoration: none !important;
  box-shadow: 0 2px 8px rgba(6, 43, 91, 0.04);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-ref-secondary:hover {
  transform: translateY(-2px);
  background: #F8FAFC;
  box-shadow: 0 6px 18px rgba(6, 43, 91, 0.1);
  color: var(--primary-navy) !important;
}

.btn-ref-secondary:hover .ref-cta-arrow {
  transform: translateX(4px);
}

.ref-cta-arrow {
  transition: transform 0.25s ease;
}

/* Statistics Strip */
.hero-ref-stats-strip {
  display: flex;
  align-items: center;
  gap: 22px;
  padding-top: 24px;
  border-top: 1px solid rgba(6, 43, 91, 0.1);
}

.ref-stat-box {
  display: flex;
  flex-direction: column;
}

.ref-stat-num {
  font-family: var(--font-heading);
  font-size: clamp(1.45rem, 2vw, 1.85rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--primary-orange);
}

.ref-stat-lbl {
  font-size: 0.688rem;
  font-weight: 700;
  color: #64748B;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-top: 3px;
  white-space: nowrap;
}

.ref-stat-divider {
  width: 1px;
  height: 34px;
  background: rgba(6, 43, 91, 0.12);
}

/* ── RIGHT VISUAL COLUMN & ANGLED SLICE ── */
.hero-visual-col {
  position: relative;
  min-height: 560px;
  overflow: hidden;
}

/* Diagonal orange divider slash */
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
}

.hero-bg-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 6s cubic-bezier(0.25, 1, 0.5, 1);
  transform: scale(1);
}

.hero-bg-layer.is-active {
  opacity: 1;
  visibility: visible;
  transform: scale(1.035);
}

.hero-visual-col:hover .hero-bg-layer.is-active {
  transform: scale(1.05);
}

.hero-visual-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(3, 24, 54, 0.05) 0%, rgba(3, 24, 54, 0.2) 50%, rgba(3, 24, 54, 0.88) 100%);
  pointer-events: none;
  z-index: 3;
}

/* Docked Category Pills at Bottom of Right Image */
.hero-docked-pills-bar {
  position: absolute;
  bottom: 24px;
  left: 36px;
  right: 28px;
  display: flex;
  gap: 14px;
  z-index: 4;
}

.ref-dock-pill {
  flex: 1;
  background: rgba(3, 24, 54, 0.78);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 12px;
  padding: 12px 14px 10px;
  color: #FFFFFF;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  outline: none;
}

.ref-dock-pill:hover {
  background: rgba(3, 24, 54, 0.92);
  border-color: rgba(243, 106, 33, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.dock-pill-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dock-pill-icon {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
}

.dock-pill-text {
  font-family: var(--font-heading);
  font-size: 0.885rem;
  font-weight: 700;
  color: #FFFFFF;
  white-space: nowrap;
}

.dock-pill-indicator {
  display: block;
  width: 32px;
  height: 3px;
  background: var(--primary-orange);
  border-radius: 2px;
  margin-top: 6px;
  transition: width 0.3s ease;
}

.ref-dock-pill.is-active .dock-pill-indicator {
  width: 48px;
  background: #F36A21;
}

.ref-dock-pill.is-active {
  border-color: rgba(243, 106, 33, 0.8);
  background: rgba(6, 43, 91, 0.88);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* ── "OUR TRUSTED BRANDS" STRIP ── */
.trusted-brands-strip-section {
  padding: 16px 0 32px;
  background: #FFFFFF;
  position: relative;
  z-index: 5;
}

.trusted-brands-card {
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid rgba(6, 43, 91, 0.09);
  box-shadow: 0 4px 20px rgba(6, 43, 91, 0.05);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.trusted-brands-title-block {
  flex-shrink: 0;
}

.trusted-brands-title {
  font-family: var(--font-heading);
  font-size: 0.925rem;
  font-weight: 800;
  color: var(--primary-navy);
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.trusted-brands-vdivider {
  width: 1px;
  height: 36px;
  background: rgba(6, 43, 91, 0.12);
  flex-shrink: 0;
}

.trusted-brands-logos-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-grow: 1;
}

.trusted-brand-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  transition: transform 0.25s ease, filter 0.25s ease;
  text-decoration: none !important;
}

.trusted-brand-cell:hover {
  transform: translateY(-2px);
}

.trusted-brand-cell img {
  max-height: 38px;
  max-width: 115px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.25s ease;
}

.trusted-brand-cell:hover img {
  transform: scale(1.06);
}

/* ── RESPONSIVE RULES ── */
@media (max-width: 1199.98px) {
  .hero-ref-h1 {
    font-size: 2.85rem;
  }
  .trusted-brands-card {
    padding: 14px 18px;
    gap: 14px;
  }
}

@media (max-width: 991.98px) {
  .hero-split-grid {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  .hero-content-col {
    padding: 2.5rem 1.25rem 2rem;
  }
  .hero-visual-col {
    min-height: 440px;
  }
  .hero-angled-accent {
    display: none;
  }
  .hero-visual-container {
    clip-path: none;
    border-radius: 16px;
    margin: 0 16px 20px;
    position: relative;
    height: 420px;
  }
  .hero-docked-pills-bar {
    left: 16px;
    right: 16px;
    bottom: 16px;
    gap: 8px;
  }
  .dock-pill-text {
    font-size: 0.775rem;
  }
  .dock-pill-icon {
    font-size: 0.95rem;
  }
  .trusted-brands-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .trusted-brands-vdivider {
    display: none;
  }
  .trusted-brands-logos-grid {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }
}

@media (max-width: 575.98px) {
  .hero-ref-h1 {
    font-size: 2.15rem;
  }
  .hero-ref-stats-strip {
    flex-wrap: wrap;
    gap: 14px;
  }
  .ref-stat-divider {
    display: none;
  }
  .hero-docked-pills-bar {
    flex-direction: column;
    gap: 6px;
  }
  .ref-dock-pill {
    padding: 8px 12px;
  }
}
`;

fs.writeFileSync(cssPath, css + referenceHeroCss);
console.log('Appended reference hero CSS successfully.');

