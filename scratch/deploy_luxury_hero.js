const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/Admin/.gemini/antigravity/brain/b8665a0a-01bb-475e-85a1-62cc2f021434';

// 1. Copy images
const imageCopies = [
  // Cement & Steel
  { src: path.join(brainDir, 'hero_cement_steel_tmt_1793878555438.jpg'), dest: 'cement/anbucement/img/slider/hero_steel_1.jpg' },
  { src: path.join(brainDir, 'hero_cement_2_v2_1793877470285.jpg'), dest: 'cement/anbucement/img/slider/hero_cement_2.jpg' },
  { src: 'cement/anbucement/img/cement_hero_cinematic.jpg', dest: 'cement/anbucement/img/slider/hero_foundation_3.jpg' },

  // Sheets & Pipes
  { src: path.join(brainDir, 'hero_sheets_colouron_luxury_1793878553696.jpg'), dest: 'a-steel/assets/img/slider/hero_sheets_1.jpg' },
  { src: path.join(brainDir, 'hero_pipes_apollo_luxury_1793878574936.jpg'), dest: 'a-steel/assets/img/slider/hero_pipes_2.jpg' },
  { src: path.join(brainDir, 'hero_puf_3_1793877480584.jpg'), dest: 'a-steel/assets/img/slider/hero_puf_3.jpg' }
];

imageCopies.forEach(c => {
  if (fs.existsSync(c.src)) {
    fs.mkdirSync(path.dirname(c.dest), { recursive: true });
    fs.copyFileSync(c.src, c.dest);
    console.log('Copied ' + c.src + ' -> ' + c.dest + ' (' + fs.statSync(c.dest).size + ' bytes)');
  } else {
    console.error('Source missing: ' + c.src);
  }
});

// 2. Update cement/anbucement/css/cement-redesign.css with luxury feel styling
let cementCss = fs.readFileSync('cement/anbucement/css/cement-redesign.css', 'utf8');

const cementHeroCssBlock = `/* ==============================================
   2026 HERO CAROUSEL SECTION (Matches anbu-paint Luxury Architectural Feel)
   ============================================== */
.hero-paint-carousel-wrapper.anbu-cement-hero-wrapper {
  position: relative;
  background-color: #F8FAFC;
  min-height: 600px;
  overflow: hidden;
  padding: 0 !important;
}

#anbuCementHeroCarousel {
  position: relative;
  width: 100%;
}

.anbu-cement-hero-wrapper .carousel-item {
  display: none;
  position: relative;
  min-height: 600px;
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
  transform: scale(1.028);
}

/* Luxury Light & Sunny Gradient - Perfectly masks left space & seamlessly reveals 3D subject */
.anbu-cement-hero-wrapper .hero-slide-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, 
    #FFFFFF 0%, 
    #FFFFFF 30%, 
    rgba(255, 255, 255, 0.94) 44%, 
    rgba(255, 255, 255, 0.40) 60%, 
    transparent 76%);
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

/* Eyebrow Pill Badge */
.anbu-cement-hero-wrapper .hero-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(243, 106, 33, 0.08);
  border: 1px solid rgba(243, 106, 33, 0.22);
  color: var(--c-orange, #f36a21);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.781rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 5px 14px;
  border-radius: 9999px;
  margin-bottom: 16px;
}

.anbu-cement-hero-wrapper .hero-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--c-orange, #f36a21);
  display: inline-block;
  box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.6);
  animation: cementPulseDot 2s infinite ease-in-out;
}

@keyframes cementPulseDot {
  0% { box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.6); }
  70% { box-shadow: 0 0 0 7px rgba(243, 106, 33, 0); }
  100% { box-shadow: 0 0 0 0 rgba(243, 106, 33, 0); }
}

/* Clean, Minimalist Typography matching anbu-paint Reference */
.anbu-cement-hero-wrapper .hero-clean-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.anbu-cement-hero-wrapper .hero-title-dark {
  font-size: clamp(34px, 3.6vw, 48px);
  line-height: 1.15;
  font-weight: 700;
  color: #0F1E36;
  letter-spacing: -0.025em;
  white-space: nowrap;
}

.anbu-cement-hero-wrapper .hero-title-orange {
  font-size: clamp(38px, 4.2vw, 54px);
  line-height: 1.12;
  font-weight: 800;
  color: var(--c-orange, #f36a21);
  letter-spacing: -0.03em;
  white-space: nowrap;
}

/* Orange Accent Line */
.anbu-cement-hero-wrapper .hero-accent-line {
  width: 44px;
  height: 3.5px;
  background: var(--c-orange, #f36a21);
  border-radius: 2px;
  margin: 16px 0 18px;
}

/* Clean 2-Line Subtitle */
.anbu-cement-hero-wrapper .hero-clean-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 15.5px;
  font-weight: 500;
  color: #475569;
  line-height: 1.62;
  max-width: 480px;
  margin-bottom: 26px;
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
  gap: 8px;
  background: var(--c-orange, #f36a21);
  color: #FFFFFF !important;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
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
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  color: #0F1E36 !important;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
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
.anbu-cement-hero-wrapper .carousel-item.active .hero-eyebrow-pill {
  animation: cementHeroSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both 0.05s;
}

.anbu-cement-hero-wrapper .carousel-item.active .hero-clean-title {
  animation: cementHeroSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both 0.12s;
}

.anbu-cement-hero-wrapper .carousel-item.active .hero-accent-line {
  animation: cementHeroSlideUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both 0.20s;
}

.anbu-cement-hero-wrapper .carousel-item.active .hero-clean-subtitle {
  animation: cementHeroSlideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both 0.28s;
}

.anbu-cement-hero-wrapper .carousel-item.active .hero-clean-cta {
  animation: cementHeroSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both 0.36s;
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
      rgba(255, 255, 255, 0.94) 0%, 
      rgba(255, 255, 255, 0.85) 55%, 
      rgba(255, 255, 255, 0.40) 100%);
  }
  .anbu-cement-hero-wrapper .hero-title-dark,
  .anbu-cement-hero-wrapper .hero-title-orange {
    white-space: normal;
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
  .anbu-cement-hero-wrapper .hero-clean-subtitle {
    font-size: 14px;
  }
  .anbu-cement-hero-wrapper .carousel-item {
    min-height: 480px;
  }
}
`;

