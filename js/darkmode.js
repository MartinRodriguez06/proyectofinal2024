document.addEventListener("DOMContentLoaded", function () {
    const botonDark = document.getElementById('toggle-button');


    function applyTheme() {
        if (localStorage.getItem("Modo") === "dark-mode") {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            if (botonDark) {
                botonDark.textContent = "Cambiar a Modo Claro";
                botonDark.classList.remove("boton-dark");
                botonDark.classList.add("boton-light");
            }
        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            if (botonDark) {
                botonDark.textContent = "Cambiar a Modo Oscuro";
                botonDark.classList.remove("boton-light");
                botonDark.classList.add("boton-dark");
            }
        }
    }


    if (!localStorage.getItem("Modo")) {
        localStorage.setItem("Modo", "light-mode");
    }
    applyTheme();

    
    if (botonDark) {
        botonDark.addEventListener("click", function () {
            if (localStorage.getItem("Modo") === "dark-mode") {
                localStorage.setItem("Modo", "light-mode");
            } else {
                localStorage.setItem("Modo", "dark-mode");
            }
            applyTheme(); 
        });
    }
});
