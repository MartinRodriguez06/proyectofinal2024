let formulario = document.querySelector('#formulario');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let edad = document.getElementById('edad');
let email = document.getElementById('email');

const borrarNombre = document.getElementById("borrarNombre");
const borrarApellido = document.getElementById("borrarApellido");
const borrarEdad = document.getElementById("borrarEdad");
const borrarEmail = document.getElementById("borrarEmail");

function updateUI() {
    
    nombre.innerHTML = localStorage.getItem("nombre") || "";
    apellido.innerHTML = localStorage.getItem("apellido") || "";
    edad.innerHTML = localStorage.getItem("edad") || "";
    email.innerHTML = localStorage.getItem("email") || "";


    borrarNombre.style.display = nombre.innerHTML ? 'inline-block' : 'none';
    borrarApellido.style.display = apellido.innerHTML ? 'inline-block' : 'none';
    borrarEdad.style.display = edad.innerHTML ? 'inline-block' : 'none';
    borrarEmail.style.display = email.innerHTML ? 'inline-block' : 'none';
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let form = e.target;

    const nombreStorage = form.children[0].value;
    const apellidoStorage = form.children[1].value;
    const edadStorage = form.children[2].value;
    const emailStorage = form.children[3].value;

    localStorage.setItem("nombre", nombreStorage);
    localStorage.setItem("apellido", apellidoStorage);
    localStorage.setItem("edad", edadStorage);
    localStorage.setItem("email", emailStorage);

    updateUI();
    form.reset();
});

window.addEventListener("load", () => {
    updateUI();
});

borrarNombre.addEventListener("click", () => {
    localStorage.removeItem("nombre");
    updateUI();
});

borrarApellido.addEventListener("click", () => {
    localStorage.removeItem("apellido");
    updateUI();
});

borrarEdad.addEventListener("click", () => {
    localStorage.removeItem("edad");
    updateUI();
});

borrarEmail.addEventListener("click", () => {
    localStorage.removeItem("email");
    updateUI();
});

const borrarLS = document.getElementById("borrarLS");

borrarLS.addEventListener("click", () => {
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    localStorage.removeItem("edad");
    localStorage.removeItem("email");
    updateUI();
});
