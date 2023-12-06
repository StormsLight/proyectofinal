//funcion para ejecutar una funcion al carga la pagina

window.onload = function () {
    completarTablaProductos();
}


//obtener los datos guardados en el local storage


let misProductos = localStorage.getItem('Productos');

console.log(misProductos);

console.log('=====================================');

misProductos = JSON.parse(misProductos);





for (let i = 0; i < misProductos.length; i++) {
    console.log(misProductos[i].nombreProducto);
}

console.log('=====================================');

//1 creamos una funcion para llenar la tabla

const completarTablaProductos = () => {
    
    //2 Mostrar los datos en la tabla del admin
let miTabla = document.getElementById('miTabla');

for (let i = 0; i < misProductos.length; i++) {

    //3 creamos las filas para la tabla

    let fila = document.createElement('tr');

    //4 creamos las filas para cargar el nombre del producto
    let celdaNombre = document.createElement('td');

//4 creamos las filas para cargar el precio producto
    let celdaPrecio = document.createElement('td');

//4 creamos las filas para cargar el stock del producto
    let celdaStock = document.createElement('td');

//4 creamos las filas para cargar la imagen del producto
    let celdaImagen = document.createElement('td');
    celdaImagen.style.textAlign = 'center';
    let linkImagen = document.createElement('img');

    linkImagen.src = misProductos[i].imagenProducto;
    linkImagen.width = '250';
    linkImagen.height = '250';
    
    
    //5 creamos el nodo de texto para cargar el nombre del producto
    celdaNombre.textContent = misProductos[i].nombreProducto;
    celdaPrecio.textContent = misProductos[i].precioProducto;
    celdaStock.textContent = misProductos[i].stockProducto;
    celdaImagen.appendChild(linkImagen)

    //6 agregar las celdas a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaStock);
    fila.appendChild(celdaImagen);

    //7 agregramos la fila a la tabla

    miTabla.appendChild(fila);



}

}