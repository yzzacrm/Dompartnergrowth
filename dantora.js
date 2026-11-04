/* ===================================================================
   DOM PARTNER GROWTH — dantora.js
   Efeito "Dantora" (referência: getlayers.ai/layer/dantora), recriado do
   zero para a paleta da Dom:
     1. tinta na água: uma dupla hélice verde e dourada solta fumaça de
        tinta que gira num fluxo e se abre onde o mouse passa (hero)
     2. fotos que saem do cursor (só em computador com mouse)
     3. fileiras de texto que andam de lado conforme a rolagem
     4. blocos que sobem um por cima do outro, alternando verde e off-white
   Só usa canvas 2D, transform e opacity. Respeita prefers-reduced-motion.
   =================================================================== */
(function(){
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine   = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------------------------------------------------------------
     1. TINTA NA ÁGUA
     --------------------------------------------------------------- */
  function initInk(hero){
    var canvas = document.createElement('canvas');
    canvas.className = 'ink-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    hero.insertBefore(canvas, hero.firstChild);
    var ctx = canvas.getContext('2d');
    if(!ctx) return;

    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var W = 0, H = 0, small = false;
    var parts = [];
    var phase = 0, t = 0;
    var mouse = { x:-9999, y:-9999 };
    var running = false, raf = 0, visible = true;

    function size(){
      var r = hero.getBoundingClientRect();
      W = Math.max(1, Math.round(r.width));
      H = Math.max(1, Math.round(r.height));
      small = W < 641;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /* ponto da hélice: u vai de 0 a 1 ao longo do eixo, strand é 0 ou 1 */
    function helix(u, strand){
      var cx  = small ? W * 0.82 : W * 0.66;
      var top = small ? H * 0.09 : H * 0.12;
      var len = small ? H * 0.38 : H * 0.7;
      var amp = small ? W * 0.1 : Math.min(W * 0.085, 150);
      var a = u * Math.PI * 4.4 + phase + strand * Math.PI;
      return { x: cx + Math.sin(a) * amp, y: top + u * len, z: Math.cos(a), s: Math.cos(a) };
    }

    function spawn(count){
      for(var i = 0; i < count; i++){
        var strand = Math.random() < 0.5 ? 0 : 1;
        var u = Math.random();
        var p = helix(u, strand);
        var life = 150 + Math.random() * 190;
        parts.push({
          x: p.x, y: p.y,
          vx: p.s * 0.5 + (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: life, max: life,
          r: (0.7 + Math.random() * 1.9) * (0.65 + 0.35 * (p.z + 1) / 2),
          gold: Math.random() < 0.2
        });
      }
    }

    function flow(x, y){
      return Math.sin(x * 0.0105 + t * 0.55) +
             Math.sin(y * 0.0125 - t * 0.42) +
             Math.sin((x + y) * 0.0068 + t * 0.31);
    }

    var R = 130, R2 = R * R;
    function update(){
      t += 0.0042;
      phase += 0.011;
      var limit = small ? 150 : 330;
      if(parts.length < limit) spawn(small ? 2 : 4);
      for(var i = parts.length - 1; i >= 0; i--){
        var p = parts[i];
        var ang = flow(p.x, p.y) * 1.55;
        p.vx += Math.cos(ang) * 0.034;
        p.vy += Math.sin(ang) * 0.034;
        var dx = p.x - mouse.x, dy = p.y - mouse.y;
        var d2 = dx * dx + dy * dy;
        if(d2 < R2){
          var d = Math.sqrt(d2) || 1;
          var f = (1 - d / R);
          f = f * f * 2.4;
          p.vx += dx / d * f;
          p.vy += dy / d * f;
        }
        p.vx *= 0.982; p.vy *= 0.982;
        p.x += p.vx; p.y += p.vy;
        p.life--;
        if(p.life <= 0 || p.x < -40 || p.x > W + 40 || p.y < -40 || p.y > H + 40){
          parts.splice(i, 1);
        }
      }
    }

    function draw(fade){
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,' + fade + ')';
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      for(var i = 0; i < parts.length; i++){
        var p = parts[i];
        var k = p.life / p.max;
        var a = Math.sin(Math.PI * (1 - k)) * 0.55;
        ctx.fillStyle = p.gold
          ? 'rgba(228,197,103,' + (a * 0.8).toFixed(3) + ')'
          : 'rgba(46,170,126,' + a.toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.2832);
        ctx.fill();
      }
      /* os dois fios da hélice, finos, como o "corpo" de onde a tinta sai */
      ctx.lineWidth = 1.3;
      ctx.lineCap = 'round';
      for(var s = 0; s < 2; s++){
        var prev = helix(0, s);
        for(var u = 0.006; u <= 1.0001; u += 0.006){
          var h = helix(u, s);
          var front = (h.z + prev.z) / 4 + 0.5;
          ctx.strokeStyle = 'rgba(' + (s ? '228,197,103' : '70,200,150') + ',' + (0.08 + front * 0.34).toFixed(3) + ')';
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(h.x, h.y);
          ctx.stroke();
          prev = h;
        }
      }
    }

    function frame(){
      raf = 0;
      if(!running) return;
      update();
      draw(0.075);
      raf = requestAnimationFrame(frame);
    }
    function start(){
      if(running || reduce) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stop(){
      running = false;
      if(raf) cancelAnimationFrame(raf);
      raf = 0;
    }

    size();

    if(reduce){
      /* sem movimento: simula um trecho e desenha um quadro parado */
      for(var n = 0; n < 240; n++) update();
      draw(0);
      var rt;
      window.addEventListener('resize', function(){
        clearTimeout(rt);
        rt = setTimeout(function(){ size(); for(var n = 0; n < 240; n++) update(); draw(0); }, 200);
      });
      return;
    }

    if(fine){
      hero.addEventListener('pointermove', function(e){
        if(e.pointerType && e.pointerType !== 'mouse') return;
        var r = hero.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
      }, { passive:true });
      hero.addEventListener('pointerleave', function(){ mouse.x = mouse.y = -9999; });
    }

    var rt2;
    window.addEventListener('resize', function(){
      clearTimeout(rt2);
      rt2 = setTimeout(size, 160);
    });

    if('IntersectionObserver' in window){
      new IntersectionObserver(function(entries){
        visible = entries[0].isIntersecting;
        if(visible && !document.hidden) start(); else stop();
      }, { threshold: 0 }).observe(hero);
    } else { start(); }
    document.addEventListener('visibilitychange', function(){
      if(document.hidden) stop(); else if(visible) start();
    });
  }

  /* ---------------------------------------------------------------
     2. FOTOS QUE SAEM DO CURSOR (só computador com mouse)
     --------------------------------------------------------------- */
  function initTrail(hero){
    if(reduce || !fine || !hero.animate) return;
    var layer = document.createElement('div');
    layer.className = 'trail-layer';
    layer.setAttribute('aria-hidden', 'true');
    hero.insertBefore(layer, hero.firstChild.nextSibling || null);

    var pool = [], idx = 0, built = false;
    var lastX = null, lastY = null, dist = 0;
    var COUNT = 8, STEP = 130;

    function build(){
      built = true;
      for(var i = 1; i <= COUNT; i++){
        var img = new Image();
        img.className = 'trail-img';
        img.alt = '';
        img.decoding = 'async';
        img.src = 'trail-' + i + '.jpg';
        layer.appendChild(img);
        pool.push(img);
      }
    }

    function spawn(x, y, dx, dy){
      var img = pool[idx++ % pool.length];
      if(img._a) img._a.cancel();
      var rot = (Math.random() - 0.5) * 14;
      var len = Math.sqrt(dx * dx + dy * dy) || 1;
      var tx = dx / len * 46, ty = dy / len * 46 - 10;
      img.style.left = (x - 55) + 'px';
      img.style.top  = (y - 69) + 'px';
      img._a = img.animate([
        { opacity: 0,    transform: 'translate3d(0,8px,0) scale(.82) rotate(' + rot + 'deg)' },
        { opacity: 0.95, transform: 'translate3d(' + (tx * 0.25) + 'px,' + (ty * 0.25) + 'px,0) scale(.98) rotate(' + rot + 'deg)', offset: 0.2 },
        { opacity: 0,    transform: 'translate3d(' + tx + 'px,' + ty + 'px,0) scale(1.06) rotate(' + (rot * 0.4) + 'deg)' }
      ], { duration: 1150, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'both' });
    }

    hero.addEventListener('pointermove', function(e){
      if(e.pointerType && e.pointerType !== 'mouse') return;
      if(!built) build();
      var r = hero.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top;
      if(lastX === null){ lastX = x; lastY = y; return; }
      var dx = x - lastX, dy = y - lastY;
      dist += Math.sqrt(dx * dx + dy * dy);
      lastX = x; lastY = y;
      if(dist >= STEP){
        dist = 0;
        spawn(x, y, dx, dy);
      }
    }, { passive:true });
    hero.addEventListener('pointerleave', function(){ lastX = lastY = null; dist = 0; });
  }

  /* ---------------------------------------------------------------
     3. FILEIRA QUE ANDA COM A ROLAGEM
        <div data-scrub data-sets="4" data-speed=".55" data-dir="-1">
          <div class="…-track"> … o mesmo conjunto repetido data-sets vezes … </div>
        </div>
     --------------------------------------------------------------- */
  function initScrub(){
    var rails = [].slice.call(document.querySelectorAll('[data-scrub]'));
    if(!rails.length || reduce) return;
    var items = rails.map(function(el){
      var track = el.firstElementChild;
      return {
        el: el, track: track,
        sets: parseFloat(el.getAttribute('data-sets')) || 4,
        speed: parseFloat(el.getAttribute('data-speed')) || 0.5,
        dir: parseFloat(el.getAttribute('data-dir')) || -1,
        set: 0, cur: 0, target: 0, shown: false
      };
    });
    items.forEach(function(it){ it.el.classList.add('is-scrub'); });

    function measure(){
      items.forEach(function(it){ it.set = it.track.scrollWidth / it.sets; });
    }
    var raf = 0;
    function tick(){
      raf = 0;
      var moving = false;
      var y = window.scrollY;
      items.forEach(function(it){
        it.target = y * it.speed;
        it.cur += (it.target - it.cur) * 0.14;
        if(Math.abs(it.target - it.cur) > 0.15) moving = true; else it.cur = it.target;
        if(it.set > 0){
          var off = it.cur % it.set;
          var x = it.dir < 0 ? -off : off - it.set;
          it.track.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0)';
        }
      });
      if(moving) raf = requestAnimationFrame(tick);
    }
    function kick(){ if(!raf) raf = requestAnimationFrame(tick); }
    measure();
    window.addEventListener('scroll', kick, { passive:true });
    window.addEventListener('resize', function(){ measure(); kick(); });
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ measure(); kick(); });
    window.addEventListener('load', function(){ measure(); kick(); });
    kick();
  }

  /* ---------------------------------------------------------------
     4. BLOCOS QUE SOBEM UM POR CIMA DO OUTRO
        O bloco que chega empurra o anterior: ele encolhe um pouco e
        apaga enquanto é coberto. Só transform e opacity.
     --------------------------------------------------------------- */
  function initLayers(){
    if(reduce) return;
    var secs = [].slice.call(document.querySelectorAll('main > section'));
    var pairs = [];
    for(var i = 1; i < secs.length; i++){
      var cover = secs[i];
      if(!cover.classList.contains('section') && !cover.classList.contains('logo-belt')) continue;
      var under = secs[i - 1];
      var inner = under.querySelector(':scope > .container, :scope > .phero-in, :scope > .hero-a, :scope > .logo-belt-mask');
      if(!inner) continue;
      inner.classList.add('layer-under');
      pairs.push({ cover: cover, inner: inner, last: -1 });
    }
    if(!pairs.length) return;
    var vh = window.innerHeight, ticking = false;
    function update(){
      ticking = false;
      for(var j = 0; j < pairs.length; j++){
        var pr = pairs[j];
        var top = pr.cover.getBoundingClientRect().top;
        var p = 1 - Math.min(Math.max(top / vh, 0), 1);
        p = p * p * (3 - 2 * p);
        if(Math.abs(p - pr.last) < 0.004) continue;
        pr.last = p;
        if(p <= 0.004){
          pr.inner.style.transform = '';
          pr.inner.style.opacity = '';
        } else {
          pr.inner.style.transform = 'scale(' + (1 - p * 0.045).toFixed(4) + ')';
          pr.inner.style.opacity = (1 - p * 0.4).toFixed(3);
        }
      }
    }
    function onScroll(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', onScroll, { passive:true });
    window.addEventListener('resize', function(){ vh = window.innerHeight; onScroll(); });
    update();
  }

  document.addEventListener('DOMContentLoaded', function(){
    var hero = document.querySelector('main > .hero, main > .phero');
    if(hero){
      initInk(hero);
      initTrail(hero);
    }
    initScrub();
    initLayers();
  });
})();
