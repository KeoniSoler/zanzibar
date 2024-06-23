document.addEventListener("DOMContentLoaded", function() {
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");
    const logoutLink = document.getElementById("logoutLink");
    const loginLink = document.getElementById("loginLink");
    const registroLink = document.getElementById("registroLink");

    //Chequear si hizo login
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
        //Si hizo login:
        mensajeBienvenida.innerHTML = `Bienvenido: ${userEmail}`;
        mensajeBienvenida.style.display = "block";
        logoutLink.style.display = "block";
        loginLink.style.display = "none";
        registroLink.style.display = "none";
    } else {
        //Si no hizo login: 
        mensajeBienvenida.style.display = "none";
        logoutLink.style.display = "none";
        loginLink.style.display = "block";
        registroLink.style.display = "block";
    }

    logoutLink.addEventListener("click", function() {
        //Eliminar data del localStorage
        localStorage.removeItem("userEmail");

        //Esconder mensajes
        mensajeBienvenida.style.display = "none";
        logoutLink.style.display = "none";

        //Mostrar links de registro y login
        loginLink.style.display = "block";
        registroLink.style.display = "block";
    });
});