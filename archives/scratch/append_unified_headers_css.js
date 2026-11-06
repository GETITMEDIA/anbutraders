const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const unifiedHeadersCss = `

/* ========================================================
   UNIFIED 2026 SECTION HEADERS (CONSISTENT DESIGN SYSTEM)
   Ensures 100% Header Consistency Across All Sections
   ======================================================== */

.unified-section-header {
  margin-bottom: clamp(1.75rem, 3.5vw, 2.5rem);
}

.unified-section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(243, 106, 33, 0.08);
  border: 1px solid rgba(243, 106, 33, 0.22);
  color: var(--primary-orange);
  font-family: var(--font-heading);
  font-size: 0.781rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 6px 16px;
  border-radius: 9999px;
  margin-bottom: 12px;
}

.unified-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--primary-orange);
  display: inline-block;
  box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.6);
  animation: unifiedPulse 2s infinite ease-in-out;
}

@keyframes unifiedPulse {
  0% { box-shadow: 0 0 0 0 rgba(243, 106, 33, 0.6); }
  70% { box-shadow: 0 0 0 7px rgba(243, 106, 33, 0); }
  100% { box-shadow: 0 0 0 0 rgba(243, 106, 33, 0); }
}

.unified-section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.95rem, 3.2vw, 2.65rem);
  font-weight: 800;
  color: var(--primary-navy);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 10px;
}

.unified-title-bar {
  width: 52px;
  height: 3.5px;
  background: linear-gradient(90deg, var(--primary-orange), #ff9955);
  margin: 12px auto 16px;
  border-radius: 4px;
}

.unified-title-bar.left-aligned {
  margin: 12px 0 16px;
}

.unified-lead-text {
  font-size: clamp(0.95rem, 1.1vw, 1.025rem);
  line-height: 1.62;
  color: #64748B;
  margin: 0 auto;
  max-width: 680px;
}
`;

fs.writeFileSync(cssPath, css + unifiedHeadersCss);
console.log('Appended unified section header CSS successfully.');

