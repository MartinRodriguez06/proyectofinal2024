// const peticionA = async () => {
//     const respuesta = await fetch("/cafe.json");
//     const datos = await respuesta.json();
//     const data = await datos;

//     for (item of data) {
//         const card = document.createElement("div");
//         card.innerHTML = `
//             <div class="card" style="width: 18rem; height: 32rem;">
//                 <img class="card-img-top" src=${item.imagen} alt=${item.nombre} />
//                 <div class="card-body">
//                     <h5 class="card-title">${item.nombre}</h5>
//                     <p class="card-text">Descripcion: ${item.descripcion}</p>
//                     <p class="card-text">Precio: $${item.precio}.-</p>
//                     <p class="card-text">Stock: ${item.stock}</p>
//                     <a href="#" class="btn btn-success">Comprar</a>
//                 </div>
//             </div>
//         `
//         cardsProd.appendChild(card);
//     };
// }


// document.addEventListener("DOMContentLoaded", () => {
//     peticionA(); // Llama a la función cuando el DOM esté completamente cargado
// });

// const peticionA = async () => {
//     const respuesta = await fetch('cafe.json'); // Ruta del archivo JSON
//     const datos = await respuesta.json();

//     const cardsProd = document.getElementById("cardsProd"); 
//     if (cardsProd) {
//         datos.forEach(item => {
//             const card = document.createElement("div");
//             card.classList.add("col-12", "col-md-6", "col-lg-4"); // Clases de Bootstrap para el diseño
//             card.innerHTML = `
//                 <div class="card mb-4" style="width: 18rem;">
//                     <img class="card-img-top" src="${item.imagen}" alt="${item.nombre}" />
//                     <div class="card-body">
//                         <h5 class="card-title">${item.nombre}</h5>
//                         <p class="card-text">Descripción: ${item.descripcion}</p>
//                         <p class="card-text">Precio: $${item.precio}.-</p>
//                         <p class="card-text">Stock: ${item.stock}</p>
//                         <a href="#" class="btn btn-success">Comprar</a>
//                     </div>
//                 </div>
//             `;
//             cardsProd.appendChild(card);
//         });
//     }
// };


document.addEventListener("DOMContentLoaded", () => {
    peticionA(); // Llama a la función cuando el DOM esté completamente cargado
});

const peticionA = async () => {
    const respuesta = await fetch('cafe.json'); // Ruta del archivo JSON
    const datos = await respuesta.json();

    const carouselItems = document.getElementById("carouselItems"); 
    if (carouselItems) {
        // Recorremos los datos del JSON
        datos.forEach((item, index) => {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (index === 0) {
                carouselItem.classList.add("active"); // El primer elemento debe tener la clase 'active'
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
