const fs = require('fs');

const htmlPath = 'index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const startMarker = '<!-- ==============================================\n         ANBU TRADERS — OUR BUSINESSES SECTION\n         ============================================== -->';
const endMarker = '<!-- Businesses Section End -->';

let startIdx = html.indexOf(startMarker);
if (startIdx === -1) {
  startIdx = html.indexOf(startMarker.replace(/\n/g, '\r\n'));
}

let endIdx = html.indexOf(endMarker);
if (endIdx === -1) {
  endIdx = html.indexOf(endMarker.replace(/\n/g, '\r\n'));
}

console.log('HTML startIdx:', startIdx, 'endIdx:', endIdx);

if (startIdx === -1 || endIdx === -1) {
  console.error('HTML markers not found!');
  process.exit(1);
}

const newBizHtml = `<!-- ==============================================
         ANBU TRADERS — OUR BUSINESSES SECTION (2026 ELITE REDESIGN)
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

            <!-- Tab Navigation (Modern Segmented Floating Dock) -->
            <div class="biz-tabs-wrapper wow fadeInUp" data-wow-delay="0.15s">
                <div class="biz-tabs-nav" role="tablist" aria-label="Our Businesses Divisions">
                    <!-- Tab 1: Cements -->
                    <button class="biz-tab-btn active" data-tab="cements" role="tab" aria-selected="true" aria-controls="cements">
                        <span class="biz-tab-icon-wrap">
                            <img src="cement.png" alt="Cements Division" class="biz-tab-icon">
                        </span>
                        <span class="biz-tab-text">
                            <strong>Cements</strong>
                            <small>OPC 53 &amp; PPC Grades</small>
                        </span>
                    </button>

                    <!-- Tab 2: TMT Rods -->
                    <button class="biz-tab-btn" data-tab="tmt" role="tab" aria-selected="false" aria-controls="tmt">
                        <span class="biz-tab-icon-wrap">
                            <img src="iron-bar (1).png" alt="TMT Steel Division" class="biz-tab-icon">
                        </span>
                        <span class="biz-tab-text">
                            <strong>TMT Steel</strong>
                            <small>Fe 550D Billet Rebars</small>
                        </span>
                    </button>

                    <!-- Tab 3: Sheets & Pipes -->
                    <button class="biz-tab-btn" data-tab="pipes" role="tab" aria-selected="false" aria-controls="pipes">
                        <span class="biz-tab-icon-wrap">
                            <img src="tubes.png" alt="Sheets and Pipes Division" class="biz-tab-icon">
                        </span>
                        <span class="biz-tab-text">
                            <strong>Sheets &amp; Pipes</strong>
                            <small>Roofing &amp; Hollow Tubes</small>
                        </span>
                    </button>

                    <!-- Tab 4: Paints -->
                    <button class="biz-tab-btn" data-tab="paints" role="tab" aria-selected="false" aria-controls="paints">
                        <span class="biz-tab-icon-wrap">
                            <img src="varnish.png" alt="Paints Division" class="biz-tab-icon">
                        </span>
                        <span class="biz-tab-text">
                            <strong>Paints</strong>
                            <small>Asian, Berger &amp; JSW</small>
                        </span>
                    </button>
                </div>
            </div>

            <!-- Tab Content Panels -->
            <div class="biz-tabs-content">
                <!-- Panel 1: Cements -->
                <div class="biz-panel active" id="cements" role="tabpanel" aria-labelledby="tab-cements">
                    <div class="biz-card-grid">
                        <div class="biz-content-col">
                            <div class="biz-panel-badge">
                                <i class="fa fa-award"></i> DIRECT MILL AUTHORIZED • 100% FACTORY FRESH
                            </div>
                            <h3 class="biz-panel-title">Certified Construction Cements for Lasting Foundation Strength</h3>
                            <p class="biz-panel-desc">
                                Sourced directly from India's premier cement manufacturers. Formulated for high early compressive strength, optimum setting time, and superior damp resistance against coastal atmospheric conditions.
                            </p>
                            <div class="biz-specs-grid">
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-check-circle"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Top National Brands</strong>
                                        <span>UltraTech, Dalmia Bharat, Ramco, JSW &amp; Priya</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-certificate"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Available Grades</strong>
                                        <span>OPC 53 High-Rise, PPC &amp; Weatherproof Composites</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-balance-scale"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Weighbridge Billing</strong>
                                        <span>100-Ton electronic tare &amp; net weighment slips</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-truck-moving"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Fleet Site Dispatch</strong>
                                        <span>Direct bulk &amp; retail site offload across Tamil Nadu</span>
                                    </div>
                                </div>
                            </div>
                            <div class="biz-brands-strip">
                                <span class="biz-brand-label">Available Brands:</span>
                                <div class="biz-brand-pills">
                                    <span class="biz-pill">UltraTech</span>
                                    <span class="biz-pill">Dalmia Bharat</span>
                                    <span class="biz-pill">Ramco Supergrade</span>
                                    <span class="biz-pill">JSW Concreel HD</span>
                                    <span class="biz-pill">Priya Cement</span>
                                    <span class="biz-pill">Maha Cement</span>
                                </div>
                            </div>
                            <div class="biz-actions">
                                <a href="cement/anbucement/index-demo-3.html" class="biz-btn-primary">
                                    <span>Explore Cement Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Cement." target="_blank" rel="noopener" class="biz-btn-whatsapp">
                                    <i class="fab fa-whatsapp"></i>
                                    <span>WhatsApp Quote</span>
                                </a>
                            </div>
                        </div>
                        <div class="biz-visual-col">
                            <div class="biz-3d-visual-card">
                                <img src="cement/anbucement/img/cement_hero_cinematic.jpg" alt="Certified Construction Cements Delivery" class="biz-showcase-bg-img" loading="lazy">
                                <div class="biz-visual-overlay"></div>
                                <div class="biz-floating-tag-top">
                                    <i class="fa fa-shield-alt"></i>
                                    <span>100% Genuine Mill Certified</span>
                                </div>
                                <div class="biz-floating-tag-bottom">
                                    <div>
                                        <div class="biz-floating-bottom-title">UltraTech &bull; Dalmia &bull; Ramco</div>
                                        <div class="biz-floating-bottom-sub">Fresh Batch Mill Test Certificates Provided</div>
                                    </div>
                                    <span class="biz-floating-badge-chip">Grade 53 Ready</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Panel 2: TMT Rods -->
                <div class="biz-panel" id="tmt" role="tabpanel" aria-labelledby="tab-tmt">
                    <div class="biz-card-grid">
                        <div class="biz-content-col">
                            <div class="biz-panel-badge">
                                <i class="fa fa-industry"></i> PRIMARY BILLET STEEL • EARTHQUAKE RESISTANT
                            </div>
                            <h3 class="biz-panel-title">Primary High-Tensile Fe-550D TMT Steel Rebars</h3>
                            <p class="biz-panel-desc">
                                Direct factory billets processed with advanced Thermo-Mechanical Treatment. High percentage elongation, superior bendability, and robust corrosion resistance for multi-storey frames and foundations.
                            </p>
                            <div class="biz-specs-grid">
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-shield-alt"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Primary Manufacturers</strong>
                                        <span>Tata Tiscon, JSW Neosteel &amp; Agni Steels</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-layer-group"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Full Size Range</strong>
                                        <span>8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-bolt"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Certified Standard</strong>
                                        <span>BIS 1786 Fe 550D &amp; Super Ductile (SD)</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-balance-scale"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Zero-Shortage Slips</strong>
                                        <span>Straight 12m unbent bundles with weighbridge printout</span>
                                    </div>
                                </div>
                            </div>
                            <div class="biz-brands-strip">
                                <span class="biz-brand-label">Available Brands:</span>
                                <div class="biz-brand-pills">
                                    <span class="biz-pill">Tata Tiscon</span>
                                    <span class="biz-pill">JSW Neosteel</span>
                                    <span class="biz-pill">Agni TMT</span>
                                    <span class="biz-pill">Suryadev</span>
                                    <span class="biz-pill">ARS 550D</span>
                                </div>
                            </div>
                            <div class="biz-actions">
                                <a href="cement/anbucement/index-demo-3.html#products" class="biz-btn-primary">
                                    <span>Explore Steel Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20TMT%20Rods." target="_blank" rel="noopener" class="biz-btn-whatsapp">
                                    <i class="fab fa-whatsapp"></i>
                                    <span>WhatsApp Quote</span>
                                </a>
                            </div>
                        </div>
                        <div class="biz-visual-col">
                            <div class="biz-3d-visual-card">
                                <img src="img/hero/steels-cement-hero.jpg" alt="Primary Fe 550D TMT Steel Warehouse" class="biz-showcase-bg-img" loading="lazy">
                                <div class="biz-visual-overlay"></div>
                                <div class="biz-floating-tag-top">
                                    <i class="fa fa-bolt"></i>
                                    <span>Fe 550D Earthquake Safe</span>
                                </div>
                                <div class="biz-floating-tag-bottom">
                                    <div>
                                        <div class="biz-floating-bottom-title">Tata Tiscon &bull; JSW Neosteel</div>
                                        <div class="biz-floating-bottom-sub">Straight 12m Bundles &bull; Zero Bending</div>
                                    </div>
                                    <span class="biz-floating-badge-chip">Primary Billet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Panel 3: Sheets & Pipes -->
                <div class="biz-panel" id="pipes" role="tabpanel" aria-labelledby="tab-pipes">
                    <div class="biz-card-grid">
                        <div class="biz-content-col">
                            <div class="biz-panel-badge">
                                <i class="fa fa-warehouse"></i> INDUSTRIAL ROOFING &amp; STRUCTURAL HOLLOW TUBES
                            </div>
                            <h3 class="biz-panel-title">Heavy Colour-Coated Roofing Sheets &amp; Structural Pipes</h3>
                            <p class="biz-panel-desc">
                                Comprehensive stock of Galvalume and prepainted galvanized iron sheets, heavy-gauge MS square &amp; rectangular tubes, and GI pipes designed for warehouse sheds, factories, and architectural framing.
                            </p>
                            <div class="biz-specs-grid">
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-layer-group"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Roofing Profiles</strong>
                                        <span>JSW Colouron+, Tata Shaktee &amp; Tile Profiles</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-cubes"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Hollow Sections</strong>
                                        <span>MS Square Tubes, Rectangular Tubes &amp; GI Pipes</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-ruler-combined"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Custom Cut Lengths</strong>
                                        <span>0.30mm to 3.0mm thickness, custom cut to site size</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-tools"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Complete Trims</strong>
                                        <span>Self-drilling screws, ridge caps, gutters &amp; louvers</span>
                                    </div>
                                </div>
                            </div>
                            <div class="biz-brands-strip">
                                <span class="biz-brand-label">Available Brands:</span>
                                <div class="biz-brand-pills">
                                    <span class="biz-pill">JSW Colouron+</span>
                                    <span class="biz-pill">Tata Shaktee</span>
                                    <span class="biz-pill">JSW Pragati</span>
                                    <span class="biz-pill">Apollo Pipes</span>
                                    <span class="biz-pill">Everest Sheets</span>
                                </div>
                            </div>
                            <div class="biz-actions">
                                <a href="a-steel/index.html" class="biz-btn-primary">
                                    <span>Explore Sheets &amp; Pipes</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919655551468?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Roofing%20Sheets%20and%20Pipes." target="_blank" rel="noopener" class="biz-btn-whatsapp">
                                    <i class="fab fa-whatsapp"></i>
                                    <span>WhatsApp Quote</span>
                                </a>
                            </div>
                        </div>
                        <div class="biz-visual-col">
                            <div class="biz-3d-visual-card">
                                <img src="a-steel/assets/img/service/roofsheethome.jpg" alt="Colour-Coated Industrial Roofing Sheets and Structural Framework" class="biz-showcase-bg-img" loading="lazy">
                                <div class="biz-visual-overlay"></div>
                                <div class="biz-floating-tag-top">
                                    <i class="fa fa-sun"></i>
                                    <span>Anti-Rust &amp; UV Shield</span>
                                </div>
                                <div class="biz-floating-tag-bottom">
                                    <div>
                                        <div class="biz-floating-bottom-title">JSW Colouron+ &bull; Apollo Pipes</div>
                                        <div class="biz-floating-bottom-sub">Custom Cut to Exact Site Specifications</div>
                                    </div>
                                    <span class="biz-floating-badge-chip">Heavy Gauge</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Panel 4: Paints -->
                <div class="biz-panel" id="paints" role="tabpanel" aria-labelledby="tab-paints">
                    <div class="biz-card-grid">
                        <div class="biz-content-col">
                            <div class="biz-panel-badge">
                                <i class="fa fa-paint-roller"></i> AUTHORIZED COLOR SHOWROOM &bull; COMPUTERIZED MIXING
                            </div>
                            <h3 class="biz-panel-title">Architectural Paints &amp; Computerized Shade Mixing</h3>
                            <p class="biz-panel-desc">
                                Official experience center featuring automated spectrophotometer color matching from Asian Paints, Berger, and JSW Paints. Offering interior luxury sheens, exterior weather-guards, and scientific waterproofing.
                            </p>
                            <div class="biz-specs-grid">
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-store"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Authorized Showroom</strong>
                                        <span>Asian Paints Royale, Berger Silk &amp; JSW Aurus</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-palette"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Automated Dispenser</strong>
                                        <span>Instant computer tinting across 2,000+ custom shades</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-tint"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Scientific Waterproofing</strong>
                                        <span>Leak-proof elastomeric coatings &amp; wall putty base</span>
                                    </div>
                                </div>
                                <div class="biz-spec-item">
                                    <div class="biz-spec-icon-box"><i class="fa fa-award"></i></div>
                                    <div class="biz-spec-text">
                                        <strong>Long-Life Finishes</strong>
                                        <span>Anti-fungal, washable, dust-resistant &amp; low VOC</span>
                                    </div>
                                </div>
                            </div>
                            <div class="biz-brands-strip">
                                <span class="biz-brand-label">Available Brands:</span>
                                <div class="biz-brand-pills">
                                    <span class="biz-pill">Asian Paints</span>
                                    <span class="biz-pill">Berger Paints</span>
                                    <span class="biz-pill">JSW Paints</span>
                                    <span class="biz-pill">Birla Wall Putty</span>
                                </div>
                            </div>
                            <div class="biz-actions">
                                <a href="anbu-paint/index.html" class="biz-btn-primary">
                                    <span>Explore Paints Division</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                                <a href="https://wa.me/919626325232?text=Hello%20Anbu%20Paints%2C%20I%20want%20a%20price%20quote%20for%20Paints%20and%20Color%20Mixing." target="_blank" rel="noopener" class="biz-btn-whatsapp">
                                    <i class="fab fa-whatsapp"></i>
                                    <span>WhatsApp Quote</span>
                                </a>
                            </div>
                        </div>
                        <div class="biz-visual-col">
                            <div class="biz-3d-visual-card">
                                <img src="anbu-paint/img/service-interior.jpg" alt="Luxury Architectural Interior Painting" class="biz-showcase-bg-img" loading="lazy">
                                <div class="biz-visual-overlay"></div>
                                <div class="biz-floating-tag-top">
                                    <i class="fa fa-palette"></i>
                                    <span>2,000+ Automated Custom Shades</span>
                                </div>
                                <div class="biz-floating-tag-bottom">
                                    <div>
                                        <div class="biz-floating-bottom-title">Asian Paints &bull; Berger &bull; JSW</div>
                                        <div class="biz-floating-bottom-sub">Spectrophotometer Computerized Shade Tinting</div>
                                    </div>
                                    <span class="biz-floating-badge-chip">5-Min Mixing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Businesses Section End -->`;

