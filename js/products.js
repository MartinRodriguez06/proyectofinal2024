// Función para obtener los productos desde el archivo JSON
async function obtenerProductos() {
    try {
        const response = await fetch('cafe.json');
        const data = await response.json();
        return data.map(producto => ({
            id: producto.id_producto,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            imagen: producto.imagen,
            stock: producto.stock,
            categoria: producto.categoria ? producto.categoria.nombre : 'Sin categoría' // Acceder al nombre de la categoría
        }));
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

// Renderizar los productos en el HTML
function renderizarProductos(productosFiltrados = []) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar el contenido previo

    // Crear un contenedor 'row' de Bootstrap para las tarjetas
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'gy-4'); // 'gy-4' añade espacio vertical entre filas

    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4'); // Clases Bootstrap para columnas (3 tarjetas por fila en pantallas medianas)

        // Crear la estructura de la card
        productoDiv.innerHTML = `
            <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><strong>Precio:</strong> $${producto.precio}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Stock: ${producto.stock}</li>
                    <li class="list-group-item">Categoría: ${producto.categoria}</li>
                </ul>
                <div class="card-body">
                    <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        `;

        // Añadir la tarjeta al contenedor de filas
        rowDiv.appendChild(productoDiv);
    });

    // Añadir el contenedor de filas al contenedor de productos
    productList.appendChild(rowDiv);
}

// Agregar un producto al carrito
function agregarAlCarrito(productoID) {
    const producto = productos.find(p => p.id === productoID);

    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio
    });

    Toastify({
        text: `Se agregó ${producto.nombre} al Carrito`,
        duration: 3000
    }).showToast();

    localStorage.setItem("Cart", JSON.stringify(carrito));
}

// Filtrar productos al buscar
function buscarProductos(textoBusqueda) {
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
    renderizarProductos(productosFiltrados);
}

// Event listeners
document.getElementById('buscador-input').addEventListener('input', function() {
    const textoBusqueda = this.value;
    buscarProductos(textoBusqueda);
});

document.getElementById('clear-cart').addEventListener('click', () => {
    Swal.fire({
        title: "¿Estás seguro de vaciar el carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, vaciar"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            localStorage.removeItem("Cart");
            Swal.fire("Carrito vacío", "El carrito ha sido vaciado.", "success");
        }
    });
});

// Inicializar los productos y el carrito
let productos = [];
let carrito = [];

document.addEventListener("DOMContentLoaded", async () => {
    productos = await obtenerProductos();
    renderizarProductos(productos);
});
