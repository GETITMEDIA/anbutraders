const fs = require('fs');

// 1. Update a-steel/assets/css/a-steel-2026.css
let css = fs.readFileSync('a-steel/assets/css/a-steel-2026.css', 'utf8');

const heroCssToAdd = `
/* ==============================================
   2026 HERO CAROUSEL SECTION (Matches anbu-paint feel: Light, Sunny, Minimal & High-End)
   ============================================== */
.hero-paint-carousel-wrapper.anbu-steel-hero-wrapper {
  position: relative;
  background-color: #F8FAFC;
  min-height: 590px;
  overflow: hidden;
}

#anbuHeroCarousel {
  position: relative;
  width: 100%;
}

.hero-carousel-slide {
  position: relative;
  min-height: 590px;
  display: flex;
  align-items: center;
  background-color: #F8FAFC;
}

.hero-slide-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  transition: transform 7s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-carousel-slide.active .hero-slide-bg {
  transform: scale(1.025);
}

/* Light, clear sunny scrim - matches anbu-paint hero feel */
.hero-slide-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.82) 0%, 
    rgba(255, 255, 255, 0.60) 35%, 
    rgba(255, 255, 255, 0.18) 55%, 
    transparent 75%);
  pointer-events: none;
}

.hero-slide-container {
  position: relative;
  z-index: 5;
  padding-top: 85px;
  padding-bottom: 95px;
  width: 100%;
}

/* Clean, Minimalist Typography matching anbu-paint Reference */
.hero-clean-title {
  font-family: var(--font-heading);
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero-title-dark {
  font-size: 50px;
  line-height: 1.15;
  font-weight: 700;
  color: #0F1E36;
  letter-spacing: -0.025em;
}

.hero-title-orange {
  font-size: 56px;
  line-height: 1.12;
  font-weight: 800;
  color: var(--primary-orange);
  letter-spacing: -0.03em;
}

/* Orange Accent Line */
.hero-accent-line {
  width: 44px;
  height: 3.5px;
  background: var(--primary-orange);
  border-radius: 2px;
  margin: 18px 0 20px;
}

/* Clean 2-Line Subtitle */
.hero-clean-subtitle {
  font-family: var(--font-body);
  font-size: 16.5px;
  font-weight: 500;
  color: #334155;
  line-height: 1.6;
  max-width: 470px;
  margin-bottom: 28px;
}

/* Clean Hero CTA Container */
.hero-clean-cta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  position: relative;
  overflow: visible !important;
  min-height: 52px;
  z-index: 10;
}

/* Single Pill CTA Button */
.btn-hero-clean {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--primary-orange);
  color: #FFFFFF !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  padding: 13px 30px;
  border-radius: var(--radius-full);
  box-shadow: 0 8px 22px rgba(255, 101, 0, 0.35);
  border: none;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-hero-clean:hover {
  background: var(--primary-orange-dark);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 101, 0, 0.45);
  color: #FFFFFF !important;
}

.btn-hero-clean i {
  font-size: 13px;
  transition: transform 0.2s ease;
}

.btn-hero-clean:hover i {
  transform: translateX(4px);
}

.btn-hero-clean-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  color: #0F1E36 !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  padding: 12px 26px;
  border-radius: var(--radius-full);
  border: 1.5px solid #0F1E36;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-hero-clean-outline:hover {
  background: #0F1E36;
  color: #FFFFFF !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15, 30, 54, 0.2);
}

/* Slide Content Entrance Animation */
.hero-carousel-slide.active .hero-clean-title {
  animation: aSteelHeroSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both 0.1s;
}

.hero-carousel-slide.active .hero-accent-line {
  animation: aSteelHeroSlideUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both 0.18s;
}

.hero-carousel-slide.active .hero-clean-subtitle {
  animation: aSteelHeroSlideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both 0.25s;
}

.hero-carousel-slide.active .hero-clean-cta {
  animation: aSteelHeroSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both 0.35s;
}

@keyframes aSteelHeroSlideUp {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modern Bottom Dots Indicators */
.hero-carousel-dots {
  position: absolute;
  bottom: 24px !important;
  left: 0;
  right: 0;
  margin: 0 auto !important;
  display: flex !important;
  justify-content: center;
  gap: 10px;
  z-index: 12;
}

.hero-carousel-dots button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  background-color: rgba(15, 30, 54, 0.35) !important;
  border: none !important;
  transition: all 0.3s ease !important;
  padding: 0 !important;
  margin: 0 !important;
}

.hero-carousel-dots button.active {
  width: 28px !important;
  border-radius: 5px !important;
  background-color: var(--primary-orange) !important;
}

@media (max-width: 991.98px) {
  .hero-slide-bg::after {
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.90) 0%, 
      rgba(255, 255, 255, 0.80) 55%, 
      rgba(255, 255, 255, 0.45) 100%);
  }
  .hero-title-dark {
    font-size: 38px;
  }
  .hero-title-orange {
    font-size: 42px;
  }
  .hero-carousel-slide {
    min-height: 520px;
  }
  .hero-slide-container {
    padding-top: 60px;
    padding-bottom: 70px;
  }
}

@media (max-width: 575.98px) {
  .hero-title-dark {
    font-size: 28px;
  }
  .hero-title-orange {
    font-size: 32px;
  }
  .hero-clean-subtitle {
    font-size: 14.5px;
  }
  .hero-carousel-slide {
    min-height: 480px;
  }
}
`;

