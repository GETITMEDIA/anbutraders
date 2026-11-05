const fs = require('fs');

console.log('=== MODERNIZING WHY CHOOSE US SECTION ===');

// 1. New HTML
const newHtml = `    <!-- ==============================================
         ANBU TRADERS — WHY CHOOSE US (2026 ARCHITECTURAL REDESIGN)
         ============================================== -->
    <section class="why-choose-section" id="why-choose-us">
        <div class="container">
            <div class="row g-5 align-items-center">
                
                <!-- Left Column: Visual Showcase with Floating Trust Badges -->
                <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                    <div class="why-visual-wrapper">
                        <!-- Main Frame -->
                        <div class="why-image-frame">
                            <img src="ssss.jpg" alt="Anbu Traders Sedarapet Main Yard & Showroom" class="why-main-img" loading="lazy">
                            <div class="why-image-scrim"></div>
                            
                            <!-- Location & Facility Tag at Bottom -->
                            <div class="why-facility-pill">
                                <i class="fa fa-map-marker-alt"></i>
                                <span>Main Stocking Yard &bull; Sedarapet, Pondicherry</span>
                            </div>
                        </div>

                        <!-- Floating Glass Badge 1: 11+ Years of Trust -->
                        <div class="why-float-badge float-top-right">
                            <div class="float-badge-icon icon-orange">
                                <i class="fa fa-award"></i>
                            </div>
                            <div class="float-badge-content">
                                <span class="badge-number">11+ Years</span>
                                <span class="badge-label">Trusted Mill Stockist</span>
                            </div>
                        </div>

                        <!-- Floating Glass Badge 2: 100-Ton Weighbridge -->
                        <div class="why-float-badge float-bottom-left">
                            <div class="float-badge-icon icon-emerald">
                                <i class="fa fa-balance-scale"></i>
                            </div>
                            <div class="float-badge-content">
                                <span class="badge-number">100-Ton Weighbridge</span>
                                <span class="badge-label">100% Zero-Shortage Billing</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: High-Impact 2x2 Feature Bento -->
                <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                    <div class="why-content-wrapper">
                        <!-- Header -->
                        <div class="why-eyebrow-pill">
                            <span class="why-pulsing-dot"></span>
                            <span>WHY CHOOSE ANBU TRADERS</span>
                        </div>
                        <h2 class="why-main-title">
                            Built on <span class="why-heading-accent">Trust, Quality &amp; Precision</span>
                        </h2>
                        <div class="why-title-bar"></div>
                        <p class="why-lead-text">
                            We’re committed to providing certified primary mill materials, prompt site deliveries, and absolute weight transparency for both builders and wholesale dealers.
                        </p>

                        <!-- 2x2 Feature Cards Grid -->
                        <div class="why-features-grid">
                            
                            <!-- Feature 1: Certified Mill Quality -->
                            <div class="why-card">
                                <div class="why-card-icon icon-orange">
                                    <i class="fa fa-certificate"></i>
                                </div>
                                <div class="why-card-body">
                                    <h4 class="why-card-title">100% Certified Mill Stock</h4>
                                    <p class="why-card-desc">
                                        Primary mill supplies from Tata Tiscon, JSW, UltraTech &amp; Dalmia with batch mill test certificates.
                                    </p>
                                    <span class="why-card-tag">Zero Re-Rolled Steel</span>
                                </div>
                            </div>

                            <!-- Feature 2: 100-Ton Weighbridge -->
                            <div class="why-card">
                                <div class="why-card-icon icon-emerald">
                                    <i class="fa fa-balance-scale"></i>
                                </div>
                                <div class="why-card-body">
                                    <h4 class="why-card-title">Zero-Shortage Accuracy</h4>
                                    <p class="why-card-desc">
                                        Computer-printed electronic tare &amp; gross slips. Transparent weighment with zero shortage guaranteed.
                                    </p>
                                    <span class="why-card-tag tag-emerald">Digital Weight Slips</span>
                                </div>
                            </div>

                            <!-- Feature 3: Direct Factory Rates -->
                            <div class="why-card">
                                <div class="why-card-icon icon-blue">
                                    <i class="fa fa-tags"></i>
                                </div>
                                <div class="why-card-body">
                                    <h4 class="why-card-title">Direct Wholesale Pricing</h4>
                                    <p class="why-card-desc">
                                        Direct factory railway rake consignments eliminate middleman fees, passing wholesale savings directly to you.
                                    </p>
                                    <span class="why-card-tag tag-blue">Factory Direct Rates</span>
                                </div>
                            </div>

                            <!-- Feature 4: Fleet Logistics -->
                            <div class="why-card">
                                <div class="why-card-icon icon-purple">
                                    <i class="fa fa-truck-moving"></i>
                                </div>
                                <div class="why-card-body">
                                    <h4 class="why-card-title">Rapid Fleet Logistics</h4>
                                    <p class="why-card-desc">
                                        Dedicated truck fleet and crane-assisted offloading for prompt site bay delivery across Pondicherry &amp; TN.
                                    </p>
                                    <span class="why-card-tag tag-purple">Same-Day Site Dispatch</span>
                                </div>
                            </div>

                        </div>

                        <!-- Bottom Fast Action Strip -->
                        <div class="why-action-strip">
                            <div class="why-action-info">
                                <span class="why-action-label">Need today's live material rates?</span>
                                <span class="why-action-sub">Instant quotation desk &bull; Mon–Sat 8am–8pm</span>
                            </div>
                            <div class="why-action-buttons">
                                <a href="https://wa.me/919626325204?text=Hello%20Anbu%20Traders%2C%20I%20want%20a%20price%20quote%20for%20Steel%20and%20Cement." target="_blank" rel="noopener" class="why-btn-quote">
                                    <i class="fab fa-whatsapp"></i>
                                    <span>Get Fast Quote</span>
                                </a>
                                <a href="tel:+919626325204" class="why-btn-call" title="Call Dispatch Desk">
                                    <i class="fa fa-phone-alt"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Why Choose Us End -->`;

