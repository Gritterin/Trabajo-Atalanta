// SCROLL CON ANIMACION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visible = 120;

        if (elementTop < windowHeight - visible) {
            el.classList.add("active");
        }

    });

});


// HAMBURGUESA PARA DISPOSITIVOS MOVILES
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-nav ul");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");

    });

}