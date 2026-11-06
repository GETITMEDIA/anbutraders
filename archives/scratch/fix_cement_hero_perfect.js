const fs = require('fs');

// 1. Update cement/anbucement/index-demo-3.html
let html = fs.readFileSync('cement/anbucement/index-demo-3.html', 'utf8');

// A. Add Google Fonts to <head> if not present
if (!html.includes('Plus+Jakarta+Sans')) {
  const fontLinks = `    <!-- Google Web Fonts (Matches anbu-paint Typography) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
`;
  html = html.replace('<!-- Font Awesome & Bootstrap -->', fontLinks + '\n    <!-- Font Awesome & Bootstrap -->');
  console.log('Added Google Fonts to head in index-demo-3.html');
}

// B. Replace the hero section markup with bulletproof Bootstrap 4 structure
const heroSectionMarkup = `    <!-- ==============================================
         3. HERO SECTION (Light, Sunny & Minimal Aesthetic - Matches anbu-paint Feel)
         ============================================== -->
    <section class="hero-paint-carousel-wrapper anbu-cement-hero-wrapper" id="home">
        <div id="anbuCementHeroCarousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="5000" data-pause="hover">
            <!-- Carousel Bottom Dots Indicators -->
            <ol class="carousel-indicators hero-carousel-dots">
                <li data-target="#anbuCementHeroCarousel" data-slide-to="0" class="active" aria-label="Slide 1 - Primary TMT Steel Rebars"></li>
                <li data-target="#anbuCementHeroCarousel" data-slide-to="1" aria-label="Slide 2 - Certified Construction Cements"></li>
                <li data-target="#anbuCementHeroCarousel" data-slide-to="2" aria-label="Slide 3 - Civil Foundation Materials"></li>
            </ol>

            <div class="carousel-inner">
                <!-- Slide 1: Primary TMT Steel Rebars -->
                <div class="carousel-item active hero-carousel-slide anbu-cement-slide-1">
                    <div class="hero-slide-bg" style="background-image: url('img/slider/hero_steel_1.jpg');"></div>
                    <div class="container hero-slide-container">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-xl-6 hero-content-col">
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Primary Mill TMT &amp;</span>
                                    <span class="hero-title-orange">Fe-550D Steel Rebars</span>
                                </h1>
                                <div class="hero-accent-line"></div>
                                <p class="hero-clean-subtitle">
                                    Authorized primary stockist of Tata Tiscon 550D, JSW Neosteel, and Agni TMT with 100-ton computerized digital weighbridge accuracy.
                                </p>
                                <div class="hero-clean-cta">
                                    <a href="https://wa.me/919626325204?text=Hi%20Anbu%20Traders,%20I%20would%20like%20a%20price%20quote%20for%20TMT%20Steel%20Rebars." class="btn-hero-clean" target="_blank" rel="noopener noreferrer">
                                        Get Instant Quote <i class="fa fa-arrow-right ml-1"></i>
                                    </a>
                                    <a href="#services" class="btn-hero-clean-outline">
                                        Explore Products <i class="fa fa-cubes ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: Certified Construction Cements -->
                <div class="carousel-item hero-carousel-slide anbu-cement-slide-2">
                    <div class="hero-slide-bg" style="background-image: url('img/slider/hero_cement_2.jpg');"></div>
                    <div class="container hero-slide-container">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-xl-6 hero-content-col">
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Grade-53 Cement &amp;</span>
                                    <span class="hero-title-orange">Bulk Depot Supply</span>
                                </h1>
                                <div class="hero-accent-line"></div>
                                <p class="hero-clean-subtitle">
                                    Direct wholesale distributor for UltraTech, Dalmia DSP, Ramco Super, and Coromandel cements with zero-hour rapid site dispatch.
                                </p>
                                <div class="hero-clean-cta">
                                    <a href="https://wa.me/919626325204?text=Hi%20Anbu%20Traders,%20I%20would%20like%20a%20price%20quote%20for%20Cement." class="btn-hero-clean" target="_blank" rel="noopener noreferrer">
                                        Get Cement Rates <i class="fa fa-arrow-right ml-1"></i>
                                    </a>
                                    <a href="#services" class="btn-hero-clean-outline">
                                        View Brands <i class="fa fa-shield ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 3: Civil Foundation Materials -->
                <div class="carousel-item hero-carousel-slide anbu-cement-slide-3">
                    <div class="hero-slide-bg" style="background-image: url('img/slider/hero_foundation_3.jpg');"></div>
                    <div class="container hero-slide-container">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-xl-6 hero-content-col">
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Foundation to Roof</span>
                                    <span class="hero-title-orange">Built with Strength</span>
                                </h1>
                                <div class="hero-accent-line"></div>
                                <p class="hero-clean-subtitle">
                                    11+ years of trusted building material supply in Pondicherry and Tamil Nadu with guaranteed mill certification and direct fleet transport.
                                </p>
                                <div class="hero-clean-cta">
                                    <a href="https://wa.me/919626325204?text=Hi%20Anbu%20Traders,%20I%20would%20like%20to%20enquire%20about%20Steel%20and%20Cement." class="btn-hero-clean" target="_blank" rel="noopener noreferrer">
                                        Instant Price Quote <i class="fa fa-arrow-right ml-1"></i>
                                    </a>
                                    <a href="#services" class="btn-hero-clean-outline">
                                        Our Services <i class="fa fa-building ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

// Replace hero section
const heroRegex = /<!-- ==============================================\s*3\. HERO SECTION[\s\S]*?<\/section>/;
html = html.replace(heroRegex, heroSectionMarkup);

// C. Ensure explicit carousel initialization in script
const carouselInitScript = `
        // Explicitly initialize hero carousel with 5s autoplay
        $('#anbuCementHeroCarousel').carousel({
            interval: 5000,
            pause: 'hover'
        });
