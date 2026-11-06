const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// 1. Update Navbar logo to ANUBU TRADERS new logo
const oldNavBrand = /<a href="index\.html" class="navbar-brand ps-5 me-0 d-flex align-items-center">[\s\S]*?<img id="anbu-navbar-logo"[^>]*>[\s\S]*?<\/a>/i;
const newNavBrand = `<a href="index.html" class="navbar-brand ps-5 me-0 d-flex align-items-center">
        <img id="anbu-navbar-logo" src="img/ANUBU TRADERS new logo.png" alt="Anbu Traders Logo" style="height: 60px; width: auto; object-fit: contain;">
    </a>`;

if (oldNavBrand.test(content)) {
  content = content.replace(oldNavBrand, newNavBrand);
  console.log('Updated navbar brand logo.');
} else {
  console.log('Could not match navbar brand logo.');
}

// 2. Replace the broken hero section with the 2026 Reference Hero
const oldHeroRegex = /<!-- Premium Hero:[\s\S]*?<\/section>/i;

const newHeroHtml = `<!-- ==============================================
         2026 HERO REFERENCE DESIGN (SPLIT INDUSTRIAL ARCHITECTURE)
         Matches Reference Mockup (1e13236a)
         ============================================== -->
    <section id="hero" class="anbu-reference-hero-section" aria-label="Anbu Traders Building Materials Showcase">
        <div class="hero-subtle-pattern"></div>
        <div class="hero-fluid-wrapper">
            <div class="hero-split-grid">
                
                <!-- LEFT CONTENT COLUMN -->
                <div class="hero-content-col">
                    <div class="hero-content-inner">
                        <!-- Eyebrow Pill -->
                        <div class="hero-ref-eyebrow">
                            <span class="ref-dot"></span>
                            <span>Puducherry &amp; Tamil Nadu's Premier Industrial Materials Partner</span>
                        </div>

                        <!-- Bold Display Headline -->
                        <h1 class="hero-ref-h1">
                            <span class="ref-h1-navy">Building Materials.</span><br>
                            <span class="ref-h1-orange">Delivered with Confidence.</span>
                        </h1>

                        <!-- Lead Paragraph -->
                        <p class="hero-ref-lead">
                            Authorized primary mill stockist of Tata Tiscon, JSW Steel, UltraTech, Dalmia, APL Apollo and Asian Paints. Verified with 100-ton digital electronic weighbridge, certified mill test reports, and rapid site delivery.
                        </p>

                        <!-- Action CTAs -->
                        <div class="hero-ref-ctas">
                            <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20would%20like%20to%20get%20an%20instant%20WhatsApp%20quote." class="btn-ref-primary" target="_blank" rel="noopener">
                                <i class="fab fa-whatsapp me-2" aria-hidden="true"></i> Get Instant WhatsApp Quote <i class="fa fa-arrow-right ms-2 ref-cta-arrow" aria-hidden="true"></i>
                            </a>
                            <a href="#products" class="btn-ref-secondary">
                                <i class="fa fa-cubes me-2" aria-hidden="true"></i> Explore Products <i class="fa fa-arrow-right ms-2 ref-cta-arrow" aria-hidden="true"></i>
                            </a>
                        </div>

                        <!-- Credentials Statistics Strip -->
                        <div class="hero-ref-stats-strip" aria-label="Anbu Traders Key Statistics">
                            <div class="ref-stat-box">
                                <span class="ref-stat-num">11+</span>
                                <span class="ref-stat-lbl">Years Established</span>
                            </div>
                            <span class="ref-stat-divider"></span>
                            <div class="ref-stat-box">
                                <span class="ref-stat-num">100-Ton</span>
                                <span class="ref-stat-lbl">Electronic Weighbridge</span>
                            </div>
                            <span class="ref-stat-divider"></span>
                            <div class="ref-stat-box">
                                <span class="ref-stat-num">10,000+</span>
                                <span class="ref-stat-lbl">Deliveries Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT VISUAL COLUMN (ANGLED INDUSTRIAL MATERIALS SHOWCASE) -->
                <div class="hero-visual-col">
                    <!-- Diagonal Orange Accent Slicing into Hero -->
                    <div class="hero-angled-accent"></div>

                    <!-- Visual Media Container with Polygon Clip Path -->
                    <div class="hero-visual-container">
                        <!-- Layer 1: Active Industrial Yard Composite -->
                        <div class="hero-bg-layer is-active" id="hero-bg-all" style="background-image: url('img/hero/hero-yard-industrial.jpg');"></div>
                        <!-- Layer 2: Steel & TMT Rods -->
                        <div class="hero-bg-layer" id="hero-bg-steel" style="background-image: url('img/hero/steels-cement-hero.jpg');"></div>
                        <!-- Layer 3: Cement & Concrete -->
                        <div class="hero-bg-layer" id="hero-bg-cement" style="background-image: url('img/opt/cement-1200.jpg');"></div>
                        <!-- Layer 4: Sheets & Structural Pipes -->
                        <div class="hero-bg-layer" id="hero-bg-sheets" style="background-image: url('img/hero/sheets-pipes-hero.jpg');"></div>

                        <!-- Scrim Overlay for Contrast -->
                        <div class="hero-visual-scrim"></div>

                        <!-- Floating Docked Category Selector Pills -->
                        <div class="hero-docked-pills-bar" role="tablist" aria-label="Core Industrial Divisions">
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
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- "OUR TRUSTED BRANDS" PROMINENT DOCKED CARD (Direct from Reference Mockup) -->
        <div class="trusted-brands-strip-section">
            <div class="container">
                <div class="trusted-brands-card">
                    <div class="trusted-brands-title-block">
                        <span class="trusted-brands-title">Our Trusted Brands</span>
                    </div>
                    <div class="trusted-brands-vdivider"></div>
                    <div class="trusted-brands-logos-grid" aria-label="Authorized Mill Partner Logos">
                        <a href="#products" class="trusted-brand-cell" title="Tata Tiscon primary TMT distributor">
                            <img src="img/tata-tiscon-logo.png" alt="Tata Tiscon" height="34" loading="lazy">
                        </a>
                        <a href="#products" class="trusted-brand-cell" title="JSW Steel authorized dealer">
                            <img src="img/jsw-steel-logo.jpg" alt="JSW Steel" height="34" loading="lazy">
                        </a>
                        <a href="cement/anbucement/index-demo-3.html" class="trusted-brand-cell" title="UltraTech Cement direct stockist">
                            <img src="img/brands/2.png" alt="UltraTech Cement" height="34" loading="lazy">
                        </a>
                        <a href="cement/anbucement/index-demo-3.html" class="trusted-brand-cell" title="Dalmia Cement authorized stockist">
                            <img src="img/dalmiabrand.jpg" alt="Dalmia Cement" height="34" loading="lazy">
                        </a>
                        <a href="a-steel/index.html" class="trusted-brand-cell" title="APL Apollo Steel Pipes & Tubes">
                            <img src="img/apl-apollo-logo.jpg" alt="APL Apollo Steel Pipes" height="34" loading="lazy">
                        </a>
                        <a href="anbu-paint/index.html" class="trusted-brand-cell" title="Asian Paints official dealer">
                            <img src="img/brands/5.png" alt="Asian Paints" height="34" loading="lazy">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

if (oldHeroRegex.test(content)) {
  content = content.replace(oldHeroRegex, newHeroHtml);
  console.log('Replaced broken hero with 2026 Reference Hero.');
} else {
  console.log('Could not match old hero regex!');
}

fs.writeFileSync('index.html', content, 'utf8');
console.log('index.html updated successfully.');

