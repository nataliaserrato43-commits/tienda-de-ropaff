// ==============================
// MODO OSCURO
// ==============================

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkMode.textContent = "☀️";
    } else {
        darkMode.textContent = "🌙";
    }

});


// ==============================
// CARRUSEL DE IMÁGENES
// ==============================

const imagenes = [

    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80",

    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80",

    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",

    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"

];

let indice = 0;

const carruselImagen = document.getElementById("carruselImagen");

const next = document.getElementById("next");
const prev = document.getElementById("prev");


function mostrarImagen() {

    carruselImagen.style.opacity = "0";

    setTimeout(function () {

        carruselImagen.src = imagenes[indice];

        carruselImagen.style.opacity = "1";

    }, 200);

}


next.addEventListener("click", function () {

    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    mostrarImagen();

});


prev.addEventListener("click", function () {

    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    mostrarImagen();

});


// ==============================
// CAMBIO AUTOMÁTICO DEL CARRUSEL
// ==============================

setInterval(function () {

    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    mostrarImagen();

}, 5000);


// ==============================
// VALIDACIÓN DEL FORMULARIO
// ==============================

const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const formMensaje = document.getElementById("formMensaje");


    if (nombre === "" || email === "" || mensaje === "") {

        formMensaje.textContent =
            "⚠️ Por favor completa todos los campos.";

        formMensaje.style.color = "#ff7777";

        return;
    }


    // Validación básica del correo

    const expresionEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!expresionEmail.test(email)) {

        formMensaje.textContent =
            "⚠️ Ingresa un correo electrónico válido.";

        formMensaje.style.color = "#ff7777";

        return;
    }


    formMensaje.textContent =
        "✅ ¡Mensaje enviado correctamente!";

    formMensaje.style.color = "#8cff9b";


    formulario.reset();

});