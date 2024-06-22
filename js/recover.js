document.getElementById("recuperar").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputEmail = document.getElementById("email");
    const checkbox = document.getElementById("check");
    const message = document.getElementById("message");
    const link = document.getElementById("link");

    //Limpiamos mensajes previos
    message.innerHTML = "";
    link.innerHTML = "";
    
    //Chequeo si email esta vacio
    if (inputEmail.value === "") {
        message.innerHTML = "Por favor escriba su email.";
        return;
    }
    
    //Fijar si el checkbox es verdadero
    if (checkbox.checked == false) {
        message.innerHTML = "Por favor acepte el campo Quiero recuperar mi contraseña.";
        return;
    }

    //Si ambos casilleros son validos
    message.innerHTML = "Recibirás un email con las instrucciones para recuperar tu contraseña.";
    link.innerHTML = '<a href="login.html">Ir al login</a>';
});