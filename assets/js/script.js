(function () {
  'use strict';

  /* ---- Ombre du header au scroll (throttlé, listener passif) ---- */
  var header = document.querySelector('header');
  if (header) {
    var ticking = false;
    var updateShadow = function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(157, 78, 221, 0.15)'
        : 'none';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateShadow);
        ticking = true;
      }
    }, { passive: true });
    updateShadow();
  }

  /* ---- Menu mobile (burger) ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };

    toggle.addEventListener('click', function () {
      setOpen(nav.classList.contains('open') === false);
    });

    // Fermer après un clic sur un lien
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }
})();
