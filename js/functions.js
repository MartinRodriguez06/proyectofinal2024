
let ingreseSuNombre = prompt("Ingrese su Nombre");


function ingresarNombre(){
    
    
    while (!isNaN(ingreseSuNombre)) {
        console.warn("Por favor, ingrese un nombre válido (sin números)");
        ingreseSuNombre = prompt("Ingrese su Nombre nuevamente por favor");
    }
    console.log("Hola, " + ingreseSuNombre);
    }
    
    
    
    
    
    const EDAD = 18;
    let ingreseSuEdad = parseInt(prompt("Hola! Ingrese su edad por favor"));
    
    function validacionEdad(){
    if (ingreseSuEdad >= EDAD){
        console.log("Bienvenido!!!");
    } else{
        do{
            console.warn("Lo lamento, no tiene la edad suficiente para ingresar");
            ingreseSuEdad = parseInt(prompt("Hola! Ingrese su edad nuevamente por favor"));
        }while(ingreseSuEdad < EDAD);
    }
    }