document.getElementById("login1").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value; // Obtener el valor del email directamente
    const contraseña = document.getElementById("contraseña").value; // Obtener el valor de la contraseña directamente
    let valido = true;
    
    // Verificamos que el valor email y contraseña no estén vacíos
    if (email === "") {
        alert("Por favor complete el campo email.");
        valido = false;
    }
    if (contraseña === "") {
        alert("Por favor complete el campo contraseña.");
        valido = false;
    }
    
    // Contraseña tiene que tener al menos 6 caracteres
    if (contraseña.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        valido = false;
    }
    
    // Guardamos el email en localStorage si el formulario es válido
    if(valido) {
        localStorage.setItem("emailStorage", email);
        console.log("Email guardado en localStorage:", email);
        mostrarBienvenidaYLogout(); //Llamar a la función para mostrar bienvenida y logout
    } 
    else {
        console.log("Formulario no válido, no se envía.");
    }
    window.location.href = "index.html";
});
