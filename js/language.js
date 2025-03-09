// Estructura optimizada de traducciones que contiene textos en español e inglés para la interfaz
const translations = {
    // Traducciones en español
    es: {
        // Título de la sección "Inicio" con el nombre resaltado mediante una clase CSS
        inicio: "Juan Ignacio <span class='highlight'>Segura</span>",
        // Descripción personal para la sección "Inicio"
        descripcion: "Tengo 21 años, soy desarrollador web y de software. Mi objetivo es aprender sobre el mundo de la informática y sus aplicaciones en diversos entornos laborales (como la optimización de ciertas tareas). Soy responsable en mis actividades y entusiasta a la hora de completar las tareas que me propongo. Disfruto del trabajo en equipo y me adapto fácilmente a los diferentes cambios que puedan surgir.",
        // Texto para el botón de descarga del CV en inglés
        descargarCvIngles: "Descargar CV inglés",
        // Texto para el botón de descarga del CV en español
        descargarCvEspanol: "Descargar CV español",
        // Objeto que contiene datos para la sección "Sobre mí"
        sobreMi: {
            // Título de la sección "Sobre mí"
            titulo: "Sobre mí",
            // Lista de párrafos descriptivos para "Sobre mí"
            parrafos: [
                // Párrafo 1: Introducción personal y pasión por la programación
                "Mi nombre es Juan Ignacio Segura, tengo 21 años y descubrí mi pasión por la programación a los 15. Desde entonces, he dedicado gran parte de mi tiempo a aprender y perfeccionar mis habilidades en el mundo de la tecnología.",
                // Párrafo 2: Habilidades técnicas y lenguajes conocidos
                "Cuento con una sólida base teórica y práctica en lenguajes como Python, Java, C++ y SQL, así como experiencia en el desarrollo web con HTML, CSS, Bootstrap y JavaScript, lo que me permite construir soluciones funcionales y atractivas para diferentes necesidades.",
                // Párrafo 3: Cualidades personales y actitud hacia desafíos
                "Soy una persona con gran capacidad de aprendizaje, adaptabilidad y alto rendimiento bajo presión. Disfruto enfrentando nuevos desafíos, ya que me impulsan a crecer y a superar mis propios límites. Estoy constantemente en búsqueda de oportunidades para aprender nuevas herramientas y habilidades, manteniéndome al día con las últimas tendencias tecnológicas.",
                // Párrafo 4: Motivación detrás de la programación
                "Mi pasión por la programación no solo se basa en el desarrollo técnico, sino también en la satisfacción de crear soluciones que marquen la diferencia."
            ]
        },
        // Objeto que contiene datos para la sección "Tecnologías"
        tecnologias: {
            // Título de la sección "Tecnologías"
            titulo: "Tecnologías",
            // Subcategorías de tecnologías
            categorias: {
                // Nombre de la categoría "Lenguajes"
                lenguajes: "Lenguajes",
                // Nombre de la categoría "Herramientas"
                herramientas: "Herramientas",
                // Nombre de la categoría "Frameworks y librerías"
                frameworks: "Frameworks y librerías",
                // Nombre de la categoría "Bases de datos"
                basesDatos: "Bases de datos"
            },
            // Listas de elementos específicos por categoría
            listas: {
                // Lista de lenguajes de programación y marcado
                lenguajes: ["HTML", "CSS", "JavaScript", "Java", "Python", "TypeScript"],
                // Lista de herramientas utilizadas
                herramientas: ["Git", "GitHub"],
                // Lista de frameworks y librerías empleadas
                frameworks: ["React.js", "Bootstrap", "Tailwind CSS", "Node.js"],
                // Lista de bases de datos conocidas
                basesDatos: ["MySQL", "SQL"]
            }
        },
        // Objeto que contiene datos para la sección "Proyectos"
        proyectos: {
            // Título de la sección "Proyectos"
            titulo: "Proyectos",
            // Lista de proyectos con sus detalles
            lista: [
                {
                    // Título del primer proyecto
                    titulo: "Proyecto final Python 3 - Nivel Inicial",
                    // Descripción del primer proyecto
                    descripcion: "Desarrollado como parte del proyecto final del curso 'Diplomatura en Python | Python 3 - Nivel Inicial' de la Universidad Tecnológica Nacional (UTN). El proyecto consistió en la creación de una aplicación utilizando Python, con el objetivo de aplicar los conocimientos adquiridos durante el curso.",
                    // Etiquetas asociadas al primer proyecto
                    tags: ["Python", "TKinter", "SQLite3"],
                    // Texto del botón para ver el proyecto en GitHub
                    github: "Ver en GitHub"
                },
                {
                    // Título del segundo proyecto
                    titulo: "Proyecto final de página web con Bootstrap - UTN",
                    // Descripción del segundo proyecto
                    descripcion: "Desarrollado como parte del proyecto final del curso 'Professional Frontend Developer' de la Universidad Tecnológica Nacional (UTN). El proyecto consistió en la creación de una página web utilizando HTML, CSS, JavaScript y Bootstrap, con el objetivo de aplicar los conocimientos adquiridos durante el curso.",
                    // Etiquetas asociadas al segundo proyecto
                    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                    // Texto del botón para ver el proyecto en GitHub
                    github: "Ver en GitHub"
                },
                {
                    // Título del tercer proyecto (versiones 1 y 2)
                    titulo: "Portafolio V1-V2",
                    // Descripción del tercer proyecto, destacando diferencias entre versiones
                    descripcion: "Aunque la UI es similar en ambas versiones, el código y la estructuración entre ambos proyectos cambió radicalmente, teniendo en la versión 2 un código más limpio y actualizado, separando las secciones del index.html y creando un archivo por sección. También se optimizó el cambio de idioma, eliminando el texto hardcoded en cada sección y dejando los elementos con placeholders temporales para que las traducciones de language.js los rellenen. Además, se consolidó la lógica de inicialización de idioma en loadSections.js y se eliminó código redundante en language.js.",
                    // Etiquetas asociadas al tercer proyecto
                    tags: ["HTML", "CSS", "JavaScript", "AOS", "EmailJS", "FetchAPI", "LocalStorage"],
                    // Texto del botón para ver la versión 1 en GitHub
                    githubV1: "Ver V1 en GitHub",
                    // Texto del botón para ver la versión 2 en GitHub
                    githubV2: "Ver V2 en GitHub"
                }
            ]
        },
        // Objeto que contiene datos para la sección "Educación"
        educacion: {
            // Título de la sección "Educación"
            titulo: "Educación",
            // Lista de ítems educativos con título y descripción
            lista: [
                { 
                    // Título del primer ítem educativo
                    titulo: "Lic. en Informática - Universidad Siglo 21", 
                    // Descripción del primer ítem educativo
                    descripcion: "Actualmente estoy cursando la carrera de Licenciatura en Informática y he completado 35 de las 50 materias requeridas para el programa. Una vez finalizada, cursaré las 10 materias restantes para graduarme como Ingeniero en Software." 
                },
                { 
                    titulo: "Professional Frontend Developer - UTN", 
                    descripcion: "Obtuve el certificado de Experto Universitario en Front End Developer. Adquirí y reforcé conocimientos en HTML, CSS, JavaScript y Bootstrap." 
                },
                { 
                    titulo: "Experto Universitario en Ethical Hacking - UTN", 
                    descripcion: "Completé un programa de Experto Universitario en Ethical Hacking en la Universidad Tecnológica Nacional (UTN), donde reforcé mis conocimientos en ciberseguridad y hacking ético." 
                },
                { 
                    titulo: "Data Engineering - UTN", 
                    descripcion: "Completé el curso de Data Engineering en la UTN para aprender y fortalecer mis conocimientos sobre las técnicas y herramientas fundamentales para recopilar, limpiar, transformar y almacenar datos de manera efectiva." 
                },
                { 
                    titulo: "Diplomatura en Python - UTN", 
                    descripcion: "Estoy cursando una diplomatura en Python para fortalecer mis conocimientos en este lenguaje de programación." 
                },
                { 
                    titulo: "Amazon Junior Software Developer - Coursera", 
                    descripcion: "También estoy cursando un certificado profesional en Coursera, donde estoy fortaleciendo mis conocimientos en Java y desarrollando software de alta calidad." 
                },
                { 
                    titulo: "IBM Full Stack Software Developer - Coursera", 
                    descripcion: "También estoy cursando un certificado profesional en 'Coursera', dictado por IBM donde fortalezco habilidades de desarrollo FullStack." 
                }
            ]
        },
        // Objeto que contiene datos para la sección "Contacto"
        contacto: {
            // Título de la subsección de información de contacto
            infoTitle: "Información de contacto",
            // Título del formulario de contacto
            formTitle: "Formulario de contacto",
            // Etiqueta para el campo de correo
            mail: "Mail",
            // Etiqueta para el campo de teléfono
            telefono: "Teléfono",
            // Etiqueta para el campo de LinkedIn
            linkedin: "LinkedIn",
            // Etiqueta para el campo de nombre en el formulario
            nombre: "Nombre",
            // Etiqueta para el campo de apellido en el formulario
            apellido: "Apellido",
            // Etiqueta para el campo de email en el formulario (con asterisco para indicar obligatorio)
            email: "Email *",
            // Etiqueta para el campo de mensaje en el formulario
            mensaje: "Escribe un mensaje",
            // Texto del botón de envío del formulario
            enviar: "Enviar"
        }
    },
    // Traducciones en inglés (estructura idéntica a español con contenido traducido)
    en: {
        // Título de la sección "Inicio" en inglés
        inicio: "Juan Ignacio <span class='highlight'>Segura</span>",
        // Descripción personal en inglés
        descripcion: "I am 21 years old, a web and software developer. My goal is to learn about the world of computing and its applications in various work environments (such as optimizing certain tasks). I am responsible in my activities and enthusiastic when completing the tasks I set for myself. I enjoy teamwork and adapt easily to different changes that may arise.",
        // Texto para el botón de descarga del CV en inglés
        descargarCvIngles: "Download CV English",
        // Texto para el botón de descarga del CV en español (en inglés)
        descargarCvEspanol: "Download CV Spanish",
        // Objeto para la sección "About Me" en inglés
        sobreMi: {
            // Título de la sección "About Me"
            titulo: "About Me",
            // Lista de párrafos en inglés
            parrafos: [
                // Párrafo 1 en inglés
                "My name is Juan Ignacio Segura, I am 21 years old, and I discovered my passion for programming at 15. Since then, I have dedicated much of my time to learning and improving my skills in the world of technology.",
                // Párrafo 2 en inglés
                "I have a solid theoretical and practical foundation in languages such as Python, Java, C++, and SQL, as well as experience in web development with HTML, CSS, Bootstrap, and JavaScript, allowing me to build functional and attractive solutions for different needs.",
                // Párrafo 3 en inglés
                "I am a person with great learning ability, adaptability, and high performance under pressure. I enjoy facing new challenges as they push me to grow and exceed my own limits. I am constantly seeking opportunities to learn new tools and skills, keeping up with the latest technological trends.",
                // Párrafo 4 en inglés
                "My passion for programming is not only based on technical development but also on the satisfaction of creating solutions that make a difference."
            ]
        },
        // Objeto para la sección "Technologies" en inglés
        tecnologias: {
            // Título de la sección "Technologies"
            titulo: "Technologies",
            // Subcategorías en inglés
            categorias: {
                lenguajes: "Languages",
                herramientas: "Tools",
                frameworks: "Frameworks & Libraries",
                basesDatos: "Databases"
            },
            // Listas de elementos (idénticas a español)
            listas: {
                lenguajes: ["HTML", "CSS", "JavaScript", "Java", "Python", "TypeScript"],
                herramientas: ["Git", "GitHub"],
                frameworks: ["React.js", "Bootstrap", "Tailwind CSS", "Node.js"],
                basesDatos: ["MySQL", "SQL"]
            }
        },
        // Objeto para la sección "Projects" en inglés
        proyectos: {
            // Título de la sección "Projects"
            titulo: "Projects",
            // Lista de proyectos en inglés
            lista: [
                {
                    titulo: "Final Project Python 3 - Beginner Level",
                    descripcion: "Developed as part of the final project of the 'Diploma in Python | Python 3 - Beginner Level' course at the National Technological University (UTN). The project involved creating an application using Python to apply the knowledge gained during the course.",
                    tags: ["Python", "TKinter", "SQLite3"],
                    github: "View on GitHub"
                },
                {
                    titulo: "Final Project Website with Bootstrap - UTN",
                    descripcion: "Developed as part of the final project of the 'Professional Frontend Developer' course at the National Technological University (UTN). The project involved creating a website using HTML, CSS, JavaScript, and Bootstrap, to apply the knowledge gained during the course.",
                    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                    github: "View on GitHub"
                },
                {
                    titulo: "Portfolio V1-V2",
                    descripcion: "Although the UI is similar in both versions, the code and structure between the two projects changed radically, with version 2 featuring cleaner and more updated code, separating the sections from index.html and creating a file per section. The language switching was also optimized, removing hardcoded text from each section and using temporary placeholders for translations from language.js to fill them. Additionally, the language initialization logic was consolidated in loadSections.js, and redundant code in language.js was removed.",
                    tags: ["HTML", "CSS", "JavaScript", "AOS", "EmailJS", "FetchAPI", "LocalStorage"],
                    githubV1: "View V1 on GitHub",
                    githubV2: "View V2 on GitHub"
                }
            ]
        },
        // Objeto para la sección "Education" en inglés
        educacion: {
            // Título de la sección "Education"
            titulo: "Education",
            // Lista de ítems educativos en inglés
            lista: [
                { 
                    titulo: "B.Sc. in Computer Science - Universidad Siglo 21", 
                    descripcion: "I am currently pursuing a Bachelor's degree in Computer Science and have completed 35 out of 50 required courses. Once finished, I will complete the remaining 10 courses to graduate as a Software Engineer." 
                },
                { 
                    titulo: "Professional Frontend Developer - UTN", 
                    descripcion: "I obtained the University Expert certificate in Front End Development. I acquired and strengthened my knowledge in HTML, CSS, JavaScript, and Bootstrap." 
                },
                { 
                    titulo: "University Expert in Ethical Hacking - UTN", 
                    descripcion: "I completed a University Expert program in Ethical Hacking at the National Technological University (UTN), where I reinforced my knowledge in cybersecurity and ethical hacking." 
                },
                { 
                    titulo: "Data Engineering - UTN", 
                    descripcion: "I completed the Data Engineering course at UTN to learn and strengthen my knowledge of fundamental techniques and tools for collecting, cleaning, transforming, and storing data effectively." 
                },
                { 
                    titulo: "Python Diploma - UTN", 
                    descripcion: "I am currently taking a Python diploma course to strengthen my skills in this programming language." 
                },
                { 
                    titulo: "Amazon Junior Software Developer - Coursera", 
                    descripcion: "I am also taking a professional certificate on Coursera, where I am enhancing my Java skills and developing high-quality software." 
                },
                { 
                    titulo: "IBM Full Stack Software Developer - Coursera", 
                    descripcion: "I am also pursuing a professional certificate on Coursera, offered by IBM, where I am strengthening my Full Stack development skills." 
                }
            ]
        },
        // Objeto para la sección "Contacto" en inglés
        contacto: {
            infoTitle: "Contact Information",
            formTitle: "Contact Form",
            mail: "Email",
            telefono: "Phone",
            linkedin: "LinkedIn",
            nombre: "First Name",
            apellido: "Last Name",
            email: "Email *",
            mensaje: "Write a message",
            enviar: "Send"
        }
    }
};