const oldHeroCssRegex = /\/\* ==============================================\s*2026 HERO CAROUSEL SECTION[\s\S]*$/;
cementCss = cementCss.replace(oldHeroCssRegex, cementHeroCssBlock);
fs.writeFileSync('cement/anbucement/css/cement-redesign.css', cementCss, 'utf8');
console.log('Updated cement-redesign.css');

// 3. Update cement/anbucement/index-demo-3.html with refined typography
let cementHtml = fs.readFileSync('cement/anbucement/index-demo-3.html', 'utf8');

const cementHeroHtml = `<!-- ==============================================
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
                                <div class="hero-eyebrow-pill">
                                    <span class="hero-pulse-dot"></span> DIRECT MILL DISTRIBUTOR
                                </div>
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Primary Mill TMT</span>
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
                                        Explore Products <i class="fa fa-shield ml-1"></i>
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
                                <div class="hero-eyebrow-pill">
                                    <span class="hero-pulse-dot"></span> AUTHORIZED WHOLESALE DEPOT
                                </div>
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Grade-53 Cement</span>
                                    <span class="hero-title-orange">Bulk Project Supply</span>
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
                                <div class="hero-eyebrow-pill">
                                    <span class="hero-pulse-dot"></span> COMPLETE STRUCTURAL STRENGTH
                                </div>
                                <h1 class="hero-clean-title">
                                    <span class="hero-title-dark">Foundation to Roof</span>
                                    <span class="hero-title-orange">Civil Strength</span>
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

const heroSectionRegex = /<!-- ==============================================\s*3\. HERO SECTION[\s\S]*?<\/section>/;
cementHtml = cementHtml.replace(heroSectionRegex, cementHeroHtml);
fs.writeFileSync('cement/anbucement/index-demo-3.html', cementHtml, 'utf8');
console.log('Updated cement/anbucement/index-demo-3.html');

// 4. Update a-steel/assets/css/a-steel-2026.css with luxury feel styling
let steelCss = fs.readFileSync('a-steel/assets/css/a-steel-2026.css', 'utf8');

const steelHeroCssBlock = `/* ==============================================
   2026 HERO CAROUSEL SECTION (Matches anbu-paint Luxury Architectural Feel)
   ============================================== */
