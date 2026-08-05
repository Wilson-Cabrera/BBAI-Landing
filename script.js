document.addEventListener('DOMContentLoaded', () => {
    // Interactive Signature Element (Glow Orb Follows Mouse slowly)
    const orb = document.getElementById('glow-orb');

    // Only apply on non-touch devices for better performance
    if (window.matchMedia("(pointer: fine)").matches && orb) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth follow animation
        function animateOrb() {
            const ease = 0.05;
            currentX += (mouseX - currentX) * ease;
            currentY += (mouseY - currentY) * ease;
            orb.style.transform = `translate(calc(-50% + ${currentX - window.innerWidth / 2}px), calc(-50% + ${currentY - window.innerHeight / 2}px))`;
            requestAnimationFrame(animateOrb);
        }
        animateOrb();
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.glass-card, h2, p, .reveal-target');

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==============================
    //  OFF-CANVAS MANUAL PANEL
    // ==============================

    const MANUAL_MARKDOWN = `

#  Burbuja AI - Manual de Usuario Oficial

---

## Tabla de Contenidos
1. [Introducción](#1-introducción)
2. [Instalación y Primeros Pasos](#2-instalación-y-primeros-pasos)
3. [Interfaz y Diseño](#3-interfaz-y-diseño)
4. [Funciones Principales](#4-funciones-principales)
5. [Resolución de Problemas Frecuentes](#5-resolución-de-problemas-frecuentes)
6. [Soporte Técnico](#6-soporte-técnico)

---

## 1. Introducción
Bienvenido a **Burbuja AI**. Este documento proporciona la base para interactuar con la aplicación. Burbuja AI está diseñada para potenciar la creatividad a través de inteligencia artificial, ofreciendo una experiencia inmersiva y directa.

---

## 2. Instalación y Primeros Pasos

### Requisitos del Sistema
* Dispositivo Android (Versión 8.0 o superior).
* Conexión a internet estable.
* Servicios de Google Play actualizados.

### Inicio de Sesión y Acceso
Burbuja AI ofrece dos modalidades de acceso para adaptarse a tus necesidades de privacidad y conveniencia:

**1. Acceso Anónimo (Modo Invitado)**
* Ideal si deseas explorar la aplicación de forma rápida y sin compromisos.
* Selecciona la opción de **"Crear mi historia"** (o el botón correspondiente en la pantalla de inicio).
* No requiere ingresar ningún dato personal ni vincular cuentas.
* *Nota:* En esta modalidad, tus preferencias y el historial generado podrían no guardarse si cambias de dispositivo o reinstalas la aplicación.

**2. Inicio de Sesión con Google**
* Garantiza un acceso seguro y rápido, respaldando todo tu progreso.
* Selecciona **"Iniciar sesión con Google"**.
* Elige tu cuenta preferida para mantener tu experiencia sincronizada en cualquier dispositivo.

---

## 3. Interfaz y Diseño

El entorno visual de Burbuja AI ha sido concebido bajo una rigurosa estética **moderna y tecno-minimalista**. Al eliminar elementos visuales innecesarios, garantizamos una navegación fluida y sin distracciones donde el protagonista absoluto es el contenido de tus historias.

### Adaptabilidad Inmersiva (Edge-to-Edge)
La aplicación está programada para aprovechar el 100% de tu pantalla. La interfaz y el menú principal se ajustan de manera inteligente a los márgenes del sistema operativo. Esto evita cualquier tipo de superposición o recorte, brindando una experiencia visual impecable ya sea que utilices la navegación por gestos moderna o la clásica barra inferior de botones de Android.

### Modos de Visualización
Para adaptarse a tu entorno y brindarte la experiencia de lectura más cómoda posible, Burbuja AI te otorga el control total sobre la iluminación de la interfaz. Puedes alternar entre dos modos de visualización pensados para proteger tu vista y resaltar los acentos tecnológicos del diseño:

* 🌙 **Modo Oscuro:** Emplea tonos profundos y contrastes precisos. Es ideal para leer de noche o en ambientes con poca luz, ya que reduce drásticamente la fatiga visual.
* ☀️ **Modo Claro:** Presenta superficies limpias e iluminadas que maximizan la legibilidad del texto, perfecto para cuando utilizas la aplicación en exteriores o bajo luz natural intensa.

**¿Cómo alternar entre los modos?**
Cambiar la apariencia de la app es rápido e intuitivo. Simplemente debes presionar el **ícono de tu perfil** ubicado en la interfaz principal. Al tocarlo, el sistema alternará instantáneamente entre el modo claro y el oscuro, permitiéndote ajustar la aplicación a la iluminación de tu entorno en un solo paso.

| Modo Oscuro | Modo Claro |
|:---:|:---:|
| ![Modo Oscuro](https://i.postimg.cc/SR86GhTW/imagen-2026-08-05-134421575.png) | ![Modo Claro](https://i.postimg.cc/pL1mySCS/imagen-2026-08-05-134708304.png) |

---

## 4. Funciones Principales

### Generación de Cuentos con Inteligencia Artificial

El núcleo de Burbuja AI es la capacidad de transformar tu entorno en narrativas únicas. El proceso de creación consta de los siguientes pasos:

1. **Iniciar la creación:** Presiona el botón **"Crear mi historia"** ubicado en la pantalla principal.
2. **Capturar la inspiración:** Escanea o fotografía un objeto a tu alrededor con la cámara, o selecciona una imagen directamente desde tu galería. Este elemento visual funcionará como la semilla creativa de la IA.
3. **Confirmar imagen:** Revisa la previsualización en pantalla y confirma tu selección.
4. **Configurar los parámetros:** Personaliza la estructura del relato definiendo rápidamente las siguientes variables: *género, tono, tipo de narrador, época y detonante* de la trama.
5. **Generación:** Presiona el botón **"Generar cuento"**. En cuestión de segundos, la inteligencia artificial procesará la información y redactará tu historia de forma estructurada.

**Funciones Avanzadas de Lectura**
Una vez generado el resultado, la interfaz te permitirá acceder a herramientas interactivas para complementar tu experiencia:
* 🎧 **Narración por Voz:** Activa el reproductor de audio integrado para escuchar la narración de tu cuento en voz alta y con gran fluidez.
* 🔍 **Autopsia Narrativa (Arquitectura):** Accede al desglose estructural del cuento. Esta función te permite visualizar de forma técnica cómo la IA compuso la historia, mostrando las bases de su arquitectura, los actos y el desarrollo de la trama.

### Gestión de Datos y Biblioteca

Burbuja AI cuenta con una sección de **Biblioteca** diseñada para organizar y almacenar de forma segura tus creaciones favoritas.

Para garantizar la sincronización y el respaldo de la información, el acceso a la Biblioteca es **exclusivo para los usuarios que hayan iniciado sesión con una cuenta de Google**. *(Si utilizas la aplicación en el modo invitado o anónimo, esta funcionalidad estará deshabilitada para proteger tu privacidad y evitar la pérdida de datos al cambiar de sesión).*

**¿Cómo administrar tus historias?**
* **Guardado voluntario:** La aplicación no guarda tus relatos de forma automática. Eres libre de decidir qué creaciones conservar. Si deseas guardar una historia recién generada, simplemente debes presionar el **botón de guardar** ubicado en la parte superior de la pantalla de lectura.
* **Información almacenada:** Cada relato que envíes a tu Biblioteca se guardará con un nivel de detalle completo. Podrás visualizar el título, una imagen de portada, la fecha y hora exacta de su creación, y un resumen de las configuraciones narrativas (género, tono, época, etc.) que utilizaste para generarlo.
* **Control total de tus datos:** Tienes el dominio absoluto sobre tu historial. Desde la misma sección de la Biblioteca, podrás gestionar tus archivos y eliminar de forma definitiva cualquier historia cuando lo desees.

---

## 5. Resolución de Problemas Frecuentes

**Error: "Inicio de sesión cancelado" o "Problema de conexión"**
* **Causa:** Desincronización de credenciales o de la hora del sistema.
* **Solución:** Verifica que la fecha y hora del dispositivo estén configuradas en modo "Automático". Asegúrate de tener los Servicios de Google Play actualizados.

**El menú inferior se superpone al contenido**
* **Solución:** Asegúrate de estar utilizando la última versión de la aplicación, la cual incluye los ajustes de márgenes del sistema (Window Insets) para pantallas de diferentes resoluciones.

---

## 6. Soporte Técnico
Para más información, descarga de nuevas versiones o contacto con el equipo desarrollador:
* **Web Oficial:** [https://bbai-landing.vercel.app](https://bbai-landing.vercel.app)
* **Desarrollo y Diseño:** Wilson Cabrera
* **Contacto:** [Wilsoncabrera307@gmail.com](mailto:Wilsoncabrera307@gmail.com)

> *Documentación actualizada a Agosto de 2026.*
`;

    // Render markdown once on load
    const markdownOutput = document.getElementById('manual-markdown-output');
    if (markdownOutput && typeof marked !== 'undefined') {
        marked.setOptions({
            breaks: true,
            gfm: true,
        });
        markdownOutput.innerHTML = marked.parse(MANUAL_MARKDOWN.trim());
    }
});

// ---- Panel open / close (global scope for inline onclick) ----

function openManual() {
    const panel = document.getElementById('manual-panel');
    const backdrop = document.getElementById('manual-backdrop');
    if (!panel || !backdrop) return;

    panel.classList.add('is-open');
    backdrop.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Trap focus: move to close button
    const closeBtn = document.getElementById('manual-close-btn');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 300);

    // Close on Escape key
    document.addEventListener('keydown', _handleManualEscape);
}

function closeManual() {
    const panel = document.getElementById('manual-panel');
    const backdrop = document.getElementById('manual-backdrop');
    if (!panel || !backdrop) return;

    panel.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    document.removeEventListener('keydown', _handleManualEscape);

    // Return focus to the trigger button
    const openBtn = document.getElementById('btn-open-manual');
    if (openBtn) openBtn.focus();
}

function _handleManualEscape(e) {
    if (e.key === 'Escape') closeManual();
}

