document.addEventListener('DOMContentLoaded', function () {

  /* ==================== SCROLL TO TOP ==================== */
  var scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ==================== HEADER SCROLLED ==================== */
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }


  /* ==================== REVEAL BIDIRECCIONAL (estilo Palo Alto) ====================
     - Al bajar: el elemento sube desde abajo (.is-visible)
     - Al subir de vuelta: el elemento se va hacia arriba (.is-above)
     - Al volver a bajar: reaparece desde abajo de nuevo
  =================================================================================== */
  var revealEls = document.querySelectorAll('.reveal-up');

  function updateReveal() {
    var windowHeight = window.innerHeight;

    revealEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var elTop = rect.top;
      var elBottom = rect.bottom;

      var enterThreshold = windowHeight - 60;
      var exitThreshold  = 80;

      if (elTop < enterThreshold && elBottom > exitThreshold) {
        el.classList.add('is-visible');
        el.classList.remove('is-above');
      } else if (elBottom <= exitThreshold) {
        el.classList.remove('is-visible');
        el.classList.add('is-above');
      } else {
        el.classList.remove('is-visible');
        el.classList.remove('is-above');
      }
    });
  }

  updateReveal();
  window.addEventListener('scroll', updateReveal, { passive: true });


  /* ==================== MOBILE MENU ==================== */
  var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  var navList = document.querySelector('.nav-list');
  var menuOpen = false;

  if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', function () {
      menuOpen = !menuOpen;
      if (menuOpen) {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        navList.style.position = 'absolute';
        navList.style.top = '100%';
        navList.style.left = '0';
        navList.style.right = '0';
        navList.style.background = '#0a0a0a';
        navList.style.padding = '30px 40px';
        navList.style.gap = '20px';
        navList.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        navList.style.zIndex = '999';
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        navList.removeAttribute('style');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }


  /* ==================== SMOOTH SCROLL ==================== */
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href && href.length > 1) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          var headerEl = document.querySelector('.header');
          var offset = headerEl ? headerEl.offsetHeight : 0;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
          if (menuOpen && navList) {
            navList.removeAttribute('style');
            menuOpen = false;
            if (mobileMenuBtn) mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          }
        }
      }
    });
  });


  /* ==================== FORMULARIO ==================== */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = this.querySelector('button[type="submit"]');
      var originalContent = submitBtn.innerHTML;

      submitBtn.innerHTML = '<span>Enviando solicitud...</span>';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      setTimeout(function () {
        submitBtn.innerHTML = '<span>¡Solicitud enviada con éxito!</span> <i class="fas fa-check"></i>';
        submitBtn.style.background = '#28a745';
        submitBtn.style.opacity = '1';

        setTimeout(function () {
          submitBtn.innerHTML = originalContent;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1500);
    });
  }

});
