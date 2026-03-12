const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
toggle.onclick = () => {
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
};

const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
    cards.forEach(card => {
        if(card.getBoundingClientRect().top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});