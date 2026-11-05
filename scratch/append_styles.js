const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let content = fs.readFileSync(cssPath, 'utf8');

const newStyles = `

/* ========================================================
   ANBU TRADERS — 2026 SPLIT HERO & 3-DIVISION BENTO SHOWCASE
   Industrial Swiss Minimalist Architecture
   ======================================================== */

/* Blueprint Grid Texture Overlay */
.hero-blueprint-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(6, 43, 91, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 43, 91, 0.035) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 1;
}

/* Hero Section Container */
.anbu-split-hero-section {
  position: relative;
  background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
  padding: clamp(3rem, 5vw, 4.5rem) 0 clamp(2.5rem, 4vw, 3.5rem);
  overflow: hidden;
  border-bottom: 1px solid rgba(6, 43, 91, 0.06);
}

.hero-text-col {
  position: relative;
  z-index: 2;
}

/* Eyebrow Badge */
.hero-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(6, 43, 91, 0.05);
  border: 1px solid rgba(6, 43, 91, 0.1);
  padding: 6px 14px;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--primary-navy);
  margin-bottom: 18px;
}

.hero-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary-orange);
  box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.7);
  animation: heroPulseDot 2s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes heroPulseDot {
  0% { box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(243, 106, 33, 0); }
  100% { box-shadow: 0 0 0 0 rgba(243, 106, 33, 0); }
}

/* Display H1 */
.hero-main-h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 3.8vw, 3.35rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--primary-navy);
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}

.hero-highlight {
  background: linear-gradient(135deg, #F36A21 0%, #EA580C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Lead Subtext */
.hero-lead-text {
  font-size: clamp(0.975rem, 1.15vw, 1.1rem);
  line-height: 1.65;
  color: #475569;
  max-width: 600px;
  margin-bottom: 28px;
}

/* Dual CTA Group */
.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  margin-bottom: 34px;
}

.btn-hero-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F36A21 0%, #EA580C 100%);
  color: #FFFFFF !important;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 13px 26px;
  border-radius: 12px;
  text-decoration: none !important;
  box-shadow: 0 8px 24px rgba(243, 106, 33, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.btn-hero-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(243, 106, 33, 0.4);
  color: #FFFFFF !important;
}

.btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  color: var(--primary-navy) !important;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1.5px solid rgba(6, 43, 91, 0.2);
  text-decoration: none !important;
  box-shadow: 0 2px 8px rgba(6, 43, 91, 0.04);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-hero-secondary:hover {
  transform: translateY(-2px);
  border-color: var(--primary-navy);
  background: #F8FAFC;
  box-shadow: 0 6px 16px rgba(6, 43, 91, 0.08);
  color: var(--primary-navy) !important;
}

/* Trust Proof Strip */
.hero-trust-strip {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-top: 22px;
  border-top: 1px solid rgba(6, 43, 91, 0.08);
}

.hero-trust-item {
  display: flex;
  flex-direction: column;
}

.trust-val {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--primary-navy);
  line-height: 1.2;
}

.trust-lbl {
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.hero-trust-divider {
  width: 1px;
  height: 28px;
  background: rgba(6, 43, 91, 0.12);
}

/* Right 3-Division Image Bento */
.hero-visual-col {
  position: relative;
  z-index: 2;
}

.hero-bento-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hero-bento-card {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 18px;
  text-decoration: none !important;
  border: 1px solid rgba(6, 43, 91, 0.1);
  box-shadow: 0 10px 28px rgba(6, 43, 91, 0.08);
  background: #031836;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
}

.hero-bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(6, 43, 91, 0.16);
  border-color: rgba(243, 106, 33, 0.4);
}

.hero-bento-card.card-featured {
  height: 240px;
}

.hero-bento-subgroup {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.hero-bento-card.card-small {
  height: 175px;
}

.hero-bento-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-bento-card:hover .hero-bento-img {
  transform: scale(1.06);
}

.hero-bento-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(3, 24, 54, 0.15) 0%, rgba(3, 24, 54, 0.45) 50%, rgba(3, 24, 54, 0.92) 100%);
  pointer-events: none;
}

.hero-bento-content {
  position: absolute;
  inset: 0;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  color: #FFFFFF;
}

.hero-bento-tag {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  font-family: var(--font-heading);
  font-size: 0.688rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 9999px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 6px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.hero-bento-tag.tag-orange {
  background: rgba(243, 106, 33, 0.9);
  color: #FFFFFF;
}

.hero-bento-tag.tag-blue {
  background: rgba(2, 132, 199, 0.9);
  color: #FFFFFF;
}

.hero-bento-tag.tag-purple {
  background: rgba(147, 51, 234, 0.9);
  color: #FFFFFF;
}

.hero-bento-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.25;
  margin-bottom: 4px;
}

.hero-bento-title-sm {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.25;
  margin-bottom: 4px;
}

.hero-bento-desc {
  font-size: 0.775rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 6px;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hero-bento-link {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  color: #FFFFFF;
  display: inline-flex;
  align-items: center;
  opacity: 0.9;
  transition: opacity 0.2s, transform 0.2s;
}

.hero-bento-card:hover .hero-bento-link {
  opacity: 1;
  transform: translateX(3px);
  color: #FDBA74;
}

@media (max-width: 991.98px) {
  .anbu-split-hero-section {
    padding: 2.5rem 0 2rem;
  }
  .hero-bento-grid {
    margin-top: 24px;
  }
}

@media (max-width: 575.98px) {
  .hero-bento-subgroup {
    grid-template-columns: 1fr;
  }
  .hero-trust-strip {
    flex-wrap: wrap;
    gap: 12px;
  }
  .hero-trust-divider {
    display: none;
  }
}

/* ========================================================
   HOW WE DELIVER — 4-STEP LOGISTICS TIMELINE
   ======================================================== */
.how-we-deliver-section {
  padding: clamp(3rem, 5vw, 4.5rem) 0;
  background: #F8FAFC;
  border-top: 1px solid rgba(6, 43, 91, 0.06);
  border-bottom: 1px solid rgba(6, 43, 91, 0.06);
  position: relative;
}

.deliver-step-card {
  background: #FFFFFF;
  border: 1px solid rgba(6, 43, 91, 0.08);
  border-radius: 18px;
  padding: 28px 22px 22px;
  box-shadow: 0 4px 16px rgba(6, 43, 91, 0.04);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.deliver-step-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 36px rgba(6, 43, 91, 0.1);
  border-color: rgba(243, 106, 33, 0.3);
}

.deliver-step-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  background: rgba(6, 43, 91, 0.06);
  color: var(--primary-navy);
  font-family: var(--font-heading);
  font-size: 0.688rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 9999px;
  letter-spacing: 0.5px;
}

.deliver-step-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 18px;
}

.deliver-step-icon.icon-orange {
  background: rgba(243, 106, 33, 0.1);
  color: var(--primary-orange);
}

.deliver-step-icon.icon-emerald {
  background: rgba(16, 185, 129, 0.1);
  color: #10B981;
}

.deliver-step-icon.icon-blue {
  background: rgba(2, 132, 199, 0.1);
  color: #0284C7;
}

.deliver-step-icon.icon-purple {
  background: rgba(147, 51, 234, 0.1);
  color: #9333EA;
}

.deliver-step-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--primary-navy);
  margin-bottom: 8px;
}

.deliver-step-desc {
  font-size: 0.84rem;
  line-height: 1.55;
  color: #64748B;
  margin-bottom: 16px;
  flex-grow: 1;
}

.deliver-step-tag {
  display: inline-block;
  align-self: flex-start;
  font-family: var(--font-heading);
  font-size: 0.688rem;
  font-weight: 700;
  color: var(--primary-orange);
  background: rgba(243, 106, 33, 0.08);
  padding: 3px 8px;
  border-radius: 6px;
}

/* ========================================================
   HIGH-IMPACT PRE-FOOTER CTA BAND (GRADIENT BORDER)
   ======================================================== */
.anbu-cta-band-section {
  padding: clamp(2rem, 4vw, 3.5rem) 0 clamp(3rem, 5vw, 4.5rem);
}

.cta-gradient-box {
  background: linear-gradient(135deg, #031836 0%, #062B5B 100%);
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3.25rem);
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(6, 43, 91, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.cta-gradient-box::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(243, 106, 33, 0.25) 0%, transparent 70%);
  pointer-events: none;
}

.cta-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 14px;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  margin-bottom: 14px;
}

.cta-title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  margin-bottom: 12px;
}

.cta-subtext {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  max-width: 620px;
  margin-bottom: 14px;
}

.cta-quick-contacts {
  font-size: 0.825rem;
  color: rgba(255, 255, 255, 0.75);
}

.cta-btn-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-cta-whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  color: #FFFFFF !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.925rem;
  padding: 13px 24px;
  border-radius: 12px;
  text-decoration: none !important;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.35);
  transition: all 0.3s ease;
}

.btn-cta-whatsapp:hover {
  background: #20BA5A;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
  color: #FFFFFF !important;
}

.btn-cta-call {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  color: #FFFFFF !important;
  border: 1px solid rgba(255, 255, 255, 0.25);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.925rem;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none !important;
  transition: all 0.3s ease;
}

.btn-cta-call:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  color: #FFFFFF !important;
}
`;

fs.writeFileSync(cssPath, content + newStyles);
console.log('Appended 2026 styles to css/style.css successfully.');

