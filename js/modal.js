// Selecciona el elemento del modal por su ID
var modal = document.getElementById("educationModal");

// Selecciona el primer elemento con la clase "close" (botón de cierre del modal)
var span = document.getElementsByClassName("close")[0];

// Selecciona todos los elementos con la clase "education-card" (tarjetas de educación)
var cards = document.getElementsByClassName("education-card");

// Itera sobre cada tarjeta de educación para añadir funcionalidad de clic
for (var i = 0; i < cards.length; i++) {
  cards[i].onclick = function() { // Asigna un evento de clic a cada tarjeta
    // Obtiene la fuente (src) de la primera imagen dentro de la tarjeta clicada
    var imgSrc = this.getElementsByTagName("img")[0].src;
    
    // Define el contenido del modal con una imagen usando una plantilla de string
    var modalContent = `
      <img src="${imgSrc}" alt="Education Image" style="width: 90%; border-radius: 5px; margin-top: 5px;">
    `;
    
    // Inserta el contenido en el elemento con ID "modal-info" dentro del modal
    document.getElementById("modal-info").innerHTML = modalContent;
    
    // Muestra el modal cambiando su estilo de display a "block"
    modal.style.display = "block";
  }
}

// Asigna un evento de clic al botón de cierre para ocultar el modal
span.onclick = function() {
  modal.style.display = "none"; // Oculta el modal cambiando su estilo a "none"
}

// Añade un evento de clic al objeto window para cerrar el modal al hacer clic fuera
window.onclick = function(event) {
  // Comprueba si el elemento clicado es el propio modal (fondo)
  if (event.target == modal) {
    modal.style.display = "none"; // Oculta el modal si se hace clic fuera del contenido
  }
}