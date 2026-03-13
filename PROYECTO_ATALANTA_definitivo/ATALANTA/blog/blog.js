// HAMBURGUESA
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.menu-nav');
const overlay = document.querySelector('.menu-overlay');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
  }
});

// FORMULARIO
const floatingForm = document.getElementById('floatingForm');
const closeBtn = document.getElementById('closeForm');

let formShown = false;

window.addEventListener('scroll', () => {

  const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
  const scrollActual = window.scrollY;

  if(scrollActual >= scrollTotal - 200 && !formShown){
      floatingForm.style.display = "block";
      formShown = true;
  }

});

closeBtn.addEventListener('click', () => {
  floatingForm.style.display = 'none';
});

// cerrar formulario
closeBtn.addEventListener('click', () => {
  floatingForm.style.display = 'none';
});