document.addEventListener("DOMContentLoaded", () => {
    // 1. Añadir animaciones de Scroll a las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("fade-in-section");
        observer.observe(sec);
    });

    // 2. Lógica para Expandir la información de la Persona (Modal)
    // Crear el HTML del modal y añadirlo al body
    const modalHTML = `
        <div class="modal-overlay" id="personaModal">
            <div class="modal-content">
                <button class="modal-close" id="closeModal">&times;</button>
                <img class="modal-img" id="modalImg" src="" alt="Foto">
                <h3 class="cargo-persona" id="modalCargo"></h3>
                <h2 class="nombre-persona" id="modalNombre"></h2>
                <div class="info-detallada" id="modalInfo" style="display:block; color: #ccc; margin-top: 1rem; line-height: 1.6;"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modalOverlay = document.getElementById("personaModal");
    const closeBtn = document.getElementById("closeModal");
    const modalImg = document.getElementById("modalImg");
    const modalCargo = document.getElementById("modalCargo");
    const modalNombre = document.getElementById("modalNombre");
    const modalInfo = document.getElementById("modalInfo");

    // Eventos al hacer click en una tarjeta
    document.querySelectorAll(".tarjeta-persona").forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            const img = tarjeta.querySelector("img").src;
            const cargo = tarjeta.querySelector(".cargo-persona").innerText;
            const nombre = tarjeta.querySelector(".nombre-persona").innerText;
            const info = tarjeta.querySelector(".info-detallada").innerHTML;

            modalImg.src = img;
            modalCargo.innerText = cargo;
            modalNombre.innerText = nombre;
            modalInfo.innerHTML = info;

            modalOverlay.classList.add("active");
        });
    });

    // Cerrar el modal
    closeBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
    });

    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove("active");
        }
    });

    // Prevenir el submit del formulario por defecto y links vacíos
    const form = document.querySelector("form");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Sesión de diagnóstico solicitada con éxito. Nos pondremos en contacto pronto.");
        });
    }

    document.querySelectorAll('a[href="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});