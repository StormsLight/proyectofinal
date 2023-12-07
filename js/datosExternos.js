const URL = 'https://rickandmortyapi.com/api/character'


fetch (URL)
.then (response => response.json())
.then(data => console.log(data))


console.log('===================================================');

let contenedor = document.getElementById('contenedorTarjetas');



fetch (URL)
.then (response => response.json())
.then(data => {

const personaje = data.results;

personaje.forEach(personaje => {

    let card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.style.margin = '10px' 

let imagen = document.createElement('img');
imagen.classList.add('card-img-top');
imagen.src = personaje.image;

card.appendChild(imagen);

let contenedorTitulo = document.createElement('div')
contenedorTitulo.classList = 'card-body'

let titulo = document.createElement('h5');
titulo.classList.add('card-title');
titulo.textContent = personaje.name;
titulo.style.textAlign = 'center'

contenedorTitulo.appendChild(titulo);
card.appendChild(contenedorTitulo);




    contenedor.appendChild(card);


} );


})