const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

// Fine-tuned refined CSS for the hero section
const refinedHeroCss = `/* ========================================================
   2026 ARCHITECTURAL HERO RECREATION (PIXEL-PERFECT FIDELITY)
   Exact recreation of reference design (Spaces That Inspire)
   Assets: img/main_herosec (hero1.png, hero2.png, hero3.png)
   ======================================================== */

.anbu-reference-hero-section {
  position: relative;
  background: radial-gradient(ellipse at 50% 35%, #e8e2d8 0%, #dbd0c0 48%, #cbbda9 100%);
  padding: clamp(28px, 4vw, 42px) 0 clamp(36px, 4.5vw, 54px);
  overflow: hidden;
  border-bottom: 1px solid rgba(40, 30, 20, 0.08);
}

.hero-container-1180 {
  max-width: 1180px !important;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}

/* Outer Rounded Hero Canvas Frame */
.anbu-hero-canvas {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  background: #ded5c9;
  box-shadow: 
    0 30px 80px -15px rgba(45, 35, 25, 0.24),
    0 12px 32px -5px rgba(45, 35, 25, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.65) inset;
  transition: box-shadow 0.3s ease;
}

/* Main Visual Scene Area with House Background */
.hero-visual-scene {
  position: relative;
  min-height: 550px;
  background-image: url('../img/main_herosec/hero2.png');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: clamp(42px, 5.8vw, 64px) clamp(32px, 4.8vw, 60px) 110px;
  transition: background-image 0.6s ease-in-out;
}

/* Subtle lighting gradient to ensure text readability without obscuring sunset */
.hero-scene-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 253, 250, 0.6) 0%,
    rgba(255, 253, 250, 0.45) 30%,
    rgba(255, 253, 250, 0.12) 55%,
    transparent 74%
  );
  pointer-events: none;
  z-index: 1;
}

/* Top-Left Content Area */
.hero-intro-block {
  position: relative;
  z-index: 2;
  max-width: 460px;
}

/* Eyebrow Tracking */
.hero-eyebrow-tracking {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  color: #2b221a;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Editorial Luxury Display Headline */
.hero-display-serif-title {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(3rem, 5.5vw, 4.4rem);
  line-height: 1.0;
  font-weight: 400;
  color: #24180f;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
}

.hero-display-serif-title span {
  display: block;
}

/* Lead Subtitle */
.hero-display-lead {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  font-size: 15px;
  line-height: 1.55;
  font-weight: 400;
  color: #453b32;
  max-width: 380px;
  margin-bottom: 30px;
}

/* Action Buttons */
.hero-action-buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
}

.hero-btn-pill-primary {
  background: #151210;
  color: #ffffff !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 13px 28px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  box-shadow: 0 8px 22px -4px rgba(21, 18, 16, 0.35);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.hero-btn-pill-primary:hover {
  background: #2b231e;
  transform: translateY(-2px);
  box-shadow: 0 12px 26px -4px rgba(21, 18, 16, 0.45);
  color: #ffffff !important;
}

.hero-btn-pill-primary:active {
  transform: translateY(0);
}

.hero-btn-showcase {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #24180f !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.hero-btn-showcase:hover {
  opacity: 0.85;
  transform: translateX(2px);
}

.hero-play-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.4px solid #24180f;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(4px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #24180f;
  transition: background 0.2s ease, transform 0.2s ease;
}

.hero-btn-showcase:hover .hero-play-circle {
  background: rgba(255, 255, 255, 0.85);
  transform: scale(1.06);
}

/* ========================================================
   BOTTOM SHELF DOCK TRAY & FLOATING CARDS
   ======================================================== */

.hero-bottom-shelf {
  position: relative;
  background: #ded5c9;
  padding: 16px 28px 26px 28px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 26px;
  z-index: 3;
}

/* Left: Featured Project Capsule Card */
.hero-featured-project-card {
  position: relative;
  background: #fffdfb;
  border-radius: 26px;
  padding: 18px 22px;
  margin-top: -64px; /* Overlaps house photo above shelf */
  box-shadow: 
    0 18px 40px -10px rgba(40, 30, 20, 0.12),
    0 6px 16px -4px rgba(40, 30, 20, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.9) inset;
  flex: 1 1 540px;
  max-width: 550px;
  z-index: 4;
}

.featured-card-grid {
  display: grid;
  grid-template-columns: 185px 1fr;
  gap: 18px;
  align-items: center;
}

.featured-eyebrow-label {
  display: block;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #5d5248;
  margin-bottom: 8px;
}

.featured-thumb-frame {
  width: 185px;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
  background: #e8e2d8;
  box-shadow: 0 4px 12px rgba(30, 20, 10, 0.08);
}

.featured-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 78% center;
  display: block;
  transition: transform 0.4s ease, opacity 0.25s ease;
}

.hero-featured-project-card:hover .featured-thumb-img {
  transform: scale(1.05);
}

.featured-info-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 0;
}

.featured-top-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.featured-project-title {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #1a1510;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.featured-price-tag {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #1a1510;
  white-space: nowrap;
}

.featured-project-desc {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 12px;
  line-height: 1.45;
  color: #5c5248;
  margin: 5px 0 6px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.featured-view-link {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  color: #1a1510 !important;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  transition: gap 0.2s ease, opacity 0.2s ease;
  margin-bottom: 8px;
}

.featured-view-link:hover {
  gap: 9px;
  opacity: 0.8;
}

.featured-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
}

.featured-pagination-dots {
  display: flex;
  align-items: center;
  gap: 5px;
}

.feat-dot {
  border: none;
  padding: 0;
  height: 4px;
  border-radius: 4px;
  background: #d4ccbf;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 6px;
}

.feat-dot.active {
  width: 18px;
  background: #1a1510;
}

.featured-arrow-btns {
  display: flex;
  align-items: center;
  gap: 8px;
}

.feat-arrow-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease;
}

.feat-arrow-prev {
  background: #eae2d6;
  color: #1a1510;
}

.feat-arrow-prev:hover {
  background: #dfd6c8;
  transform: scale(1.06);
}

.feat-arrow-next {
  background: #1a1510;
  color: #ffffff;
}

.feat-arrow-next:hover {
  background: #332b25;
  transform: scale(1.06);
}

/* Right: Statistics Showcase Card */
.hero-stats-showcase-card {
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  padding: 22px 34px;
  box-shadow: 
    0 18px 40px -10px rgba(40, 30, 20, 0.12),
    0 6px 16px -4px rgba(40, 30, 20, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.9) inset;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  flex: 0 1 510px;
  min-width: 450px;
  z-index: 4;
}

.hero-stat-col {
  text-align: center;
  padding: 0 12px;
}

.hero-stat-icon-wrap {
  color: #1a1510;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-stat-number {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #1a1510;
  line-height: 1.1;
  margin-bottom: 4px;
  letter-spacing: -0.015em;
}

.hero-stat-label {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 11.5px;
  font-weight: 500;
  color: #6e6459;
  line-height: 1.25;
  white-space: nowrap;
}

.hero-stat-col-divider {
  width: 1px;
  height: 52px;
  background: #ebe4d9;
}

/* ========================================================
   ARCHITECTURAL SHOWCASE VIDEO LIGHTBOX MODAL
   ======================================================== */

.hero-showcase-modal {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.hero-showcase-modal.is-open {
  opacity: 1;
  visibility: visible;
}

.hero-modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(22, 17, 14, 0.78);
  backdrop-filter: blur(8px);
}

.hero-modal-dialog {
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  max-width: 800px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
  z-index: 2;
  transform: translateY(20px) scale(0.96);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-showcase-modal.is-open .hero-modal-dialog {
  transform: translateY(0) scale(1);
}

.hero-modal-close {
  position: absolute;
  top: 14px;
  right: 18px;
  background: rgba(0, 0, 0, 0.08);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 24px;
  line-height: 1;
  color: #1a1510;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s ease, transform 0.2s ease;
}

.hero-modal-close:hover {
  background: #1a1510;
  color: #ffffff;
  transform: scale(1.08);
}

.hero-modal-content {
  padding: 28px 32px 32px;
}

.hero-modal-badge {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #a3622d;
  margin-bottom: 6px;
}

.hero-modal-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 22px;
  color: #1a1510;
  margin: 0 0 16px 0;
}

.hero-modal-media-wrap {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #000000;
  aspect-ratio: 16 / 9;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;
}

.hero-modal-media-wrap video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-modal-caption {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 13.5px;
  line-height: 1.55;
  color: #5c5248;
  margin: 0;
}

/* ========================================================
   RESPONSIVE BREAKPOINTS (DESKTOP, TABLET, MOBILE)
   ======================================================== */

@media (max-width: 1080px) {
  .hero-bottom-shelf {
    gap: 16px;
    padding: 16px 20px 22px 20px;
  }
  .hero-featured-project-card {
    flex: 1 1 490px;
    padding: 16px 18px;
  }
  .hero-stats-showcase-card {
    flex: 0 1 420px;
    min-width: 380px;
    padding: 18px 22px;
  }
  .hero-stat-number {
    font-size: 22px;
  }
  .hero-stat-label {
    font-size: 10.5px;
  }
}

@media (max-width: 991.98px) {
  .hero-visual-scene {
    min-height: 480px;
    padding: 38px 26px 60px;
    background-position: 72% center;
  }
  .hero-display-serif-title {
    font-size: clamp(2.4rem, 6vw, 3.4rem);
  }
  .hero-bottom-shelf {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
  .hero-featured-project-card {
    margin-top: 0;
    max-width: 100%;
    width: 100%;
  }
  .hero-stats-showcase-card {
    min-width: auto;
    max-width: 100%;
    width: 100%;
  }
}

@media (max-width: 640px) {
  .anbu-hero-canvas {
    border-radius: 20px;
  }
  .hero-visual-scene {
    min-height: 400px;
    padding: 28px 18px 40px;
    background-position: 68% center;
  }
  .hero-scene-scrim {
    background: linear-gradient(
      180deg,
      rgba(255, 253, 250, 0.8) 0%,
      rgba(255, 253, 250, 0.58) 50%,
      rgba(255, 253, 250, 0.15) 100%
    );
  }
  .hero-intro-block {
    max-width: 100%;
  }
  .hero-eyebrow-tracking {
    font-size: 10px;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }
  .hero-display-serif-title {
    font-size: 2.35rem;
    line-height: 1.08;
    margin-bottom: 14px;
  }
  .hero-display-lead {
    font-size: 14px;
    margin-bottom: 22px;
  }
  .hero-action-buttons {
    gap: 12px;
  }
  .hero-btn-pill-primary {
    padding: 11px 20px;
    font-size: 13px;
  }
  .hero-btn-showcase {
    font-size: 13px;
  }
  .hero-bottom-shelf {
    padding: 14px 14px 18px 14px;
  }
  .featured-card-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .featured-thumb-frame {
    width: 100%;
    height: 140px;
  }
  .hero-stats-showcase-card {
    padding: 14px 10px;
  }
  .hero-stat-col {
    padding: 0 4px;
  }
  .hero-stat-number {
    font-size: 19px;
  }
  .hero-stat-label {
    font-size: 9.5px;
    white-space: normal;
  }
  .hero-stat-col-divider {
    height: 38px;
  }
  .hero-modal-content {
    padding: 20px 18px 24px;
  }
  .hero-modal-title {
    font-size: 18px;
  }
}
`;

const heroCssRegex = /\/\* =+\s*2026 ARCHITECTURAL HERO RECREATION[\s\S]*?(?=\/\* =+\s*UNIFIED 2026 SECTION HEADERS)/;
css = css.replace(heroCssRegex, refinedHeroCss);
fs.writeFileSync('css/style.css', css, 'utf8');
console.log('Successfully updated css/style.css with refined hero styles!');
