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




function cambiarColorOscuro() {
    localStorage.setItem('modo', 'oscuro');
    aplicarModo(); 
  }

  function cambiarColorClaro() {
    localStorage.setItem('modo', 'claro');
    aplicarModo(); 
  }


// Función para aplicar el estilo correspondiente según el estado del modo
function aplicarModo() {
    const modo = localStorage.getItem('modo');
    if (modo === 'oscuro') {
      document.body.style.backgroundColor = 'black';
      document.getElementById('titulo').style.color = 'white';
      document.getElementById('contactanos').style.color = 'white';
      nombre.style.color = 'white';
      apellido.style.color = 'white';
      edad.style.color = 'white';
      email.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.getElementById('titulo').style.color = 'black';
      document.getElementById('contactanos').style.color = 'black';
      nombre.style.color = 'black';
      apellido.style.color = 'black';
      edad.style.color = 'black';
      email.style.color = 'black';
    }
  }
  // Llamado a la función aplicarModo cuando se carga la página
  document.addEventListener('DOMContentLoaded', aplicarModo);
