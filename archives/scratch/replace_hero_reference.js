const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Find the start of Hero and end of the brand-marquee-section
const heroMarkerStart = '<!-- ==============================================\n         2026 HERO SECTION START';
const marqueeMarkerEnd = '</section>\n\n    <!-- Curved Section Transition: Hero to About -->';

const heroStartIdx = html.indexOf(heroMarkerStart);
const marqueeEndIdx = html.indexOf(marqueeMarkerEnd) + '</section>'.length;

if (heroStartIdx === -1 || marqueeEndIdx === -1) {
  console.error('Could not find hero or marquee start/end markers!');
  process.exit(1);
}

const replacement = `<!-- ==============================================
         2026 HERO SECTION START (Reference Split Layout: Bold Left + Angled Visual Right)
         ============================================== -->
    <section id="hero" class="anbu-reference-hero-section" aria-label="Anbu Traders Building Materials Showcase">
        <div class="hero-subtle-pattern" aria-hidden="true"></div>

        <div class="container-fluid hero-fluid-wrapper px-0">
            <div class="hero-split-grid">
                
                <!-- LEFT EDITORIAL COLUMN -->
                <div class="hero-content-col">
                    <div class="hero-content-inner">
                        
                        <!-- Eyebrow Pill -->
                        <div class="hero-ref-eyebrow">
                            <span class="ref-dot"></span>
                            <span>Puducherry &amp; Tamil Nadu's Premier Industrial Materials Partner</span>
                        </div>

                        <!-- Main Bold H1 -->
                        <h1 class="hero-ref-h1">
                            <span class="ref-h1-navy d-block">Building Materials.</span>
                            <span class="ref-h1-orange d-block">Delivered with</span>
                            <span class="ref-h1-navy d-block">Confidence.</span>
                        </h1>

                        <!-- Description Lead Paragraph -->
                        <p class="hero-ref-lead">
                            Authorized primary mill stockist of Tata Tiscon, JSW Steel, UltraTech, Dalmia, APL Apollo and Asian Paints. Verified with 100-ton digital electronic weighbridge, certified mill reports and rapid site delivery.
                        </p>

                        <!-- Dual Action CTA Buttons -->
                        <div class="hero-ref-ctas">
                            <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20would%20like%20to%20get%20today%27s%20live%20material%20rates%20for%20my%20project." 
                               class="btn-ref-primary btn-ripple" 
                               target="_blank" 
                               rel="noopener">
                                <i class="fab fa-whatsapp me-2"></i>
                                <span>Get Instant WhatsApp Quote</span>
                                <i class="fa fa-arrow-right ms-2 ref-cta-arrow"></i>
                            </a>

                            <a href="#products" class="btn-ref-secondary btn-ripple">
                                <i class="fa fa-cube me-2"></i>
                                <span>Explore Products</span>
                                <i class="fa fa-arrow-right ms-2 ref-cta-arrow"></i>
                            </a>
                        </div>

                        <!-- Statistics Strip -->
                        <div class="hero-ref-stats-strip">
                            <div class="ref-stat-box">
                                <span class="ref-stat-num text-orange" data-counter-target="11" data-counter-suffix="+">11+</span>
                                <span class="ref-stat-lbl">YEARS ESTABLISHED</span>
                            </div>
                            <div class="ref-stat-divider"></div>
                            <div class="ref-stat-box">
                                <span class="ref-stat-num text-orange" data-counter-target="100" data-counter-suffix="-Ton">100-Ton</span>
                                <span class="ref-stat-lbl">ELECTRONIC WEIGHBRIDGE</span>
                            </div>
                            <div class="ref-stat-divider"></div>
                            <div class="ref-stat-box">
                                <span class="ref-stat-num text-orange" data-counter-target="10000" data-counter-suffix="+">10,000+</span>
                                <span class="ref-stat-lbl">DELIVERIES COMPLETED</span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- RIGHT ANGLED VISUAL COLUMN -->
                <div class="hero-visual-col">
                    <!-- Angled Orange Accent Divider Ribbon -->
                    <div class="hero-angled-accent" aria-hidden="true"></div>

                    <!-- Visual Container with Clip-Path & Backgrounds -->
                    <div class="hero-visual-container">
                        
                        <!-- Background Layers for Smooth Category Crossfade -->
                        <div class="hero-bg-layer is-active" id="heroBgComposite" style="background-image: url('img/opt/hero-materials-composite.jpg');"></div>
                        <div class="hero-bg-layer" id="heroBgCement" style="background-image: url('img/opt/cement-1200.jpg');"></div>
                        <div class="hero-bg-layer" id="heroBgSheets" style="background-image: url('img/opt/sheets-pipes-1200.jpg');"></div>
                        
                        <!-- Gradient Scrim for Bottom Pill Legibility -->
                        <div class="hero-visual-scrim"></div>

                        <!-- Floating Category Pills Docked at Bottom -->
                        <div class="hero-docked-pills-bar">
                            
                            <!-- Pill 1: Steel & TMT -->
                            <button type="button" class="ref-dock-pill is-active" data-target-bg="heroBgComposite" data-link="cement/anbucement/index-demo-3.html#products">
                                <div class="dock-pill-header">
                                    <span class="dock-pill-icon"><i class="fa fa-layer-group"></i></span>
                                    <span class="dock-pill-text">Steel &amp; TMT</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>

                            <!-- Pill 2: Cement -->
                            <button type="button" class="ref-dock-pill" data-target-bg="heroBgCement" data-link="cement/anbucement/index-demo-3.html">
                                <div class="dock-pill-header">
                                    <span class="dock-pill-icon"><i class="fa fa-cube"></i></span>
                                    <span class="dock-pill-text">Cement</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>

                            <!-- Pill 3: Sheets & Pipes -->
                            <button type="button" class="ref-dock-pill" data-target-bg="heroBgSheets" data-link="a-steel/index.html">
                                <div class="dock-pill-header">
                                    <span class="dock-pill-icon"><i class="fa fa-warehouse"></i></span>
                                    <span class="dock-pill-text">Sheets &amp; Pipes</span>
                                </div>
                                <span class="dock-pill-indicator"></span>
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- ==============================================
         HERO SECTION END
         ============================================== -->

    <!-- ==============================================
         OUR TRUSTED BRANDS BAR (Reference Layout)
         ============================================== -->
    <section class="trusted-brands-strip-section" aria-label="Our Trusted Brands">
        <div class="container">
            <div class="trusted-brands-card wow fadeInUp" data-wow-delay="0.1s">
                
                <!-- Left Label -->
                <div class="trusted-brands-title-block">
                    <span class="trusted-brands-title">Our Trusted Brands</span>
                </div>

                <div class="trusted-brands-vdivider"></div>

                <!-- Logos Row -->
                <div class="trusted-brands-logos-grid">
                    
                    <a href="cement/anbucement/index-demo-3.html" class="trusted-brand-cell" title="Tata Tiscon Primary TMT">
                        <img src="img/tata-tiscon-logo.png" alt="Tata Tiscon" width="110" height="42" loading="lazy">
                    </a>

                    <a href="cement/anbucement/index-demo-3.html" class="trusted-brand-cell" title="JSW Steel">
                        <img src="img/jsw-steel-logo.jpg" alt="JSW Steel" width="110" height="42" loading="lazy">
                    </a>

                    <a href="cement/anbucement/index-demo-3.html" class="trusted-brand-cell" title="UltraTech Cement">
                        <img src="img/ultratechlogo.png" alt="UltraTech Cement" width="120" height="42" loading="lazy">
                    </a>

                    <a href="cement/anbucement/index-demo-3.html" class="trusted-brand-cell" title="Dalmia Cement">
                        <img src="img/dalmiabrand.jpg" alt="Dalmia Cement" width="110" height="42" loading="lazy">
                    </a>

                    <a href="a-steel/index.html" class="trusted-brand-cell" title="APL Apollo Steel Pipes">
                        <img src="img/apl-apollo-logo.jpg" alt="APL Apollo Steel Pipes" width="110" height="42" loading="lazy">
                    </a>

                    <a href="anbu-paint/index.html" class="trusted-brand-cell" title="Asian Paints">
                        <img src="img/brands/5.png" alt="Asian Paints" width="110" height="42" loading="lazy">
                    </a>

                </div>

            </div>
        </div>
    </section>`;

html = html.substring(0, heroStartIdx) + replacement + html.substring(marqueeEndIdx);

fs.writeFileSync(indexPath, html);
console.log('Successfully replaced hero section with reference design!');

