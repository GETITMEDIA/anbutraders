const fs = require('fs');

// 1. Read index.html and style.css
let html = fs.readFileSync('index.html', 'utf8');
let css = fs.readFileSync('css/style.css', 'utf8');

// Update Google Fonts in index.html to include Playfair Display
const fontSearch = 'family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700';
const fontReplace = 'family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700';
if (html.includes(fontSearch)) {
  html = html.replace(fontSearch, fontReplace);
  console.log('Updated Google Fonts in index.html');
}

// Preload the main hero image
if (!html.includes('img/main_herosec/hero2.png')) {
  html = html.replace(
    '<link rel="preload" as="image" href="img/opt/hero-materials-composite.jpg">',
    '<link rel="preload" as="image" href="img/main_herosec/hero2.png">\n    <link rel="preload" as="image" href="img/opt/hero-materials-composite.jpg">'
  );
  console.log('Added preload for hero2.png');
}

// 2. Exact New Hero HTML
const newHeroHtml = `<!-- ==============================================
         2026 ARCHITECTURAL HERO (PIXEL-PERFECT RECREATION)
         Exact recreation of reference design (Spaces That Inspire)
         Assets: img/main_herosec (hero1.png, hero2.png, hero3.png)
         ============================================== -->
    <section id="hero" class="anbu-reference-hero-section" aria-label="Spaces That Inspire - Architectural Excellence">
        <div class="container hero-container-1180">
            
            <!-- Luxury Rounded Hero Canvas Container -->
            <div class="anbu-hero-canvas" id="anbuHeroCanvas">
                
                <!-- Main Visual Scene Area with House Background -->
                <div class="hero-visual-scene" id="heroVisualScene">
                    <!-- Subtle ambient lighting scrim to keep typography crisp and clear -->
                    <div class="hero-scene-scrim" aria-hidden="true"></div>

                    <!-- Top-Left Editorial Content Block -->
                    <div class="hero-intro-block">
                        <!-- Eyebrow -->
                        <div class="hero-eyebrow-tracking" id="heroEyebrow">
                            ARCHITECTURE &mdash; INTERIORS &mdash; LANDSCAPES
                        </div>

                        <!-- Editorial Luxury Display Headline -->
                        <h1 class="hero-display-serif-title" id="heroHeadline">
                            <span class="hero-title-line-1">Spaces</span>
                            <span class="hero-title-line-2">That Inspire</span>
                        </h1>

                        <!-- Lead Description -->
                        <p class="hero-display-lead" id="heroLeadText">
                            We design meaningful spaces that blend architecture, nature and modern living.
                        </p>

                        <!-- CTA Actions Group -->
                        <div class="hero-action-buttons">
                            <a href="#projects" class="hero-btn-pill-primary">
                                <span>Explore Our Work</span>
                                <svg class="hero-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                            <a href="javascript:void(0)" class="hero-btn-showcase" id="heroWatchShowcaseBtn" role="button" aria-label="Watch Project Showcase">
                                <span class="hero-play-circle" aria-hidden="true">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                    </svg>
                                </span>
                                <span class="hero-play-label">Watch Showcase</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Bottom Floating Shelf Tray -->
                <div class="hero-bottom-shelf">
                    <!-- Left: Featured Project Capsule Card -->
                    <div class="hero-featured-project-card" id="heroFeaturedCard">
                        <div class="featured-card-grid">
                            <!-- Left Column: Eyebrow + Thumbnail -->
                            <div class="featured-media-col">
                                <span class="featured-eyebrow-label">FEATURED PROJECT</span>
                                <div class="featured-thumb-frame">
                                    <img src="img/main_herosec/hero2.png" alt="The Horizon Villa" id="featuredProjectThumb" class="featured-thumb-img" loading="eager">
                                </div>
                            </div>

                            <!-- Right Column: Details + Price + Controls -->
                            <div class="featured-info-col">
                                <div class="featured-top-row">
                                    <h3 class="featured-project-title" id="featuredProjectTitle">The Horizon Villa</h3>
                                    <div class="featured-price-tag" id="featuredProjectPrice">&euro;1.7 M</div>
                                </div>

                                <p class="featured-project-desc" id="featuredProjectDesc">
                                    A modern villa that blends natural surroundings with contemporary design.
                                </p>

                                <div class="featured-action-row">
                                    <a href="project.html" class="featured-view-link" id="featuredViewLink">
                                        <span>View Project</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>

                                <!-- Pagination Dots & Arrow Controls Row -->
                                <div class="featured-nav-row">
                                    <div class="featured-pagination-dots" id="featuredDots" role="tablist" aria-label="Project slide navigation">
                                        <button class="feat-dot active" data-slide="0" aria-label="Slide 1 - The Horizon Villa" role="tab" aria-selected="true"></button>
                                        <button class="feat-dot" data-slide="1" aria-label="Slide 2 - Coastal Steel Residence" role="tab" aria-selected="false"></button>
                                        <button class="feat-dot" data-slide="2" aria-label="Slide 3 - Cliffside Structural Frame" role="tab" aria-selected="false"></button>
                                        <button class="feat-dot" data-slide="3" aria-label="Slide 4 - Architectural Landscape" role="tab" aria-selected="false"></button>
                                    </div>

                                    <div class="featured-arrow-btns">
                                        <button class="feat-arrow-btn feat-arrow-prev" id="featArrowPrev" aria-label="Previous project" type="button">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                                <polyline points="12 19 5 12 12 5"></polyline>
                                            </svg>
                                        </button>
                                        <button class="feat-arrow-btn feat-arrow-next" id="featArrowNext" aria-label="Next project" type="button">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Statistics Showcase Card -->
                    <div class="hero-stats-showcase-card">
                        <!-- Stat 1: Projects Completed -->
                        <div class="hero-stat-col">
                            <div class="hero-stat-icon-wrap" aria-hidden="true">
                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                    <path d="M6 12H4a2 2 0 0 0-2 2v8h4"></path>
                                    <path d="M18 9h2a2 2 0 0 1 2 2v11h-4"></path>
                                    <path d="M10 6h4"></path>
                                    <path d="M10 10h4"></path>
                                    <path d="M10 14h4"></path>
                                    <path d="M10 18h4"></path>
                                </svg>
                            </div>
                            <div class="hero-stat-number" id="heroStat1Num">250+</div>
                            <div class="hero-stat-label" id="heroStat1Lbl">Projects Completed</div>
                        </div>

                        <div class="hero-stat-col-divider" aria-hidden="true"></div>

                        <!-- Stat 2: Happy Clients -->
                        <div class="hero-stat-col">
                            <div class="hero-stat-icon-wrap" aria-hidden="true">
                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div class="hero-stat-number" id="heroStat2Num">120+</div>
                            <div class="hero-stat-label" id="heroStat2Lbl">Happy Clients</div>
                        </div>

                        <div class="hero-stat-col-divider" aria-hidden="true"></div>

                        <!-- Stat 3: Countries Worldwide -->
                        <div class="hero-stat-col">
                            <div class="hero-stat-icon-wrap" aria-hidden="true">
                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 2l2.3 2.4 3.3-.2 1.3 3.1 3.1 1.3-.2 3.4 2.4 2.4-2.4 2.4.2 3.4-3.1 1.3-1.3 3.1-3.3-.2-2.3 2.4-2.3-2.4-3.3.2-1.3-3.1-3.1-1.3.2-3.4-2.4-2.4 2.4-2.4-.2-3.4 3.1-1.3 1.3-3.1 3.3.2L12 2z"></path>
                                    <polygon points="12 8 13.2 10.8 16.2 11.1 13.9 13.1 14.6 16 12 14.4 9.4 16 10.1 13.1 7.8 11.1 10.8 10.8 12 8" fill="none" stroke="currentColor" stroke-width="1.5"></polygon>
                                </svg>
                            </div>
                            <div class="hero-stat-number" id="heroStat3Num">15+</div>
                            <div class="hero-stat-label" id="heroStat3Lbl">Countries Worldwide</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Architectural Video Showcase Lightbox Modal -->
        <div id="heroShowcaseModal" class="hero-showcase-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="showcaseModalTitle">
            <div class="hero-modal-backdrop" id="modalBackdrop"></div>
            <div class="hero-modal-dialog">
                <button class="hero-modal-close" id="modalCloseBtn" aria-label="Close Showcase Modal" type="button">&times;</button>
                <div class="hero-modal-content">
                    <div class="hero-modal-badge">ARCHITECTURAL SHOWCASE</div>
                    <h3 id="showcaseModalTitle" class="hero-modal-title">Spaces That Inspire &bull; The Horizon Villa</h3>
                    <div class="hero-modal-media-wrap">
                        <video id="heroShowcaseVideo" controls playsinline poster="img/main_herosec/hero2.png">
                            <source src="banner.mp4" type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <p class="hero-modal-caption">
                        A modern villa that blends natural surroundings with contemporary design. Built with certified structural steel, reinforced foundations, and climate-resilient architectural finishes.
                    </p>
                </div>
            </div>
        </div>

        <!-- Interactive Slide Controller Script -->
        <script>
        document.addEventListener('DOMContentLoaded', function () {
            var slides = [
                {
                    bg: 'img/main_herosec/hero2.png',
                    thumb: 'img/main_herosec/hero2.png',
                    eyebrow: 'ARCHITECTURE \u2014 INTERIORS \u2014 LANDSCAPES',
                    line1: 'Spaces',
                    line2: 'That Inspire',
                    lead: 'We design meaningful spaces that blend architecture, nature and modern living.',
                    title: 'The Horizon Villa',
                    price: '\u20AC1.7 M',
                    desc: 'A modern villa that blends natural surroundings with contemporary design.',
                    stat1: '250+', stat1Lbl: 'Projects Completed',
                    stat2: '120+', stat2Lbl: 'Happy Clients',
                    stat3: '15+', stat3Lbl: 'Countries Worldwide'
                },
                {
                    bg: 'img/main_herosec/hero3.png',
                    thumb: 'img/main_herosec/hero3.png',
                    eyebrow: 'STRUCTURAL STEEL \u2014 INDUSTRIAL ROOFING',
                    line1: 'Crafted',
                    line2: 'To Last',
                    lead: 'Engineered steel structures and precision roofing engineered for generational strength.',
                    title: 'The Coastal Residence',
                    price: '\u20AC2.1 M',
                    desc: 'Modern industrial architecture with premium JSW coastal roofing installation.',
                    stat1: '380+', stat1Lbl: 'Projects Completed',
                    stat2: '190+', stat2Lbl: 'Happy Clients',
                    stat3: '18+', stat3Lbl: 'Countries Worldwide'
                },
                {
                    bg: 'img/main_herosec/hero1.png',
                    thumb: 'img/main_herosec/hero1.png',
                    eyebrow: 'CIVIL WORKS \u2014 REBAR FOUNDATIONS',
                    line1: 'Built',
                    line2: 'From Core',
                    lead: 'Strong foundations built with primary mill TMT rebars, certified aggregates and cement.',
                    title: 'The Cliffside Villa',
                    price: '\u20AC1.4 M',
                    desc: 'Reinforced concrete frame engineered to withstand coastal elevation and seismic loads.',
                    stat1: '100T', stat1Lbl: 'Projects Completed',
                    stat2: '10,000+', stat2Lbl: 'Happy Clients',
                    stat3: '11+', stat3Lbl: 'Countries Worldwide'
                },
                {
                    bg: 'img/main_herosec/hero2.png',
                    thumb: 'img/main_herosec/hero2.png',
                    eyebrow: 'ARCHITECTURE \u2014 INTERIORS \u2014 LANDSCAPES',
                    line1: 'Spaces',
                    line2: 'That Inspire',
                    lead: 'We design meaningful spaces that blend architecture, nature and modern living.',
                    title: 'The Horizon Villa',
                    price: '\u20AC1.7 M',
                    desc: 'A modern villa that blends natural surroundings with contemporary design.',
                    stat1: '250+', stat1Lbl: 'Projects Completed',
                    stat2: '120+', stat2Lbl: 'Happy Clients',
                    stat3: '15+', stat3Lbl: 'Countries Worldwide'
                }
            ];

            var currentSlide = 0;
            var sceneEl = document.getElementById('heroVisualScene');
            var thumbEl = document.getElementById('featuredProjectThumb');
            var eyebrowEl = document.getElementById('heroEyebrow');
            var line1El = document.querySelector('.hero-title-line-1');
            var line2El = document.querySelector('.hero-title-line-2');
            var leadEl = document.getElementById('heroLeadText');
            var titleEl = document.getElementById('featuredProjectTitle');
            var priceEl = document.getElementById('featuredProjectPrice');
            var descEl = document.getElementById('featuredProjectDesc');
            var stat1El = document.getElementById('heroStat1Num');
            var stat1LblEl = document.getElementById('heroStat1Lbl');
            var stat2El = document.getElementById('heroStat2Num');
            var stat2LblEl = document.getElementById('heroStat2Lbl');
            var stat3El = document.getElementById('heroStat3Num');
            var stat3LblEl = document.getElementById('heroStat3Lbl');
            var dots = document.querySelectorAll('.feat-dot');
            var prevBtn = document.getElementById('featArrowPrev');
            var nextBtn = document.getElementById('featArrowNext');

            function applySlide(index) {
                if (index < 0) index = slides.length - 1;
                if (index >= slides.length) index = 0;
                currentSlide = index;

                var data = slides[currentSlide];
                if (sceneEl) sceneEl.style.backgroundImage = "url('" + data.bg + "')";
                if (thumbEl) {
                    thumbEl.style.opacity = '0.4';
                    setTimeout(function() {
                        thumbEl.src = data.thumb;
                        thumbEl.style.opacity = '1';
                    }, 150);
                }
                if (eyebrowEl) eyebrowEl.textContent = data.eyebrow;
                if (line1El) line1El.textContent = data.line1;
                if (line2El) line2El.textContent = data.line2;
                if (leadEl) leadEl.textContent = data.lead;
                if (titleEl) titleEl.textContent = data.title;
                if (priceEl) priceEl.textContent = data.price;
                if (descEl) descEl.textContent = data.desc;
                if (stat1El) stat1El.textContent = data.stat1;
                if (stat1LblEl) stat1LblEl.textContent = data.stat1Lbl;
                if (stat2El) stat2El.textContent = data.stat2;
                if (stat2LblEl) stat2LblEl.textContent = data.stat2Lbl;
                if (stat3El) stat3El.textContent = data.stat3;
                if (stat3LblEl) stat3LblEl.textContent = data.stat3Lbl;

                dots.forEach(function(dot, i) {
                    if (i === currentSlide) {
                        dot.classList.add('active');
                        dot.setAttribute('aria-selected', 'true');
                    } else {
                        dot.classList.remove('active');
                        dot.setAttribute('aria-selected', 'false');
                    }
                });
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', function () {
                    applySlide(currentSlide - 1);
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', function () {
                    applySlide(currentSlide + 1);
                });
            }

            dots.forEach(function(dot) {
                dot.addEventListener('click', function () {
                    var idx = parseInt(this.getAttribute('data-slide'), 10);
                    if (!isNaN(idx)) applySlide(idx);
                });
            });

            // Modal Controls
            var modal = document.getElementById('heroShowcaseModal');
            var openBtn = document.getElementById('heroWatchShowcaseBtn');
            var closeBtn = document.getElementById('modalCloseBtn');
            var backdrop = document.getElementById('modalBackdrop');
            var video = document.getElementById('heroShowcaseVideo');

            function openModal() {
                if (!modal) return;
                modal.classList.add('is-open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                if (video) {
                    video.currentTime = 0;
                    video.play().catch(function() {});
                }
            }

            function closeModal() {
                if (!modal) return;
                modal.classList.remove('is-open');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
                if (video) video.pause();
            }

            if (openBtn) openBtn.addEventListener('click', openModal);
            if (closeBtn) closeBtn.addEventListener('click', closeModal);
            if (backdrop) backdrop.addEventListener('click', closeModal);

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
                    closeModal();
                }
            });
        });
        </script>
    </section>`;

