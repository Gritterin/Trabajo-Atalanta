// ANIMACIONES SCROLL

const reveals = document.querySelectorAll(".reveal-top, .reveal-bottom");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;
const elementBottom = el.getBoundingClientRect().bottom;
const visible = 120;

if(elementTop < windowHeight - visible && elementBottom > 0){

el.classList.add("active");

}else{

el.classList.remove("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// HAMBURGUESA MOVIL

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-nav ul");

if (hamburger && navLinks) {

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");
hamburger.classList.toggle("active");

});

}