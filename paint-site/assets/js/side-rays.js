/*
 * SideRays - vanilla JS port of the React Bits "SideRays-JS-CSS" component.
 * Source: https://reactbits.dev/r/SideRays-JS-CSS.json (no npm dependencies).
 * The shaders, defaults, settings mapping and animation loop are kept identical
 * to the React version; only the React hooks were replaced with a plain
 * mount/destroy API so it can run on this static HTML site.
 *
 * Usage:
 *   var rays = SideRays.mount(element, { rayColor1: '#FFC46B', ... });
 *   rays.destroy();
 */
(function (global) {
  'use strict';

  var PIXEL_BUDGET = 2.4e6;
  var TAU = Math.PI * 2;

  var ORIGINS = {
    'top-right': { flipX: 0, flipY: 0, side: 0 },
    'top-left': { flipX: 1, flipY: 0, side: 0 },
    'bottom-right': { flipX: 0, flipY: 1, side: 0 },
    'bottom-left': { flipX: 1, flipY: 1, side: 0 },
    right: { flipX: 0, flipY: 0, side: 1 },
    left: { flipX: 1, flipY: 0, side: 1 }
  };

  var VERTEX = [
    '#version 300 es',
    'const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));',
    'void main() {',
    '  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);',
    '}'
  ].join('\n');

  var FRAGMENT = [
    '#version 300 es',
    'precision highp float;',
    'uniform vec2 uResolution;',
    'uniform float uTime;',
    'uniform vec3 uColorA;',
    'uniform vec3 uColorB;',
    'uniform float uBlend;',
    'uniform float uIntensity;',
    'uniform float uSpread;',
    'uniform float uDensity;',
    'uniform float uSharpness;',
    'uniform float uFalloff;',
    'uniform float uGlow;',
    'uniform float uSaturation;',
    'uniform float uDust;',
    'uniform float uOpacity;',
    'uniform float uReveal;',
    'uniform float uLight;',
    'uniform vec3 uFrame;',
    'uniform float uAim;',
    'uniform vec3 uFocus;',
    'uniform float uSway;',
    'out vec4 fragColor;',
    '',
    'float hash(vec2 p) {',
    '  p = fract(p * vec2(123.34, 456.21));',
    '  p += dot(p, p + 45.32);',
    '  return fract(p.x * p.y);',
    '}',
    '',
    'float noise(vec2 p) {',
    '  vec2 i = floor(p);',
    '  vec2 f = p - i;',
    '  vec2 w = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);',
    '  float a = hash(i);',
    '  float b = hash(i + vec2(1.0, 0.0));',
    '  float c = hash(i + vec2(0.0, 1.0));',
    '  float d = hash(i + vec2(1.0, 1.0));',
    '  return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);',
    '}',
    '',
    'float shafts(float u, float t, float seed, float aa) {',
    '  float sway = (0.4 * sin(t * 0.31 + seed) + 0.24 * sin(t * 0.17 + seed * 2.3)) * uSway;',
    '  float n = 0.7 * noise(vec2(u + sway + seed, t * 0.3)) + 0.3 * noise(vec2(u * 2.4 + sway * 1.5 + seed * 1.7, t * 0.45 + 3.0));',
    '  float width = mix(0.5, 0.1, uSharpness);',
    '  float s = mix(smoothstep(0.5 - width, 0.5 + width, n), 0.5, aa);',
    '  return mix(0.05, 1.0, s);',
    '}',
    '',
    'float motes(vec2 p, float cell, float t, float seed) {',
    '  p += vec2(t * 0.021, -t * 0.013) + seed * 7.31;',
    '  vec2 grid = p / cell;',
    '  vec2 id = floor(grid);',
    '  vec2 f = grid - id;',
    '  float h = hash(id + seed);',
    '  if (h > 0.5) return 0.0;',
    '  vec2 center = 0.25 + 0.5 * vec2(hash(id + 1.7 + seed), hash(id + 3.1 + seed));',
    '  center += 0.1 * vec2(sin(t * 0.7 + h * 31.0), cos(t * 0.6 + h * 23.0));',
    '  float size = mix(0.035, 0.09, hash(id + 5.3 + seed));',
    '  float edge = length(fwidth(grid)) * 0.7;',
    '  float twinkle = 0.55 + 0.45 * sin(t * 1.9 + h * 41.0);',
    '  return (1.0 - smoothstep(size - edge, size + edge, length(f - center))) * twinkle;',
    '}',
    '',
    'void main() {',
    '  float aspect = uResolution.x / uResolution.y;',
    '  vec2 q = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;',
    '  if (uFrame.x > 0.5) q.x = -q.x;',
    '  if (uFrame.y > 0.5) q.y = -q.y;',
    '  vec2 source = uFrame.z > 0.5 ? vec2(aspect * 0.5 + 0.42, 0.3) : vec2(aspect * 0.5 + 0.1, 0.62);',
    '  float heading = (uFrame.z > 0.5 ? 3.42 : -2.48) + uAim + 0.035 * sin(uTime * 0.21) * uSway;',
    '  vec2 v = q - source;',
    '  float r = length(v);',
    '  float angle = mod(atan(v.y, v.x) - heading + 3.14159265, 6.28318531) - 3.14159265;',
    '  float t = uTime;',
    '  float u = angle * uDensity;',
    '  float aa = smoothstep(0.12, 0.45, fwidth(u));',
    '  float offset = uSpread * 0.22;',
    '  float fanA = exp(-pow((angle + offset) / uSpread, 2.0) * 1.4);',
    '  float fanB = exp(-pow((angle - offset) / (uSpread * 1.15), 2.0) * 1.4);',
    '  float focus = 1.0 + uFocus.z * exp(-pow((angle - uFocus.x) / uFocus.y, 2.0));',
    '  float lightA = fanA * shafts(u, t, 0.0, aa) * focus;',
    '  float lightB = fanB * shafts(u * 0.83, t * 0.6, 17.0, aa) * focus;',
    '  float reach = 1.0 / (1.0 + pow(r / 0.4, uFalloff));',
    '  vec3 glowColor = mix(uColorA, uColorB, uBlend);',
    '  vec3 light = (uColorA * lightA * (1.0 - uBlend) + uColorB * lightB * uBlend) * 2.0 * reach;',
    '  light += glowColor * uGlow * exp(-pow(r / 0.4, 2.0));',
    '  if (uDust > 0.0) {',
    '    float sparkle = motes(q, 0.06, t, 0.0) + 0.7 * motes(q, 0.038, t * 0.8, 9.0);',
    '    light += mix(glowColor, vec3(1.0), 0.6) * sparkle * (lightA + lightB) * reach * uDust * 2.5;',
    '  }',
    '  light *= uIntensity * (1.0 - smoothstep(uReveal * 2.6 - 0.45, uReveal * 2.6, r)) * smoothstep(0.0, 0.35, uReveal);',
    '  float gray = dot(light, vec3(0.2126, 0.7152, 0.0722));',
    '  light = max(mix(vec3(gray), light, uSaturation), 0.0);',
    '  float peak = max(light.r, max(light.g, light.b));',
    '  float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;',
    '  if (uLight > 0.5) {',
    '    vec3 ink = pow(light / max(peak, 1e-4), vec3(2.0)) * 0.75;',
    '    float alpha = clamp(pow(1.0 - exp(-peak * 2.6), 2.5) * 0.9 * uOpacity + grain, 0.0, 1.0);',
    '    fragColor = vec4(pow(ink, vec3(1.0 / 2.2)) * alpha, alpha);',
    '    return;',
    '  }',
    '  float mapped = 1.0 - exp(-peak);',
    '  vec3 tone = light * (mapped / max(peak, 1e-4));',
    '  tone = mix(tone, vec3(mapped), smoothstep(0.7, 1.0, mapped) * 0.55);',
    '  vec3 shown = clamp(tone * uOpacity, 0.0, 1.0);',
    '  float alpha = max(shown.r, max(shown.g, shown.b));',
    '  vec3 color = clamp(shown * alpha + grain, 0.0, 1.0);',
    '  fragColor = vec4(min(color, vec3(alpha)), alpha);',
    '}'
  ].join('\n');

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function wrapAngle(angle) {
    return ((((angle + Math.PI) % TAU) + TAU) % TAU) - Math.PI;
  }

  function parseColor(value) {
    var text = String(value || '').trim();
    var hex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(text);
    if (hex) {
      var full = hex[1].length === 3 ? hex[1].replace(/./g, function (d) { return d + d; }) : hex[1];
      return [0, 2, 4].map(function (i) { return parseInt(full.slice(i, i + 2), 16) / 255; });
    }
    var rgb = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(text);
    if (rgb) return [rgb[1], rgb[2], rgb[3]].map(function (c) { return clamp(parseFloat(c) / 255, 0, 1); });
    return [1, 1, 1];
  }

  function geometryFor(frame, aspect) {
    return {
      source: frame.side ? [aspect * 0.5 + 0.42, 0.3] : [aspect * 0.5 + 0.1, 0.62],
      heading: frame.side ? 3.42 : -2.48
    };
  }

  function compile(gl, type, source) {
    var shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function link(gl) {
    var vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
    var fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    var program = vertex && fragment ? gl.createProgram() : null;
    if (!vertex || !fragment || !program) {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      return null;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    var uniforms = {};
    var count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (var i = 0; i < count; i++) {
      var info = gl.getActiveUniform(program, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
    }
    return { program: program, uniforms: uniforms };
  }

  // Same defaults as the React component props.
  var DEFAULTS = {
    rayColor1: '#FFC46B',
    rayColor2: '#96c8ff',
    blend: 0.6,
    origin: 'top-right',
    speed: 2.5,
    intensity: 2,
    spread: 2,
    density: 5,
    sharpness: 0.5,
    tilt: 0,
    falloff: 1.6,
    glow: 1,
    saturation: 1,
    dust: 0,
    followMouse: true,
    mouseInfluence: 0.5,
    intro: true,
    lightMode: false,
    opacity: 1,
    maxDevicePixelRatio: 2
  };

  function toSettings(p) {
    return {
      colorA: parseColor(p.rayColor1),
      colorB: parseColor(p.rayColor2),
      blend: clamp(p.blend, 0, 1),
      frame: ORIGINS[p.origin] || ORIGINS['top-right'],
      speed: Math.max(0, p.speed) * 0.4,
      intensity: Math.max(0, p.intensity) * 0.75,
      spread: clamp(p.spread, 0.1, 8) * 0.225,
      density: clamp(p.density, 1, 40),
      sharpness: clamp(p.sharpness, 0, 1),
      tilt: (clamp(p.tilt, -180, 180) * Math.PI) / 180,
      falloff: clamp(p.falloff, 0.2, 6),
      glow: Math.max(0, p.glow) * 1.2,
      saturation: Math.max(0, p.saturation),
      dust: clamp(p.dust, 0, 1),
      followMouse: !!p.followMouse,
      mouseInfluence: clamp(p.mouseInfluence, 0, 1),
      intro: !!p.intro,
      light: !!p.lightMode,
      opacity: clamp(p.opacity, 0, 1),
      maxRatio: clamp(p.maxDevicePixelRatio, 0.5, 3)
    };
  }

  function mount(host, options) {
    if (!host) return null;
    var props = {};
    var key;
    for (key in DEFAULTS) props[key] = DEFAULTS[key];
    for (key in (options || {})) props[key] = options[key];

    var container = document.createElement('div');
    container.className = 'side-rays' + (props.className ? ' ' + props.className : '');
    var canvas = document.createElement('canvas');
    canvas.className = 'side-rays__canvas';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);
    host.appendChild(container);

    var settings = toSettings(props);
    var generation = 0;
    var teardown = null;

    function start() {
      var gl = canvas.getContext('webgl2', {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: 'high-performance'
      });
      var shader = gl ? link(gl) : null;
      if (!gl || !shader) return null; // Graceful no-op when WebGL2 is unavailable.

      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var vao = gl.createVertexArray();
      var size = { width: 1, height: 1 };
      var pointer = { x: 0, y: 0, inside: false };
      var aim = { value: 0, velocity: 0 };
      var focus = { angle: 0, strength: 0 };
      var time = Math.random() * 100;
      var reveal = settings.intro && !reduced && generation === 0 ? 0 : 1;
      var raf = 0;
      var last = 0;
      var visible = true;
      var pageVisible = document.visibilityState !== 'hidden';
      var lost = false;

      function resize() {
        var s = settings;
        var rect = container.getBoundingClientRect();
        var cssWidth = Math.max(1, rect.width);
        var cssHeight = Math.max(1, rect.height);
        var ratio = Math.min(window.devicePixelRatio || 1, s.maxRatio, Math.sqrt(PIXEL_BUDGET / (cssWidth * cssHeight)));
        var width = Math.max(1, Math.round(cssWidth * ratio));
        var height = Math.max(1, Math.round(cssHeight * ratio));
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }
        size.width = cssWidth;
        size.height = cssHeight;
      }

      function pointerAngle(s) {
        var x = (pointer.x - size.width / 2) / size.height;
        var y = (size.height / 2 - pointer.y) / size.height;
        if (s.frame.flipX) x = -x;
        if (s.frame.flipY) y = -y;
        var g = geometryFor(s.frame, size.width / size.height);
        return wrapAngle(Math.atan2(y - g.source[1], x - g.source[0]) - g.heading - s.tilt);
      }

      function frame(now) {
        raf = 0;
        if (lost) return;
        var s = settings;
        var dt = clamp((now - last) / 1000 || 0, 0, 0.05);
        last = Math.max(last, now);
        time += dt * s.speed * (reduced ? 0.3 : 1);
        if (reveal < 1) reveal = Math.min(1, reveal + dt / 1.6);

        var tracking = s.followMouse && pointer.inside && !reduced;
        var pointed = tracking ? pointerAngle(s) : 0;
        var target = tracking ? clamp(pointed, -s.spread, s.spread) * s.mouseInfluence : 0;
        var focusTarget = tracking ? s.mouseInfluence : 0;
        var ease = 1 - Math.exp(-dt * 6);
        if (tracking) focus.angle += (clamp(pointed - aim.value, -s.spread * 1.5, s.spread * 1.5) - focus.angle) * ease;
        focus.strength += (focusTarget - focus.strength) * ease;
        var stiffness = 18;
        var damping = 2 * Math.sqrt(stiffness);
        aim.velocity += ((target - aim.value) * stiffness - aim.velocity * damping) * dt;
        aim.value += aim.velocity * dt;

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.useProgram(shader.program);
        gl.bindVertexArray(vao);
        var u = shader.uniforms;
        gl.uniform2f(u.uResolution, canvas.width, canvas.height);
        gl.uniform1f(u.uTime, time);
        gl.uniform3f(u.uColorA, s.colorA[0], s.colorA[1], s.colorA[2]);
        gl.uniform3f(u.uColorB, s.colorB[0], s.colorB[1], s.colorB[2]);
        gl.uniform1f(u.uBlend, s.blend);
        gl.uniform1f(u.uIntensity, s.intensity);
        gl.uniform1f(u.uSpread, s.spread);
        gl.uniform1f(u.uDensity, s.density);
        gl.uniform1f(u.uSharpness, s.sharpness);
        gl.uniform1f(u.uFalloff, s.falloff);
        gl.uniform1f(u.uGlow, s.glow);
        gl.uniform1f(u.uSaturation, s.saturation);
        gl.uniform1f(u.uDust, s.dust);
        gl.uniform1f(u.uOpacity, s.opacity);
        gl.uniform1f(u.uReveal, 1 - Math.pow(1 - reveal, 3));
        gl.uniform1f(u.uLight, s.light ? 1 : 0);
        gl.uniform3f(u.uFrame, s.frame.flipX, s.frame.flipY, s.frame.side);
        gl.uniform1f(u.uAim, s.tilt + aim.value);
        gl.uniform3f(u.uFocus, focus.angle, Math.max(0.06, s.spread * 0.25), focus.strength * 1.4);
        gl.uniform1f(u.uSway, reduced ? 0 : 1);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        var settling =
          Math.abs(target - aim.value) > 1e-4 ||
          Math.abs(aim.velocity) > 1e-4 ||
          Math.abs(focusTarget - focus.strength) > 1e-3;
        var busy = (s.speed > 0 && !reduced) || reveal < 1 || settling;
        if (busy && visible && pageVisible) raf = requestAnimationFrame(frame);
      }

      function wake() {
        if (raf || lost || !visible || !pageVisible) return;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }

      function onPointerMove(event) {
        var rect = container.getBoundingClientRect();
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
        pointer.inside =
          event.clientX >= rect.left && event.clientX <= rect.right &&
          event.clientY >= rect.top && event.clientY <= rect.bottom;
        wake();
      }
      function onLeave() {
        pointer.inside = false;
        wake();
      }
      function onPointerUp(event) {
        if (event.pointerType !== 'mouse') onLeave();
      }
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerup', onPointerUp, { passive: true });
      window.addEventListener('pointercancel', onPointerUp, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);

      function onLost(event) {
        event.preventDefault();
        lost = true;
        cancelAnimationFrame(raf);
        raf = 0;
      }
      function onRestored() {
        generation += 1;
        if (teardown) teardown();
        teardown = start();
      }
      canvas.addEventListener('webglcontextlost', onLost);
      canvas.addEventListener('webglcontextrestored', onRestored);

      var resizeObserver = new ResizeObserver(function () { resize(); wake(); });
      resizeObserver.observe(container);

      var intersection = new IntersectionObserver(function (entries) {
        visible = entries.some(function (e) { return e.isIntersecting; });
        wake();
      });
      intersection.observe(container);

      function onVisibility() {
        pageVisible = document.visibilityState !== 'hidden';
        wake();
      }
      document.addEventListener('visibilitychange', onVisibility);

      resize();
      wake();

      return function () {
        cancelAnimationFrame(raf);
        resizeObserver.disconnect();
        intersection.disconnect();
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
        document.documentElement.removeEventListener('pointerleave', onLeave);
        document.removeEventListener('visibilitychange', onVisibility);
        canvas.removeEventListener('webglcontextlost', onLost);
        canvas.removeEventListener('webglcontextrestored', onRestored);
        if (!gl.isContextLost()) {
          gl.deleteVertexArray(vao);
          gl.deleteProgram(shader.program);
        }
      };
    }

    teardown = start();

    return {
      element: container,
      destroy: function () {
        if (teardown) teardown();
        teardown = null;
        if (container.parentNode) container.parentNode.removeChild(container);
      }
    };
  }

  global.SideRays = { mount: mount, defaults: DEFAULTS };
})(window);
