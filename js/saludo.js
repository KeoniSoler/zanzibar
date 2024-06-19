function mostrarBienvenidaYLogout() { // Definir la función que muestra el mensaje de bienvenida y logout
    let emailStorage = localStorage.getItem("emailStorage"); // Obtener el email almacenado en localStorage
    let navLoggedIn = document.querySelector(".nav"); // Obtener el elemento donde se mostrará la información del usuario
    
    if (emailStorage) {
        // Mostrar bienvenida, enlace de logout y Carrito en el navegador si hay un email almacenado
        navLoggedIn.innerHTML = `<a href="" class="separacion-cajas-arriba">BIENVENIDO: ${emailStorage}</a> `;
        navLoggedIn.innerHTML += `<a href="#" id="logout" class="separacion-cajas-arriba">LOGOUT</a>`;
        navLoggedIn.innerHTML += `<a href="cart.html" class="separacion-cajas-arriba">CARRITO</a>`;
        
        // Agregar evento para el logout
        document.getElementById("logout").addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir de que pase algo por defecto
            localStorage.removeItem("emailStorage"); // Eliminar email del localStorage al hacer logout
            location.reload(); // Recargar la página
        });
    } else {
    }
};
mostrarBienvenidaYLogout(); // Llama a la función al cargar la página para mostrar el estado actual