.hero-paint-carousel-wrapper.anbu-steel-hero-wrapper {
  position: relative;
  background-color: #F8FAFC;
  min-height: 600px;
  overflow: hidden;
  padding: 0 !important;
}

#anbuHeroCarousel {
  position: relative;
  width: 100%;
}

.anbu-steel-hero-wrapper .carousel-item {
  display: none;
  position: relative;
  min-height: 600px;
  background-color: #F8FAFC;
  width: 100%;
  margin-right: -100%;
  float: left;
}

.anbu-steel-hero-wrapper .carousel-item.active,
.anbu-steel-hero-wrapper .carousel-item-next,
.anbu-steel-hero-wrapper .carousel-item-prev {
  display: flex !important;
  align-items: center;
}

.anbu-steel-hero-wrapper .hero-slide-bg {
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

.anbu-steel-hero-wrapper .carousel-item.active .hero-slide-bg {
  transform: scale(1.028);
}

/* Luxury Light & Sunny Gradient - Soft, natural transition */
.anbu-steel-hero-wrapper .hero-slide-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, 
    #FFFFFF 0%, 
    #FFFFFF 30%, 
    rgba(255, 255, 255, 0.94) 44%, 
    rgba(255, 255, 255, 0.40) 60%, 
    transparent 76%);
  pointer-events: none;
  z-index: 2;
}

.anbu-steel-hero-wrapper .hero-slide-container {
  position: relative;
  z-index: 5;
  padding-top: 85px;
  padding-bottom: 95px;
  width: 100%;
}

/* Eyebrow Pill Badge */
.anbu-steel-hero-wrapper .hero-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 101, 0, 0.08);
  border: 1px solid rgba(255, 101, 0, 0.22);
  color: var(--primary-orange);
  font-family: var(--font-heading);
  font-size: 0.781rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 5px 14px;
  border-radius: 9999px;
  margin-bottom: 16px;
}

.anbu-steel-hero-wrapper .hero-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--primary-orange);
  display: inline-block;
  box-shadow: 0 0 0 0 rgba(255, 101, 0, 0.6);
  animation: steelPulseDot 2s infinite ease-in-out;
}

@keyframes steelPulseDot {
  0% { box-shadow: 0 0 0 0 rgba(255, 101, 0, 0.6); }
  70% { box-shadow: 0 0 0 7px rgba(255, 101, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 101, 0, 0); }
}

