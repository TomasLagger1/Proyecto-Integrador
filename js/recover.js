let test = "hola"
console.log(test)

let mail  = document.querySelector(".mail")

let check = document.querySelector(".alfajor")

let bien = document.querySelector(".mainecu")

let mal = document.querySelector(".error")

let revolver = document.querySelector(".formulariocool")


revolver.addEventListener("submit", function(e){
    e.preventDefault()

    if (mail.value == ""){
        mal.innerHTML = "<p>Por favor escriba su email.</p>"

    } else if(!check.checked){
        mal.innerHTML = "<p>Por favor acepte el campo Quiero recuperar mi contraseña</p>"

    } else {
        revolver.style.display = "none";
        bien.innerHTML = "<p>Recibirás un email con las instrucciones para recuperar tu contraseña</p> <a href='./login.html'></a>"
        revolver.submit()
    } 

} )