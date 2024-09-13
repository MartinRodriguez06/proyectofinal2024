document.addEventListener("DOMContentLoaded", function () {
    const botonDark = document.getElementById('toggle-button');

    // Función para aplicar el tema basado en el valor en localStorage
    function applyTheme() {
        if (localStorage.getItem("Modo") === "dark-mode") {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            if (botonDark) {
                botonDark.textContent = "Cambiar a Modo Claro";
            }
        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            if (botonDark) {
                botonDark.textContent = "Cambiar a Modo Oscuro";
            }
        }
    }

    // Aplicar el tema inicial
    if (!localStorage.getItem("Modo")) {
        localStorage.setItem("Modo", "light-mode");
    }
    applyTheme();

    // Cambiar de modo cuando el usuario presione el botón
    if (botonDark) {
        botonDark.addEventListener("click", function () {
            if (localStorage.getItem("Modo") === "dark-mode") {
                localStorage.setItem("Modo", "light-mode");
            } else {
                localStorage.setItem("Modo", "dark-mode");
            }
            applyTheme(); // Aplicar el nuevo tema
        });
    }
});
