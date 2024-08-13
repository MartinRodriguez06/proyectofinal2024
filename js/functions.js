
    /*PRE ENTREGA 2 */

const EDAD_MINIMA = 18;
const usuarios = [];

class Usuario {
constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
}

function ingresarNombre() {
let ingreseSuNombre = prompt("Ingrese su Nombre");

while (!isNaN(ingreseSuNombre)) {
    console.warn("Por favor, ingrese un nombre válido (sin números)");
    ingreseSuNombre = prompt("Ingrese su Nombre nuevamente por favor");
}

let ingreseSuApellido = prompt("Ingrese su Apellido");

while (!isNaN(ingreseSuApellido)) {
    console.warn("Por favor, ingrese un apellido válido (sin números)");
    ingreseSuApellido = prompt("Ingrese su Apellido nuevamente por favor");
}

let ingreseSuEdad = parseInt(prompt("Ingrese su Edad"));

while (ingreseSuEdad < EDAD_MINIMA) {
    console.warn("Lo lamento, no tiene la edad suficiente para ingresar");
    ingreseSuEdad = parseInt(prompt("Ingrese su Edad nuevamente por favor"));
}

const usuario = new Usuario(ingreseSuNombre, ingreseSuApellido, ingreseSuEdad);
usuarios.push(usuario);

alert(`Bienvenido ${usuario.nombre} ${usuario.apellido}!`);
console.log("Bienvenido", usuario);
console.log("Usuarios registrados:", usuarios);


const usuarioIngresado = usuarios.filter((persona) => persona.nombre === ingreseSuNombre && persona.apellido === ingreseSuApellido && persona.edad === ingreseSuEdad);
console.log(`Nombre: ${usuarioIngresado[0].nombre}, Apellido: ${usuarioIngresado[0].apellido}, Edad: ${usuarioIngresado[0].edad}`);
}