`;

if (!html.includes('#anbuCementHeroCarousel').valueOf() && !html.includes('carousel({')) {
  html = html.replace('$(document).ready(function () {', '$(document).ready(function () {' + carouselInitScript);
}

fs.writeFileSync('cement/anbucement/index-demo-3.html', html, 'utf8');
console.log('Updated cement/anbucement/index-demo-3.html');

// 2. Update cement/anbucement/css/cement-redesign.css with correct display rules
let css = fs.readFileSync('cement/anbucement/css/cement-redesign.css', 'utf8');

// Replace the hero CSS block with the bulletproof version
const oldHeroCssRegex = /\/\* ==============================================\s*2026 HERO CAROUSEL SECTION[\s\S]*$/;

const newHeroCss = `/* ==============================================
   2026 HERO CAROUSEL SECTION (Matches anbu-paint feel: Light, Sunny, Minimal & High-End)
   ============================================== */
.hero-paint-carousel-wrapper.anbu-cement-hero-wrapper {
  position: relative;
  background-color: #F8FAFC;
  min-height: 590px;
  overflow: hidden;
  padding: 0 !important;
}

#anbuCementHeroCarousel {
  position: relative;
  width: 100%;
}

/* CRITICAL FIX: Only the active or transitioning slide has display: flex */
.anbu-cement-hero-wrapper .carousel-item {
  display: none;
  position: relative;
  min-height: 590px;
  background-color: #F8FAFC;
  width: 100%;
  margin-right: -100%;
  float: left;
}

.anbu-cement-hero-wrapper .carousel-item.active,
.anbu-cement-hero-wrapper .carousel-item-next,
.anbu-cement-hero-wrapper .carousel-item-prev {
  display: flex !important;
  align-items: center;
}

.anbu-cement-hero-wrapper .hero-slide-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  transition: transform 7s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.anbu-cement-hero-wrapper .carousel-item.active .hero-slide-bg {
  transform: scale(1.025);
}

/* Light, clear sunny scrim - matches anbu-paint hero feel */
.anbu-cement-hero-wrapper .hero-slide-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.88) 0%, 
    rgba(255, 255, 255, 0.68) 38%, 
    rgba(255, 255, 255, 0.22) 58%, 
    transparent 78%);
  pointer-events: none;
  z-index: 2;
}

.anbu-cement-hero-wrapper .hero-slide-container {
  position: relative;
  z-index: 5;
  padding-top: 85px;
  padding-bottom: 95px;
  width: 100%;
}

