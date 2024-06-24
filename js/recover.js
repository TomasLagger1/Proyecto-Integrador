
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
        exito.innerHTML = "<p class='jojos'>Recibirás un email con las instrucciones para recuperar tu contraseña</p> <a href='./login.html'><p class='jojos'>Ir a Login</p></a>";
        exito.style.display = "block";
    }
});
