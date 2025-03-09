// Escucha el evento "DOMContentLoaded" para ejecutar el código cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase "carousel" en el documento
    const carousels = document.querySelectorAll('.carousel');

    // Itera sobre cada carrusel encontrado
    carousels.forEach(carousel => {
        // Selecciona el botón "siguiente" dentro del carrusel actual
        const nextBtn = carousel.querySelector('.next-btn');
        // Selecciona el botón "anterior" dentro del carrusel actual
        const prevBtn = carousel.querySelector('.prev-btn');
        // Selecciona el contenedor de imágenes dentro del carrusel
        const imagesContainer = carousel.querySelector('.carousel-images');
        // Selecciona todas las imágenes dentro del contenedor de imágenes
        const images = carousel.querySelectorAll('.carousel-images img');
        // Inicializa el índice de la imagen actual en 0 (primera imagen)
        let currentIndex = 0;

        // Función para actualizar la posición del carrusel
        function updateCarousel() {
            // Calcula el desplazamiento en porcentaje basado en el índice actual
            const offset = -currentIndex * 100; // Multiplica por -100 para mover a la izquierda
            // Aplica la transformación CSS para desplazar las imágenes horizontalmente
            imagesContainer.style.transform = `translateX(${offset}%)`;
        }

        // Añade un evento al botón "siguiente" para avanzar en el carrusel
        nextBtn.addEventListener('click', function() {
            // Incrementa el índice y usa el módulo para volver al inicio si se pasa del final
            currentIndex = (currentIndex + 1) % images.length;
            // Actualiza la posición del carrusel
            updateCarousel();
        });

        // Añade un evento al botón "anterior" para retroceder en el carrusel
        prevBtn.addEventListener('click', function() {
            // Decrementa el índice y suma la longitud total para evitar índices negativos, luego usa módulo
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            // Actualiza la posición del carrusel
            updateCarousel();
        });

        // Llama a la función inicialmente para mostrar la primera imagen
        updateCarousel();
    });
});