html = html.substring(0, startIdx) + newBizHtml + html.substring(endIdx + endMarker.length);

// Also update the script at the bottom
const oldScriptMarker = '// JavaScript to toggle active class and show the relevant tab content';
const scriptStart = html.indexOf(oldScriptMarker);
if (scriptStart !== -1) {
  const scriptEnd = html.indexOf('</script>', scriptStart);
  const newScript = `// ── 2026 Interactive Businesses Tab Switcher + 3D Card Tilt Animation ──
document.addEventListener('DOMContentLoaded', function () {
    // 1. Tab Switching Logic
    const bizTabs = document.querySelectorAll('.biz-tab-btn');
    const bizPanels = document.querySelectorAll('.biz-panel');

    bizTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetId = this.getAttribute('data-tab');
            bizTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            bizPanels.forEach(p => p.classList.remove('active'));

            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 2. Interactive 3D Card Tilt on Mouse Move
    const tiltCards = document.querySelectorAll('.biz-3d-visual-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -7;
            const rotateY = ((x - centerX) / centerX) * 7;

            card.style.transform = \`perspective(1000px) rotateX(\${rotateX.toFixed(2)}deg) rotateY(\${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)\`;
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
});
`;
  html = html.substring(0, scriptStart) + newScript + html.substring(scriptEnd);
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('✅ Successfully updated businesses section in index.html!');