/* Clean, Minimalist Typography matching anbu-paint Reference */
.anbu-cement-hero-wrapper .hero-clean-title {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.anbu-cement-hero-wrapper .hero-title-dark {
  font-size: 50px;
  line-height: 1.15;
  font-weight: 700;
  color: #0F1E36;
  letter-spacing: -0.025em;
}

.anbu-cement-hero-wrapper .hero-title-orange {
  font-size: 56px;
  line-height: 1.12;
  font-weight: 800;
  color: var(--c-orange, #f36a21);
  letter-spacing: -0.03em;
}

/* Orange Accent Line */
.anbu-cement-hero-wrapper .hero-accent-line {
  width: 44px;
  height: 3.5px;
  background: var(--c-orange, #f36a21);
  border-radius: 2px;
  margin: 18px 0 20px;
}

/* Clean 2-Line Subtitle */
.anbu-cement-hero-wrapper .hero-clean-subtitle {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16.5px;
  font-weight: 500;
  color: #334155;
  line-height: 1.6;
  max-width: 480px;
  margin-bottom: 28px;
}

/* Clean Hero CTA Container */
.anbu-cement-hero-wrapper .hero-clean-cta {
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
.anbu-cement-hero-wrapper .btn-hero-clean {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--c-orange, #f36a21);
  color: #FFFFFF !important;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 13px 30px;
  border-radius: 9999px;
  box-shadow: 0 8px 22px rgba(243, 106, 33, 0.35);
  border: none;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.anbu-cement-hero-wrapper .btn-hero-clean:hover {
  background: #ea580c;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(243, 106, 33, 0.45);
  color: #FFFFFF !important;
}

.anbu-cement-hero-wrapper .btn-hero-clean i {
  font-size: 13px;
  transition: transform 0.2s ease;
}

.anbu-cement-hero-wrapper .btn-hero-clean:hover i {
  transform: translateX(4px);
}

.anbu-cement-hero-wrapper .btn-hero-clean-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(8px);
  color: #0F1E36 !important;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 26px;
  border-radius: 9999px;
  border: 1.5px solid #0F1E36;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.anbu-cement-hero-wrapper .btn-hero-clean-outline:hover {
  background: #0F1E36;
  color: #FFFFFF !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15, 30, 54, 0.2);
}

/* Slide Content Entrance Animation */
.anbu-cement-hero-wrapper .carousel-item.active .hero-clean-title {
  animation: cementHeroSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both 0.1s;
}

.anbu-cement-hero-wrapper .carousel-item.active .hero-accent-line {
  animation: cementHeroSlideUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both 0.18s;
}

.anbu-cement-hero-wrapper .carousel-item.active .hero-clean-subtitle {
  animation: cementHeroSlideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both 0.25s;
}

.anbu-cement-hero-wrapper .carousel-item.active .hero-clean-cta {
  animation: cementHeroSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both 0.35s;
}

@keyframes cementHeroSlideUp {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modern Bottom Dots Indicators - Bulletproof Bootstrap 4 */
.anbu-cement-hero-wrapper .hero-carousel-dots {
  position: absolute;
  bottom: 24px !important;
  left: 0;
  right: 0;
  margin: 0 auto !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 15;
  list-style: none;
  padding: 0;
}

.anbu-cement-hero-wrapper .hero-carousel-dots li {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  background-color: rgba(15, 30, 54, 0.35) !important;
  border: none !important;
  transition: all 0.3s ease !important;
  padding: 0 !important;
  margin: 0 !important;
  cursor: pointer;
  flex: 0 0 10px !important;
  text-indent: -9999px;
  overflow: hidden;
  box-sizing: border-box;
}

.anbu-cement-hero-wrapper .hero-carousel-dots li.active {
  width: 28px !important;
  border-radius: 5px !important;
  background-color: var(--c-orange, #f36a21) !important;
  flex: 0 0 28px !important;
}

@media (max-width: 991.98px) {
  .anbu-cement-hero-wrapper .hero-slide-bg::after {
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.92) 0%, 
      rgba(255, 255, 255, 0.82) 55%, 
      rgba(255, 255, 255, 0.45) 100%);
  }
  .anbu-cement-hero-wrapper .hero-title-dark {
    font-size: 38px;
  }
  .anbu-cement-hero-wrapper .hero-title-orange {
    font-size: 42px;
  }
  .anbu-cement-hero-wrapper .carousel-item {
    min-height: 520px;
  }
  .anbu-cement-hero-wrapper .hero-slide-container {
    padding-top: 60px;
    padding-bottom: 70px;
  }
}

@media (max-width: 575.98px) {
  .anbu-cement-hero-wrapper .hero-title-dark {
    font-size: 28px;
  }
  .anbu-cement-hero-wrapper .hero-title-orange {
    font-size: 32px;
  }
  .anbu-cement-hero-wrapper .hero-clean-subtitle {
    font-size: 14.5px;
  }
  .anbu-cement-hero-wrapper .carousel-item {
    min-height: 480px;
  }
}
`;

css = css.replace(oldHeroCssRegex, newHeroCss);
fs.writeFileSync('cement/anbucement/css/cement-redesign.css', css, 'utf8');
console.log('Updated cement-redesign.css with bulletproof carousel CSS.');

