// Escucha el evento "DOMContentLoaded" para ejecutar el código cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Inicializa EmailJS con la clave pública del usuario (User ID)
    emailjs.init("vxHWpa72aXXTaGqDJ");

    // Añade un evento al formulario de contacto para manejar su envío
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        // Evita que el formulario se envíe de manera tradicional (recarga la página)
        event.preventDefault();

        // Obtiene el valor del campo "nombre" del formulario
        const nombre = document.getElementById("nombre").value;
        // Obtiene el valor del campo "email" del formulario
        const email = document.getElementById("email").value;
        // Obtiene el valor del campo "mensaje" del formulario
        const mensaje = document.getElementById("mensaje").value;

        // Crea un objeto con los datos del formulario para enviarlos vía EmailJS
        const params = {
            nombre: nombre,  // Nombre del remitente
            email: email,    // Correo electrónico del remitente
            mensaje: mensaje // Contenido del mensaje
        };

        // Envía el correo usando el servicio y plantilla de EmailJS
        emailjs.send("service_joporla", "template_flmogi9", params)
            .then(function(response) { // Maneja la respuesta exitosa
                // Muestra un mensaje de éxito al usuario
                alert("Mensaje enviado correctamente. Gracias por contactarme.");
                // Resetea el formulario para dejarlo en blanco
                document.getElementById("contact-form").reset();
            }, function(error) { // Maneja errores en el envío
                // Muestra un mensaje de error al usuario
                alert("Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.");
            });
    });
});