// Objeto que contiene funciones optimizadas para cambiar el idioma de cada sección
const cambiarIdiomaSeccion = {
    // Función para actualizar la sección "Inicio"
    inicio: (lang) => {
        // Objeto con referencias a los elementos del DOM en la sección "Inicio"
        const elements = {
            title: document.querySelector("#inicio h1"), // Título principal
            desc: document.querySelector("#inicio p"), // Descripción
            cvButtons: document.querySelectorAll(".cv-buttons a") // Botones de descarga de CV
        };
        // Actualiza el título con HTML si el elemento existe
        if (elements.title) elements.title.innerHTML = translations[lang].inicio;
        // Actualiza la descripción si el elemento existe
        if (elements.desc) elements.desc.textContent = translations[lang].descripcion;
        // Actualiza los botones de CV si hay al menos 2
        if (elements.cvButtons.length >= 2) {
            elements.cvButtons[0].textContent = translations[lang].descargarCvIngles; // Botón CV inglés
            elements.cvButtons[1].textContent = translations[lang].descargarCvEspanol; // Botón CV español
        }
    },
    // Función para actualizar la sección "Sobre mí"
    sobreMi: (lang) => {
        // Obtiene los datos de traducción para "Sobre mí"
        const data = translations[lang].sobreMi;
        // Selecciona el título de la sección
        const title = document.querySelector("#sobre-mi h2");
        // Selecciona todos los párrafos de la sección
        const paragraphs = document.querySelectorAll("#sobre-mi p");
        // Actualiza el título si existe
        if (title) title.textContent = data.titulo;
        // Itera sobre los párrafos y los actualiza con los textos correspondientes
        data.parrafos.forEach((text, i) => {
            if (paragraphs[i]) paragraphs[i].textContent = text;
        });
    },
    // Función para actualizar la sección "Tecnologías"
    tecnologias: (lang) => {
        // Obtiene los datos de traducción para "Tecnologías"
        const data = translations[lang].tecnologias;
        // Selecciona el título de la sección
        const title = document.querySelector("#tecnologias h2");
        // Selecciona todas las columnas de tecnologías
        const columns = document.querySelectorAll("#tecnologias .columna");
        // Selecciona todos los párrafos dentro de las tarjetas
        const cards = document.querySelectorAll("#tecnologias .card p");

        // Actualiza el título si existe
        if (title) title.textContent = data.titulo;
        // Actualiza los títulos de las categorías si hay al menos 4 columnas
        if (columns.length >= 4) {
            Object.values(data.categorias).forEach((cat, i) => columns[i].querySelector("h3").textContent = cat);
        }
        // Combina todas las listas de tecnologías en un solo arreglo
        const allLists = [...data.listas.lenguajes, ...data.listas.herramientas, ...data.listas.frameworks, ...data.listas.basesDatos];
        // Actualiza el texto de las tarjetas con los nombres de las tecnologías
        allLists.forEach((name, i) => {
            if (cards[i]) cards[i].textContent = name;
        });
    },
    // Función para actualizar la sección "Proyectos"
    proyectos: (lang) => {
        // Obtiene los datos de traducción para "Proyectos"
        const data = translations[lang].proyectos;
        // Selecciona el título de la sección
        const title = document.querySelector("#proyectos .section-title");
        // Selecciona todas las tarjetas de proyectos
        const cards = document.querySelectorAll(".project-card");

        // Actualiza el título si existe
        if (title) title.textContent = data.titulo;
        // Itera sobre cada tarjeta de proyecto
        cards.forEach((card, i) => {
            // Obtiene el proyecto correspondiente de la lista
            const project = data.lista[i];
            // Si no hay proyecto, termina la iteración para esa tarjeta
            if (!project) return;
            // Objeto con referencias a los elementos dentro de la tarjeta
            const elements = {
                title: card.querySelector(".project-info h3"), // Título del proyecto
                desc: card.querySelector(".project-info p"), // Descripción del proyecto
                tags: card.querySelectorAll(".tags .tag"), // Etiquetas del proyecto
                githubButtons: card.querySelectorAll(".project-footer a.github-btn") // Botones de GitHub
            };
            // Actualiza el título del proyecto si existe
            if (elements.title) elements.title.textContent = project.titulo;
            // Actualiza la descripción si existe
            if (elements.desc) elements.desc.textContent = project.descripcion;
            // Actualiza las etiquetas iterando sobre ellas
            project.tags.forEach((tag, j) => {
                if (elements.tags[j]) elements.tags[j].textContent = tag;
            });
            // Actualiza los botones de GitHub según la estructura del proyecto
            if (elements.githubButtons.length > 0) {
                if (project.github) {
                    // Si hay un solo enlace GitHub, lo aplica al primer botón
                    elements.githubButtons[0].textContent = project.github;
                } else {
                    // Si hay enlaces para V1 y V2, los aplica a los botones correspondientes
                    if (elements.githubButtons[0]) elements.githubButtons[0].textContent = project.githubV1;
                    if (elements.githubButtons[1]) elements.githubButtons[1].textContent = project.githubV2;
                }
            }
        });
    },
    // Función para actualizar la sección "Educación"
    educacion: (lang) => {
        // Obtiene los datos de traducción para "Educación"
        const data = translations[lang].educacion;
        // Selecciona el título de la sección
        const title = document.querySelector("#educacion h2");
        // Selecciona todas las tarjetas de educación
        const cards = document.querySelectorAll(".education-card");

        // Actualiza el título si existe
        if (title) title.textContent = data.titulo;
        // Itera sobre los ítems educativos y actualiza las tarjetas
        data.lista.forEach((edu, i) => {
            if (cards[i]) {
                // Selecciona el título y la descripción dentro de la tarjeta
                const titleEl = cards[i].querySelector("h3");
                const descEl = cards[i].querySelector("p");
                // Actualiza el título de la tarjeta si existe
                if (titleEl) titleEl.textContent = edu.titulo;
                // Actualiza la descripción de la tarjeta si existe
                if (descEl) descEl.textContent = edu.descripcion;
            }
        });
    },
    // Función para actualizar la sección "Contacto"
    contacto: (lang) => {
        // Obtiene los datos de traducción para "Contacto"
        const data = translations[lang].contacto;
        // Selecciona el título de la información de contacto
        const infoTitle = document.querySelector(".contact-info h2");
        // Selecciona el título del formulario
        const formTitle = document.querySelector(".contact-form h2");
        // Selecciona los párrafos de información de contacto
        const info = document.querySelectorAll(".contact-info p");
        // Selecciona las etiquetas del formulario
        const labels = document.querySelectorAll(".form-group label");
        // Selecciona el botón de envío
        const submitBtn = document.querySelector(".form-submit button");

        // Actualiza el título de información si existe
        if (infoTitle) infoTitle.textContent = data.infoTitle;
        // Actualiza el título del formulario si existe
        if (formTitle) formTitle.textContent = data.formTitle;
        // Actualiza los párrafos de información si hay al menos 3
        if (info.length >= 3) {
            info[0].innerHTML = `<strong>${data.mail}:</strong> juanosegura@icloud.com`; // Correo con formato HTML
            info[1].innerHTML = `<strong>${data.telefono}:</strong> +54 9 11 5400-4515`; // Teléfono con formato HTML
            info[2].innerHTML = `<strong>${data.linkedin}:</strong> <a href="https://www.linkedin.com/in/juanigsegura/" target="_blank">Juan Ignacio Segura</a>`; // LinkedIn con enlace
        }
        // Actualiza las etiquetas del formulario si hay al menos 4
        if (labels.length >= 4) {
            labels[0].textContent = data.nombre; // Nombre
            labels[1].textContent = data.apellido; // Apellido
            labels[2].textContent = data.email; // Email
            labels[3].textContent = data.mensaje; // Mensaje
        }
        // Actualiza el botón de envío si existe
        if (submitBtn) submitBtn.textContent = data.enviar;
    }
};

