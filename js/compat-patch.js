// js/compat-patch.v2.js
(function () {
  // ============
  // 0) UA flags
  // ============
  var UA = navigator.userAgent.toLowerCase();
  var isFF = UA.indexOf('firefox') > -1;
  var isSF = /^((?!chrome|android).)*safari/.test(navigator.userAgent);
  document.documentElement.classList.toggle('is-firefox', isFF);
  document.documentElement.classList.toggle('is-safari',  isSF);

  // ============
  // 1) Scroll bus barato (un solo rAF)
  // ============
  var ticking = false;
  function onRaf() { ticking = false; document.dispatchEvent(new CustomEvent('raf-scroll', {detail:{y:window.scrollY}})); }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(onRaf); } }
  ['scroll','wheel','touchmove','resize'].forEach(function(e){
    window.addEventListener(e, req, {passive:true});
  });

  // ============
  // 2) Feature flags (blur/blend)
  // ============
  var hasBdf = (window.CSS && (CSS.supports('backdrop-filter: blur(1px)') || CSS.supports('-webkit-backdrop-filter: blur(1px)')));
  var hasBlend = (window.CSS && CSS.supports('mix-blend-mode', 'screen'));
  document.documentElement.classList.toggle('no-bdf', !hasBdf);
  document.documentElement.classList.toggle('no-blend', !hasBlend);

  // ============
  // 3) Cursor follower cross-browser
  // ============
  (function cursorFix(){
    // desactiva en pantallas táctiles
    if (window.matchMedia('(pointer:coarse)').matches) return;

    // evita duplicados
    var old = document.querySelector('.cursor-dot-fix');
    if (old && old.parentNode) old.parentNode.removeChild(old);

    var dot = document.createElement('div');
    dot.className = 'cursor-dot-fix';
    document.body.appendChild(dot);

    // asegúralo FUERA de contenedores con transform (Safari bug de fixed dentro de transform)
    try { document.body.appendChild(dot); } catch(e){}

    var x = -100, y = -100, tx = -100, ty = -100, raf = 0;
    function loop(){
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      dot.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
      raf = requestAnimationFrame(loop);
    }
    function move(ev){
      var e = ev.touches ? ev.touches[0] : ev;
      tx = e.clientX; ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    }
    // pointermove + fallbacks
    document.addEventListener('pointermove', move, {passive:true});
    document.addEventListener('mousemove',   move, {passive:true});
    document.addEventListener('touchmove',   move, {passive:true});
  })();

  // ============
  // 4) Zoom-on-scroll genérico
  //    Úsalo poniendo data-zoom-on-scroll al contenedor de la imagen
  //    (si la foto es <img>, pon la clase .zoom-target al <img>)
  // ============
  (function zoomOnScroll(){
    var els = [].slice.call(document.querySelectorAll('[data-zoom-on-scroll]'));
    if (!els.length) return;

    function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
    function tick(){
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i=0;i<els.length;i++){
        var el = els[i];
        var rect = el.getBoundingClientRect();
        // progreso 0→1 desde que el top entra por abajo hasta que llega al top
        var p = clamp(1 - (rect.top / vh), 0, 1);
        var start = parseFloat(el.getAttribute('data-zoom-start')||'1');
        var end   = parseFloat(el.getAttribute('data-zoom-end')  ||'1.12');
        var s = start + (end - start) * p;
        el.style.setProperty('--zoom', s.toFixed(3));
      }
    }
    tick();
    document.addEventListener('raf-scroll', tick);
    window.addEventListener('load', tick, {once:true});
    window.addEventListener('resize', tick, {passive:true});
  })();

  // ============
  // 5) WAAPI / idle polyfills “silenciosos”
  // ============
  window.requestIdleCallback = window.requestIdleCallback || function (cb) {
    return setTimeout(function () { cb({didTimeout:false,timeRemaining:function(){return 0;}}); }, 1);
  };
  window.cancelIdleCallback = window.cancelIdleCallback || clearTimeout;
  if (!Element.prototype.animate) {
    Element.prototype.animate = function(){ return {finished:Promise.resolve(), cancel:function(){}, play:function(){}, pause:function(){}}; };
  }
})();
