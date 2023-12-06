console.log('==============================================');
console.log('=======Bienvenido al alta del Producto==============');
console.log('==============================================');

//variables

let nombreProducto;
let stockProducto;
let precioProducto;
let imagenProducto;
let productoForm;

let listaProductos = [];



//Obtenemos los datos del Producto con la funcion 
//Arrow Function
//obtenemos los datos del Proyecto
const dameDatos = () => {
    nombreProducto = document.getElementById('nombreProducto').value;
    stockProducto = document.getElementById('stockProducto').value;
    precioProducto = document.getElementById('precioProducto').value;
    imagenProducto = document.getElementById('imagenProducto').value;
    productoForm = document.getElementById('productoForm');
}


//creamos una funcion para cargar los Productos en un array
const altaProducto = () => {
    
    //invocamos a la funcion que obtiene los datos
    dameDatos();

    //creamos un objecto para guardar los datos del Producto
    let producto = {
    nombreProducto,
    precioProducto,
    stockProducto,
    imagenProducto,
}

    console.log(producto);

    console.log('=================================================');
    
    //agremamos el objecto al array del Producto
    listaProductos.push(producto);
    
    //guardar el arreglo/array en el local storage: memoria interna del navegador

    localStorage.setItem('Productos', JSON.stringify(listaProductos));
    
    console.log('=================================================');
    
    console.log(listaProductos);
    
    console.log(`El producto dado de alta es ${nombreProducto} y su precio es ${precioProducto} y su stock es de ${stockProducto} cantidades y su imagen esta en ${imagenProducto} `);
    
    console.log('=================================================');
    //reseteamos el formulario, borramos los datos escritos por el usuario
    productoForm.reset();


}

function eliminarProducto(){
    listaProductos.pop();
    console.log(listaProductos);
}
