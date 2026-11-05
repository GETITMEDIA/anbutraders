const fs = require('fs');

const cssPath = 'css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const startMarker = '/* ========================================================\n   ANBU TRADERS — MODERN OUR BUSINESSES SECTION\n   ======================================================== */';
const endMarker = '/* ── Products Section (2026 Premium Architectural Redesign) ── */';

// Also check with \r\n
let startIdx = css.indexOf(startMarker);
if (startIdx === -1) {
  startIdx = css.indexOf(startMarker.replace(/\n/g, '\r\n'));
}
let endIdx = css.indexOf(endMarker);
if (endIdx === -1) {
  endIdx = css.indexOf(endMarker.replace(/\n/g, '\r\n'));
}

console.log('startIdx:', startIdx, 'endIdx:', endIdx);

if (startIdx === -1 || endIdx === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

const newCss = `/* ========================================================
   ANBU TRADERS — 2026 ELITE OUR BUSINESSES SHOWCASE (REDESIGN)
   ======================================================== */
.businesses-section {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0;
  background: radial-gradient(circle at 10% 15%, rgba(243, 106, 33, 0.05) 0%, transparent 45%),
              radial-gradient(circle at 90% 85%, rgba(6, 43, 91, 0.06) 0%, transparent 45%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

/* Section Header */
.biz-section-header {
  max-width: 820px;
  margin: 0 auto 36px;
  text-align: center;
}

.biz-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(243, 106, 33, 0.09);
  border: 1px solid rgba(243, 106, 33, 0.28);
  color: var(--primary-orange);
  font-family: var(--font-heading);
  font-size: 0.813rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 7px 18px;
  border-radius: 9999px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(243, 106, 33, 0.1);
}

.biz-pulsing-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-orange);
  display: inline-block;
  animation: bizPulse 2s infinite ease-in-out;
}

.biz-main-title {
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  font-weight: 800;
  color: var(--primary-navy);
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 14px;
}

.biz-heading-accent {
  background: linear-gradient(135deg, #f36a21 0%, #ea580c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.biz-title-bar {
  width: 64px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-orange), #ff9955);
  margin: 12px auto 16px;
  border-radius: 4px;
}

.biz-lead-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0 auto;
}

/* ── 2026 Segmented Floating Tab Navigation ── */
.biz-tabs-wrapper {
  max-width: 1080px;
  margin: 36px auto 34px;
}

.biz-tabs-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #ffffff;
  padding: 8px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(6, 43, 91, 0.08);
  border: 1px solid rgba(6, 43, 91, 0.08);
  gap: 8px;
  position: relative;
}

.biz-tab-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  background: transparent;
  border: 1.5px solid transparent;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: left;
  outline: none;
  position: relative;
  overflow: hidden;
}

.biz-tab-btn:hover {
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(6, 43, 91, 0.06);
}

.biz-tab-btn.active {
  background: linear-gradient(135deg, #031836 0%, #062b5b 100%);
  border-color: rgba(243, 106, 33, 0.4);
  box-shadow: 0 8px 24px rgba(6, 43, 91, 0.28);
  transform: translateY(-2px);
}

.biz-tab-icon-wrap {
  width: 46px;
  height: 46px;
  min-width: 46px;
  border-radius: 12px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.biz-tab-btn.active .biz-tab-icon-wrap {
  background: rgba(243, 106, 33, 0.25);
  box-shadow: 0 0 16px rgba(243, 106, 33, 0.45);
}

.biz-tab-icon {
  width: 25px;
  height: 25px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.biz-tab-btn:hover .biz-tab-icon {
  transform: scale(1.1);
}

.biz-tab-text {
  display: flex;
  flex-direction: column;
}

.biz-tab-text strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--primary-navy);
  transition: color 0.3s ease;
  line-height: 1.3;
}

.biz-tab-text small {
  display: block;
  font-size: 0.75rem;
  color: #64748b;
  transition: color 0.3s ease;
  line-height: 1.3;
}

.biz-tab-btn.active .biz-tab-text strong {
  color: #ffffff;
}

.biz-tab-btn.active .biz-tab-text small {
  color: #cbd5e1;
}

/* ── Tab Panels with Smooth Slide-in Animation ── */
.biz-tabs-content {
  position: relative;
}

.biz-panel {
  display: none;
}

.biz-panel.active {
  display: block;
  animation: bizPanelSlideIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* ── Split Layout Card ── */
.biz-card-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(6, 43, 91, 0.08);
  box-shadow: 0 20px 50px rgba(6, 43, 91, 0.09);
  overflow: hidden;
  min-height: 520px;
  transition: box-shadow 0.35s ease;
}

.biz-card-grid:hover {
  box-shadow: 0 25px 65px rgba(6, 43, 91, 0.15);
}

/* Left Column: Procurement Details */
.biz-content-col {
  padding: clamp(32px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.biz-panel-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  font-family: var(--font-heading);
  font-size: 0.781rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--primary-navy);
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 6px 14px;
  border-radius: 9999px;
  margin-bottom: 16px;
}

.biz-panel-badge i {
  color: var(--primary-orange);
}

.biz-panel-title {
  font-family: var(--font-heading);
  font-size: clamp(1.45rem, 2.3vw, 1.95rem);
  font-weight: 800;
  color: var(--primary-navy);
  margin-bottom: 14px;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.biz-panel-desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: #475569;
  margin-bottom: 24px;
}

/* 2x2 Bento Specs Grid */
.biz-specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 18px;
  margin-bottom: 24px;
}

.biz-spec-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #f8fafc;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #eef2f6;
  transition: all 0.25s ease;
}

.biz-spec-item:hover {
  background: #ffffff;
  border-color: rgba(243, 106, 33, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 43, 91, 0.06);
}

.biz-spec-icon-box {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 8px;
  background: rgba(243, 106, 33, 0.12);
  color: var(--primary-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
}

.biz-spec-text strong {
  display: block;
  font-size: 0.844rem;
  font-weight: 700;
  color: var(--primary-navy);
  line-height: 1.3;
}

.biz-spec-text span {
  display: block;
  font-size: 0.765rem;
  color: #64748b;
  line-height: 1.35;
  margin-top: 2px;
}

/* Authorized Brand Ribbon */
.biz-brands-strip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 18px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px dashed rgba(6, 43, 91, 0.18);
  margin-bottom: 24px;
}

.biz-brand-label {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-navy);
  letter-spacing: 0.5px;
  margin-right: 4px;
}

.biz-brand-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.biz-pill {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-navy);
  background: #ffffff;
  padding: 4px 11px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
}

.biz-pill:hover {
  border-color: var(--primary-orange);
  color: var(--primary-orange);
  transform: translateY(-1px);
}

/* Action Buttons */
.biz-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
}

.biz-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #f36a21 0%, #e05510 100%);
  color: #ffffff !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.938rem;
  padding: 13px 26px;
  border-radius: 9999px;
  border: none;
  text-decoration: none !important;
  box-shadow: 0 6px 18px rgba(243, 106, 33, 0.35);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.biz-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(243, 106, 33, 0.48);
  color: #ffffff !important;
}

.biz-btn-primary i {
  transition: transform 0.3s ease;
}

.biz-btn-primary:hover i {
  transform: translateX(4px);
}

.biz-btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #25d366;
  color: #ffffff !important;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.938rem;
  padding: 13px 24px;
  border-radius: 9999px;
  border: none;
  text-decoration: none !important;
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.biz-btn-whatsapp:hover {
  background: #1eb857;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(37, 211, 102, 0.45);
  color: #ffffff !important;
}

/* ── Right Column: 3D Tilt Visual Card ── */
.biz-visual-col {
  position: relative;
  perspective: 1200px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #031836;
}

.biz-3d-visual-card {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 460px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
  transition: transform 0.25s ease-out;
  transform-style: preserve-3d;
}

.biz-showcase-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.biz-3d-visual-card:hover .biz-showcase-bg-img {
  transform: scale(1.06);
}

.biz-visual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(3, 24, 54, 0.35) 0%, rgba(3, 24, 54, 0.08) 40%, rgba(3, 24, 54, 0.88) 100%);
  z-index: 1;
}

/* Floating Badges on Visual */
.biz-floating-tag-top {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(3, 24, 54, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 0.813rem;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: bizFloat 4s ease-in-out infinite;
}

.biz-floating-tag-top i {
  color: var(--primary-orange);
}

.biz-floating-tag-bottom {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(3, 24, 54, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  z-index: 2;
}

.biz-floating-bottom-title {
  font-size: 0.875rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 2px;
}

.biz-floating-bottom-sub {
  font-size: 0.75rem;
  color: #94a3b8;
}

.biz-floating-badge-chip {
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffa56e;
  background: rgba(243, 106, 33, 0.18);
  border: 1px solid rgba(243, 106, 33, 0.4);
  padding: 4px 12px;
  border-radius: 9999px;
  white-space: nowrap;
}

/* ── Keyframe Animations ── */
@keyframes bizPanelSlideIn {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes bizFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
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

/* ── Responsive Media Queries ── */
@media (max-width: 991px) {
  .biz-tabs-nav {
    grid-template-columns: repeat(2, 1fr);
  }
  .biz-card-grid {
    grid-template-columns: 1fr;
  }
  .biz-visual-col {
    order: 1;
    min-height: 340px;
    padding: 18px;
  }
  .biz-3d-visual-card {
    min-height: 300px;
  }
  .biz-content-col {
    order: 2;
    padding: 28px 22px;
  }
}

@media (max-width: 575px) {
  .biz-tabs-nav {
    grid-template-columns: 1fr;
  }
  .biz-specs-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .biz-actions {
    flex-direction: column;
    width: 100%;
  }
  .biz-btn-primary,
  .biz-btn-whatsapp {
    width: 100%;
    justify-content: center;
  }
}

`;

const updatedCss = css.substring(0, startIdx) + newCss + css.substring(endIdx);
fs.writeFileSync(cssPath, updatedCss, 'utf8');
console.log('✅ Successfully updated businesses-section in css/style.css!');

