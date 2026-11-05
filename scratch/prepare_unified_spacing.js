const fs = require('fs');

console.log('=== PREPARING COMPREHENSIVE SPACING & MARGIN STANDARDIZATION ===');

// Check css/style.css
const css = fs.readFileSync('css/style.css', 'utf8');

// The CSS rules to inject
const unifiedContainerCss = `
/* ========================================================
   2026 UNIFIED CONTAINER, MARGIN & SPACING SYSTEM
   ======================================================== */
:root {
  --site-container-max: 1320px;
  --container-gutter-x: clamp(16px, 2.5vw, 24px);
  --section-spacing-y: clamp(3.25rem, 5vw, 4.75rem);
  --section-spacing-sm: clamp(2rem, 3.2vw, 2.75rem);
}

/* Global viewport & overflow control */
html, body {
  overflow-x: hidden !important;
  max-width: 100% !important;
  width: 100% !important;
  position: relative;
}

/* 1. Global Container Alignment — 100% Consistent Left/Right Across Every Page */
.container,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  max-width: var(--site-container-max);
  padding-right: var(--container-gutter-x) !important;
  padding-left: var(--container-gutter-x) !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

@media (min-width: 1400px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    max-width: 1320px;
  }
}

@media (min-width: 1200px) and (max-width: 1399.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    max-width: 1140px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    max-width: 960px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    max-width: 720px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    max-width: 540px;
  }
}

@media (max-width: 575.98px) {
  .container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    max-width: 100%;
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

/* 2. Global Section Vertical Rhythm */
.site-section {
  padding-top: var(--section-spacing-y);
  padding-bottom: var(--section-spacing-y);
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.site-section-sm {
  padding-top: var(--section-spacing-sm);
  padding-bottom: var(--section-spacing-sm);
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

/* 3. Global Navbar & Topbar Alignment on Mobile */
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

/* 4. Global Row & Column Gutter Harmonization */
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

/* 5. Footer & Copyright Container Flush Alignment */
.anbu-footer-container,
.anbu-unified-copyright .anbu-footer-container {
  max-width: var(--site-container-max) !important;
  padding-left: var(--container-gutter-x) !important;
  padding-right: var(--container-gutter-x) !important;
  margin-left: auto !important;
  margin-right: auto !important;
  box-sizing: border-box !important;
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
`;

console.log('CSS snippet prepared. Length:', unifiedContainerCss.length);

