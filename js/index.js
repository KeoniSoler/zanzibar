let ropaUrl = "https://fakestoreapi.com/products/category/men's%20clothing"

fetch(ropaUrl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let sectionropahombres = document.querySelector('.sectionropahombres')
    let ropaHombres = []
    for (let i = 0; i < 4; i++){
        ropaHombres +=
        `<article class="articleHome">
            <img src="${data[i].image}" alt="Ropa de Hombre" class="imagenes">
            <h4>${data[i].title}</h4>
            <p>${data[i].description}</p>
            <p>${data[i].price}</p>
            <a href="./producto.html?id=${data[i].id}" class="link-ver-mas">Ver Más +</a>
        </article>`
    }
    sectionropahombres.innerHTML = ropaHombres;
    console.log(ropaHombres)
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
    
})
.catch(function(error){
    alert(error)
})
