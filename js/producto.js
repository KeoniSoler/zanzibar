let queryString = location.search; // Obtener la queryString den la url
let objqs = new URLSearchParams(queryString); //Transdormar la queryString en un Objeto Literal
let id = objqs.get('id'); // Obtener el dato del id del objeto literal

let prodUrl = `https://fakestoreapi.com/products/${id}`; //Armar nuevo Fetch con esta Url

fetch(prodUrl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    // Capturar Dom
    let title = document.querySelector('h2');
    let descr = document.querySelector('.descr');
    let precio = document.querySelector('.price');
    let imagen = document.querySelector('.imagendetalle');
    let category = document.querySelector('.categ');
    //Usamos este metodo porque lo que nos trae la url son objetos.

    //Actualizar datos y actualizar Dom
    title.innerText = data.title;
    descr.innerText = data.description;
    precio.innerText = data.price;
    imagen.src = data.image;
    category.innerText = data.category;
})
.catch(function(error){
    alert(error)
})

//Creo array vacio para completar con los datos
let carrito = [];

//Recupero Stporage (String)
let recuperoStorage = localStorage.getItem("cartItems")

//Pregunto si hay algo en storage, si esta vacio
if(recuperoStorage == null){
    //parseo (Array)
    recStrgPrs = JSON.parse(recuperoStorage)
    carrito = recStrgPrs
}

//Guardo en el array
let linkCarroProducto = document.querySelector('linkCarroProducto')


linkCarroProducto.addEventListener("click", function(evento){
    evento.preventDefault();
    carrito.push(id);
    let cartStrg = JSON.stringify(carrito);
    localStorage.setItem('cartItems', cartStrg);
    console.log('carrito', carrito);
    console.log('localStorage', localStorage);
})