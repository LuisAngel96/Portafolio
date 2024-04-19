// Obtener los elementos de entrada y el botón

const nameInput = document.getElementById("nombreapellido");
const email = document.getElementById("correoelectronico");
const affair = document.getElementById("text_asunto");
const message = document.getElementById("mensaje");
const sent = document.getElementById("btn_enviar");

const alertName = document.getElementById("alert_nombre");
const alertEmail = document.getElementById("alert_correo");
const alertAsunto = document.getElementById("alert_asunto");
const alertMessage = document.getElementById("alert_msj");


// Agregar event listener a los campos de entrada

nameInput.addEventListener("input", verificarInputs);
email.addEventListener("input", verificarInputs);
affair.addEventListener("input", verificarInputs);
message.addEventListener("input", verificarInputs);


// Verificar si los campos tienen contenido

function verificarInputs() {

    // VALIDACION NOMBRE

    const isValidName = nameInput.value.trim() != "";
    
    if (isValidName) {
        
        alertName.style.display = "none";
        nameInput.style.borderColor = "green";

    } else {
        
        alertName.style.display = "flex";
        alertName.style.color = "red";
        nameInput.style.borderColor = "red";

    }

    // VALIDACION EMAIL

    const isValidEmail = email.value.trim() != "";

    if (isValidEmail) {
        
        alertEmail.style.display = "none";
        email.style.borderColor = "green";

    } else {
        
        alertEmail.style.display = "flex";
        alertEmail.style.color = "red";
        email.style.borderColor = "red";

    }

    // VALIDACION AFFAIR

    const isValidAffair = affair.value.trim() != "";

    if (isValidAffair) {
        
        alertAsunto.style.display = "none";
        affair.style.borderColor = "green";

    } else {
        
        alertAsunto.style.display = "flex";
        alertAsunto.style.color = "red";
        affair.style.borderColor = "red";

    }

    // VALIDACION MESSAGE

    const  isValidMessage = message.value.trim() != "";

    if (isValidMessage) {

        alertMessage.style.display = "none";
        message.style.borderColor = "green";

    } else {

        alertMessage.style.display = "flex";
        alertMessage.style.color = "red";
        message.style.borderColor = "red";
    }

    // COMPROBAMOS SI LOS INPUTS ESTAN LLENOS

    const allInputAreOk = isValidName && isValidEmail && isValidAffair && isValidMessage;

    if(allInputAreOk){
        sent.disabled = false;
        sent.style.borderColor = "green";
    }

    return isValidName && isValidEmail && isValidAffair && isValidMessage;

    // or,  o -> ||  
    // and, y -> && alguna es falsa -> false
}

function validarCampos (event) {
    
    event.preventDefault();

    if (!verificarInputs()) {

        sent.disabled = true;
        sent.style.borderColor = "red";
        event.preventDefault();


    } else {

        sent.disabled = false;
        sent.style.borderColor = "green";
        sent.innerText = "Mensaje enviado";
        limpiarForm ();

    }
    return;
}

const limpiarForm = () => {

    // LIMPIAMOS LOS INPUTS

    nameInput.value = "";
    email.value = "";
    affair.value = "";
    message.value = "";

    // SE RESTABLECE EL COLOR DEL BORDE

    nameInput.style.borderColor = "inherit";
    email.style.borderColor = "inherit";
    affair.style.borderColor = "inherit";
    message.style.borderColor = "inherit";
    sent.style.borderColor = "inherit";

    // SE DESACTIVA EL BOTON ENVIAR

    sent.disabled = true;
}