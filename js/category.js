let qs = location.search; // Obtener la queryString den la url
let objqs = new URLSearchParams(qs); //Transdormar la queryString en un Objeto Literal
let categoria = objqs.get('category'); // Obtener el dato del id del objeto literal

if (categoria) {
    let  categUrl = `https://fakestoreapi.com/products/category/${categoria}`;

    fetch(categUrl)
        .then(function(response) {0
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            let sectioncategoria = document.querySelector('.sectioncategoria');
            let prodCateg = '';
            for (let i = 0; i < data.length; i++) {
                prodCateg += `<article class="articleHome">
                <img src="${data[i].image}" alt="Productos Categoria" class="imagenes">
                <h4>${data[i].title}</h4>
                <p>${data[i].description}</p>
                <p>${data[i].price}</p>
                <a href="./producto.html?id=${data[i].id}" class="link-ver-mas">Ver Más +</a>
            </article>`;
            }
            sectioncategoria.innerHTML = prodCateg;
        })
        .catch(function(error){
            alert(error)
        });
}

