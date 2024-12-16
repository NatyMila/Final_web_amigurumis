const formulario = document.getElementById("formMensaje");
console.log(formulario);

formulario.addEventListener("submit", event => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    const errorNombre = document.getElementById("errorNombre"); 
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    let formularioValido = true;

    if (nombre === "") {
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

    if (mensaje.length < 10) {
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    if (formularioValido) {
        alert("Formulario enviado correctamente.");

        const formularioContacto = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };
        formulario.reset();
    }
});