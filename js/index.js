let ropaUrl = "https://fakestoreapi.com/products/category/men's%20clothing"

fetch(ropaUrl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let sectionropahombres = document.querySelector('.sectionropahombres')
    let ropaHombres = ""
    for (let i = 0; i < data.length; i++){
        ropaHombres +=
        `<article class="articleHome">
            <img src="${data[i].image}" alt="Ropa de Hombre" class="imagenes">
            <h4>${data[i].title}</h4>
            <p>${data[i].description}</p>
            <p>${data[i].price}</p>
            <a href="./producto.html?id=${data[i].id}" class="link-ver-mas">Ver Más +</a>
        </article>`
        //Usamos este metodo porque lo que nos trae la url es una array.
    }
    sectionropahombres.innerHTML = ropaHombres;
    console.log(ropaHombres)
})
.catch(function(error){
    alert(error)
})

let accesUrl = 'https://fakestoreapi.com/products/category/jewelery'
fetch(accesUrl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let sectionaccesorios = document.querySelector('.sectionaccesorios')
    let seccionAccesorios = ""
    for (let i = 0; i < data.length; i++){
        seccionAccesorios +=
        `<article class="articleHome">
            <img src="${data[i].image}" alt="Accesorios" class="imagenes">
            <h4>${data[i].title}</h4>
            <p>${data[i].description}</p>
            <p>${data[i].price}</p>
            <a href="./producto.html?id=${data[i].id}" class="link-ver-mas">Ver Más +</a>
        </article>`
    }
    sectionaccesorios.innerHTML = seccionAccesorios;
    console.log(seccionAccesorios)
})
.catch(function(error){
    alert(error)
})

let electrUrl = 'https://fakestoreapi.com/products/category/electronics'

fetch(electrUrl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let sectionelectronica = document.querySelector('.sectionelectronica')
    let seccionElectronica = ""
    for (let i = 0; i < data.length; i++){
        seccionElectronica +=
        `<article class="articleHome">
            <img src="${data[i].image}" alt="Electronica" class="imagenes">
            <h4>${data[i].title}</h4>
            <p>${data[i].description}</p>
            <p> ${data[i].price}</p>
            <a href="./producto.html?id=${data[i].id}" class="link-ver-mas">Ver Más +</a>
        </article>`
    }
    sectionelectronica.innerHTML = seccionElectronica;
    console.log(seccionElectronica)
})
.catch(function(error){
    alert(error)
})
