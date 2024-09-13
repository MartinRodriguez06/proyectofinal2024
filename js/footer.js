const footer = document.getElementById("footer");
const parrafoFooter = document.createElement("p");
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = "InfoCafé, tu pagina de información -  " + anioActual;
footer.appendChild(parrafoFooter);