let formulario = document.querySelector('#formulario');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let edad = document.getElementById('edad');
let email = document.getElementById('email');



formulario.addEventListener("submit", (e) => {
 //e.preventDefault();
let form = e.target;

const nombreStorage = form.children[0].value;
const apellidoStorage = form.children[1].value;
const edadStorage = form.children[2].value;
const emailStorage = form.children[3].value;

localStorage.setItem("nombre", nombreStorage);
localStorage.setItem("apellido", apellidoStorage);
localStorage.setItem("edad", edadStorage);
localStorage.setItem("email", emailStorage);


})

nombre.innerHTML = localStorage.getItem("nombre");
apellido.innerHTML = localStorage.getItem("apellido");
edad.innerHTML = localStorage.getItem("edad");
email.innerHTML = localStorage.getItem("email");




for (let i = 0; i < localStorage.length; i++) {
let clave = localStorage.key(i);
}



const borrarLS = document.getElementById("borrarLS");

borrarLS.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    nombre.innerHTML = ""; 
  apellido.innerHTML = ""; 
  edad.innerHTML = ""; 
  email.innerHTML = "";
})


const borrarNombre = document.getElementById("borrarNombre");
const borrarApellido = document.getElementById("borrarApellido")
const borrarEdad = document.getElementById("borrarEdad");
const borrarEmail = document.getElementById("borrarEmail");



borrarNombre.addEventListener("click", () => {
    localStorage.removeItem("nombre");
    nombre.innerHTML = "";

})
borrarApellido.addEventListener("click", () => {
    localStorage.removeItem("apellido");
    apellido.innerHTML = "";

})
borrarEdad.addEventListener("click", () => {
    localStorage.removeItem("edad");
    edad.innerHTML = "";

})
borrarEmail.addEventListener("click", () => {
    localStorage.removeItem("email");
    email.innerHTML = "";

})

