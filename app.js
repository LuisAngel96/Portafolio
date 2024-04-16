const formcontact = document.getElementById("contact_form");

const inputs = document.querySelectorAll("#contact_form input");

const mensaje = document.getElementById("mensaje");

const btnEnviar = document.getElementById("btn_enviar");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-ZÀ-ÿ0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: /^[a-zA-ZÀ-ÿ0-9\s]{10,300}$/, // Letras y espacios, pueden llevar acentos.
}

const validarFormulario = (e) => {

    let nombreValido = expresiones.nombre.test(inputs[0].value.trim());

    let emailValido = expresiones.email.test(inputs[1].value.trim());
    
    let asuntoValido = expresiones.asunto.test(inputs[2].value.trim());

    let mensajeValido = expresiones.mensaje.test(inputs[3].value.trim());

    
}