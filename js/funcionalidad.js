
(function () {
  // Considera móvil si es táctil o viewport ≤ 767px
  var isMobile =
    window.matchMedia('(pointer: coarse)').matches ||
    Math.min(window.innerWidth, (window.screen && screen.width) || 9999) <= 767;

  if (!isMobile) return;

  // Bandera global (útil si quieres condicionar otras cosas)
  document.documentElement.classList.add('no-loader-mobile');

  // En cuanto haya DOM: activa animaciones y elimina loaders
  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('start-anim');       // arranca tus anims (blur, etc.)
    document.body.classList.remove('disable-scroll'); // por si el loader lo ponía

    // Elimina cualquier variante de loader que tengas
    var loaders = document.querySelectorAll('.loader, .lo-ink, .loader.lo-ink');
    loaders.forEach(function (el) { if (el && el.parentNode) el.parentNode.removeChild(el); });

    // (Opcional) Crea un #textloader fantasma para evitar errores en loader.js
    if (!document.getElementById('textloader')) {
      var ghost = document.createElement('span');
      ghost.id = 'textloader';
      ghost.style.display = 'none';
      document.body.appendChild(ghost);
    }
  }, { once: true });
})();






/* Bloquea scroll programático en móvil (igual que index) */
(function () {
  var isMobile = window.matchMedia('(pointer: coarse)').matches ||
                 Math.min(window.innerWidth, (screen && screen.width) || 9999) <= 767;
  if (!isMobile) return;

  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.remove('disable-scroll');
  });

  var allowProgScroll = false;
  function allowTemporarily() { allowProgScroll = true; setTimeout(function(){ allowProgScroll = false; }, 900); }
  document.addEventListener('click', function (e) {
    if (e.target.closest('a, [data-scroll], [onclick*="scrollto"], [onclick*="scrollTo"], [onclick*="scrolltolink"]')) {
      allowTemporarily();
    }
  }, true);

  var _siv = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function () { if (!allowProgScroll) return; return _siv.apply(this, arguments); };
  var _sto = window.scrollTo, _sby = window.scrollBy;
  window.scrollTo = function () { if (!allowProgScroll) return; return _sto.apply(window, arguments); };
  window.scrollBy = function () { if (!allowProgScroll) return; return _sby.apply(window, arguments); };

  window.addEventListener('load', function(){
    if (location.hash) { history.replaceState(null, '', location.pathname + location.search); }
  });
})();


/*  Auto-dismiss vinculado a #textloader o timeout */

(function(){
  var loader = document.querySelector('.loader.lo-marina');
  if (!loader) return;

  function kill(){
    if (!loader) return;
    loader.style.transition = 'opacity .45s ease';
    loader.style.opacity = '0';
    setTimeout(function(){
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
      // Asegura arranque de tus animaciones de página
      document.body.classList.add('start-anim');
    }, 480);
    loader = null;
  }

  // Si tu loader.js pone 100% en #textloader, cerramos
  var tl = document.getElementById('textloader');
  if (tl && window.MutationObserver){
    var mo = new MutationObserver(function(){
      if ((tl.textContent||'').trim().includes('100%')) { kill(); mo.disconnect(); }
    });
    mo.observe(tl, {characterData:true, childList:true, subtree:true});
  }

  // Fallback: ciérralo solo por tiempo máximo de animación
  // Ajusta si cambias delays/duraciones de trazos
  var MAX_MS = 16000; // 16s ≈ suma de delays del ejemplo
  setTimeout(kill, MAX_MS);

  // Respeta reduce-motion
  try{
    if (matchMedia('(prefers-reduced-motion: reduce)').matches){
      setTimeout(kill, 400);
    }
  }catch(e){}
})();


// Scroll lento global (vanilla) 


   (function(){
     // No aplicar en pantallas táctiles
     var isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
     if (isTouch) return;
   
     // Ajustes: menor SPEED = más lento | EASE más alto = más “suave”
     var SPEED = 0.4; // 0.4–0.8 recomendados
     var EASE  = 0.10; // 0.08–0.2 recomendados
   
     var running = false, rafId = 0;
     var target = window.scrollY || document.documentElement.scrollTop;
     var current = target;
   
     function clamp(){
       var max = document.documentElement.scrollHeight - window.innerHeight;
       if (target < 0) target = 0;
       if (target > max) target = max;
     }
   
     function isScrollable(el){
       if (!el) return false;
       var s = getComputedStyle(el);
       return /(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight;
     }
   
     function wheel(e){
       // No intervenir hasta que termine el loader (cuando body tiene .start-anim)
       if (!document.body.classList.contains('start-anim')) return;
   
       // Deja nativo si estás sobre inputs o contenedores con scroll propio
       if (e.target.closest('input, textarea, select, [data-smooth-skip]')) return;
   
       // Si el hover está dentro de un contenedor scrollable, no toques nada
       var p = e.target;
       while (p && p !== document.body){
         if (isScrollable(p) && p !== document.documentElement) return;
         p = p.parentElement;
       }
   
       e.preventDefault(); // tomamos control del wheel
       var d = e.deltaY;
       if (e.deltaMode === 1) d *= 16;             // líneas → px
       else if (e.deltaMode === 2) d *= innerHeight; // páginas → px
       target += d * SPEED;
       clamp();
       if (!running) update();
     }
   
     function keydown(e){
       if (!document.body.classList.contains('start-anim')) return;
       var tag = (document.activeElement && document.activeElement.tagName) || '';
       if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
       if (e.target.closest('[data-smooth-skip]')) return;
   
       var vh = window.innerHeight;
       switch(e.keyCode){
         case 32: target += (e.shiftKey?-1:1) * vh*0.9; e.preventDefault(); break; // Space
         case 33: target -= vh*0.9; e.preventDefault(); break; // PgUp
         case 34: target += vh*0.9; e.preventDefault(); break; // PgDn
         case 35: target = document.documentElement.scrollHeight; e.preventDefault(); break; // End
         case 36: target = 0; e.preventDefault(); break; // Home
         case 38: target -= 80; e.preventDefault(); break; // Up
         case 40: target += 80; e.preventDefault(); break; // Down
         default: return;
       }
       clamp(); if (!running) update();
     }
   
     function update(){
       running = true;
       current += (target - current) * EASE;
       if (Math.abs(target - current) < 0.5) current = target;
       window.scrollTo(0, Math.round(current));
       if (current !== target) { rafId = requestAnimationFrame(update); }
       else { running = false; cancelAnimationFrame(rafId); }
     }
   
     // Anclas #hash con scroll suave (usa nuestro motor)
     document.addEventListener('click', function(e){
       var a = e.target.closest('a[href^="#"]');
       if (!a) return;
       var href = a.getAttribute('href');
       if (!href || href.length <= 1) return;
       var el = document.querySelector(href);
       if (!el) return;
       e.preventDefault();
       target = window.pageYOffset + el.getBoundingClientRect().top;
       clamp(); if (!running) update();
     });
   
     window.addEventListener('wheel', wheel, {passive:false});
     window.addEventListener('keydown', keydown, {passive:false});
     window.addEventListener('resize', clamp);
     window.addEventListener('load', function(){
       // sincroniza valores en el arranque real
       target = current = window.scrollY || document.documentElement.scrollTop;
     });
   })();
