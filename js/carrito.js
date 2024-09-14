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
            categoria: producto.categoria ? producto.categoria.nombre : 'Sin categoría'
        }));
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

// Renderizar los productos en el carrito
function renderizarCarrito(productosCarrito) {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Limpiar el contenido previo

    productosCarrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4'); // Asegúrate de usar la misma clase para columnas
        productoDiv.innerHTML = `
            <div class="card h-100"> <!-- Asegúrate de usar las mismas clases -->
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
            </div>
        `;
        cartList.appendChild(productoDiv);
    });
}

// Vaciar el carrito
function vaciarCarrito() {
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
            renderizarCarrito(carrito);
        }
    });
}

// Inicializar el carrito
let carrito = JSON.parse(localStorage.getItem("Cart")) || [];
document.addEventListener("DOMContentLoaded", async () => {
    const productos = await obtenerProductos();
    carrito = carrito.map(item => productos.find(p => p.id === item.id));
    renderizarCarrito(carrito);
});

document.getElementById('clear-cart').addEventListener('click', vaciarCarrito);

