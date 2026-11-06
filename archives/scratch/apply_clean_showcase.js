const fs = require('fs');

console.log('=== APPLYING CLEAN 4-DIVISION SHOWCASE ===');

const newHtml = `    <!-- ==============================================
         ANBU TRADERS — OUR BUSINESSES SECTION (CLEAN 4-VERTICAL SHOWCASE)
         ============================================== -->
    <section class="businesses-section" id="businesses">
        <div class="container">
            <!-- Section Header -->
            <div class="biz-showcase-header text-center wow fadeInUp" data-wow-delay="0.1s">
                <div class="biz-eyebrow-pill">
                    <span class="biz-pulsing-dot"></span>
                    <span>OUR 4 SPECIALIZED DIVISIONS</span>
                </div>
                <h2 class="biz-main-title">
                    Core Wholesale &amp; <span class="biz-heading-accent">Retail Businesses</span>
                </h2>
                <div class="biz-title-bar"></div>
                <p class="biz-lead-text">
                    From foundation steel and certified cement to industrial roofing and computerized paint mixing — certified primary materials delivered direct to site.
                </p>
            </div>

            <!-- 4-Column Clean Showcase Grid -->
            <div class="biz-cards-row">
                
                <!-- CARD 1: CEMENTS -->
                <div class="biz-card-col wow fadeInUp" data-wow-delay="0.1s">
                    <div class="biz-clean-card card-cement">
                        <div class="biz-clean-visual">
                            <img src="cement/anbucement/img/cement_hero_cinematic.jpg" alt="Certified Construction Cements" class="biz-clean-img" loading="lazy">
                            <div class="biz-clean-overlay"></div>
                            <span class="biz-clean-badge"><i class="fa fa-cube"></i> Cements</span>
                            <span class="biz-clean-tag">OPC 53 &bull; PPC</span>
                        </div>
                        <div class="biz-clean-body">
                            <h3 class="biz-clean-title">Construction Cements</h3>
                            <div class="biz-clean-brands">UltraTech &bull; Dalmia &bull; Ramco &bull; JSW</div>
                            <p class="biz-clean-desc">
                                Grade-53 high-strength cements and weatherproof composites with 100-Ton digital weighbridge slips.
                            </p>
                            <div class="biz-clean-footer">
                                <a href="cement/anbucement/index-demo-3.html" class="biz-clean-cta">
                                    <span>Explore Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Cement." target="_blank" rel="noopener" class="biz-clean-wa" title="WhatsApp Quote" aria-label="WhatsApp Quote">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD 2: TMT STEEL -->
                <div class="biz-card-col wow fadeInUp" data-wow-delay="0.15s">
                    <div class="biz-clean-card card-steel">
                        <div class="biz-clean-visual">
                            <img src="img/hero/steels-cement-hero.jpg" alt="Primary TMT Steel Rebars" class="biz-clean-img" loading="lazy">
                            <div class="biz-clean-overlay"></div>
                            <span class="biz-clean-badge"><i class="fa fa-layer-group"></i> TMT Steel</span>
                            <span class="biz-clean-tag">Fe 550D Billet</span>
                        </div>
                        <div class="biz-clean-body">
                            <h3 class="biz-clean-title">Primary TMT Rebars</h3>
                            <div class="biz-clean-brands">Tata Tiscon &bull; JSW Neosteel &bull; Agni</div>
                            <p class="biz-clean-desc">
                                High-tensile Fe 550D earthquake-resistant billet rebars in straight 12m bundles with mill test certificates.
                            </p>
                            <div class="biz-clean-footer">
                                <a href="cement/anbucement/index-demo-3.html#products" class="biz-clean-cta">
                                    <span>Explore Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20TMT%20Rods." target="_blank" rel="noopener" class="biz-clean-wa" title="WhatsApp Quote" aria-label="WhatsApp Quote">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD 3: SHEETS & PIPES -->
                <div class="biz-card-col wow fadeInUp" data-wow-delay="0.2s">
                    <div class="biz-clean-card card-sheets">
                        <div class="biz-clean-visual">
                            <img src="img/hero/sheets-pipes-hero.jpg" alt="Colour-Coated Roofing Sheets & Hollow Pipes" class="biz-clean-img" loading="lazy">
                            <div class="biz-clean-overlay"></div>
                            <span class="biz-clean-badge"><i class="fa fa-warehouse"></i> Sheets &amp; Pipes</span>
                            <span class="biz-clean-tag">Galvalume &bull; GI</span>
                        </div>
                        <div class="biz-clean-body">
                            <h3 class="biz-clean-title">Roofing &amp; Pipes</h3>
                            <div class="biz-clean-brands">JSW Colouron+ &bull; Tata &bull; Apollo Pipes</div>
                            <p class="biz-clean-desc">
                                Corrosion-resistant Galvalume roofing sheets, heavy MS square tubes, and GI pipes with site cutting.
                            </p>
                            <div class="biz-clean-footer">
                                <a href="a-steel/index.html" class="biz-clean-cta">
                                    <span>Explore Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919655551468?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Roofing%20Sheets%20and%20Pipes." target="_blank" rel="noopener" class="biz-clean-wa" title="WhatsApp Quote" aria-label="WhatsApp Quote">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD 4: PAINTS & MIXING -->
                <div class="biz-card-col wow fadeInUp" data-wow-delay="0.25s">
                    <div class="biz-clean-card card-paints">
                        <div class="biz-clean-visual">
                            <img src="anbu-paint/img/brand-cluster-asian.jpg" alt="Paints & Computerized Shade Mixing" class="biz-clean-img" loading="lazy">
                            <div class="biz-clean-overlay"></div>
                            <span class="biz-clean-badge"><i class="fa fa-paint-roller"></i> Paints &amp; Mixing</span>
                            <span class="biz-clean-tag">2,000+ Shades</span>
                        </div>
                        <div class="biz-clean-body">
                            <h3 class="biz-clean-title">Paints &amp; Colour Lab</h3>
                            <div class="biz-clean-brands">Asian Paints &bull; Berger &bull; JSW Paints</div>
                            <p class="biz-clean-desc">
                                Automated spectrophotometer shade dispenser for luxury emulsions, exterior guards, and waterproofing.
                            </p>
                            <div class="biz-clean-footer">
                                <a href="anbu-paint/index.html" class="biz-clean-cta">
                                    <span>Explore Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325232?text=Hello%20Anbu%20Paints%2C%20I%20want%20a%20price%20quote%20for%20Paints%20and%20Color%20Mixing." target="_blank" rel="noopener" class="biz-clean-wa" title="WhatsApp Quote" aria-label="WhatsApp Quote">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Businesses Section End -->`;

