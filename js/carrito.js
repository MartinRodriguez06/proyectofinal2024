
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

function renderizarCarrito(productosCarrito) {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; 

    productosCarrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4'); 
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
                <div class="card-footer">
                    <button class="btn btn-danger btn-sm eliminar-producto" data-id="${producto.id}" data-instance="${producto.instanceId}">Eliminar</button>
                </div>
            </div>
        `;
        cartList.appendChild(productoDiv);
    });

    
    document.querySelectorAll('.eliminar-producto').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = parseInt(event.target.getAttribute('data-id'), 10);
            const instanceId = event.target.getAttribute('data-instance'); 
            eliminarProducto(id, instanceId);
        });
    });
}

function eliminarProducto(id, instanceId) {
    Swal.fire({
        title: "¿Estás seguro de eliminar este producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
        
            carrito = carrito.filter(producto => !(producto.id === id && producto.instanceId === instanceId));

           
            localStorage.setItem("Cart", JSON.stringify(carrito));

            
            renderizarCarrito(carrito);

            Swal.fire("Producto eliminado", "El producto ha sido eliminado del carrito.", "success");
        }
    });
}

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
            renderizarCarrito(carrito);
            Swal.fire("Carrito vacío", "El carrito ha sido vaciado.", "success");
        }
    });
}


let carrito = JSON.parse(localStorage.getItem("Cart")) || [];
document.addEventListener("DOMContentLoaded", async () => {
    const productos = await obtenerProductos();
   
    carrito = carrito.map(item => {
        const producto = productos.find(p => p.id === item.id);
        return producto ? { ...producto, instanceId: item.instanceId || generateUniqueId() } : null;
    }).filter(p => p !== null);
    renderizarCarrito(carrito);
});

document.getElementById('clear-cart').addEventListener('click', vaciarCarrito);


function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}






