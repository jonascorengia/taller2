console.log("tumama");
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("enviar");
console.log(input_nombre);
console.log(input_email);
console.log(input_submit);

input_submit.addEventListener("click", enviarFormulario)


function enviarFormulario(event){
    event.preventDefault();

    console.log("hemos echo click")
var valor_nombre = input_nombre.value;
var valor_email = input_email.value;

console.log(valor_nombre);
console.log(valor_email);

var placeholder_nombre = document.getElementById("nombre-placeholder");
var placeholder_email = document.getElementById("email-placeholder");


placeholder_nombre.innerHTML = valor_nombre;
placeholder_email.innerHTML = valor_email;

elemento_feedback = document.getElementById("feedback");
elemento_feedback.classList.remove("oculto");
elemento_formulario = document.getElementById("sectioncuad");
elemento_formulario.classList.add("oculto");
}