const heroSectionRegex = /<!-- =+\s*2026 HERO REFERENCE DESIGN[\s\S]*?<\/section>/;
html = html.replace(heroSectionRegex, newHeroHtml);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with new hero section!');

// 3. Exact New Hero CSS
const newHeroCss = `/* ========================================================
   2026 ARCHITECTURAL HERO RECREATION (PIXEL-PERFECT FIDELITY)
   Exact recreation of reference design (Spaces That Inspire)
   Assets: img/main_herosec (hero1.png, hero2.png, hero3.png)
   ======================================================== */

.anbu-reference-hero-section {
  position: relative;
  background: radial-gradient(circle at 50% 30%, #e6dfd4 0%, #dbd0c1 45%, #cfc2b1 100%);
  padding: clamp(24px, 3.5vw, 36px) 0 clamp(32px, 4vw, 48px);
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
    0 26px 70px -15px rgba(45, 35, 25, 0.22),
    0 10px 28px -5px rgba(45, 35, 25, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.65) inset;
  transition: box-shadow 0.3s ease;
}

/* Main Visual Scene Area with House Background */
.hero-visual-scene {
  position: relative;
  min-height: 540px;
  background-image: url('../img/main_herosec/hero2.png');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: clamp(38px, 5.5vw, 60px) clamp(28px, 4.5vw, 56px) 96px;
  transition: background-image 0.6s ease-in-out;
}

/* Subtle lighting gradient to ensure text readability without obscuring sunset */
.hero-scene-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 252, 248, 0.58) 0%,
    rgba(255, 252, 248, 0.42) 32%,
    rgba(255, 252, 248, 0.1) 58%,
    transparent 78%
  );
  pointer-events: none;
  z-index: 1;
}

/* Top-Left Content Area */
.hero-intro-block {
  position: relative;
  z-index: 2;
  max-width: 480px;
}

/* Eyebrow Tracking */
.hero-eyebrow-tracking {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  color: #2e241c;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Editorial Luxury Display Headline */
.hero-display-serif-title {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(2.75rem, 5.2vw, 4.25rem);
  line-height: 1.05;
  font-weight: 400;
  color: #241a12;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.35);
}

.hero-display-serif-title span {
  display: block;
}

/* Lead Subtitle */
.hero-display-lead {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  font-size: 15px;
  line-height: 1.58;
  font-weight: 400;
  color: #4a3e35;
  max-width: 390px;
  margin-bottom: 28px;
}

/* Action Buttons */
.hero-action-buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
}

.hero-btn-pill-primary {
  background: #151210;
  color: #ffffff !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 13px 26px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  box-shadow: 0 8px 20px -4px rgba(21, 18, 16, 0.35);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.hero-btn-pill-primary:hover {
  background: #2b2420;
  transform: translateY(-2px);
  box-shadow: 0 12px 24px -4px rgba(21, 18, 16, 0.45);
  color: #ffffff !important;
}

.hero-btn-pill-primary:active {
  transform: translateY(0);
}

.hero-btn-showcase {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #241a12 !important;
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
  border: 1.5px solid #241a12;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(4px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #241a12;
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
  padding: 16px 28px 24px 28px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  z-index: 3;
}

/* Left: Featured Project Capsule Card */
.hero-featured-project-card {
  position: relative;
  background: #fffdfb;
  border-radius: 24px;
  padding: 16px 20px;
  margin-top: -54px; /* Overlaps house photo above shelf */
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
  grid-template-columns: 180px 1fr;
  gap: 16px;
  align-items: center;
}

.featured-eyebrow-label {
  display: block;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #63584e;
  margin-bottom: 8px;
}

.featured-thumb-frame {
  width: 180px;
  height: 116px;
  border-radius: 16px;
  overflow: hidden;
  background: #e8e2d8;
  box-shadow: 0 4px 12px rgba(30, 20, 10, 0.08);
}

.featured-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  font-size: 15.5px;
  font-weight: 700;
  color: #1a1510;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.featured-price-tag {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  color: #1a1510;
  white-space: nowrap;
}

.featured-project-desc {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 11.5px;
  line-height: 1.45;
  color: #61564c;
  margin: 4px 0 6px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.featured-view-link {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #1a1510 !important;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  transition: gap 0.2s ease, opacity 0.2s ease;
  margin-bottom: 8px;
}

.featured-view-link:hover {
  gap: 8px;
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
  width: 32px;
  height: 32px;
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
  border-radius: 22px;
  padding: 18px 28px;
  box-shadow: 
    0 18px 40px -10px rgba(40, 30, 20, 0.12),
    0 6px 16px -4px rgba(40, 30, 20, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.9) inset;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  flex: 0 1 500px;
  min-width: 440px;
  z-index: 4;
}

.hero-stat-col {
  text-align: center;
  padding: 0 10px;
}

.hero-stat-icon-wrap {
  color: #1a1510;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-stat-number {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #1a1510;
  line-height: 1.1;
  margin-bottom: 3px;
  letter-spacing: -0.01em;
}

.hero-stat-label {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #72675c;
  line-height: 1.25;
  white-space: nowrap;
}

.hero-stat-col-divider {
  width: 1px;
  height: 48px;
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
    padding: 16px 20px 20px 20px;
  }
  .hero-featured-project-card {
    flex: 1 1 500px;
  }
  .hero-stats-showcase-card {
    flex: 0 1 420px;
    min-width: 380px;
    padding: 16px 20px;
  }
  .hero-stat-number {
    font-size: 21px;
  }
  .hero-stat-label {
    font-size: 10px;
  }
}

@media (max-width: 991.98px) {
  .hero-visual-scene {
    min-height: 480px;
    padding: 36px 24px 60px;
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
      rgba(255, 252, 248, 0.78) 0%,
      rgba(255, 252, 248, 0.55) 50%,
      rgba(255, 252, 248, 0.15) 100%
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
    font-size: 18px;
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

const heroCssRegex = /\/\* =+\s*2026 HERO REFERENCE DESIGN[\s\S]*?(?=\/\* =+\s*UNIFIED 2026 SECTION HEADERS)/;
css = css.replace(heroCssRegex, newHeroCss);
fs.writeFileSync('css/style.css', css, 'utf8');
console.log('Successfully updated css/style.css with new hero CSS!');
