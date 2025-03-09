// Escucha el evento "DOMContentLoaded" para ejecutar el código cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Realiza una solicitud para cargar el contenido del archivo header.html
    fetch("./sections/header.html")
        .then(response => response.text()) // Convierte la respuesta en texto plano
        .then(data => { // Procesa los datos obtenidos
            // Inserta el contenido del archivo header.html en el contenedor con ID "header-container"
            document.getElementById("header-container").innerHTML = data;
            // Llama a la función para inicializar la funcionalidad de la barra de navegación
            inicializarNavbar();
        })
        .catch(error => console.error("Error cargando el header:", error)); // Maneja errores al cargar el archivo
  });
  
  // Define la función para inicializar la funcionalidad de la barra de navegación
  function inicializarNavbar() {
    // Selecciona el botón de menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    // Selecciona la barra de navegación
    const navbar = document.querySelector(".navbar");
  
    // Verifica si ambos elementos existen en el DOM
    if (menuToggle && navbar) {
        // Añade un evento de clic al botón de menú para mostrar/ocultar la barra de navegación
        menuToggle.addEventListener("click", () => {
            // Alterna la clase "show" en la barra de navegación para mostrarla u ocultarla
            navbar.classList.toggle("show");
        });
  
        // Añade un evento de clic al documento para cerrar la barra de navegación si se hace clic fuera
        document.addEventListener("click", (event) => {
            // Comprueba si el clic no ocurrió dentro de la barra de navegación ni en el botón de menú
            if (!navbar.contains(event.target) && event.target !== menuToggle) {
                // Elimina la clase "show" para ocultar la barra de navegación
                navbar.classList.remove("show");
            }
        });
    } else {
        // Registra un error en la consola si no se encuentran los elementos necesarios
        console.error("Navbar o botón de menú no encontrados.");
    }
  }