// 2. New CSS
const newCss = `/* ==============================================
   ANBU TRADERS — WHY CHOOSE US (2026 ARCHITECTURAL REDESIGN)
   ============================================== */
.why-choose-section {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0;
  background: radial-gradient(circle at 85% 15%, rgba(6, 43, 91, 0.04) 0%, transparent 40%),
              radial-gradient(circle at 15% 85%, rgba(243, 106, 33, 0.05) 0%, transparent 40%),
              linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
}

/* Left Visual Frame */
.why-visual-wrapper {
  position: relative;
  padding: 16px;
}

.why-image-frame {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(6, 43, 91, 0.12);
  border: 1px solid rgba(6, 43, 91, 0.08);
  background: #031836;
}

.why-main-img {
  width: 100%;
  height: clamp(380px, 42vw, 520px);
  object-fit: cover;
  display: block;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.why-visual-wrapper:hover .why-main-img {
  transform: scale(1.04);
}

.why-image-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(3, 24, 54, 0.15) 0%, rgba(3, 24, 54, 0.05) 50%, rgba(3, 24, 54, 0.75) 100%);
  pointer-events: none;
}

.why-facility-pill {
  position: absolute;
  bottom: 18px;
  left: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(3, 24, 54, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.813rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.why-facility-pill i {
  color: var(--primary-orange);
}

/* Floating Glass Badges */
.why-float-badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 12px 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 12px 32px rgba(6, 43, 91, 0.14);
  z-index: 3;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.why-float-badge:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(6, 43, 91, 0.2);
}

.float-top-right {
  top: 0;
  right: 0;
  animation: whyFloatA 4s ease-in-out infinite alternate;
}

.float-bottom-left {
  bottom: 5px;
  left: 0;
  animation: whyFloatB 4.5s ease-in-out infinite alternate;
}

@keyframes whyFloatA {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}

@keyframes whyFloatB {
  0% { transform: translateY(0); }
  100% { transform: translateY(8px); }
}

.float-badge-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.float-badge-icon.icon-orange {
  background: rgba(243, 106, 33, 0.12);
  color: var(--primary-orange);
}

.float-badge-icon.icon-emerald {
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
}

.float-badge-content {
  display: flex;
  flex-direction: column;
}

.badge-number {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.96rem;
  color: var(--primary-navy);
  line-height: 1.2;
}

.badge-label {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
}

/* Right Content Column */
.why-content-wrapper {
  padding-left: clamp(0px, 2vw, 24px);
}

.why-eyebrow-pill {
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

.why-pulsing-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--primary-orange);
  display: inline-block;
  animation: bizPulse 2s infinite ease-in-out;
}

.why-main-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.4vw, 2.75rem);
  font-weight: 800;
  color: var(--primary-navy);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 12px;
}

.why-heading-accent {
  background: linear-gradient(135deg, #f36a21 0%, #ea580c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.why-title-bar {
  width: 52px;
  height: 3.5px;
  background: linear-gradient(90deg, var(--primary-orange), #ff9955);
  margin-bottom: 16px;
  border-radius: 4px;
}

.why-lead-text {
  font-size: 0.98rem;
  line-height: 1.65;
  color: #475569;
  margin-bottom: 28px;
}

/* 2x2 Feature Bento */
.why-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.why-card {
  background: #ffffff;
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(6, 43, 91, 0.08);
  box-shadow: 0 4px 16px rgba(6, 43, 91, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
              border-color 0.3s ease;
}

.why-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(6, 43, 91, 0.1);
  border-color: rgba(243, 106, 33, 0.35);
}

.why-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.why-card:hover .why-card-icon {
  transform: scale(1.1);
}

.why-card-icon.icon-orange {
  background: rgba(243, 106, 33, 0.1);
  color: var(--primary-orange);
}

.why-card-icon.icon-emerald {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.why-card-icon.icon-blue {
  background: rgba(2, 132, 199, 0.1);
  color: #0284c7;
}

.why-card-icon.icon-purple {
  background: rgba(124, 58, 237, 0.1);
  color: #7c3aed;
}

.why-card-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--primary-navy);
  margin-bottom: 6px;
  line-height: 1.25;
}

.why-card-desc {
  font-size: 0.813rem;
  line-height: 1.5;
  color: #64748b;
  margin-bottom: 12px;
  flex-grow: 1;
}

.why-card-tag {
  display: inline-block;
  align-self: flex-start;
  font-size: 0.688rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 3px 9px;
  border-radius: 6px;
  background: rgba(243, 106, 33, 0.08);
  color: var(--primary-orange);
}

.why-card-tag.tag-emerald {
  background: rgba(16, 185, 129, 0.08);
  color: #059669;
}

.why-card-tag.tag-blue {
  background: rgba(2, 132, 199, 0.08);
  color: #0284c7;
}

.why-card-tag.tag-purple {
  background: rgba(124, 58, 237, 0.08);
  color: #7c3aed;
}

/* Bottom Action Strip */
.why-action-strip {
  background: linear-gradient(135deg, #031836 0%, #062b5b 100%);
  border-radius: 16px;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: 0 8px 24px rgba(6, 43, 91, 0.18);
}

.why-action-info {
  display: flex;
  flex-direction: column;
}

.why-action-label {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.938rem;
  color: #ffffff;
}

.why-action-sub {
  font-size: 0.75rem;
  color: #94a3b8;
}

.why-action-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.why-btn-quote {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: linear-gradient(135deg, #f36a21 0%, #e05510 100%);
  color: #ffffff !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.813rem;
  padding: 9px 16px;
  border-radius: 9999px;
  text-decoration: none !important;
  box-shadow: 0 4px 12px rgba(243, 106, 33, 0.35);
  transition: all 0.25s ease;
  white-space: nowrap;
}

.why-btn-quote:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(243, 106, 33, 0.45);
}

.why-btn-call {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff !important;
  font-size: 0.95rem;
  transition: all 0.25s ease;
  text-decoration: none !important;
}

.why-btn-call:hover {
  background: var(--primary-orange);
  transform: scale(1.1);
}

/* Responsive Media Queries */
@media (max-width: 991px) {
  .why-content-wrapper {
    padding-left: 0;
    margin-top: 24px;
  }
  .why-visual-wrapper {
    padding: 10px;
  }
  .why-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .why-features-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .why-action-strip {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .why-action-buttons {
    width: 100%;
  }
  .why-btn-quote {
    flex: 1;
    justify-content: center;
  }
  .why-float-badge {
    padding: 8px 12px;
  }
  .float-badge-icon {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }
  .badge-number {
    font-size: 0.813rem;
  }
  .badge-label {
    font-size: 0.688rem;
  }
}`;

// Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('<!-- Features Start -->');
const end = html.indexOf('<!-- Features End -->') + '<!-- Features End -->'.length;

if (start === -1 || end === -1) {
  console.error('Could not find Features section in index.html!');
  process.exit(1);
}

html = html.substring(0, start) + newHtml + html.substring(end);
fs.writeFileSync('index.html', html, 'utf8');
console.log('✅ Updated index.html with new Why Choose Us section!');

// Update css/style.css
let css = fs.readFileSync('css/style.css', 'utf8');
const cssStart = css.indexOf('/* ── Why Choose Us / Features ── */');
const cssEnd = css.indexOf('/* ── Service Cards ── */');

if (cssStart === -1 || cssEnd === -1) {
  console.error('Could not find Why Choose Us in css/style.css!');
  process.exit(1);
}

css = css.substring(0, cssStart) + newCss + '\n\n' + css.substring(cssEnd);
fs.writeFileSync('css/style.css', css, 'utf8');
console.log('✅ Updated css/style.css with modern Why Choose Us styling!');