/* Clean, Minimalist Typography matching anbu-paint Reference */
.anbu-steel-hero-wrapper .hero-clean-title {
  font-family: var(--font-heading);
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.anbu-steel-hero-wrapper .hero-title-dark {
  font-size: clamp(34px, 3.6vw, 48px);
  line-height: 1.15;
  font-weight: 700;
  color: #0F1E36;
  letter-spacing: -0.025em;
  white-space: nowrap;
}

.anbu-steel-hero-wrapper .hero-title-orange {
  font-size: clamp(38px, 4.2vw, 54px);
  line-height: 1.12;
  font-weight: 800;
  color: var(--primary-orange);
  letter-spacing: -0.03em;
  white-space: nowrap;
}

/* Orange Accent Line */
.anbu-steel-hero-wrapper .hero-accent-line {
  width: 44px;
  height: 3.5px;
  background: var(--primary-orange);
  border-radius: 2px;
  margin: 16px 0 18px;
}

/* Clean 2-Line Subtitle */
.anbu-steel-hero-wrapper .hero-clean-subtitle {
  font-family: var(--font-body);
  font-size: 15.5px;
  font-weight: 500;
  color: #475569;
  line-height: 1.62;
  max-width: 480px;
  margin-bottom: 26px;
}

/* Clean Hero CTA Container */
.anbu-steel-hero-wrapper .hero-clean-cta {
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
.anbu-steel-hero-wrapper .btn-hero-clean {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary-orange);
  color: #FFFFFF !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14.5px;
  padding: 13px 30px;
  border-radius: var(--radius-full);
  box-shadow: 0 8px 22px rgba(255, 101, 0, 0.35);
  border: none;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.anbu-steel-hero-wrapper .btn-hero-clean:hover {
  background: var(--primary-orange-dark);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 101, 0, 0.45);
  color: #FFFFFF !important;
}

.anbu-steel-hero-wrapper .btn-hero-clean i {
  font-size: 13px;
  transition: transform 0.2s ease;
}

.anbu-steel-hero-wrapper .btn-hero-clean:hover i {
  transform: translateX(4px);
}

.anbu-steel-hero-wrapper .btn-hero-clean-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  color: #0F1E36 !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14.5px;
  padding: 12px 26px;
  border-radius: var(--radius-full);
  border: 1.5px solid #0F1E36;
  text-decoration: none !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.anbu-steel-hero-wrapper .btn-hero-clean-outline:hover {
  background: #0F1E36;
  color: #FFFFFF !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15, 30, 54, 0.2);
}

/* Slide Content Entrance Animation */
.anbu-steel-hero-wrapper .carousel-item.active .hero-eyebrow-pill {
  animation: steelHeroSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both 0.05s;
}

.anbu-steel-hero-wrapper .carousel-item.active .hero-clean-title {
  animation: steelHeroSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both 0.12s;
}

.anbu-steel-hero-wrapper .carousel-item.active .hero-accent-line {
  animation: steelHeroSlideUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both 0.20s;
}

.anbu-steel-hero-wrapper .carousel-item.active .hero-clean-subtitle {
  animation: steelHeroSlideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both 0.28s;
}

.anbu-steel-hero-wrapper .carousel-item.active .hero-clean-cta {
  animation: steelHeroSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both 0.36s;
}

@keyframes steelHeroSlideUp {
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
.anbu-steel-hero-wrapper .hero-carousel-dots {
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

.anbu-steel-hero-wrapper .hero-carousel-dots button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  background-color: rgba(15, 30, 54, 0.35) !important;
  border: none !important;
  transition: all 0.3s ease !important;
  padding: 0 !important;
  margin: 0 !important;
}

.anbu-steel-hero-wrapper .hero-carousel-dots button.active {
  width: 28px !important;
  border-radius: 5px !important;
  background-color: var(--primary-orange) !important;
}

@media (max-width: 991.98px) {
  .anbu-steel-hero-wrapper .hero-slide-bg::after {
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.94) 0%, 
      rgba(255, 255, 255, 0.85) 55%, 
      rgba(255, 255, 255, 0.40) 100%);
  }
  .anbu-steel-hero-wrapper .hero-title-dark,
  .anbu-steel-hero-wrapper .hero-title-orange {
    white-space: normal;
  }
  .anbu-steel-hero-wrapper .carousel-item {
    min-height: 520px;
  }
  .anbu-steel-hero-wrapper .hero-slide-container {
    padding-top: 60px;
    padding-bottom: 70px;
  }
}

@media (max-width: 575.98px) {
  .anbu-steel-hero-wrapper .hero-clean-subtitle {
    font-size: 14px;
  }
  .anbu-steel-hero-wrapper .carousel-item {
    min-height: 480px;
  }
}
`;

const oldSteelCssRegex = /\/\* ==============================================\s*2026 HERO CAROUSEL SECTION[\s\S]*$/;
steelCss = steelCss.replace(oldSteelCssRegex, steelHeroCssBlock);
fs.writeFileSync('a-steel/assets/css/a-steel-2026.css', steelCss, 'utf8');
console.log('Updated a-steel-2026.css');

// 5. Update a-steel/index.html with refined typography
let steelHtml = fs.readFileSync('a-steel/index.html', 'utf8');

const steelHeroHtml = `<!-- Hero Section (Light, Sunny & Minimal Aesthetic - Matches anbu-paint Feel) -->
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
                                <div class="hero-eyebrow-pill">
                                    <span class="hero-pulse-dot"></span> DIRECT MILL DISTRIBUTOR
                                </div>
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
                                <div class="hero-eyebrow-pill">
                                    <span class="hero-pulse-dot"></span> CERTIFIED STRUCTURAL HOLLOW SECTIONS
                                </div>
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
                                <div class="hero-eyebrow-pill">
                                    <span class="hero-pulse-dot"></span> ENERGY EFFICIENT INSULATION
                                </div>
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

const steelHeroRegex = /<!-- Hero Section \(Light, Sunny[\s\S]*?<\/section>/;
steelHtml = steelHtml.replace(steelHeroRegex, steelHeroHtml);
fs.writeFileSync('a-steel/index.html', steelHtml, 'utf8');
console.log('Updated a-steel/index.html');

