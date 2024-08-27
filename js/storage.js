let formulario = document.querySelector('#formulario');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let form = e.target;

    document.getElementById('nombre').innerHTML = form.children[0].value;
    document.getElementById('apellido').innerHTML = form.children[1].value;
    document.getElementById('edad').innerHTML = form.children[2].value;
    document.getElementById('email').innerHTML = form.children[3].value;

})