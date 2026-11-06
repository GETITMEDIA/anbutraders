const fs = require('fs');

console.log('=== APPLYING UNIFIED CONTAINER & SPACING SYSTEM TO STYLE.CSS ===');

let css = fs.readFileSync('css/style.css', 'utf8');

// Replace the old conflicting .container-xxl at Position 75159
css = css.replace(
  '.container-xxl { max-width: 1380px; }',
  '/* .container-xxl unified to 1320px */'
);

// Append the comprehensive Unified Container & Spacing System
const unifiedSystem = `
/* ========================================================
   2026 UNIFIED SYSTEMIC SPACING, CONTAINER & MARGIN SYSTEM
   ======================================================== */
:root {
  --site-container-max: 1320px;
  --container-gutter-x: clamp(16px, 2.5vw, 24px);
  --section-spacing-y: clamp(3.25rem, 5vw, 4.75rem);
  --section-spacing-sm: clamp(2rem, 3.2vw, 2.75rem);
}

/* 1. Viewport & Universal Horizontal Overflow Prevention */
html, body {
  overflow-x: hidden !important;
  max-width: 100% !important;
  width: 100% !important;
  position: relative;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Global Container Alignment — 100% Consistent Left/Right on Every Page & Section */
.container,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm,
.anbu-page-hero .container,
.anbu-footer-container,
.anbu-unified-copyright .anbu-footer-container {
  width: 100% !important;
  max-width: var(--site-container-max) !important;
  padding-right: var(--container-gutter-x) !important;
  padding-left: var(--container-gutter-x) !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

/* Strict Breakpoint Max-Widths — Synchronized Across Entire Project */
@media (min-width: 1400px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm,
  .anbu-page-hero .container, .anbu-footer-container, .anbu-unified-copyright .anbu-footer-container {
    max-width: 1320px !important;
  }
}

@media (min-width: 1200px) and (max-width: 1399.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm,
  .anbu-page-hero .container, .anbu-footer-container, .anbu-unified-copyright .anbu-footer-container {
    max-width: 1140px !important;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm,
  .anbu-page-hero .container, .anbu-footer-container, .anbu-unified-copyright .anbu-footer-container {
    max-width: 960px !important;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm,
  .anbu-page-hero .container, .anbu-footer-container, .anbu-unified-copyright .anbu-footer-container {
    max-width: 720px !important;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm,
  .anbu-page-hero .container, .anbu-footer-container, .anbu-unified-copyright .anbu-footer-container {
    max-width: 540px !important;
  }
}

@media (max-width: 575.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm,
  .anbu-page-hero .container, .anbu-footer-container, .anbu-unified-copyright .anbu-footer-container {
    max-width: 100% !important;
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
}

/* Guard against nested container double indentation */
.container .container,
.container-xxl .container,
.container-fluid .container,
.site-section .container .container {
  padding-left: 0 !important;
  padding-right: 0 !important;
  max-width: 100% !important;
}

/* 3. Global Section Vertical Rhythm */
.site-section,
.businesses-section,
.products-catalog-section,
.why-choose-section,
.anbu-features-section,
.anbu-team-section,
.testimonial-section {
  padding-top: var(--section-spacing-y) !important;
  padding-bottom: var(--section-spacing-y) !important;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.site-section-sm {
  padding-top: var(--section-spacing-sm) !important;
  padding-bottom: var(--section-spacing-sm) !important;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

/* Standardize section headers spacing */
.section-header,
.biz-section-header,
.biz-showcase-header,
.why-section-header {
  margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem) !important;
}

/* 4. Global Navbar & Topbar Alignment on Mobile & Desktop */
@media (max-width: 991.98px) {
  .navbar {
    padding-right: var(--container-gutter-x) !important;
    padding-left: var(--container-gutter-x) !important;
  }
  .navbar .navbar-brand {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .topbar-right {
    padding-left: var(--container-gutter-x) !important;
    padding-right: var(--container-gutter-x) !important;
  }
}

/* 5. Global Row & Column Gutter Harmonization */
.row {
  margin-right: calc(-1 * var(--container-gutter-x));
  margin-left: calc(-1 * var(--container-gutter-x));
}
.row > * {
  padding-right: var(--container-gutter-x);
  padding-left: var(--container-gutter-x);
}
@media (max-width: 575.98px) {
  .row {
    margin-right: -10px;
    margin-left: -10px;
  }
  .row > * {
    padding-right: 10px;
    padding-left: 10px;
  }
}

/* 6. Wave Dividers Seamless Transition */
.svg-wave-divider {
  display: block;
  width: 100%;
  height: clamp(32px, 4vw, 48px);
  line-height: 0;
  pointer-events: none;
  position: relative;
  z-index: 2;
  margin-top: -1px;
  margin-bottom: -1px;
}
.svg-wave-divider svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* 7. Facts / Stats Bar Harmonization */
.facts-simple-wrapper {
  margin: clamp(1.25rem, 2.5vw, 2rem) auto !important;
  position: relative;
  z-index: 5;
}

/* 8. CTA Banner Section Consistent Margins */
.anbu-cta-banner-section {
  margin-top: clamp(1.5rem, 3vw, 2.5rem) !important;
  margin-bottom: clamp(3rem, 5vw, 4.5rem) !important;
}
`;

css += '\n\n' + unifiedSystem;
fs.writeFileSync('css/style.css', css, 'utf8');
console.log('✅ Applied 2026 Unified System to css/style.css!');

