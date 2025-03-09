// Escucha el evento "DOMContentLoaded" para ejecutar el código cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el botón de menú hamburguesa con la clase "menu-toggle"
  const menuToggle = document.querySelector('.menu-toggle');
  // Selecciona la barra de navegación con la clase "navbar"
  const navbar = document.querySelector('.navbar');

  // Verifica si ambos elementos (botón y navbar) existen en el DOM
  if (menuToggle && navbar) {
    // Añade un evento de clic al botón de menú para alternar la visibilidad de la navbar
    menuToggle.addEventListener('click', () => {
      // Alterna la clase "show" en la navbar para mostrarla u ocultarla
      navbar.classList.toggle('show');
    });

    // Añade un evento de clic al documento para cerrar la navbar si se hace clic fuera
    document.addEventListener('click', (event) => {
      // Comprueba si el clic no ocurrió dentro de la navbar ni en el botón de menú
      if (!navbar.contains(event.target) && event.target !== menuToggle) {
        // Elimina la clase "show" para ocultar la navbar
        navbar.classList.remove('show');
      }
    });
  }
});