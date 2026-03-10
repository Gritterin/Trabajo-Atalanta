const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.menu-nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});