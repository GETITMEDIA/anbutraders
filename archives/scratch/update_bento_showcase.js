const fs = require('fs');

// 1. UPDATE CSS IN css/style.css
const cssPath = 'css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const cssStartMarker = '/* ========================================================\n   ANBU TRADERS — 2026 ELITE OUR BUSINESSES SHOWCASE (REDESIGN)\n   ======================================================== */';
const cssEndMarker = '/* ── Products Section (2026 Premium Architectural Redesign) ── */';

let cssStart = css.indexOf(cssStartMarker);
if (cssStart === -1) cssStart = css.indexOf(cssStartMarker.replace(/\n/g, '\r\n'));

let cssEnd = css.indexOf(cssEndMarker);
if (cssEnd === -1) cssEnd = css.indexOf(cssEndMarker.replace(/\n/g, '\r\n'));

console.log('CSS bounds:', cssStart, cssEnd);
if (cssStart === -1 || cssEnd === -1) {
  console.error('CSS markers not found!');
  process.exit(1);
}

const newBentoCss = `/* ========================================================
   ANBU TRADERS — 2026 LUXURY BENTO BUSINESSES SHOWCASE
   ======================================================== */
.businesses-section {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0;
  background: radial-gradient(circle at 10% 15%, rgba(243, 106, 33, 0.05) 0%, transparent 45%),
              radial-gradient(circle at 90% 85%, rgba(6, 43, 91, 0.06) 0%, transparent 45%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

/* Header */
.biz-section-header {
  max-width: 820px;
  margin: 0 auto 32px;
  text-align: center;
}

.biz-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(243, 106, 33, 0.09);
  border: 1px solid rgba(243, 106, 33, 0.28);
  color: var(--primary-orange);
  font-family: var(--font-heading);
  font-size: 0.813rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 7px 18px;
  border-radius: 9999px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(243, 106, 33, 0.1);
}

.biz-pulsing-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-orange);
  display: inline-block;
  animation: bizPulse 2s infinite ease-in-out;
}

.biz-main-title {
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  font-weight: 800;
  color: var(--primary-navy);
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 14px;
}

.biz-heading-accent {
  background: linear-gradient(135deg, #f36a21 0%, #ea580c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.biz-title-bar {
  width: 64px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-orange), #ff9955);
  margin: 12px auto 16px;
  border-radius: 4px;
}

.biz-lead-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0 auto;
}

/* Filter Navigation Bar */
.biz-filter-wrapper {
  max-width: 820px;
  margin: 28px auto 40px;
}

.biz-filter-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  background: #ffffff;
  padding: 8px 12px;
  border-radius: 9999px;
  box-shadow: 0 8px 25px rgba(6, 43, 91, 0.07);
  border: 1px solid rgba(6, 43, 91, 0.08);
}

.biz-filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 9999px;
  border: 1px solid transparent;
  background: transparent;
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 700;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  outline: none;
}

.biz-filter-btn:hover {
  color: var(--primary-navy);
  background: #f8fafc;
}

.biz-filter-btn.active {
  background: linear-gradient(135deg, #031836 0%, #062b5b 100%);
  color: #ffffff !important;
  box-shadow: 0 6px 18px rgba(6, 43, 91, 0.25);
}

.biz-filter-btn.active i {
  color: var(--primary-orange);
}

/* Bento 2x2 Showcase Grid */
.biz-bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  position: relative;
}

.biz-bento-card {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(6, 43, 91, 0.08);
  box-shadow: 0 12px 35px rgba(6, 43, 91, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.biz-bento-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 60px rgba(6, 43, 91, 0.15);
  border-color: rgba(243, 106, 33, 0.35);
}

/* Card Visual Header */
.biz-card-visual {
  position: relative;
  height: clamp(230px, 24vw, 280px);
  overflow: hidden;
  background: #031836;
}

.biz-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.biz-bento-card:hover .biz-card-img {
  transform: scale(1.08);
}

.biz-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(3, 24, 54, 0.5) 0%, rgba(3, 24, 54, 0.05) 40%, rgba(3, 24, 54, 0.88) 100%);
  pointer-events: none;
}

/* Top Badge on Visual */
.biz-card-badge-top {
  position: absolute;
  top: 18px;
  left: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(3, 24, 54, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #ffffff;
  padding: 7px 16px;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  z-index: 2;
}

.biz-card-badge-top i {
  color: var(--primary-orange);
}

/* Bottom Strip on Visual */
.biz-card-strip-bottom {
  position: absolute;
  bottom: 16px;
  left: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

.biz-card-brands-line {
  color: #cbd5e1;
  font-size: 0.813rem;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.biz-card-spec-tag {
  background: rgba(243, 106, 33, 0.95);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.719rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(243, 106, 33, 0.4);
}

/* Card Body */
.biz-card-body {
  padding: 28px 28px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.biz-card-title {
  font-family: var(--font-heading);
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--primary-navy);
  margin-bottom: 10px;
  line-height: 1.25;
}

.biz-card-desc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 20px;
}

/* 2x2 Specs Matrix */
.biz-specs-matrix {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 14px;
  margin-bottom: 20px;
}

.biz-spec-pill {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: #f8fafc;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #eef2f6;
  font-size: 0.813rem;
  color: #334155;
}

.biz-spec-pill i {
  color: #10b981;
  font-size: 0.875rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.biz-spec-pill strong {
  display: block;
  color: var(--primary-navy);
  font-size: 0.813rem;
  font-weight: 700;
  line-height: 1.3;
}

.biz-spec-pill span {
  display: block;
  font-size: 0.719rem;
  color: #64748b;
  line-height: 1.25;
}

/* Brand Pills Strip */
.biz-brands-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 22px;
  padding-top: 14px;
  border-top: 1px dashed #e2e8f0;
}

.biz-brand-label-text {
  font-size: 0.719rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-navy);
  letter-spacing: 0.5px;
  margin-right: 4px;
}

.biz-brand-chip {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-navy);
  background: #f1f5f9;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.biz-brand-chip:hover {
  background: var(--primary-navy);
  color: #ffffff;
  border-color: var(--primary-navy);
}

/* Card Action Footer */
.biz-card-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.biz-btn-main {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #f36a21 0%, #e05510 100%);
  color: #ffffff !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.906rem;
  padding: 12px 20px;
  border-radius: 9999px;
  text-decoration: none !important;
  box-shadow: 0 4px 14px rgba(243, 106, 33, 0.35);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  white-space: nowrap;
}

.biz-btn-main:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(243, 106, 33, 0.48);
  color: #ffffff !important;
}

.biz-btn-main i {
  transition: transform 0.3s ease;
}

.biz-btn-main:hover i {
  transform: translateX(4px);
}

.biz-btn-wa-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #25d366;
  color: #ffffff !important;
  font-size: 1.25rem;
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
  transition: all 0.3s ease;
  text-decoration: none !important;
  flex-shrink: 0;
}

.biz-btn-wa-icon:hover {
  background: #1eb857;
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.45);
  color: #ffffff !important;
}

/* Filter Hide/Show Transitions */
.biz-bento-card.filtered-out {
  display: none !important;
}

.biz-bento-card.filtered-in {
  animation: bentoFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes bentoFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes bizPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.7);
  }
  50% {
    transform: scale(1.1);
    opacity: 0.85;
    box-shadow: 0 0 0 7px rgba(243, 106, 33, 0);
  }
}

/* Responsive Media Queries */
@media (max-width: 991px) {
  .biz-bento-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .biz-card-body {
    padding: 24px 20px;
  }
}

@media (max-width: 575px) {
  .biz-filter-nav {
    border-radius: 16px;
    padding: 6px;
  }
  .biz-filter-btn {
    padding: 8px 14px;
    font-size: 0.813rem;
  }
  .biz-specs-matrix {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .biz-card-footer {
    flex-direction: column;
    width: 100%;
  }
  .biz-btn-main {
    width: 100%;
    justify-content: center;
  }
  .biz-btn-wa-icon {
    width: 100%;
    border-radius: 9999px;
    height: 40px;
    font-size: 1rem;
    gap: 8px;
  }
  .biz-btn-wa-icon::after {
    content: 'WhatsApp Quote';
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 700;
  }
}

`;

