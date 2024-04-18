// const formcontact = document.getElementById("contact_form");

// const inputs = document.querySelectorAll("#contact_form input");

// const mensaje = document.getElementById("mensaje");

// const btnEnviar = document.getElementById("btn_enviar");

// const expresiones = {
// 	nombre: /^[a-zA-ZÀ-ÿ0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
// 	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	asunto: /^[a-zA-ZÀ-ÿ0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
//     mensaje: /^[a-zA-ZÀ-ÿ0-9\s]{10,300}$/, // Letras y espacios, pueden llevar acentos.
// }

// const validarFormulario = (e) => {

//     let nombreValido = expresiones.nombre.test(inputs[0].value.trim());

//     let emailValido = expresiones.email.test(inputs[1].value.trim());
    
//     let asuntoValido = expresiones.asunto.test(inputs[2].value.trim());

//     let mensajeValido = expresiones.mensaje.test(mensaje.value.trim());

//     if (nombreValido && emailValido && asuntoValido && mensajeValido){

//         btnEnviar.disabled = false;

//     } else {

//         btnEnviar.disabled = true;

//     }

//     if (mensaje.name === "mensaje") {
//         if (expresiones.mensaje.test(mensaje.value)) {
//             mensaje.style.borderColor = "yellow";
//             alert_msj.style.display = 'none';
//             return true;
        
//         } else {
//             mensaje.style.borderColor = "red";
//             alert_msj.style.display = 'block';
//         }
//     }

//     switch (e.target.name) {
//         case "nombre": 
//             if(nombreValido) {
//                 e.target.style.borderColor = "yellow";
//                 alert_nombre.style.display = "none";
//                 return true;
            
//             } else {
//                 e.target.style.borderColor = "red";
//                 alert_nombre.style.display = "block";
//             }

//         break;
//         case "email":
//             if (emailValido) {
//                 email.style.borderColor = "yellow";
//                 alert_correo.style.display = "none";
//                 return true;
//             } else {
//                 email.style.borderColor = "red";
//                 alert_correo.style.display = 'block';    
//             }

//         break;
//         case "asunto":
//             if (asuntoValido) {
//                 e.target.style.borderColor = "yellow";
//                 alert_asunto.style.display = "none";
//                 return true;
//             } else {
//                 e.target.style.borderColor = 'red';
//                 alert_asunto.style.display = 'block';
//             }
//         break;
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup',validarFormulario);
//     input.addEventListener("blur", validarFormulario);
// })

// mensaje.addEventListener("keyup", validarFormulario);
// mensaje.addEventListener("blur", validarFormulario);

// formcontact.addEventListener("submit", (e) => {
//     e.preventDefault();
//     limpiarForm();
//     alert("Su formulario de contacto ha sido enviado");
    
// });

// const limpiarForm = () => {
//     document.querySelector("#nombreapellido").value = "";
//     document.querySelector("#correoelectronico").value = "";
//     document.querySelector("#text_asunto").value = "";
//     document.querySelector("#mensaje").value = "";
// }

