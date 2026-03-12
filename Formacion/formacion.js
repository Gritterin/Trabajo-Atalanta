document.addEventListener('DOMContentLoaded', () => {

    // ==================== SCROLL TO TOP ====================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // ==================== HEADER LOGIC ====================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // ==================== TESTIMONIOS SLIDER ====================
    const testimonioCards = document.querySelectorAll('.testimonio-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.arrow.prev');
    const nextBtn = document.querySelector('.arrow.next');
    let currentSlide = 0;
    let autoSlideInterval;
    
    function showSlide(index) {
        if (!testimonioCards.length) return;
        
        if (index >= testimonioCards.length) currentSlide = 0;
        else if (index < 0) currentSlide = testimonioCards.length - 1;
        else currentSlide = index;
        
        testimonioCards.forEach((card, i) => {
            card.classList.toggle('active', i === currentSlide);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    function startAutoSlide() {
        if (testimonioCards.length > 1) {
            autoSlideInterval = setInterval(() => showSlide(currentSlide + 1), 6000);
        }
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => { showSlide(currentSlide - 1); resetAutoSlide(); });
        nextBtn.addEventListener('click', () => { showSlide(currentSlide + 1); resetAutoSlide(); });
    }
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { showSlide(i); resetAutoSlide(); });
    });
    
    startAutoSlide();
    
    // ==================== MOBILE MENU ====================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    let menuOpen = false;
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            
            if (menuOpen) {
                navList.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #0a0a0a;
                    padding: 30px;
                    gap: 25px;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                `;
                mobileMenuBtn.innerHTML = 'X';
            } else {
                navList.style.display = 'none';
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    }
    
    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    window.scrollTo({
                        top: target.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                    
                    if (menuOpen) {
                        navList.style.display = 'none';
                        menuOpen = false;
                        mobileMenuBtn.innerHTML = '☰';
                    }
                }
            }
        });
    });
    
    // ==================== FORMULARIO ====================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Enviando petición...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Simulación de envío
            setTimeout(() => {
                submitBtn.innerHTML = '¡Solicitud enviada con éxito!';
                submitBtn.style.background = '#28a745';
                submitBtn.style.opacity = '1';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });
    }

});