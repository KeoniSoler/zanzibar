document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.register');
    const inputEmail = document.querySelector('.inputEmail');
    const inputContra = document.querySelector('.inputContra');
    const inputRepContra = document.querySelector('.inputRepContra');
    const inputCheckbox = document.querySelector('.inputCheckbox');
    const errorMessagesDiv = document.querySelector('#errorMessages');
    const mensajesErrores = {
        email: "Por favor complete el email",
        contraseña: "Por favor complete la contraseña",
        largoDeContra: "Debe ingresar al menos 6 caracteres",
        contrasDiferentes: "Las contraseñas no coinciden"
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let errorMessagesHTML = '';
        let valido = true;

        if (inputEmail.value === '') {
            errorMessagesHTML += `<div>${mensajesErrores.email}</div>`;
            valido = false;
        }

        if (inputContra.value === '') {
            errorMessagesHTML += `<div>${mensajesErrores.contraseña}</div>`;
            valido = false;
        } else if (inputContra.value.length < 6) {
            errorMessagesHTML += `<div>${mensajesErrores.largoDeContra}</div>`;
            valido = false;
        }

        if (inputContra.value !== inputRepContra.value) {
            errorMessagesHTML += `<div>${mensajesErrores.contrasDiferentes}</div>`;
            valido = false;
        }

        if (valido) {
            window.location.href = "login.html";
        }

        errorMessagesDiv.innerHTML = errorMessagesHTML;
    });
});