// Función principal que cambia el idioma de toda la página
function cambiarIdioma(lang) {
    // Actualiza el atributo "lang" del elemento raíz HTML
    document.documentElement.lang = lang;
    // Ejecuta todas las funciones de cambio de idioma definidas en cambiarIdiomaSeccion
    Object.values(cambiarIdiomaSeccion).forEach(fn => fn(lang));
}

// Función para inicializar el cambio de idioma sin esperar a DOMContentLoaded
function initializeLanguageSwitch() {
    // Selecciona el botón de cambio de idioma
    const languageButton = document.getElementById("language-switch");
    // Selecciona el ícono de idioma
    const languageIcon = document.getElementById("language-icon");
    // Obtiene el idioma actual de localStorage o usa "es" como predeterminado
    let currentLanguage = localStorage.getItem("language") || "es";

    // Objeto con las rutas de los íconos de idioma
    const icons = {
        es: "./assets/language/argentina.svg", // Ícono para español
        en: "./assets/language/eeuu.png" // Ícono para inglés
    };

    // Función interna para alternar el idioma
    const updateLanguage = () => {
        // Cambia el idioma actual entre "es" y "en"
        currentLanguage = currentLanguage === "es" ? "en" : "es";
        // Guarda el idioma seleccionado en localStorage
        localStorage.setItem("language", currentLanguage);
        // Actualiza la fuente del ícono según el idioma
        languageIcon.src = icons[currentLanguage];
        // Aplica el cambio de idioma a toda la página
        cambiarIdioma(currentLanguage);
    };

    // Establece el ícono inicial según el idioma actual
    languageIcon.src = icons[currentLanguage];
    // Añade un evento de clic al botón para alternar el idioma
    languageButton.addEventListener("click", updateLanguage);
    // Devuelve el idioma inicial para uso externo
    return currentLanguage;
}