const updatedCss = css.substring(0, cssStart) + newBentoCss + css.substring(cssEnd);
fs.writeFileSync(cssPath, updatedCss, 'utf8');
console.log('✅ css/style.css updated with Bento Showcase CSS!');


// 2. UPDATE HTML IN index.html
const htmlPath = 'index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const htmlStartMarker = '<!-- ==============================================\n         ANBU TRADERS — OUR BUSINESSES SECTION (2026 ELITE REDESIGN)\n         ============================================== -->';
const htmlEndMarker = '<!-- Businesses Section End -->';

let htmlStart = html.indexOf(htmlStartMarker);
if (htmlStart === -1) htmlStart = html.indexOf(htmlStartMarker.replace(/\n/g, '\r\n'));

let htmlEnd = html.indexOf(htmlEndMarker);
if (htmlEnd === -1) htmlEnd = html.indexOf(htmlEndMarker.replace(/\n/g, '\r\n'));

console.log('HTML bounds:', htmlStart, htmlEnd);
if (htmlStart === -1 || htmlEnd === -1) {
  console.error('HTML markers not found!');
  process.exit(1);
}

const newBentoHtml = `<!-- ==============================================
         ANBU TRADERS — OUR BUSINESSES SECTION (2026 LUXURY BENTO SHOWCASE)
         ============================================== -->
    <section class="businesses-section" id="businesses">
        <div class="container">
            <!-- Section Header -->
            <div class="biz-section-header text-center wow fadeInUp" data-wow-delay="0.1s">
                <div class="biz-eyebrow-pill">
                    <span class="biz-pulsing-dot"></span>
                    <span>OUR SPECIALIZED VERTICALS</span>
                </div>
                <h2 class="biz-main-title">
                    Architectural Foundations to <span class="biz-heading-accent">Vibrant Finishes</span>
                </h2>
                <div class="biz-title-bar"></div>
                <p class="biz-lead-text">
                    Four dedicated wholesale &amp; retail divisions supplying certified primary materials, computer-printed weighbridge verification, and prompt site logistics across Puducherry &amp; Tamil Nadu.
                </p>
            </div>

            <!-- Filter Navigation Bar -->
            <div class="biz-filter-wrapper wow fadeInUp" data-wow-delay="0.15s">
                <div class="biz-filter-nav" role="tablist">
                    <button type="button" class="biz-filter-btn active" data-filter="all">
                        <i class="fa fa-th-large"></i> All Businesses (4)
                    </button>
                    <button type="button" class="biz-filter-btn" data-filter="cement">
                        <i class="fa fa-cube"></i> Cements
                    </button>
                    <button type="button" class="biz-filter-btn" data-filter="steel">
                        <i class="fa fa-layer-group"></i> TMT Steel
                    </button>
                    <button type="button" class="biz-filter-btn" data-filter="sheets">
                        <i class="fa fa-warehouse"></i> Sheets &amp; Pipes
                    </button>
                    <button type="button" class="biz-filter-btn" data-filter="paints">
                        <i class="fa fa-paint-roller"></i> Paints &amp; Mixing
                    </button>
                </div>
            </div>

            <!-- 2x2 Bento Showcase Grid -->
            <div class="biz-bento-grid" id="bizBentoGrid">
                
                <!-- BENTO CARD 1: CEMENTS -->
                <div class="biz-bento-card wow fadeInUp" data-category="cement" data-wow-delay="0.1s">
                    <div class="biz-card-visual">
                        <img src="cement/anbucement/img/cement_hero_cinematic.jpg" alt="Certified Construction Cements Supply" class="biz-card-img" loading="lazy">
                        <div class="biz-card-overlay"></div>
                        <div class="biz-card-badge-top">
                            <i class="fa fa-award"></i> 01 &bull; CEMENT DIVISION
                        </div>
                        <div class="biz-card-strip-bottom">
                            <span class="biz-card-brands-line">UltraTech &bull; Dalmia &bull; Ramco</span>
                            <span class="biz-card-spec-tag">OPC 53 &amp; PPC</span>
                        </div>
                    </div>
                    <div class="biz-card-body">
                        <h3 class="biz-card-title">Certified Construction Cements</h3>
                        <p class="biz-card-desc">
                            Direct authorized wholesale distributor for Grade-53 high-strength cements and weatherproof composites for rapid setting and coastal durability.
                        </p>
                        <div class="biz-specs-matrix">
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Top National Mills</strong>
                                    <span>UltraTech, Dalmia, Ramco, JSW</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Available Grades</strong>
                                    <span>OPC 53, OPC 43 &amp; PPC</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>100-Ton Weighbridge</strong>
                                    <span>Automated tare &amp; gross slips</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Fleet Delivery</strong>
                                    <span>Direct site delivery across TN</span>
                                </div>
                            </div>
                        </div>
                        <div class="biz-brands-row">
                            <span class="biz-brand-label-text">Brands:</span>
                            <span class="biz-brand-chip">UltraTech</span>
                            <span class="biz-brand-chip">Dalmia Bharat</span>
                            <span class="biz-brand-chip">Ramco</span>
                            <span class="biz-brand-chip">JSW Concreel</span>
                            <span class="biz-brand-chip">Priya</span>
                        </div>
                        <div class="biz-card-footer">
                            <a href="cement/anbucement/index-demo-3.html" class="biz-btn-main">
                                <span>Explore Cement Portal</span>
                                <i class="fa fa-arrow-right"></i>
                            </a>
                            <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Cement." target="_blank" rel="noopener" class="biz-btn-wa-icon" title="Chat on WhatsApp" aria-label="WhatsApp Quote">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- BENTO CARD 2: TMT STEEL -->
                <div class="biz-bento-card wow fadeInUp" data-category="steel" data-wow-delay="0.15s">
                    <div class="biz-card-visual">
                        <img src="img/hero/steels-cement-hero.jpg" alt="Primary Fe 550D TMT Steel Rebar Depot" class="biz-card-img" loading="lazy">
                        <div class="biz-card-overlay"></div>
                        <div class="biz-card-badge-top">
                            <i class="fa fa-shield-alt"></i> 02 &bull; TMT STEEL DIVISION
                        </div>
                        <div class="biz-card-strip-bottom">
                            <span class="biz-card-brands-line">Tata Tiscon &bull; JSW Neosteel</span>
                            <span class="biz-card-spec-tag">Fe 550D Billet</span>
                        </div>
                    </div>
                    <div class="biz-card-body">
                        <h3 class="biz-card-title">Primary High-Tensile Fe-550D TMT Rebars</h3>
                        <p class="biz-card-desc">
                            Direct mill distributor of high-ductility earthquake-resistant billet rebars delivered in straight 12-meter unbent factory bundles with mill test reports.
                        </p>
                        <div class="biz-specs-matrix">
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Primary Steelmakers</strong>
                                    <span>Tata Tiscon, JSW Neosteel, Agni</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Full Diameter Range</strong>
                                    <span>8mm, 10mm, 12mm, 16mm, 20mm, 25mm</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Certified Quality</strong>
                                    <span>BIS 1786 Fe 550D &amp; Super Ductile</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Zero Shortage Guarantee</strong>
                                    <span>100-Ton digital scale slips</span>
                                </div>
                            </div>
                        </div>
                        <div class="biz-brands-row">
                            <span class="biz-brand-label-text">Brands:</span>
                            <span class="biz-brand-chip">Tata Tiscon</span>
                            <span class="biz-brand-chip">JSW Neosteel</span>
                            <span class="biz-brand-chip">Agni TMT</span>
                            <span class="biz-brand-chip">Suryadev</span>
                            <span class="biz-brand-chip">ARS 550D</span>
                        </div>
                        <div class="biz-card-footer">
                            <a href="cement/anbucement/index-demo-3.html#products" class="biz-btn-main">
                                <span>Explore Steel Portal</span>
                                <i class="fa fa-arrow-right"></i>
                            </a>
                            <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20TMT%20Rods." target="_blank" rel="noopener" class="biz-btn-wa-icon" title="Chat on WhatsApp" aria-label="WhatsApp Quote">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- BENTO CARD 3: SHEETS & PIPES -->
                <div class="biz-bento-card wow fadeInUp" data-category="sheets" data-wow-delay="0.2s">
                    <div class="biz-card-visual">
                        <img src="a-steel/assets/img/service/roofsheethome.jpg" alt="Industrial Colour Coated Roofing Sheets & Hollow Pipes" class="biz-card-img" loading="lazy">
                        <div class="biz-card-overlay"></div>
                        <div class="biz-card-badge-top">
                            <i class="fa fa-warehouse"></i> 03 &bull; ROOFING &amp; PIPES
                        </div>
                        <div class="biz-card-strip-bottom">
                            <span class="biz-card-brands-line">JSW Colouron+ &bull; Apollo Pipes</span>
                            <span class="biz-card-spec-tag">Galvalume &amp; GI</span>
                        </div>
                    </div>
                    <div class="biz-card-body">
                        <h3 class="biz-card-title">Colour-Coated Sheets &amp; Hollow Pipes</h3>
                        <p class="biz-card-desc">
                            Authorized dealer for corrosion-resistant prepainted Galvalume roofing sheets, heavy-gauge MS square &amp; rectangular tubes, and GI pipes.
                        </p>
                        <div class="biz-specs-matrix">
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Roofing Profiles</strong>
                                    <span>JSW Colouron+, Tata Shaktee</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Hollow Sections</strong>
                                    <span>MS Square, Rectangular, GI Pipes</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Custom Lengths</strong>
                                    <span>0.30mm to 3.0mm site cutting</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Roofing Trims</strong>
                                    <span>Self-drilling screws, ridge caps</span>
                                </div>
                            </div>
                        </div>
                        <div class="biz-brands-row">
                            <span class="biz-brand-label-text">Brands:</span>
                            <span class="biz-brand-chip">JSW Colouron+</span>
                            <span class="biz-brand-chip">Tata Shaktee</span>
                            <span class="biz-brand-chip">JSW Pragati</span>
                            <span class="biz-brand-chip">Apollo Pipes</span>
                            <span class="biz-brand-chip">Everest</span>
                        </div>
                        <div class="biz-card-footer">
                            <a href="a-steel/index.html" class="biz-btn-main">
                                <span>Explore Sheets &amp; Pipes</span>
                                <i class="fa fa-arrow-right"></i>
                            </a>
                            <a href="https://wa.me/919655551468?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Roofing%20Sheets%20and%20Pipes." target="_blank" rel="noopener" class="biz-btn-wa-icon" title="Chat on WhatsApp" aria-label="WhatsApp Quote">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- BENTO CARD 4: PAINTS -->
                <div class="biz-bento-card wow fadeInUp" data-category="paints" data-wow-delay="0.25s">
                    <div class="biz-card-visual">
                        <img src="anbu-paint/img/brand-cluster-asian.jpg" alt="Asian Paints Royale & Berger Paints Showroom Inventory" class="biz-card-img" loading="lazy">
                        <div class="biz-card-overlay"></div>
                        <div class="biz-card-badge-top">
                            <i class="fa fa-paint-roller"></i> 04 &bull; PAINTS &amp; MIXING
                        </div>
                        <div class="biz-card-strip-bottom">
                            <span class="biz-card-brands-line">Asian Paints &bull; Berger &bull; JSW</span>
                            <span class="biz-card-spec-tag">2,000+ Shades</span>
                        </div>
                    </div>
                    <div class="biz-card-body">
                        <h3 class="biz-card-title">Architectural Paints &amp; Automated Mixing</h3>
                        <p class="biz-card-desc">
                            Authorized experience center featuring automated spectrophotometer computer tinting for Asian Paints Royale, Berger Silk, JSW, and waterproofing.
                        </p>
                        <div class="biz-specs-matrix">
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Authorized Showroom</strong>
                                    <span>Asian Paints, Berger, JSW Paints</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>5-Min Mixing</strong>
                                    <span>2,000+ custom automated shades</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Waterproofing</strong>
                                    <span>SmartCare elastomeric sealants</span>
                                </div>
                            </div>
                            <div class="biz-spec-pill">
                                <i class="fa fa-check-circle"></i>
                                <div>
                                    <strong>Finishes &amp; Putty</strong>
                                    <span>Birla White Putty &amp; Italian Stuccos</span>
                                </div>
                            </div>
                        </div>
                        <div class="biz-brands-row">
                            <span class="biz-brand-label-text">Brands:</span>
                            <span class="biz-brand-chip">Asian Paints</span>
                            <span class="biz-brand-chip">Berger Paints</span>
                            <span class="biz-brand-chip">JSW Paints</span>
                            <span class="biz-brand-chip">Birla Wall Putty</span>
                        </div>
                        <div class="biz-card-footer">
                            <a href="anbu-paint/index.html" class="biz-btn-main">
                                <span>Explore Paints Portal</span>
                                <i class="fa fa-arrow-right"></i>
                            </a>
                            <a href="https://wa.me/919626325232?text=Hello%20Anbu%20Paints%2C%20I%20want%20a%20price%20quote%20for%20Paints%20and%20Color%20Mixing." target="_blank" rel="noopener" class="biz-btn-wa-icon" title="Chat on WhatsApp" aria-label="WhatsApp Quote">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Businesses Section End -->`;

