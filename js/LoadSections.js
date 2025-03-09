// Escucha el evento "DOMContentLoaded" para ejecutar el código cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Lista de secciones con sus IDs y archivos HTML correspondientes
    const sections = [
        { id: "inicio", file: "inicio.html" },
        { id: "sobre-mi", file: "sobre-mi.html" },
        { id: "tecnologias", file: "tecnologias.html" },
        { id: "proyectos", file: "proyectos.html" },
        { id: "educacion", file: "educacion.html" },
        { id: "contacto", file: "contacto.html" }
    ];

    // Verifica si el modo oscuro está activo en localStorage
    const darkmode = localStorage.getItem("darkmode") === "active";

    // Función para cargar una sección desde un archivo HTML
    const loadSection = ({ id, file }, currentLanguage) => {
        // Selecciona el contenedor de la sección en el DOM
        const container = document.getElementById(`${id}-container`);
        if (!container) { // Verifica si el contenedor existe
            console.error(`El contenedor #${id}-container no se encuentra en el DOM.`);
            return Promise.reject(`Contenedor #${id}-container no encontrado`);
        }

        // Realiza una solicitud fetch para cargar el archivo HTML
        return fetch(`./sections/${file}`)
            .then(response => {
                if (!response.ok) throw new Error(`No se pudo cargar ${file}`); // Verifica si la solicitud fue exitosa
                return response.text(); // Convierte la respuesta en texto
            })
            .then(data => {
                container.innerHTML = data; // Inserta el contenido HTML en el contenedor

                // Aplica el idioma a la sección recién cargada si existe la función correspondiente
                if (typeof cambiarIdiomaSeccion[id] === "function") {
                    cambiarIdiomaSeccion[id](currentLanguage);
                }

                // Aplica el tema oscuro si está activo
                if (darkmode) {
                    document.documentElement.classList.add("darkmode");
                }

                // Inicializa funcionalidades específicas según la sección
                if (id === "proyectos") initializeCarousel(); // Carrusel para proyectos
                if (id === "contacto") initializeContactForm(); // Formulario de contacto
                if (id === "educacion") initializeEducationCards(); // Modal para tarjetas de educación
            })
            .catch(error => { // Maneja errores en la carga
                console.error(`Error al cargar ${file}:`, error);
                container.innerHTML = `<p>Error al cargar la sección '${id}'.</p>`; // Mensaje de error en el contenedor
            });
    };

    // Inicializa la librería AOS (Animate On Scroll) con configuraciones específicas
    AOS.init({
        duration: 1000,        // Duración de las animaciones en milisegundos (1 segundo)
        easing: "ease-in-out", // Tipo de transición suave
        once: false,           // Las animaciones se repiten al entrar en vista
        mirror: false          // No se repiten al hacer scroll hacia arriba
    });

    // Configura el idioma inicial y carga todas las secciones
    const currentLanguage = initializeLanguageSwitch(); // Inicializa el botón de idioma y obtiene el idioma actual
    Promise.all(sections.map(section => loadSection(section, currentLanguage))) // Carga todas las secciones en paralelo
        .then(() => {
            cambiarIdioma(currentLanguage); // Asegura que el idioma se aplique a todas las secciones
            AOS.refresh(); // Refresca AOS para que las animaciones funcionen con el contenido cargado
        })
        .catch(() => console.warn("Algunas secciones no se cargaron correctamente")); // Avisa si hubo errores
});

// Función para inicializar el carrusel en la sección de proyectos
function initializeCarousel() {
    const carousels = document.querySelectorAll(".carousel"); // Selecciona todos los carruseles
    carousels.forEach(carousel => {
        const nextBtn = carousel.querySelector(".next-btn"); // Botón "siguiente"
        const prevBtn = carousel.querySelector(".prev-btn"); // Botón "anterior"
        const imagesContainer = carousel.querySelector(".carousel-images"); // Contenedor de imágenes
        const images = carousel.querySelectorAll(".carousel-images img"); // Lista de imágenes
        let currentIndex = 0; // Índice de la imagen actual

        const updateCarousel = () => { // Actualiza la posición del carrusel
            imagesContainer.style.transform = `translateX(${-currentIndex * 100}%)`; // Desplaza horizontalmente
        };

        nextBtn.addEventListener("click", () => { // Evento para avanzar
            currentIndex = (currentIndex + 1) % images.length; // Incrementa el índice cíclicamente
            updateCarousel();
        });

        prevBtn.addEventListener("click", () => { // Evento para retroceder
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrementa cíclicamente
            updateCarousel();
        });

        updateCarousel(); // Establece la posición inicial
    });
}

// Función para inicializar el formulario de contacto
function initializeContactForm() {
    const form = document.getElementById("contact-form"); // Selecciona el formulario
    if (form) { // Verifica si el formulario existe
        form.addEventListener("submit", e => { // Añade evento de envío
            e.preventDefault(); // Evita el envío tradicional
            console.log("Formulario enviado:", { // Muestra los datos en consola (simulación)
                nombre: form.nombre.value,
                apellido: form.apellido.value,
                email: form.email.value,
                mensaje: form.mensaje.value
            });
            form.reset(); // Limpia el formulario
            alert("Mensaje enviado (simulación)."); // Notifica al usuario
        });
    }
}

// Función para inicializar las tarjetas de educación con un modal
function initializeEducationCards() {
    const cards = document.querySelectorAll(".education-card"); // Selecciona todas las tarjetas
    const modal = document.getElementById("educationModal"); // Selecciona el modal
    const modalInfo = document.getElementById("modal-info"); // Contenedor de información del modal
    const closeBtn = modal ? modal.querySelector(".close") : null; // Botón de cierre del modal

    // Verifica si los elementos del modal existen
    if (!modal || !modalInfo || !closeBtn) {
        console.error("Elementos del modal no encontrados en el DOM.");
        return;
    }

    cards.forEach(card => { // Itera sobre cada tarjeta
        card.addEventListener("click", () => { // Añade evento de clic
            const img = card.querySelector("img"); // Busca la imagen en la tarjeta
            if (img) { // Si hay imagen, muestra el modal
                modalInfo.innerHTML = `<img src="${img.src}" alt="Certificado ampliado" style="max-width: 100%; height: auto;">`;
                modal.style.display = "block"; // Muestra el modal
            }
        });
    });

    closeBtn.addEventListener("click", () => { // Cierra el modal al hacer clic en el botón
        modal.style.display = "none";
        modalInfo.innerHTML = ""; // Limpia el contenido
    });

    window.addEventListener("click", (event) => { // Cierra el modal al hacer clic fuera
        if (event.target === modal) {
            modal.style.display = "none";
            modalInfo.innerHTML = "";
        }
    });
}