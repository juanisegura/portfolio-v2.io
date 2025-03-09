// Escucha el evento "DOMContentLoaded" para ejecutar el código cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

  // Inicializa la biblioteca AOS (Animate On Scroll) con opciones personalizadas
  AOS.init({
    duration: 1000,        // Duración de las animaciones en milisegundos (1 segundo)
    easing: "ease-in-out", // Tipo de transición suave para las animaciones
    once: false,           // Las animaciones se ejecutan cada vez que el elemento entra en vista (no solo una vez)
    mirror: false          // Las animaciones no se repiten al hacer scroll hacia arriba
  });

  // Refresca AOS para asegurar que las animaciones estén listas después de la inicialización
  AOS.refresh();

  // Selecciona todas las secciones del documento para aplicarles el observador
  const sections = document.querySelectorAll("section");

  // Crea un observador de intersección para detectar cuándo las secciones entran o salen de la vista
  const observer = new IntersectionObserver((entries) => {
    // Itera sobre cada entrada (sección observada)
    entries.forEach(entry => {
      if (entry.isIntersecting) { // Si la sección está visible en la pantalla
        entry.target.classList.remove("hidden"); // Elimina la clase "hidden" para mostrar la sección
        entry.target.classList.add("aos-animate"); // Añade la clase para activar las animaciones de AOS
        AOS.refresh(); // Refresca AOS para aplicar las animaciones inmediatamente
      } else { // Si la sección ya no está visible
        entry.target.classList.add("hidden"); // Añade la clase "hidden" para ocultar la sección
        entry.target.classList.remove("aos-animate"); // Elimina la clase de animación de AOS
      }
    });
  }, {
    threshold: 0.2 // Umbral de visibilidad: 20% de la sección debe estar visible para activar el evento
  });

  // Configura inicialmente todas las secciones y las observa
  sections.forEach(section => {
    section.classList.add("hidden"); // Añade la clase "hidden" a todas las secciones al cargar
    observer.observe(section);       // Comienza a observar cada sección con el IntersectionObserver
  });
});