const newCss = `/* ==============================================
   ANBU TRADERS — OUR BUSINESSES SECTION (CLEAN 4-VERTICAL SHOWCASE)
   ============================================== */
.businesses-section {
  padding: clamp(3rem, 5vw, 4.5rem) 0;
  background: radial-gradient(circle at 10% 15%, rgba(243, 106, 33, 0.04) 0%, transparent 40%),
              radial-gradient(circle at 90% 85%, rgba(6, 43, 91, 0.05) 0%, transparent 40%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
}

.biz-showcase-header {
  max-width: 760px;
  margin: 0 auto 36px;
  text-align: center;
}

.biz-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(243, 106, 33, 0.08);
  border: 1px solid rgba(243, 106, 33, 0.25);
  color: var(--primary-orange);
  font-family: var(--font-heading);
  font-size: 0.781rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 6px 16px;
  border-radius: 9999px;
  margin-bottom: 14px;
}

.biz-pulsing-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--primary-orange);
  display: inline-block;
  animation: bizPulse 2s infinite ease-in-out;
}

.biz-main-title {
  font-family: var(--font-heading);
  font-size: clamp(1.85rem, 3.2vw, 2.5rem);
  font-weight: 800;
  color: var(--primary-navy);
  letter-spacing: -0.02em;
  line-height: 1.22;
  margin-bottom: 10px;
}

.biz-heading-accent {
  background: linear-gradient(135deg, #f36a21 0%, #ea580c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.biz-title-bar {
  width: 52px;
  height: 3.5px;
  background: linear-gradient(90deg, var(--primary-orange), #ff9955);
  margin: 10px auto 14px;
  border-radius: 4px;
}

.biz-lead-text {
  font-size: 0.98rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0 auto;
}

/* 4-Column Card Grid */
.biz-cards-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  position: relative;
}

.biz-card-col {
  display: flex;
}

.biz-clean-card {
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(6, 43, 91, 0.08);
  box-shadow: 0 8px 24px rgba(6, 43, 91, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              border-color 0.35s ease;
  position: relative;
}

.biz-clean-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 42px rgba(6, 43, 91, 0.12);
}

.biz-clean-card.card-cement:hover {
  border-color: rgba(2, 132, 199, 0.5);
  box-shadow: 0 20px 42px rgba(2, 132, 199, 0.16);
}

.biz-clean-card.card-steel:hover {
  border-color: rgba(16, 185, 129, 0.5);
  box-shadow: 0 20px 42px rgba(16, 185, 129, 0.16);
}

.biz-clean-card.card-sheets:hover {
  border-color: rgba(217, 119, 6, 0.5);
  box-shadow: 0 20px 42px rgba(217, 119, 6, 0.16);
}

.biz-clean-card.card-paints:hover {
  border-color: rgba(243, 106, 33, 0.5);
  box-shadow: 0 20px 42px rgba(243, 106, 33, 0.16);
}

/* Card Visual Header */
.biz-clean-visual {
  position: relative;
  height: 180px;
  overflow: hidden;
  background: #031836;
}

.biz-clean-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.biz-clean-card:hover .biz-clean-img {
  transform: scale(1.07);
}

.biz-clean-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(3, 24, 54, 0.4) 0%, rgba(3, 24, 54, 0.1) 40%, rgba(3, 24, 54, 0.8) 100%);
  pointer-events: none;
}

/* Badge Top Left */
.biz-clean-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(3, 24, 54, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #ffffff;
  padding: 5px 12px;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-size: 0.719rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 2;
}

.biz-clean-badge i {
  color: var(--primary-orange);
  font-size: 0.75rem;
}

/* Tag Bottom Right */
.biz-clean-tag {
  position: absolute;
  bottom: 10px;
  right: 12px;
  background: rgba(243, 106, 33, 0.95);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.688rem;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(243, 106, 33, 0.35);
  z-index: 2;
}

/* Card Body */
.biz-clean-body {
  padding: 20px 18px 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.biz-clean-title {
  font-family: var(--font-heading);
  font-size: 1.18rem;
  font-weight: 800;
  color: var(--primary-navy);
  margin-bottom: 6px;
  line-height: 1.25;
}

.biz-clean-brands {
  display: inline-block;
  font-size: 0.735rem;
  font-weight: 700;
  color: var(--primary-orange);
  background: rgba(243, 106, 33, 0.08);
  padding: 3px 8px;
  border-radius: 6px;
  margin-bottom: 12px;
  letter-spacing: 0.2px;
  line-height: 1.3;
}

.biz-clean-desc {
  font-size: 0.845rem;
  line-height: 1.55;
  color: #475569;
  margin-bottom: 18px;
  flex-grow: 1;
}

/* Card Footer */
.biz-clean-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 8px;
}

.biz-clean-cta {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: linear-gradient(135deg, #031836 0%, #062b5b 100%);
  color: #ffffff !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.825rem;
  padding: 9px 14px;
  border-radius: 9999px;
  text-decoration: none !important;
  box-shadow: 0 4px 12px rgba(6, 43, 91, 0.15);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.biz-clean-card:hover .biz-clean-cta {
  background: linear-gradient(135deg, #f36a21 0%, #e05510 100%);
  box-shadow: 0 6px 18px rgba(243, 106, 33, 0.35);
}

.biz-clean-cta i {
  font-size: 0.75rem;
  transition: transform 0.25s ease;
}

.biz-clean-cta:hover i {
  transform: translateX(3px);
}

.biz-clean-wa {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #25d366;
  color: #ffffff !important;
  font-size: 1.05rem;
  box-shadow: 0 3px 10px rgba(37, 211, 102, 0.3);
  transition: all 0.25s ease;
  text-decoration: none !important;
  flex-shrink: 0;
}

.biz-clean-wa:hover {
  background: #1eb857;
  transform: scale(1.08);
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
@media (max-width: 1199px) {
  .biz-cards-row {
    gap: 16px;
  }
  .biz-clean-title {
    font-size: 1.1rem;
  }
  .biz-clean-body {
    padding: 16px 14px 16px;
  }
}

@media (max-width: 991px) {
  .biz-cards-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .biz-clean-visual {
    height: 190px;
  }
}

@media (max-width: 575px) {
  .biz-cards-row {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .biz-clean-visual {
    height: 180px;
  }
}`;

let html = fs.readFileSync('index.html', 'utf8');
const bizStart = html.indexOf('<section class="businesses-section"');
const commentBefore = html.lastIndexOf('<!-- ===', bizStart);
const actualStart = commentBefore !== -1 ? commentBefore : bizStart;
const bizEnd = html.indexOf('<!-- Businesses Section End -->') + '<!-- Businesses Section End -->'.length;

html = html.substring(0, actualStart) + newHtml + html.substring(bizEnd);
fs.writeFileSync('index.html', html, 'utf8');
console.log('✅ Updated index.html successfully!');

let css = fs.readFileSync('css/style.css', 'utf8');
const cssStart = css.indexOf('.businesses-section');
const commentCss = css.lastIndexOf('/*', cssStart);
const actualCssStart = commentCss !== -1 ? commentCss : cssStart;
const cssEnd = css.indexOf('/* ── Products Section (2026 Premium Architectural Redesign) ── */');

css = css.substring(0, actualCssStart) + newCss + '\n\n' + css.substring(cssEnd);
fs.writeFileSync('css/style.css', css, 'utf8');
console.log('✅ Updated css/style.css successfully!');
