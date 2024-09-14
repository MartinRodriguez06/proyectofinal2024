
document.addEventListener("DOMContentLoaded", () => {
    peticionA(); 
});

const peticionA = async () => {
    const respuesta = await fetch('cafe.json'); 
    const datos = await respuesta.json();

    const carouselItems = document.getElementById("carouselItems"); 
    if (carouselItems) {
        
        datos.forEach((item, index) => {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (index === 0) {
                carouselItem.classList.add("active");
            }
            carouselItem.innerHTML = `
                <img src="${item.imagen}" class="d-block w-100" alt="${item.nombre}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${item.nombre}</h5>
                    <p>${item.descripcion}</p>
                </div>
            `;
            carouselItems.appendChild(carouselItem);
        });
    }
};