css += '\n' + heroCssToAdd;
fs.writeFileSync('a-steel/assets/css/a-steel-2026.css', css, 'utf8');
console.log('Appended hero CSS to a-steel-2026.css');

// 2. Update a-steel/index.html
let html = fs.readFileSync('a-steel/index.html', 'utf8');

const oldHeroMarkupRegex = /<!-- Hero Section \(Matching Reference Design\) -->[\s\S]*?<\/section>/;

const newHeroMarkup = `<!-- Hero Section (Light, Sunny & Minimal Aesthetic - Matches anbu-paint Feel) -->
    <section class="hero-paint-carousel-wrapper anbu-steel-hero-wrapper" id="heroSection">
        <div id="anbuHeroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="hover">
            <!-- Carousel Bottom Dots Indicators -->
            <div class="carousel-indicators hero-carousel-dots">
                <button type="button" data-bs-target="#anbuHeroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1 - JSW Roofing Sheets"></button>
                <button type="button" data-bs-target="#anbuHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2 - APL Apollo Steel Pipes"></button>
                <button type="button" data-bs-target="#anbuHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3 - PUF Insulated Panels"></button>
            </div>

            <div class="carousel-inner">
                <!-- Slide 1: Roofing Sheets -->
                <div class="carousel-item active hero-carousel-slide anbu-steel-slide-1">
                    <div class="hero-slide-bg" style="background-image: url('assets/img/slider/hero_sheets_1.jpg');"></div>
                    <div class="container hero-slide-container">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-xl-6 hero-content-col">
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Roofing Sheets &amp;</span>
                                    <span class="hero-title-orange">Profile Solutions</span>
                                </h1>
                                <div class="hero-accent-line"></div>
                                <p class="hero-clean-subtitle">
                                    Authorized stockist of JSW Colouron+, Pragati sheets, and custom trapezoidal profiles engineered for superior durability.
                                </p>
                                <div class="hero-clean-cta">
                                    <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20get%20a%20quote%20for%20Roofing%20Sheets." class="btn-hero-clean" target="_blank" rel="noopener noreferrer">
                                        Get Instant Quote <i class="las la-arrow-right ms-1"></i>
                                    </a>
                                    <a href="#products" class="btn-hero-clean-outline">
                                        Explore Products <i class="las la-layer-group ms-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: Structural Pipes & Tubes -->
                <div class="carousel-item hero-carousel-slide anbu-steel-slide-2">
                    <div class="hero-slide-bg" style="background-image: url('assets/img/slider/hero_pipes_2.jpg');"></div>
                    <div class="container hero-slide-container">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-xl-6 hero-content-col">
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Structural Tubes &amp;</span>
                                    <span class="hero-title-orange">MS / GI Pipes</span>
                                </h1>
                                <div class="hero-accent-line"></div>
                                <p class="hero-clean-subtitle">
                                    Primary mill APL Apollo circular, square, and rectangular hollow sections certified for industrial sheds and fabrication.
                                </p>
                                <div class="hero-clean-cta">
                                    <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20inquire%20about%20GI%20Pipes%20and%20MS%20Structural%20Tubes." class="btn-hero-clean" target="_blank" rel="noopener noreferrer">
                                        Get Instant Quote <i class="las la-arrow-right ms-1"></i>
                                    </a>
                                    <a href="#products" class="btn-hero-clean-outline">
                                        Explore Products <i class="las la-layer-group ms-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 3: PUF Panels & Trusses -->
                <div class="carousel-item hero-carousel-slide anbu-steel-slide-3">
                    <div class="hero-slide-bg" style="background-image: url('assets/img/slider/hero_puf_3.jpg');"></div>
                    <div class="container hero-slide-container">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-xl-6 hero-content-col">
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Insulated PUF &amp;</span>
                                    <span class="hero-title-orange">Commercial Panels</span>
                                </h1>
                                <div class="hero-accent-line"></div>
                                <p class="hero-clean-subtitle">
                                    High-performance thermal sandwich roof panels, daylight polycarbonate sheets, and factory accessories with rapid delivery.
                                </p>
                                <div class="hero-clean-cta">
                                    <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20get%20an%20estimate%20for%20PUF%20Insulated%20Panels." class="btn-hero-clean" target="_blank" rel="noopener noreferrer">
                                        Get Instant Quote <i class="las la-arrow-right ms-1"></i>
                                    </a>
                                    <a href="#products" class="btn-hero-clean-outline">
                                        Explore Products <i class="las la-layer-group ms-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

if (oldHeroMarkupRegex.test(html)) {
  html = html.replace(oldHeroMarkupRegex, newHeroMarkup);
  fs.writeFileSync('a-steel/index.html', html, 'utf8');
  console.log('Successfully updated a-steel/index.html with anbu-paint hero feel!');
} else {
  console.warn('Regex did not match old hero markup in a-steel/index.html');
}

