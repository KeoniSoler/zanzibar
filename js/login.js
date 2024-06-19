document.getElementById("login1").addEventListener("submit", function(event) {
    
    const email = document.getElementById("email");
    const contraseña = document.getElementById("contraseña");
    let valid = true;
    
    //Verificamos que email y contraseña no esten vacios
    if (email.value === "") {
        alert("Completar con su email");
        valid = false;
    }
    if (contraseña.value === "") {
        alert("Completar con su contraseña");
        valid = false;
    }
     //Contraseña tiene que tener al menos 8 caracteres
     if (contraseña.value.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        valid = false;
    }

   
    // Guardamos el email en localStorage
    if(valid){
        localStorage.setItem("emailUsuario", email.value);

        console.log("localstorage: ", localStorage)
    } //Si el formulario no es valido, que no se mande
    else {
        event.preventDefault();
        alert(errorMessage);
    }

    })