html = html.substring(0, htmlStart) + newBentoHtml + html.substring(htmlEnd + htmlEndMarker.length);

// 3. UPDATE JAVASCRIPT LOGIC AT BOTTOM OF index.html
const oldScriptMarker = '// ── 2026 Interactive Businesses Tab Switcher';
const scriptStart = html.indexOf(oldScriptMarker);
if (scriptStart !== -1) {
  const scriptEnd = html.indexOf('</script>', scriptStart);
  const newScript = `// ── 2026 Interactive Businesses Bento Filter & 3D Tilt Animations ──
document.addEventListener('DOMContentLoaded', function () {
    // 1. Category Filter Logic
    const filterBtns = document.querySelectorAll('.biz-filter-btn');
    const bentoCards = document.querySelectorAll('.biz-bento-card');

    if (filterBtns.length > 0 && bentoCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filterVal = this.getAttribute('data-filter');

                bentoCards.forEach(card => {
                    const cardCat = card.getAttribute('data-category') || '';
                    if (filterVal === 'all' || cardCat === filterVal) {
                        card.classList.remove('filtered-out');
                        card.classList.add('filtered-in');
                    } else {
                        card.classList.add('filtered-out');
                        card.classList.remove('filtered-in');
                    }
                });
            });
        });
    }

    // 2. Interactive 3D Card Tilt on Mouse Move
    bentoCards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = \`perspective(1000px) rotateX(\${rotateX.toFixed(2)}deg) rotateY(\${rotateY.toFixed(2)}deg) translateY(-6px)\`;
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
});
`;
  html = html.substring(0, scriptStart) + newScript + html.substring(scriptEnd);
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('✅ index.html updated with Bento Showcase HTML & Script!');

