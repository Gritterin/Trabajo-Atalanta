const elements = document.querySelectorAll('.card, .area, .certifications-grid img');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, index * 120); 
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";

  observer.observe(el);

});

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;
    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.style.transition = "transform .4s ease";
  });

});

const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  const offset = window.scrollY;
  hero.style.backgroundPositionY = offset * 0.4 + "px";
});
