
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

document.addEventListener("DOMContentLoaded", function () {

    const infoSection = document.createElement('section');
    infoSection.classList.add('info-section');
    
    
    const infoTitle = document.createElement('h2');
    infoTitle.textContent = 'Historia del Café';
    infoTitle.classList.add('info-title');
    

    const infoContent = document.createElement('p');
    infoContent.innerHTML = `
        El café tiene una historia fascinante que se remonta a siglos atrás. Se cree que el café se descubrió en el siglo IX en Etiopía, cuando un pastor llamado Kaldi notó que sus cabras estaban especialmente enérgicas después de comer unos frutos rojos de un arbusto desconocido. La bebida de café se extendió desde Etiopía a la Península Arábiga, donde en el siglo XV, los árabes comenzaron a cultivar y comerciar el grano.
        <br><br>
        El café se hizo popular en el mundo islámico, siendo un elemento central en la cultura social y en los centros de aprendizaje. En el siglo XVII, el café llegó a Europa, donde rápidamente ganó popularidad en las ciudades, dando lugar a la apertura de las primeras cafeterías en lugares como Londres y Viena. Estas cafeterías se convirtieron en centros de intercambio de ideas y debate.
        <br><br>
        Durante la época colonial, el café se cultivó en varias regiones tropicales, lo que llevó a su expansión global. Hoy en día, el café es una de las bebidas más consumidas en todo el mundo, apreciada no solo por su sabor, sino también por su papel en la cultura y la vida diaria de muchas personas.
    `;
    infoContent.classList.add('info-content');
    

    infoSection.appendChild(infoTitle);
    infoSection.appendChild(infoContent);
    

    const mainContent = document.getElementById('mainIndex');
    const carousel = document.getElementById('carouselExampleAutoplaying');
    mainContent.insertBefore(infoSection, carousel.nextSibling);
});

