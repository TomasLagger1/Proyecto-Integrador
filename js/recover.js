
let form = document.querySelector("#formulariocool");

let cosoMail = document.querySelector(".mail");

let checkbox = document.querySelector(".alfajor");

let error = document.querySelector("#mal");

let exito = document.querySelector(".mainrecu");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    error.innerHTML = "";

    if (cosoMail.value == "") {
        error.innerHTML = "<p>Por favor escriba su email.</p>";
        error.style.display = "block";
    } else if (!checkbox.checked) {
        error.innerHTML = "<p>Por favor acepte el campo Quiero recuperar mi contraseña</p>";
        error.style.display = "block";
    } else {
        exito.innerHTML = "<p>Recibirás un email con las instrucciones para recuperar tu contraseña</p><a href='./login.html'>Ir al Login</a>";
        exito.style.display = "block";
    }
});
