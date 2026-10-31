/* ==========================================================================
   ANBU TRADERS — VANILLA WEBGL2 FLEX CAROUSEL ("OUR BRANDS")
   Zero-dependency Vanilla JS + WebGL2 port of FlexCarousel with High-DPI
   Brand Card Composer, Optical Liquid Lens Shader, Chromatic Dispersion,
   240Hz Spring Physics, Odometer Reels & Product Filter Integration.
   ========================================================================== */

(function () {
  'use strict';

  var BEND_PRESETS = {
    liquid: {
      lensWidth: 0.72,
      lensHeight: 1.16,
      tilt: 62,
      roundness: 1,
      bend: 0.36,
      reach: 0.38,
      curl: 'twist',
      dispersion: 0.45,
      liquid: 0.35,
      followCursor: false
    },
    ribbon: {
      lensWidth: 0.78,
      lensHeight: 0.8,
      tilt: 0,
      roundness: 1,
      bend: 0.35,
      reach: 0.34,
      curl: 'twist',
      dispersion: 0.4,
      liquid: 0.25,
      followCursor: false
    },
    vortex: {
      lensWidth: 0.68,
      lensHeight: 0.95,
      tilt: 30,
      roundness: 1,
      bend: 0.46,
      reach: 0.32,
      curl: 'twist',
      dispersion: 0.5,
      liquid: 0.4,
      followCursor: false
    },
    arch: {
      lensWidth: 0.78,
      lensHeight: 0.8,
      tilt: 0,
      roundness: 1,
      bend: 0.32,
      reach: 0.36,
      curl: 'rise',
      dispersion: 0.4,
      liquid: 0.25,
      followCursor: false
    }
  };

  var FIT_ASPECT = { portrait: 0.75, square: 1, landscape: 4 / 3 };
  var TAPS = 12;
  var PIXEL_BUDGET = 4.5e6;
  var INTRO_DURATION = { rise: 2.0, bloom: 1.6, spin: 2.2, deal: 1.5, fade: 0.35 };
  var CARD_TEX_W = 640;
  var CARD_TEX_H = 740;
  var CARD_PAD = 26;
  var CENTER_Y_RATIO = 0.46;

  function wrap(value, size) {
    return ((((value + size / 2) % size) + size) % size) - size / 2;
  }

  function clamp01(value) {
    return Math.min(Math.max(value, 0), 1);
  }

  function easeOut(value) {
    return 1 - Math.pow(1 - clamp01(value), 3);
  }

  function easeOutQuint(value) {
    return 1 - Math.pow(1 - clamp01(value), 5);
  }

  function easeInOut(value) {
    var t = clamp01(value);
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /* ── GLSL ES 3.00 Shaders ── */
  var CARD_VERTEX = [
    '#version 300 es',
    'in vec3 position;',
    'in vec2 uv;',
    'uniform vec4 uRect;',
    'uniform vec2 uResolution;',
    'out vec2 vUv;',
    'out vec2 vLocal;',
    'void main() {',
    '  vUv = uv;',
    '  vLocal = vec2(position.x, -position.y) * uRect.zw;',
    '  vec2 px = uRect.xy + vLocal;',
    '  gl_Position = vec4(px.x / uResolution.x * 2.0 - 1.0, 1.0 - px.y / uResolution.y * 2.0, 0.0, 1.0);',
    '}'
  ].join('\n');

  var CARD_FRAGMENT = [
    '#version 300 es',
    'precision highp float;',
    'uniform sampler2D tMap;',
    'uniform vec2 uSize;',
    'uniform vec2 uImage;',
    'uniform float uRadius;',
    'uniform float uAlpha;',
    'uniform float uReady;',
    'uniform float uShift;',
    'uniform float uDpr;',
    'uniform float uActive;',
    'uniform vec3 uPlaceholder;',
    'in vec2 vUv;',
    'in vec2 vLocal;',
    'out vec4 fragColor;',
    '',
    'float roundedBox(vec2 p, vec2 b, float r) {',
    '  vec2 q = abs(p) - b + r;',
    '  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;',
    '}',
    '',
    'void main() {',
    '  float rad = min(uRadius, min(uSize.x, uSize.y) * 0.5);',
    '  float sd = roundedBox(vLocal, uSize * 0.5, rad);',
    '  float cardMask = clamp(0.5 - sd * uDpr, 0.0, 1.0);',
    '',
    '  float shadowSd = roundedBox(vLocal - vec2(0.0, 7.0), uSize * 0.5 - vec2(2.0), rad);',
    '  float shadowBase = exp(-max(shadowSd, 0.0) * 0.16) * smoothstep(23.0, 0.0, shadowSd);',
    '  float shadowStrength = mix(0.10, 0.17, uActive);',
    '  float shadowAlpha = shadowBase * shadowStrength * (1.0 - cardMask);',
    '  vec3 shadowColor = vec3(0.024, 0.169, 0.357);',
    '',
    '  vec2 local = clamp(vLocal / uSize + 0.5, 0.0, 1.0);',
    '  float cardAspect = uSize.x / max(uSize.y, 1.0);',
    '  float imageAspect = uImage.x / max(uImage.y, 1.0);',
    '  vec2 scale = imageAspect > cardAspect ? vec2(cardAspect / imageAspect, 1.0) : vec2(1.0, imageAspect / cardAspect);',
    '  scale /= 1.028;',
    '  vec2 uv = vec2(local.x, 1.0 - local.y);',
    '  uv = (uv - 0.5) * scale + 0.5;',
    '  uv.x += uShift * (1.0 - scale.x) * 0.5;',
    '',
    '  vec3 image = texture(tMap, uv).rgb;',
    '  vec3 cardColor = mix(uPlaceholder, image, uReady);',
    '',
    '  float borderWidth = mix(1.2, 1.8, uActive);',
    '  float borderMask = clamp(0.5 + (sd + borderWidth) * uDpr, 0.0, 1.0);',
    '  vec3 borderIdle = vec3(0.82, 0.855, 0.905);',
    '  vec3 borderActive = vec3(0.953, 0.416, 0.129);',
    '  vec3 borderColor = mix(borderIdle, borderActive, uActive * 0.85);',
    '  cardColor = mix(cardColor, borderColor, borderMask);',
    '',
    '  float outAlpha = (cardMask + shadowAlpha) * uAlpha;',
    '  vec3 premul = (cardColor * cardMask + shadowColor * shadowAlpha) * uAlpha;',
    '  fragColor = vec4(premul, outAlpha);',
    '}'
  ].join('\n');

  var LENS_VERTEX = [
    '#version 300 es',
    'in vec2 position;',
    'void main() {',
    '  gl_Position = vec4(position, 0.0, 1.0);',
    '}'
  ].join('\n');

  var LENS_FRAGMENT = [
    '#version 300 es',
    'precision highp float;',
    'uniform sampler2D tScene;',
    'uniform vec2 uResolution;',
    'uniform float uDpr;',
    'uniform vec2 uCenter;',
    'uniform vec2 uHalf;',
    'uniform float uAngle;',
    'uniform float uExponent;',
    'uniform float uInner;',
    'uniform float uOuter;',
    'uniform float uFlow;',
    'uniform float uCurlDir;',
    'uniform float uCurlMix;',
    'uniform float uDispersion;',
    'uniform float uStrength;',
    'uniform float uSceneAlpha;',
    'out vec4 fragColor;',
    '',
    'void main() {',
    '  vec2 frag = gl_FragCoord.xy / uDpr;',
    '  vec2 uv = frag / uResolution;',
    '  vec2 rel = frag - vec2(uCenter.x, uResolution.y - uCenter.y);',
    '  float ca = cos(uAngle);',
    '  float sa = sin(uAngle);',
    '  vec2 local = vec2(ca * rel.x + sa * rel.y, -sa * rel.x + ca * rel.y);',
    '  vec2 k = max(abs(local) / uHalf, vec2(1e-5));',
    '  float nd = pow(pow(k.x, uExponent) + pow(k.y, uExponent), 1.0 / uExponent);',
    '  vec2 grad = pow(k, vec2(uExponent - 1.0)) * sign(local) / uHalf * pow(nd, 1.0 - uExponent);',
    '  float glen = max(length(grad), 1e-6);',
    '  float edge = (nd - 1.0) / glen;',
    '  vec2 outward = grad / glen;',
    '  vec2 normal = vec2(ca * outward.x - sa * outward.y, sa * outward.x + ca * outward.y);',
    '  vec2 along = vec2(-normal.y, normal.x);',
    '',
    '  float t = clamp((edge + uInner) / (uInner + uOuter), 0.0, 1.0);',
    '  float ramp = t * t * t * (t * (t * 6.0 - 15.0) + 10.0);',
    '  float slope = 16.0 * t * t * (1.0 - t) * (1.0 - t);',
    '  float reachX = rel.x / (uResolution.x * 0.5);',
    '  float sideDir = mix(sign(reachX), uCurlDir, uCurlMix);',
    '  float side = smoothstep(0.02, 0.3, abs(reachX)) * sideDir;',
    '  float lift = ramp * side * uFlow * uStrength;',
    '  vec2 swirl = along * along.y * side * slope * uFlow * uStrength * 0.35;',
    '  vec2 drift = vec2(0.0, -lift) - swirl;',
    '  vec2 shifted = uv + drift / uResolution;',
    '',
    '  vec2 texels = uResolution * uDpr;',
    '  vec2 gx = dFdx(shifted);',
    '  vec2 gy = dFdy(shifted);',
    '  gx *= min(1.0, 3.0 / max(length(gx * texels), 1e-4));',
    '  gy *= min(1.0, 3.0 / max(length(gy * texels), 1e-4));',
    '',
    '  vec4 color = vec4(0.0);',
    '  if (shifted.x >= 0.0 && shifted.x <= 1.0 && shifted.y >= 0.0 && shifted.y <= 1.0) {',
    '    color = textureGrad(tScene, shifted, gx, gy);',
    '    vec2 spread = vec2(0.0, side * slope * uFlow * uStrength) / uResolution * uDispersion;',
    '    float spreadPx = length(spread * texels);',
    '    if (color.a > 0.002 && spreadPx > 0.25) {',
    '      vec3 base = color.rgb / color.a;',
    '      vec3 sumColor = vec3(0.0);',
    '      vec3 sumWeight = vec3(0.0);',
    '      for (int i = 0; i < ' + TAPS + '; i++) {',
    '        float s = (float(i) + 0.5) / float(' + TAPS + ');',
    '        vec2 tapUv = clamp(shifted + spread * (s - 0.5), vec2(0.0), vec2(1.0));',
    '        vec4 c = textureGrad(tScene, tapUv, gx, gy);',
    '        vec3 w = max(1.0 - abs(vec3(s) - vec3(0.15, 0.5, 0.85)) * 2.6, 0.0) * c.a;',
    '        sumColor += c.rgb * (w / max(c.a, 0.002));',
    '        sumWeight += w;',
    '      }',
    '      vec3 split = mix(base, sumColor / max(sumWeight, vec3(1e-4)), clamp(sumWeight * 2.0, 0.0, 1.0));',
    '      color.rgb = mix(color.rgb, clamp(split, 0.0, 1.0) * color.a, smoothstep(0.25, 1.5, spreadPx));',
    '    }',
    '  }',
    '',
    '  fragColor = color * uSceneAlpha;',
    '}'
  ].join('\n');

  /* ── Minimal WebGL2 Helpers ── */
  function compileShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      var info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error('Shader compile failed: ' + info);
    }
    return shader;
  }

  function createProgram(gl, vsSrc, fsSrc, uniformNames) {
    var vs = compileShader(gl, gl.VERTEX_SHADER, vsSrc);
    var fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSrc);
    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      var info = gl.getProgramInfoLog(program);
      gl.deleteProgram(program);
      throw new Error('Program link failed: ' + info);
    }
    var locs = {};
    for (var i = 0; i < uniformNames.length; i++) {
      locs[uniformNames[i]] = gl.getUniformLocation(program, uniformNames[i]);
    }
    return { program: program, locs: locs };
  }

  function createPlaneVAO(gl, program) {
    var vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    var positions = new Float32Array([
      -0.5,  0.5, 0.0,
       0.5,  0.5, 0.0,
      -0.5, -0.5, 0.0,
       0.5, -0.5, 0.0
    ]);
    var uvs = new Float32Array([
      0.0, 1.0,
      1.0, 1.0,
      0.0, 0.0,
      1.0, 0.0
    ]);
    var indices = new Uint16Array([0, 2, 1, 2, 3, 1]);

    var posLoc = gl.getAttribLocation(program, 'position');
    var posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    if (posLoc >= 0) {
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
    }

    var uvLoc = gl.getAttribLocation(program, 'uv');
    var uvBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
    if (uvLoc >= 0) {
      gl.enableVertexAttribArray(uvLoc);
      gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);
    }

    var idxBuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    gl.bindVertexArray(null);
    return {
      vao: vao,
      draw: function () {
        gl.bindVertexArray(vao);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      },
      dispose: function () {
        gl.deleteBuffer(posBuf);
        gl.deleteBuffer(uvBuf);
        gl.deleteBuffer(idxBuf);
        gl.deleteVertexArray(vao);
      }
    };
  }

  function createTriangleVAO(gl, program) {
    var vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    var positions = new Float32Array([-1.0, -1.0, 3.0, -1.0, -1.0, 3.0]);
    var posLoc = gl.getAttribLocation(program, 'position');
    var posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    if (posLoc >= 0) {
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    }

    gl.bindVertexArray(null);
    return {
      vao: vao,
      draw: function () {
        gl.bindVertexArray(vao);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      },
      dispose: function () {
        gl.deleteBuffer(posBuf);
        gl.deleteVertexArray(vao);
      }
    };
  }

  function createRenderTarget(gl) {
    var fbo = gl.createFramebuffer();
    var tex = gl.createTexture();
    var rt = {
      fbo: fbo,
      texture: tex,
      width: 2,
      height: 2,
      setSize: function (w, h) {
        if (w === rt.width && h === rt.height && rt._allocated) return;
        rt.width = w;
        rt.height = h;
        rt._allocated = true;
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      },
      dispose: function () {
        gl.deleteTexture(tex);
        gl.deleteFramebuffer(fbo);
      }
    };
    rt.setSize(2, 2);
    return rt;
  }

  /* ── High-DPI 2D Canvas Brand Card Composer ── */
  function roundRectPath(ctx, x, y, w, h, r) {
    var rad = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rad, y);
    ctx.arcTo(x + w, y, x + w, y + h, rad);
    ctx.arcTo(x + w, y + h, x, y + h, rad);
    ctx.arcTo(x, y + h, x, y, rad);
    ctx.arcTo(x, y, x + w, y, rad);
    ctx.closePath();
  }

  function wrapLines(ctx, text, maxWidth, maxLines) {
    var words = String(text || '').trim().split(/\s+/);
    var lines = [];
    var current = '';
    for (var i = 0; i < words.length; i++) {
      var test = current ? current + ' ' + words[i] : words[i];
      if (ctx.measureText(test).width > maxWidth && current) {
        lines.push(current);
        current = words[i];
        if (lines.length === maxLines - 1) break;
      } else {
        current = test;
      }
    }
    var remaining = words.slice(
      lines.reduce(function (acc, l) {
        return acc + l.split(/\s+/).length;
      }, 0)
    );
    if (remaining.length) {
      lines.push(remaining.join(' '));
    } else if (current && lines.length < maxLines) {
      lines.push(current);
    }
    return lines.slice(0, maxLines);
  }

  function inferBrandMeta(title) {
    var t = String(title || '').toLowerCase();
    if (/panel|aerocon/.test(t)) {
      return { badge: 'WALL PANELS', subtitle: 'Wall Panels & Partition', filter: 'cement' };
    }
    if (/block|cubecrete/.test(t)) {
      return { badge: 'AAC BLOCKS', subtitle: 'Lightweight Masonry Blocks', filter: 'cement' };
    }
    if (/waterguard/.test(t)) {
      return { badge: 'WATERPROOF CEMENT', subtitle: 'Damp-Guard Cement', filter: 'cement' };
    }
    if (/cement|ramco|dalmia|ultratech|zuari|priya|coramandel|maha/.test(t)) {
      return { badge: 'PREMIUM CEMENT', subtitle: 'Authorized Cement Partner', filter: 'cement' };
    }
    if (/tmt|steel|isteel|suryadev|sumangala|agni|tiscon|shyam|durastrong|pulkit|ars|durga/.test(t)) {
      return { badge: 'TMT STEEL', subtitle: 'Fe 550D Structural Rebars', filter: 'steel' };
    }
    return { badge: 'AUTHORIZED BRAND', subtitle: 'Direct Wholesale Partner', filter: 'all' };
  }

  function composeBrandCard(item, logoImage) {
    var canvas = document.createElement('canvas');
    canvas.width = CARD_TEX_W;
    canvas.height = CARD_TEX_H;
    var ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    var W = CARD_TEX_W;
    var H = CARD_TEX_H;

    // 1. Card Surface
    var bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#FFFFFF');
    bgGrad.addColorStop(0.75, '#FFFFFF');
    bgGrad.addColorStop(1, '#F3F6FA');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Top signature Navy -> Orange bar
    var topBar = ctx.createLinearGradient(0, 0, W, 0);
    topBar.addColorStop(0, '#062B5B');
    topBar.addColorStop(0.58, '#062B5B');
    topBar.addColorStop(1, '#F36A21');
    ctx.fillStyle = topBar;
    ctx.fillRect(0, 0, W, 14);

    // 2. Category Pill Badge
    var badgeText = (item.badge || 'AUTHORIZED BRAND').toUpperCase();
    ctx.font = '700 18px "Plus Jakarta Sans", "Inter", system-ui, sans-serif';
    var badgeTextW = ctx.measureText(badgeText).width;
    var pillW = Math.min(W - 100, badgeTextW + 52);
    var pillH = 42;
    var pillX = (W - pillW) / 2;
    var pillY = 46;

    roundRectPath(ctx, pillX, pillY, pillW, pillH, 21);
    ctx.fillStyle = 'rgba(243, 106, 33, 0.10)';
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(243, 106, 33, 0.24)';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(pillX + 20, pillY + pillH / 2, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#F36A21';
    ctx.fill();

    ctx.fillStyle = '#D95812';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(badgeText, pillX + 34, pillY + pillH / 2 + 1);

    // 3. Pure White Logo Pedestal Box
    var boxX = 56;
    var boxY = 114;
    var boxW = W - 112;
    var boxH = 296;
    roundRectPath(ctx, boxX, boxY, boxW, boxH, 24);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#E9EEF5';
    ctx.stroke();

    // Draw Brand Logo inside pedestal
    var centerX = W / 2;
    var logoCenterY = boxY + boxH / 2;
    if (logoImage && (logoImage.naturalWidth || logoImage.width)) {
      var iw = logoImage.naturalWidth || logoImage.width;
      var ih = logoImage.naturalHeight || logoImage.height;
      var maxW = 416;
      var maxH = 220;
      var fitScale = Math.min(maxW / iw, maxH / ih);
      var maxUpscale = iw <= 120 && ih <= 120 ? 2.35 : 3.2;
      var drawScale = Math.min(fitScale, maxUpscale);
      var dw = iw * drawScale;
      var dh = ih * drawScale;
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      if ('imageSmoothingQuality' in ctx) ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(logoImage, centerX - dw / 2, logoCenterY - dh / 2, dw, dh);
      ctx.restore();
    } else {
      // Fallback crisp monogram if image missing
      var initials = String(item.title || 'AT')
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(function (w) {
          return w.charAt(0).toUpperCase();
        })
        .join('');
      ctx.beginPath();
      ctx.arc(centerX, logoCenterY, 64, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6, 43, 91, 0.07)';
      ctx.fill();
      ctx.font = '800 44px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#062B5B';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(initials, centerX, logoCenterY + 2);
    }

    // 4. Orange Divider Bar
    roundRectPath(ctx, centerX - 28, 438, 56, 5, 3);
    ctx.fillStyle = '#F36A21';
    ctx.fill();

    // 5. Brand Title & Subtitle
    var cleanTitle = String(item.title || 'Brand Partner').trim();
    var titleFontSize = cleanTitle.length > 18 ? 30 : 34;
    ctx.font = '800 ' + titleFontSize + 'px "Plus Jakarta Sans", "Inter", system-ui, sans-serif';
    ctx.fillStyle = '#062B5B';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    var lines = wrapLines(ctx, cleanTitle, W - 110, 2);
    if (lines.length === 1) {
      ctx.fillText(lines[0], centerX, 494);
    } else {
      ctx.fillText(lines[0], centerX, 478);
      ctx.fillText(lines[1], centerX, 516);
    }

    var subY = lines.length === 1 ? 540 : 558;
    ctx.font = '600 19px "Inter", system-ui, sans-serif';
    ctx.fillStyle = '#667085';
    ctx.fillText(item.subtitle || 'Authorized Wholesale Partner', centerX, subY);

    // 6. "View Products" Navy Button Pill
    var btnW = 344;
    var btnH = 72;
    var btnX = (W - btnW) / 2;
    var btnY = 606;

    ctx.save();
    ctx.shadowColor = 'rgba(6, 43, 91, 0.18)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 6;
    roundRectPath(ctx, btnX, btnY, btnW, btnH, 18);
    ctx.fillStyle = '#062B5B';
    ctx.fill();
    ctx.restore();

    ctx.font = '700 23px "Plus Jakarta Sans", "Inter", system-ui, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('View Products   \u2192', centerX, btnY + btnH / 2 + 1);

    return canvas;
  }

  /* ── Local file:// Data-URI Fallback Loader ── */
  var dataScriptLoading = null;
  function ensureFileProtocolLogos() {
    if (window.location.protocol !== 'file:') return Promise.resolve();
    if (window.ANBU_BRAND_LOGOS) return Promise.resolve();
    if (dataScriptLoading) return dataScriptLoading;

    dataScriptLoading = new Promise(function (resolve) {
      var script = document.createElement('script');
      script.src = 'js/brand-logos-data.js';
      script.onload = function () {
        resolve();
      };
      script.onerror = function () {
        resolve();
      };
      document.head.appendChild(script);
    });
    return dataScriptLoading;
  }

  function resolveLogoUrl(rawSrc) {
    if (!rawSrc) return '';
    if (window.ANBU_BRAND_LOGOS) {
      var key = rawSrc;
      try {
        key = decodeURIComponent(rawSrc);
      } catch (e) {
        key = rawSrc;
      }
      key = key.replace(/^\.\//, '').replace(/\\/g, '/');
      if (window.ANBU_BRAND_LOGOS[key]) {
        return window.ANBU_BRAND_LOGOS[key];
      }
    }
    return rawSrc;
  }

  /* ── Odometer Digits DOM Builder ── */
  function createDigitsDOM() {
    var root = document.createElement('span');
    root.className = 'flex-carousel__digits';
    var reels = [];
    for (var d = 0; d < 2; d++) {
      var digitWrap = document.createElement('span');
      digitWrap.className = 'flex-carousel__digit';
      var reel = document.createElement('span');
      reel.className = 'flex-carousel__reel';
      for (var n = 0; n <= 9; n++) {
        var cell = document.createElement('span');
        cell.textContent = String(n);
        reel.appendChild(cell);
      }
      digitWrap.appendChild(reel);
      root.appendChild(digitWrap);
      reels.push(reel);
    }
    return {
      el: root,
      update: function (val) {
        var str = String(val).padStart(2, '0').slice(-2);
        for (var i = 0; i < 2; i++) {
          var num = Number(str.charAt(i)) || 0;
          reels[i].style.transform = 'translateY(' + -num * 10 + '%)';
        }
      }
    };
  }

  /* ── Smooth Scroll & Category Filter Trigger for "View Products" ── */
  function navigateToProducts(item) {
    if (!item) return;
    if (item.href && item.href !== '#' && item.href.indexOf('javascript:') !== 0) {
      window.location.href = item.href;
      return;
    }
    var productsSection = document.getElementById('products');
    if (productsSection) {
      var filterKey = item.filter || 'all';
      var filterBtn = document.querySelector('.cat-filter-btn[data-filter="' + filterKey + '"]');
      var searchInput = document.getElementById('catalogSearch');
      if (searchInput && searchInput.value) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
      if (filterBtn) {
        filterBtn.click();
      }
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ── Core Vanilla FlexCarousel Engine ── */
  function createBrandFlexCarousel(container, options) {
    if (!container) return null;

    var opts = Object.assign(
      {
        items: [],
        preset: 'liquid',
        intro: 'rise',
        cardHeight: 0.56,
        gap: 22,
        radius: 18,
        fit: 'natural',
        squeeze: 0.16,
        focusOnClick: true,
        autoplay: true,
        interval: 3.6,
        captions: true,
        captureWheel: false,
        onChange: null,
        onSelect: null,
        onAction: navigateToProducts
      },
      options || {}
    );

    var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance'
    });

    if (!gl) {
      return null;
    }

    gl.clearColor(0, 0, 0, 0);
    canvas.setAttribute('aria-hidden', 'true');

    var cardProg, lensProg, cardGeo, lensGeo, target;
    try {
      cardProg = createProgram(gl, CARD_VERTEX, CARD_FRAGMENT, [
        'tMap',
        'uRect',
        'uResolution',
        'uSize',
        'uImage',
        'uRadius',
        'uAlpha',
        'uReady',
        'uShift',
        'uDpr',
        'uActive',
        'uPlaceholder'
      ]);
      lensProg = createProgram(gl, LENS_VERTEX, LENS_FRAGMENT, [
        'tScene',
        'uResolution',
        'uDpr',
        'uCenter',
        'uHalf',
        'uAngle',
        'uExponent',
        'uInner',
        'uOuter',
        'uFlow',
        'uCurlDir',
        'uCurlMix',
        'uDispersion',
        'uStrength',
        'uSceneAlpha'
      ]);
      cardGeo = createPlaneVAO(gl, cardProg.program);
      lensGeo = createTriangleVAO(gl, lensProg.program);
      target = createRenderTarget(gl);
    } catch (err) {
      console.warn('[BrandFlexCarousel] WebGL2 shader setup failed, falling back to grid:', err);
      return null;
    }

    // Configure container attributes & inner UI elements
    container.setAttribute('role', 'region');
    container.setAttribute('aria-roledescription', 'carousel');
    container.setAttribute('aria-label', 'Authorized Partner Brands Carousel');
    if (!container.hasAttribute('tabindex')) container.setAttribute('tabindex', '0');
    container.style.setProperty(
      '--flex-carousel-half',
      Math.min(Math.max(opts.cardHeight, 0.05), 1) * 50 + '%'
    );
    container.style.setProperty('--flex-carousel-center-y', CENTER_Y_RATIO * 100 + '%');
    container.prepend(canvas);

    // Navigation Arrows
    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'flex-carousel__nav flex-carousel__nav--prev';
    prevBtn.setAttribute('aria-label', 'Previous brand');
    prevBtn.innerHTML = '<i class="fa fa-arrow-left" aria-hidden="true"></i>';

    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'flex-carousel__nav flex-carousel__nav--next';
    nextBtn.setAttribute('aria-label', 'Next brand');
    nextBtn.innerHTML = '<i class="fa fa-arrow-right" aria-hidden="true"></i>';

    container.appendChild(prevBtn);
    container.appendChild(nextBtn);

    // Caption + Odometer + CTA Bar
    var captionEl = null;
    var titleEl = null;
    var subtitleEl = null;
    var countWrap = null;
    var totalEl = null;
    var digits = null;
    var ctaEl = null;

    if (opts.captions) {
      captionEl = document.createElement('div');
      captionEl.className = 'flex-carousel__caption';

      var metaWrap = document.createElement('div');
      metaWrap.className = 'flex-carousel__meta';
      titleEl = document.createElement('span');
      titleEl.className = 'flex-carousel__title';
      subtitleEl = document.createElement('span');
      subtitleEl.className = 'flex-carousel__subtitle';
      metaWrap.appendChild(titleEl);
      metaWrap.appendChild(subtitleEl);

      var rightWrap = document.createElement('div');
      rightWrap.className = 'flex-carousel__right';

      countWrap = document.createElement('span');
      countWrap.className = 'flex-carousel__count';
      countWrap.setAttribute('aria-hidden', 'true');
      digits = createDigitsDOM();
      var slashEl = document.createElement('span');
      slashEl.className = 'flex-carousel__slash';
      slashEl.textContent = '/';
      totalEl = document.createElement('span');
      totalEl.textContent = '00';
      countWrap.appendChild(digits.el);
      countWrap.appendChild(slashEl);
      countWrap.appendChild(totalEl);

      ctaEl = document.createElement('a');
      ctaEl.href = '#products';
      ctaEl.className = 'flex-carousel__cta';
      ctaEl.innerHTML = '<span>View Products</span> <i class="fa fa-arrow-right" aria-hidden="true"></i>';

      rightWrap.appendChild(countWrap);
      rightWrap.appendChild(ctaEl);

      captionEl.appendChild(metaWrap);
      captionEl.appendChild(rightWrap);
      container.appendChild(captionEl);
    }

    var liveEl = document.createElement('div');
    liveEl.className = 'flex-carousel__live';
    liveEl.setAttribute('aria-live', 'polite');
    liveEl.setAttribute('aria-atomic', 'true');
    container.appendChild(liveEl);

    var reducedMotion =
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || false;
    var anisoExt =
      gl.getExtension('EXT_texture_filter_anisotropic') ||
      gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
    var maxAniso = anisoExt ? Math.min(8, gl.getParameter(anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) : 0;

    function buildSettings(presetName) {
      var base = BEND_PRESETS[presetName] || BEND_PRESETS.liquid;
      var pick = function (val, key) {
        return val === undefined || val === null ? base[key] : val;
      };
      return {
        preset: presetName,
        intro: opts.intro,
        cardHeight: opts.cardHeight,
        gap: opts.gap,
        radius: opts.radius,
        fit: opts.fit,
        lensWidth: pick(opts.lensWidth, 'lensWidth'),
        lensHeight: pick(opts.lensHeight, 'lensHeight'),
        tilt: pick(opts.tilt, 'tilt'),
        roundness: pick(opts.roundness, 'roundness'),
        bend: pick(opts.bend, 'bend'),
        reach: pick(opts.reach, 'reach'),
        curl: pick(opts.curl, 'curl'),
        dispersion: pick(opts.dispersion, 'dispersion'),
        liquid: pick(opts.liquid, 'liquid'),
        followCursor: pick(opts.followCursor, 'followCursor'),
        squeeze: opts.squeeze,
        focusOnClick: opts.focusOnClick,
        autoplay: opts.autoplay,
        interval: opts.interval,
        captureWheel: opts.captureWheel
      };
    }

    var settings = buildSettings(opts.preset);
    var lensMorph = {
      ready: false,
      lensWidth: settings.lensWidth,
      lensHeight: settings.lensHeight,
      tilt: settings.tilt,
      roundness: settings.roundness,
      bend: settings.bend,
      reach: settings.reach,
      curlDir: settings.curl === 'rise' ? 1 : settings.curl === 'fall' ? -1 : 0,
      curlMix: settings.curl === 'rise' || settings.curl === 'fall' ? 1 : 0,
      dispersion: settings.dispersion
    };

    var slots = [];
    var itemsList = [];
    var width = 1;
    var height = 1;
    var dpr = 1;
    var pos = 0;
    var vel = 0;
    var goal = 0;
    var mode = 'spring';
    var wheelAt = 0;
    var raf = 0;
    var last = performance.now();
    var visible = true;
    var alive = true;
    var dirty = true;
    var activeIndex = -1;
    var interactedAt = -Infinity;
    var autoplayAt = performance.now();
    var hasFocus = false;
    var deform = 0;
    var deformVel = 0;
    var layout = null;
    var resnap = false;
    var hover = '';
    var lift = 1;
    var energy = 0;
    var lastPos = 0;

    var lens = { x: 0, y: 0, vx: 0, vy: 0, ready: false };
    var pointer = {
      x: 0,
      y: 0,
      over: false,
      down: false,
      id: -1,
      startX: 0,
      startY: 0,
      startPos: 0,
      dragging: false,
      touch: false,
      samples: []
    };
    var introState = { kind: 'none', t: 0, running: false, done: false, readyAt: 0 };
    var focus = { index: -1, pending: -1, t: 0, v: 0, target: 0 };
    var instances = [];

    function updateCaptionUI(idx) {
      if (!itemsList.length) return;
      var safeIdx = ((idx % itemsList.length) + itemsList.length) % itemsList.length;
      var current = itemsList[safeIdx];
      var label = current ? current.title || current.alt || 'Brand ' + (safeIdx + 1) : '';
      liveEl.textContent = label + ', ' + (safeIdx + 1) + ' of ' + itemsList.length;

      if (captionEl && current) {
        titleEl.textContent = current.title || current.alt || '';
        // Re-trigger subtle title slide animation
        titleEl.style.animation = 'none';
        void titleEl.offsetWidth;
        titleEl.style.animation = '';
        subtitleEl.textContent = current.subtitle || 'Authorized Partner';
        digits.update(safeIdx + 1);
        totalEl.textContent = String(itemsList.length).padStart(2, '0');
        if (ctaEl) {
          ctaEl.href =
            current.href && current.href !== '#' ? current.href : '#products';
        }
      }
    }

    function setFocusUI(isOpen) {
      if (isOpen) {
        container.setAttribute('data-focus-open', '');
        if (countWrap) countWrap.setAttribute('data-hidden', '');
      } else {
        container.removeAttribute('data-focus-open');
        if (countWrap) countWrap.removeAttribute('data-hidden');
      }
    }

    function uploadCanvasToTexture(tex, sourceCanvas) {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourceCanvas);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      if (anisoExt && maxAniso > 0) {
        gl.texParameterf(gl.TEXTURE_2D, anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, maxAniso);
      }
      gl.generateMipmap(gl.TEXTURE_2D);
    }

    function loadSlot(item, index) {
      var tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        1,
        1,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        new Uint8Array([255, 255, 255, 255])
      );

      var slot = {
        item: item,
        index: index,
        texture: tex,
        logoImg: null,
        aspect: CARD_TEX_W / CARD_TEX_H,
        loaded: false,
        failed: false,
        ready: 0,
        color: [0.96, 0.97, 0.99],
        image: [CARD_TEX_W, CARD_TEX_H],
        rebake: function () {
          if (!alive) return;
          var cardCanvas = composeBrandCard(item, slot.logoImg);
          try {
            uploadCanvasToTexture(tex, cardCanvas);
          } catch (securityErr) {
            var safeCanvas = composeBrandCard(item, null);
            uploadCanvasToTexture(tex, safeCanvas);
          }
          dirty = true;
          start();
        },
        dispose: function () {}
      };

      var img = new Image();
      var resolvedSrc = resolveLogoUrl(item.src);
      if (/^https?:\/\//i.test(resolvedSrc) && resolvedSrc.indexOf(window.location.origin) !== 0) {
        img.crossOrigin = 'anonymous';
      }
      img.decoding = 'async';

      img.onload = function () {
        if (!alive || slots.indexOf(slot) === -1) return;
        slot.logoImg = img;
        slot.rebake();
        slot.loaded = true;
        dirty = true;
        start();
      };

      img.onerror = function () {
        if (!alive || slots.indexOf(slot) === -1) return;
        slot.logoImg = null;
        slot.rebake();
        slot.failed = true;
        slot.loaded = true;
        dirty = true;
        start();
      };

      img.src = resolvedSrc;

      slot.dispose = function () {
        img.onload = null;
        img.onerror = null;
        gl.deleteTexture(tex);
      };

      return slot;
    }

    function setItems(nextItems) {
      for (var i = 0; i < slots.length; i++) slots[i].dispose();
      itemsList = nextItems.slice();
      slots = itemsList.map(loadSlot);
      activeIndex = -1;
      layout = null;
      resnap = true;
      focus.target = 0;
      focus.t = 0;
      focus.v = 0;
      focus.pending = -1;
      setFocusUI(false);
      introState.readyAt = performance.now();
      if (itemsList.length) updateCaptionUI(0);
      dirty = true;
      start();
    }

    function metrics(s) {
      var responsiveGap = width < 576 ? Math.min(s.gap, 14) : width < 992 ? Math.min(s.gap, 18) : s.gap;
      var cardH = Math.max(24, s.cardHeight * height);
      var fixed = FIT_ASPECT[s.fit];
      var widths = slots.map(function (slot) {
        return (fixed || slot.aspect) * cardH;
      });
      var centers = [];
      var cursor = 0;
      for (var i = 0; i < widths.length; i++) {
        centers.push(cursor + widths[i] / 2);
        cursor += widths[i] + responsiveGap;
      }
      return {
        cardH: cardH,
        widths: widths,
        centers: centers,
        gap: responsiveGap,
        loop: Math.max(cursor, 1)
      };
    }

    function nearest(m, at) {
      var best = 0;
      var bestDist = Infinity;
      for (var i = 0; i < m.centers.length; i++) {
        var dist = Math.abs(wrap(m.centers[i] - at, m.loop));
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }
      return best;
    }

    function snapPoint(m, at) {
      var i = nearest(m, at);
      return at + wrap(m.centers[i] - at, m.loop);
    }

    function remap(from, to, at) {
      var i = nearest(from, at);
      var offset = wrap(at - from.centers[i], from.loop);
      var cycles = Math.round((at - offset - from.centers[i]) / from.loop);
      return cycles * to.loop + to.centers[i] + offset * (to.widths[i] / from.widths[i]);
    }

    function step(m, delta) {
      if (!m || !m.centers.length) return;
      var at = snapPoint(m, goal);
      var index = nearest(m, at);
      var n = m.centers.length;
      for (var k = 0; k < Math.abs(delta); k++) {
        var next = (index + (delta > 0 ? 1 : n - 1)) % n;
        var distance =
          delta > 0
            ? m.widths[index] / 2 + m.gap + m.widths[next] / 2
            : -(m.widths[next] / 2 + m.gap + m.widths[index] / 2);
        at += distance;
        index = next;
      }
      goal = at;
      mode = 'spring';
      dirty = true;
      start();
    }

    function goTo(m, index) {
      if (!m || !m.centers.length) return;
      var i = ((index % m.centers.length) + m.centers.length) % m.centers.length;
      goal = goal + wrap(m.centers[i] - goal, m.loop);
      mode = 'spring';
      dirty = true;
      start();
    }

    function openFocus(index) {
      focus.index = index;
      focus.pending = -1;
      focus.target = 1;
      setFocusUI(true);
      dirty = true;
      start();
    }

    function closeFocus() {
      focus.pending = -1;
      if (focus.target === 0) return false;
      focus.target = 0;
      setFocusUI(false);
      dirty = true;
      start();
      return true;
    }

    function skipIntro() {
      if (introState.running) introState.t = 1;
    }

    function introEffects() {
      var t = introState.running ? introState.t : introState.done ? 1 : 0;
      var e = { sceneAlpha: 1, strength: 1, card: null };
      if (!introState.done && !introState.running) {
        e.sceneAlpha = 0;
        e.strength = 0;
        return e;
      }
      if (t >= 1) return e;
      var kind = introState.kind;
      if (kind === 'rise') {
        e.strength = easeInOut((t - 0.3) / 0.65);
        e.card = function (rel) {
          var delay = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.34;
          var local = clamp01((t - delay) / 0.6);
          return {
            alpha: clamp01(local * 4),
            x: 0,
            y: (1 - easeOutQuint(local)) * height * 0.55,
            scale: 0.5 + 0.5 * easeInOut((local - 0.18) / 0.82)
          };
        };
      } else if (kind === 'bloom') {
        e.strength = easeInOut((t - 0.2) / 0.8);
        e.card = function (rel) {
          var delay = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.25;
          var local = easeOut((t - delay) / 0.55);
          return { alpha: local, x: 0, y: 0, scale: 0.92 + 0.08 * local };
        };
      } else if (kind === 'spin') {
        e.sceneAlpha = easeOut(t / 0.25);
        e.strength = easeOut((t - 0.55) / 0.45);
      } else if (kind === 'deal') {
        e.strength = easeOut((t - 0.45) / 0.5);
        e.card = function (rel) {
          var spread = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.3;
          var local = easeOut((t - 0.12 - spread) / 0.5);
          return { alpha: easeOut((t - spread) / 0.12), x: -rel * (1 - local), y: 0, scale: 1 };
        };
      } else {
        e.sceneAlpha = easeOut(t);
        e.strength = easeOut(t);
      }
      return e;
    }

    function beginIntro(s, m) {
      var kind = reducedMotion && s.intro !== 'none' ? 'fade' : s.intro;
      introState.kind = INTRO_DURATION[kind] ? kind : 'none';
      introState.running = introState.kind !== 'none';
      introState.done = !introState.running;
      introState.t = 0;
      if (introState.done) container.classList.add('is-revealed');
      if (introState.kind === 'spin') {
        var distance = m.loop * 1.4 + width;
        pos = goal + distance;
        vel = -distance * 3;
        mode = 'spring';
      }
    }

    function resize() {
      width = Math.max(1, container.clientWidth);
      height = Math.max(1, container.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(PIXEL_BUDGET / (width * height)));
      var pw = Math.max(2, Math.round(width * dpr));
      var ph = Math.max(2, Math.round(height * dpr));
      if (canvas.width !== pw || canvas.height !== ph) {
        canvas.width = pw;
        canvas.height = ph;
      }
      target.setSize(pw, ph);
      dirty = true;
      start();
    }

    function frame(now) {
      raf = 0;
      if (!alive) return;
      var s = settings;
      var dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;

      if (!s || !slots.length) {
        if (visible) raf = requestAnimationFrame(frame);
        return;
      }

      var m = metrics(s);
      var n = slots.length;
      var animating = false;

      if (resnap) {
        goal = snapPoint(m, goal);
        pos = goal;
        vel = 0;
        resnap = false;
      } else if (layout && Math.abs(layout.loop - m.loop) > 0.5) {
        pos = remap(layout, m, pos);
        goal = remap(layout, m, goal);
        pointer.startPos = pos + (pointer.x - pointer.startX);
        animating = true;
      }
      layout = m;

      if (!introState.running && !introState.done) {
        var allSettled = slots.every(function (slot) {
          return slot.loaded || slot.failed;
        });
        if (allSettled || now - introState.readyAt > 2500) {
          goal = snapPoint(m, goal);
          pos = goal;
          beginIntro(s, m);
        }
      }
      if (introState.running) {
        introState.t = Math.min(1, introState.t + dt / (INTRO_DURATION[introState.kind] || 1));
        if (introState.t >= 1) {
          introState.running = false;
          introState.done = true;
          container.classList.add('is-revealed');
        }
        animating = true;
      }

      if (mode === 'wheel' && now - wheelAt > 150) {
        goal = snapPoint(m, goal);
        mode = 'spring';
      }

      if (!pointer.dragging) {
        var spinning = introState.running && introState.kind === 'spin';
        var stiffness = spinning ? 9 : mode === 'wheel' ? 80 : 55;
        var damping = 2 * Math.sqrt(stiffness);
        var steps = Math.ceil(dt / (1 / 240));
        var h = dt / steps;
        for (var stepIdx = 0; stepIdx < steps; stepIdx++) {
          var acc = stiffness * (goal - pos) - damping * vel;
          vel += acc * h;
          pos += vel * h;
        }
        if (Math.abs(goal - pos) < 0.05 && Math.abs(vel) < 0.5) {
          pos = goal;
          vel = 0;
        } else {
          animating = true;
        }
      } else {
        animating = true;
      }

      if (Math.abs(pos) > m.loop * 8) {
        var shift = Math.round(pos / m.loop) * m.loop;
        pos -= shift;
        goal -= shift;
        pointer.startPos -= shift;
      }

      var current = nearest(m, pos);
      if (current !== activeIndex) {
        activeIndex = current;
        updateCaptionUI(current);
        if (typeof opts.onChange === 'function') {
          opts.onChange(current, itemsList[current]);
        }
      }

      if (focus.pending >= 0 && mode === 'spring' && Math.abs(goal - pos) < 1.5 && Math.abs(vel) < 30) {
        if (current === focus.pending) openFocus(current);
        else focus.pending = -1;
      }

      if (
        s.autoplay &&
        !reducedMotion &&
        introState.done &&
        focus.target === 0 &&
        focus.t < 0.01 &&
        !pointer.over &&
        !pointer.down &&
        !hasFocus &&
        mode === 'spring' &&
        Math.abs(goal - pos) < 1 &&
        now - interactedAt > 3000 &&
        now - autoplayAt > s.interval * 1000
      ) {
        autoplayAt = now;
        step(m, 1);
      }
      if (s.autoplay && !reducedMotion) animating = true;

      var travel = Math.abs(pos - lastPos) / dt;
      lastPos = pos;
      var energyTarget = reducedMotion ? 0 : Math.min(travel / 2600, 1);
      energy += (energyTarget - energy) * (1 - Math.exp(-dt / (energyTarget > energy ? 0.07 : 0.35)));
      if (energy > 0.001) animating = true;

      var liquidAmount = reducedMotion ? 0 : s.liquid;
      var push = Math.max(-1, Math.min(1, vel / 2200));
      var deformStiffness = 120;
      var deformDamping = 2 * Math.sqrt(deformStiffness) * 0.32;
      deformVel += (deformStiffness * (push - deform) - deformDamping * deformVel) * dt;
      deform += deformVel * dt;
      if (Math.abs(deform) > 0.0005 || Math.abs(deformVel) > 0.005) animating = true;

      var focusStiffness = 64;
      focus.v += (focusStiffness * (focus.target - focus.t) - 2 * Math.sqrt(focusStiffness) * focus.v) * dt;
      focus.t += focus.v * dt;
      if (Math.abs(focus.target - focus.t) < 0.0005 && Math.abs(focus.v) < 0.001) {
        focus.t = focus.target;
        focus.v = 0;
      } else {
        animating = true;
      }
      var focusAmount = clamp01(focus.t);
      var focusEase = easeInOut(focusAmount);
      var focusW = focus.index >= 0 && focus.index < n ? m.widths[focus.index] : m.cardH;
      var focusScale = Math.max(1, Math.min(1.28, (height * 0.82) / m.cardH, (width * 0.9) / focusW));
      var nextLift = 1 + (focusScale - 1) * focusEase;
      if (Math.abs(nextLift - lift) > 0.0005) {
        lift = nextLift;
        container.style.setProperty('--flex-carousel-lift', lift.toFixed(4));
      }

      // Smooth morph between optical presets
      var targetCurlDir = s.curl === 'rise' ? 1 : s.curl === 'fall' ? -1 : 0;
      var targetCurlMix = s.curl === 'rise' || s.curl === 'fall' ? 1 : 0;
      var morphAlpha = reducedMotion ? 1 : 1 - Math.exp(-dt / 0.14);
      var morphKeys = [
        ['lensWidth', s.lensWidth],
        ['lensHeight', s.lensHeight],
        ['tilt', s.tilt],
        ['roundness', s.roundness],
        ['bend', s.bend],
        ['reach', s.reach],
        ['curlDir', targetCurlDir],
        ['curlMix', targetCurlMix],
        ['dispersion', s.dispersion]
      ];
      for (var mk = 0; mk < morphKeys.length; mk++) {
        var mKey = morphKeys[mk][0];
        var mTarget = morphKeys[mk][1];
        var diff = mTarget - lensMorph[mKey];
        if (Math.abs(diff) > 0.0004) {
          lensMorph[mKey] += diff * morphAlpha;
          animating = true;
        } else {
          lensMorph[mKey] = mTarget;
        }
      }

      var effects = introEffects();

      var homeX = width / 2;
      var homeY = height * CENTER_Y_RATIO;
      var follow = s.followCursor && pointer.over && !pointer.dragging && !pointer.touch && focus.target === 0;
      var aimX = follow ? pointer.x : homeX;
      var aimY = follow ? pointer.y : homeY;
      if (!lens.ready) {
        lens.x = homeX;
        lens.y = homeY;
        lens.ready = true;
      } else if (!follow) {
        aimX = homeX;
        aimY = homeY;
      }
      var lensK = 110;
      var lensC = 2 * Math.sqrt(lensK) * 0.8;
      lens.vx += (lensK * (aimX - lens.x) - lensC * lens.vx) * dt;
      lens.vy += (lensK * (aimY - lens.y) - lensC * lens.vy) * dt;
      lens.x += lens.vx * dt;
      lens.y += lens.vy * dt;
      if (Math.abs(aimX - lens.x) + Math.abs(aimY - lens.y) > 0.2 || Math.abs(lens.vx) + Math.abs(lens.vy) > 0.5) {
        animating = true;
      }

      var cardH = m.cardH;
      var halfW = (lensMorph.lensWidth * width) / 2;
      var halfH = (lensMorph.lensHeight * width) / 2;
      var squash = Math.abs(deform) * liquidAmount;
      halfW *= 1 + squash * 0.16;
      halfH *= 1 - squash * 0.08;
      var lensX = lens.x - deform * 14 * liquidAmount;

      for (var si = 0; si < n; si++) {
        var sl = slots[si];
        if (sl.loaded && sl.ready < 1) {
          sl.ready = Math.min(1, sl.ready + dt / 0.42);
          animating = true;
        }
      }

      var waiting = !introState.done;
      if (dirty || animating || pointer.dragging) {
        dirty = false;
        instances = [];

        var shrink = 1 - clamp01(s.squeeze) * energy;
        var draws = [];
        for (var i = 0; i < n; i++) {
          var w = m.widths[i];
          var baseRel = wrap(m.centers[i] - pos, m.loop);
          for (var k = -3; k <= 3; k++) {
            var rel = baseRel + k * m.loop;
            if (Math.abs(rel) - w / 2 > width + 60) continue;
            var fx = effects.card ? effects.card(rel) : null;
            var x = homeX + rel + (fx ? fx.x : 0);
            var scale = shrink * (fx ? fx.scale : 1);
            var alpha = fx ? fx.alpha : 1;
            var focusCenterY = height * 0.5;
            var drawY = homeY + (fx ? fx.y : 0);
            if (focusAmount > 0) {
              if (i === focus.index && Math.abs(rel) < w) {
                scale *= 1 + (focusScale - 1) * focusEase;
                drawY = drawY + (focusCenterY - drawY) * focusEase;
              } else {
                var order = Math.min(Math.abs(rel) / width, 1) * 0.25;
                var part = easeInOut(focusAmount * 1.25 - order);
                x += (rel >= 0 ? 1 : -1) * part * width * 0.7;
                alpha *= 1 - part;
              }
            }
            var cw = w * scale;
            var ch = cardH * scale;
            if (alpha <= 0.001 || x + cw / 2 < -60 || x - cw / 2 > width + 60) continue;
            var activeAmt = 1 - clamp01(Math.abs(rel) / Math.max(w + m.gap, 1));
            draws.push({
              i: i,
              rel: rel,
              x: x,
              y: drawY,
              cw: cw,
              ch: ch,
              alpha: alpha,
              active: activeAmt
            });
          }
        }

        draws.sort(function (a, b) {
          return Math.abs(b.rel) - Math.abs(a.rel);
        });

        // Pass 1: Render cards into offscreen mipmapped RenderTarget
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        gl.viewport(0, 0, target.width, target.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        gl.useProgram(cardProg.program);
        gl.uniform2f(cardProg.locs.uResolution, width, height);
        gl.uniform1f(cardProg.locs.uDpr, dpr);
        gl.uniform1f(cardProg.locs.uRadius, s.radius);
        gl.uniform1i(cardProg.locs.tMap, 0);

        for (var di = 0; di < draws.length; di++) {
          var draw = draws[di];
          var slot = slots[draw.i];
          gl.activeTexture(gl.TEXTURE0);
          gl.bindTexture(gl.TEXTURE_2D, slot.texture);
          gl.uniform4f(
            cardProg.locs.uRect,
            draw.x,
            draw.y,
            draw.cw + CARD_PAD * 2,
            draw.ch + CARD_PAD * 2
          );
          gl.uniform2f(cardProg.locs.uSize, draw.cw, draw.ch);
          gl.uniform2f(cardProg.locs.uImage, slot.image[0], slot.image[1]);
          gl.uniform1f(cardProg.locs.uAlpha, draw.alpha);
          gl.uniform1f(cardProg.locs.uReady, slot.ready);
          gl.uniform1f(
            cardProg.locs.uShift,
            reducedMotion ? 0 : Math.max(-1, Math.min(1, draw.rel / (width * 0.75)))
          );
          gl.uniform1f(cardProg.locs.uActive, draw.active);
          gl.uniform3f(
            cardProg.locs.uPlaceholder,
            slot.color[0],
            slot.color[1],
            slot.color[2]
          );

          cardGeo.draw();

          instances.push({
            index: draw.i,
            x0: draw.x - draw.cw / 2,
            x1: draw.x + draw.cw / 2,
            y0: draw.y - draw.ch / 2,
            y1: draw.y + draw.ch / 2
          });
        }

        // Generate mipmaps for smooth anisotropic lens sampling
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, target.texture);
        gl.generateMipmap(gl.TEXTURE_2D);

        // Pass 2: Fullscreen Optical Liquid Lens + Chromatic Dispersion
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.disable(gl.BLEND);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(lensProg.program);
        gl.uniform1i(lensProg.locs.tScene, 0);
        gl.uniform2f(lensProg.locs.uResolution, width, height);
        gl.uniform1f(lensProg.locs.uDpr, dpr);
        gl.uniform2f(lensProg.locs.uCenter, lensX, lens.y);
        var spanW = Math.max(halfW, 1);
        var spanH = Math.max(halfH, 1);
        gl.uniform2f(lensProg.locs.uHalf, spanW, spanH);
        gl.uniform1f(lensProg.locs.uAngle, (lensMorph.tilt * Math.PI) / 180);
        gl.uniform1f(
          lensProg.locs.uExponent,
          2 + Math.pow(1 - clamp01(lensMorph.roundness), 1.5) * 10
        );
        var inner = Math.max(4, lensMorph.reach * (spanW + spanH) * 0.5);
        gl.uniform1f(lensProg.locs.uInner, inner);
        gl.uniform1f(lensProg.locs.uOuter, inner * 1.6);
        gl.uniform1f(lensProg.locs.uFlow, lensMorph.bend * (spanW + spanH) * 0.45);
        gl.uniform1f(lensProg.locs.uCurlDir, lensMorph.curlDir);
        gl.uniform1f(lensProg.locs.uCurlMix, lensMorph.curlMix);
        gl.uniform1f(
          lensProg.locs.uDispersion,
          lensMorph.dispersion * 0.12 * (1 + Math.abs(deform) * liquidAmount * 1.2)
        );
        gl.uniform1f(lensProg.locs.uStrength, effects.strength * (1 - focusEase));
        gl.uniform1f(lensProg.locs.uSceneAlpha, effects.sceneAlpha);

        lensGeo.draw();
        gl.bindVertexArray(null);
      }

      var nextHover = '';
      if (pointer.over && !pointer.dragging && introState.done) {
        var hit = null;
        for (var hi = instances.length - 1; hi >= 0; hi--) {
          var inst = instances[hi];
          if (pointer.x >= inst.x0 && pointer.x <= inst.x1 && pointer.y >= inst.y0 && pointer.y <= inst.y1) {
            hit = inst;
            break;
          }
        }
        if (focus.target > 0) {
          if (hit && hit.index === focus.index && pointer.y >= hit.y0 + (hit.y1 - hit.y0) * 0.78) {
            nextHover = 'open';
          } else {
            nextHover = 'close';
          }
        } else if (hit) {
          nextHover = 'open';
        }
      }
      if (nextHover !== hover) {
        hover = nextHover;
        if (hover) container.setAttribute('data-hover', hover);
        else container.removeAttribute('data-hover');
      }

      if (visible && (animating || waiting || dirty || pointer.down)) {
        raf = requestAnimationFrame(frame);
      }
    }

    function start() {
      if (raf || !visible || !alive) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    function localPoint(e) {
      var rect = container.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top];
    }

    function findHit(x, y) {
      for (var i = instances.length - 1; i >= 0; i--) {
        var inst = instances[i];
        if (x >= inst.x0 && x <= inst.x1 && y >= inst.y0 && y <= inst.y1) {
          return inst;
        }
      }
      return null;
    }

    function onPointerDown(e) {
      if (e.button !== undefined && e.button > 0) return;
      if (e.target && e.target.closest && e.target.closest('button, a, .flex-carousel__caption')) {
        return;
      }
      skipIntro();
      var pt = localPoint(e);
      pointer.down = true;
      pointer.id = e.pointerId;
      pointer.touch = e.pointerType === 'touch';
      pointer.startX = pt[0];
      pointer.startY = pt[1];
      pointer.x = pt[0];
      pointer.y = pt[1];
      pointer.startPos = pos;
      pointer.dragging = false;
      pointer.samples = [{ x: pt[0], t: performance.now() }];
      interactedAt = performance.now();
      if (Math.abs(vel) > 40) {
        goal = pos;
        vel = 0;
      }
      dirty = true;
      start();
    }

    function onPointerMove(e) {
      var pt = localPoint(e);
      pointer.x = pt[0];
      pointer.y = pt[1];
      pointer.over = true;
      if (pointer.down && e.pointerId === pointer.id) {
        var dx = pt[0] - pointer.startX;
        var dy = pt[1] - pointer.startY;
        var slop = pointer.touch ? 10 : 5;
        if (!pointer.dragging) {
          if (pointer.touch && Math.abs(dy) > slop && Math.abs(dy) > Math.abs(dx)) {
            pointer.down = false;
            return;
          }
          if (Math.abs(dx) > slop) {
            pointer.dragging = true;
            pointer.startX = pt[0];
            pointer.startPos = pos;
            closeFocus();
            try {
              container.setPointerCapture(e.pointerId);
            } catch (err) {
              pointer.dragging = true;
            }
            container.setAttribute('data-dragging', '');
          }
        }
        if (pointer.dragging) {
          pos = pointer.startPos - (pt[0] - pointer.startX);
          goal = pos;
          vel = 0;
          var now = performance.now();
          pointer.samples.push({ x: pt[0], t: now });
          while (pointer.samples.length > 2 && now - pointer.samples[0].t > 100) {
            pointer.samples.shift();
          }
        }
      }
      dirty = true;
      start();
    }

    function onPointerUp(e) {
      if (!pointer.down || e.pointerId !== pointer.id) return;
      pointer.down = false;
      container.removeAttribute('data-dragging');
      var m = metrics(settings);
      interactedAt = performance.now();

      if (pointer.dragging) {
        pointer.dragging = false;
        var now = performance.now();
        var first = pointer.samples[0];
        var lastSample = pointer.samples[pointer.samples.length - 1];
        var velocity = 0;
        if (first && lastSample && lastSample.t > first.t && now - lastSample.t < 75) {
          velocity = -((lastSample.x - first.x) / (lastSample.t - first.t)) * 1000;
        }
        vel = velocity;
        var landing = snapPoint(m, pos + velocity * 0.32);
        goal = landing;
        if (Math.abs(velocity) > 400 && Math.abs(landing - pos) < 1) {
          step(m, velocity > 0 ? 1 : -1);
        }
        mode = 'spring';
        start();
        return;
      }

      var pt = localPoint(e);
      var hit = findHit(pt[0], pt[1]);

      // Allow clicking the "View Products ->" button zone on the active/focused card
      if (hit && (hit.index === activeIndex || hit.index === focus.index) && Math.abs(goal - pos) < 4) {
        var btnZoneTop = hit.y0 + (hit.y1 - hit.y0) * 0.78;
        if (pt[1] >= btnZoneTop) {
          closeFocus();
          if (typeof opts.onAction === 'function') {
            opts.onAction(itemsList[hit.index], hit.index);
          }
          return;
        }
      }

      if (closeFocus()) return;
      if (!hit) return;

      if (hit.index === activeIndex && Math.abs(goal - pos) < 2) {
        if (typeof opts.onSelect === 'function') {
          opts.onSelect(hit.index, itemsList[hit.index]);
        }
        if (settings.focusOnClick) openFocus(hit.index);
      } else {
        var rel = (hit.x0 + hit.x1) / 2 - width / 2;
        goal = snapPoint(m, pos + rel);
        mode = 'spring';
        start();
      }
    }

    function onPointerLeave() {
      pointer.over = false;
      dirty = true;
      start();
    }

    function onPointerCancel() {
      pointer.down = false;
      pointer.dragging = false;
      container.removeAttribute('data-dragging');
      goal = snapPoint(metrics(settings), pos);
      mode = 'spring';
      start();
    }

    function onWheel(e) {
      if (e.ctrlKey) return;
      var dx = e.deltaX;
      var dy = e.deltaY;
      if (e.shiftKey && Math.abs(dx) < Math.abs(dy)) {
        dx = dy;
        dy = 0;
      }
      var unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? height : 1;
      var horizontal = Math.abs(dx) > Math.abs(dy);
      if (!horizontal && !settings.captureWheel) return;
      e.preventDefault();
      skipIntro();
      interactedAt = performance.now();
      if (closeFocus()) return;
      var delta = Math.max(-120, Math.min(120, (horizontal ? dx : dy) * unit));
      goal += delta * 1.25;
      mode = 'wheel';
      wheelAt = performance.now();
      start();
    }

    function onKeyDown(e) {
      var m = metrics(settings);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        skipIntro();
        closeFocus();
        interactedAt = performance.now();
        step(m, 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        skipIntro();
        closeFocus();
        interactedAt = performance.now();
        step(m, -1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        closeFocus();
        goTo(m, 0);
      } else if (e.key === 'End') {
        e.preventDefault();
        closeFocus();
        goTo(m, slots.length - 1);
      } else if (e.key === 'Escape') {
        if (closeFocus()) e.preventDefault();
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (e.target && e.target !== container) return;
        e.preventDefault();
        if (closeFocus() || activeIndex < 0) return;
        if (typeof opts.onSelect === 'function') {
          opts.onSelect(activeIndex, itemsList[activeIndex]);
        }
        if (settings.focusOnClick) openFocus(activeIndex);
      }
    }

    function onFocus() {
      hasFocus = true;
    }

    function onBlur() {
      hasFocus = false;
    }

    function onVisibility() {
      if (!document.hidden) start();
    }

    prevBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      skipIntro();
      closeFocus();
      interactedAt = performance.now();
      step(metrics(settings), -1);
    });

    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      skipIntro();
      closeFocus();
      interactedAt = performance.now();
      step(metrics(settings), 1);
    });

    if (ctaEl) {
      ctaEl.addEventListener('click', function (e) {
        var current = itemsList[activeIndex >= 0 ? activeIndex : 0];
        if (!current) return;
        if (!current.href || current.href === '#') {
          e.preventDefault();
          if (typeof opts.onAction === 'function') {
            opts.onAction(current, activeIndex);
          }
        }
      });
    }

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointerleave', onPointerLeave);
    container.addEventListener('pointercancel', onPointerCancel);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('keydown', onKeyDown);
    container.addEventListener('focus', onFocus);
    container.addEventListener('blur', onBlur);
    document.addEventListener('visibilitychange', onVisibility);

    var resizeObserver = null;
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
    } else {
      window.addEventListener('resize', resize);
    }

    var intersectionObserver = null;
    if ('IntersectionObserver' in window) {
      intersectionObserver = new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        start();
      });
      intersectionObserver.observe(container);
    }

    resize();
    setItems(opts.items);

    // Re-bake card canvases once Google Fonts ("Plus Jakarta Sans") settles for crisp typography
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        if (!alive) return;
        for (var i = 0; i < slots.length; i++) {
          if (slots[i].loaded) slots[i].rebake();
        }
      });
    }

    return {
      next: function () {
        skipIntro();
        closeFocus();
        interactedAt = performance.now();
        step(metrics(settings), 1);
      },
      prev: function () {
        skipIntro();
        closeFocus();
        interactedAt = performance.now();
        step(metrics(settings), -1);
      },
      goTo: function (index) {
        skipIntro();
        closeFocus();
        interactedAt = performance.now();
        goTo(metrics(settings), index);
      },
      setPreset: function (presetName) {
        if (!BEND_PRESETS[presetName]) return;
        settings = buildSettings(presetName);
        dirty = true;
        start();
      },
      setItems: setItems,
      wake: function () {
        dirty = true;
        start();
      },
      destroy: function () {
        alive = false;
        visible = false;
        cancelAnimationFrame(raf);
        if (resizeObserver) resizeObserver.disconnect();
        else window.removeEventListener('resize', resize);
        if (intersectionObserver) intersectionObserver.disconnect();
        container.removeEventListener('pointerdown', onPointerDown);
        container.removeEventListener('pointermove', onPointerMove);
        container.removeEventListener('pointerup', onPointerUp);
        container.removeEventListener('pointerleave', onPointerLeave);
        container.removeEventListener('pointercancel', onPointerCancel);
        container.removeEventListener('wheel', onWheel);
        container.removeEventListener('keydown', onKeyDown);
        container.removeEventListener('focus', onFocus);
        container.removeEventListener('blur', onBlur);
        document.removeEventListener('visibilitychange', onVisibility);
        slots.forEach(function (s) {
          s.dispose();
        });
        slots = [];
        cardGeo.dispose();
        lensGeo.dispose();
        target.dispose();
        gl.deleteProgram(cardProg.program);
        gl.deleteProgram(lensProg.program);
        var loseExt = gl.getExtension('WEBGL_lose_context');
        if (loseExt) loseExt.loseContext();
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    };
  }

  /* ── Auto-Mount on Anbu Traders ".brands-section" ── */
  function extractBrandsFromDOM(section) {
    var cards = section.querySelectorAll('.brand-grid .brand-card');
    var list = [];
    cards.forEach(function (card) {
      var img = card.querySelector('img');
      var h3 = card.querySelector('h3');
      var link = card.querySelector('a.btn, a');
      if (!img) return;
      var rawTitle = h3 ? h3.textContent.trim() : img.getAttribute('alt') || 'Brand Partner';
      // Normalize minor capitalization inconsistencies from legacy HTML
      var title = rawTitle
        .replace(/^priya cement$/i, 'Priya Cement')
        .replace(/^shyam steel$/i, 'Shyam Steel')
        .replace(/^isteel xls tmt bars$/i, 'iSTEEL XLS TMT Bars');
      var meta = inferBrandMeta(title);
      list.push({
        src: img.getAttribute('src') || '',
        alt: (img.getAttribute('alt') || title).trim(),
        title: title,
        badge: card.getAttribute('data-badge') || meta.badge,
        subtitle: card.getAttribute('data-subtitle') || meta.subtitle,
        filter: card.getAttribute('data-category') || meta.filter,
        href: link ? link.getAttribute('href') : '#products'
      });
    });
    return list;
  }

  function initBrandsSection() {
    var section = document.querySelector('.brands-section');
    var mountEl = document.getElementById('brandFlexCarousel');
    if (!section || !mountEl) return;

    var items = extractBrandsFromDOM(section);
    if (!items.length) return;

    ensureFileProtocolLogos().then(function () {
      var preset = mountEl.getAttribute('data-preset') || 'liquid';
      var intro = mountEl.getAttribute('data-intro') || 'rise';
      var autoplayAttr = mountEl.getAttribute('data-autoplay');
      var autoplay = autoplayAttr === null ? true : autoplayAttr !== 'false';
      var interval = parseFloat(mountEl.getAttribute('data-interval') || '3.6') || 3.6;

      var instance = createBrandFlexCarousel(mountEl, {
        items: items,
        preset: preset,
        intro: intro,
        autoplay: autoplay,
        interval: interval
      });

      if (!instance) {
        // Leave .brand-grid visible as graceful fallback when WebGL2 is unavailable
        section.classList.add('no-flex-carousel');
        return;
      }

      section.classList.add('has-flex-carousel');
      window.anbuBrandsCarousel = instance;

      // Wire up Preset Switcher Pills if present
      var presetBtns = section.querySelectorAll('.brand-preset-btn[data-preset]');
      presetBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var nextPreset = btn.getAttribute('data-preset');
          presetBtns.forEach(function (b) {
            var active = b === btn;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-pressed', active ? 'true' : 'false');
          });
          instance.setPreset(nextPreset);
        });
      });
    });
  }

  window.AnbuBrandFlexCarousel = {
    create: createBrandFlexCarousel,
    presets: BEND_PRESETS
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBrandsSection);
  } else {
    initBrandsSection();
  }
})();
