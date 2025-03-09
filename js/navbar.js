// Selecciona el botón de menú hamburguesa con la clase "menu-toggle"
const menuToggle = document.querySelector('.menu-toggle');
// Selecciona el contenedor de los enlaces de navegación con la clase "nav-links"
const navLinks = document.querySelector('.nav-links');

// Añade un evento de clic al botón de menú para alternar la visibilidad del menú
menuToggle.addEventListener('click', () => {
    // Alterna la clase "active" en los enlaces de navegación para mostrarlos u ocultarlos
    navLinks.classList.toggle('active');
    
    // Alterna la clase "active-nav" en el cuerpo del documento para ajustar estilos (ej. bloqueo de scroll)
    document.body.classList.toggle('active-nav');
});

// Selecciona todos los enlaces dentro de ".nav-links" y añade funcionalidad a cada uno
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => { // Añade un evento de clic a cada enlace
        e.preventDefault(); // Evita el comportamiento por defecto del enlace (salto inmediato)
        
        // Obtiene el ID del objetivo del enlace quitando el "#" inicial
        let targetId = link.getAttribute('href').substring(1);
        // Selecciona la sección objetivo usando el ID
        let targetSection = document.getElementById(targetId);

        if (targetSection) { // Verifica si la sección existe
            // Desplaza suavemente la ventana hasta la sección objetivo con un ajuste de 50px
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Resta 50px para compensar la barra fija
                behavior: 'smooth' // Desplazamiento suave
            });
        }

        // Si la pantalla es menor o igual a 768px (móvil), cierra el menú
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active'); // Oculta los enlaces de navegación
            document.body.classList.remove('active-nav'); // Restaura el estado del cuerpo
        }
    });
});