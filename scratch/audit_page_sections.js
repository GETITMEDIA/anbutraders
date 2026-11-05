const fs = require('fs');

const pages = ['index.html', 'about.html', 'contact.html', 'service.html', 'project.html', 'team.html', 'testimonial.html', 'feature.html', '404.html'];

console.log('=== PAGE SECTION STRUCTURE AUDIT ===');
pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`\n================== ${p} ==================`);
  
  // Find all top-level sections / divs directly under body
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    console.log('No body found');
    return;
  }
  const body = bodyMatch[1];
  
  // Extract all sections and top-level divs
  const sectionMatches = [...body.matchAll(/<(section|div)\s+([^>]*?(?:class=["'][^"']*["']|id=["'][^"']*["'])[^>]*)>/gi)];
  const topSections = [];
  
  sectionMatches.forEach(m => {
    const tag = m[1];
    const attrs = m[2];
    const classMatch = attrs.match(/class=["']([^"']*)["']/i);
    const idMatch = attrs.match(/id=["']([^"']*)["']/i);
    const cls = classMatch ? classMatch[1] : '';
    const id = idMatch ? idMatch[1] : '';
    
    // Check if it's a major section
    if (tag === 'section' || cls.includes('container-xxl') || cls.includes('container-fluid') || cls.includes('section') || id) {
      topSections.push({ tag, cls, id });
    }
  });
  
  topSections.slice(0, 15).forEach((s, idx) => {
    console.log(`  ${idx+1}. <${s.tag}> class="${s.cls}" id="${s.id}"`);
  });
});

