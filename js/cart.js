//Hago un for que pase por cada elemento que tiene y que pida los datos cada elemento en especifico (ID)de la api
//recupero local storage
let recuperoStorage = localStorage.getItem("cartItems");

let sectionCarrito = document.querySelector(".sectionCarrito");
let elementosCarrito = ""

//pregunto si hay algo en el storarge (si esta vacio)
if(recuperoStorage == null){
    //parseo (array)
    let mensaje = "Tu carrito esta vacio"
    let empty = document.querySelector(".sectionCarrito");
    empty.innerText = mensaje
}else{
    carrito = []
    carrito = JSON.parse(recuperoStorage);

    for (let i = 0; i < carrito.length; i++){
        let id = carrito[i];
        let url = `https://fakestoreapi.com/products/${id}`

        //fetch
        fetch(url)
        .then(function(response){
            return response.json(); 
        })
        .then(function(data){
            console.log(data);
            elementosCarrito += `<article class="articleCart">
            <img src="${data.image}" alt="productoCarrito" class="imagenes">
            <h4>${data.title}</h4>
            <p>${data.description}</p>
            <p>${data.price}</p>
            <a href="./producto.html?id=${data.id}" class="link-ver-mas">Ver Más +</a>
        </article>`
        sectionCarrito.innerHTML = elementosCarrito
        })
        .catch(function(error){
            //alert(error)
        })
    }}
    