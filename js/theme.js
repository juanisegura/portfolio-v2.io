// Obtiene el estado del modo oscuro desde localStorage ("active" o "inactive")
let darkmode = localStorage.getItem('darkmode');
// Selecciona el botón o interruptor de cambio de tema por su ID
const themeSwitch = document.getElementById('theme-switch');

// Función para habilitar el modo oscuro
const enableDarkmode = () => {
  // Añade una clase temporal para manejar transiciones suaves
  document.documentElement.classList.add("transitioning");
  // Ejecuta el cambio después de un pequeño retraso para permitir la transición
  setTimeout(() => {
    // Añade la clase "darkmode" al elemento raíz (html) para activar el tema oscuro
    document.documentElement.classList.add("darkmode");
    // Guarda el estado "active" en localStorage para persistencia
    localStorage.setItem("darkmode", "active");
    // Elimina la clase de transición una vez completado el cambio
    document.documentElement.classList.remove("transitioning");
  }, 10); // Retraso de 10ms para iniciar la transición
};

// Función para deshabilitar el modo oscuro
const disableDarkmode = () => {
  // Añade una clase temporal para manejar transiciones suaves
  document.documentElement.classList.add("transitioning");
  // Ejecuta el cambio después de un pequeño retraso para permitir la transición
  setTimeout(() => {
    // Elimina la clase "darkmode" del elemento raíz para desactivar el tema oscuro
    document.documentElement.classList.remove("darkmode");
    // Guarda el estado "inactive" en localStorage para persistencia
    localStorage.setItem("darkmode", "inactive");
    // Elimina la clase de transición una vez completado el cambio
    document.documentElement.classList.remove("transitioning");
  }, 10); // Retraso de 10ms para iniciar la transición
};

// Verifica el estado inicial del modo oscuro y lo aplica si está activo
if (darkmode === 'active') enableDarkmode();

// Añade un evento de clic al interruptor de tema para alternar el modo oscuro
themeSwitch.addEventListener("click", () => {
  // Añade la clase de transición antes de cambiar el tema
  document.documentElement.classList.add("transitioning"); 
  // Ejecuta el cambio después de un retraso para permitir una transición suave
  setTimeout(() => {
    // Actualiza el valor de "darkmode" desde localStorage
    darkmode = localStorage.getItem('darkmode');
    // Si no está activo, habilita el modo oscuro; si está activo, lo deshabilita
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    // Elimina la clase de transición después de completar el cambio
    document.documentElement.classList.remove("transitioning"); 
  }, 50); // Retraso de 50ms para una transición más perceptible
});