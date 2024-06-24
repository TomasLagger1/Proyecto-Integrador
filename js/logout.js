let Login = document.querySelector("#loginLink")
let MsjBienvenida = document.querySelector(".bienvenida")
let registroLogout = document.querySelector("#registroLink")

let LinkLogout = document.querySelector(".LOGOUT")

LinkLogout.addEventListener("click", function(e){
    e.preventDefault
    localStorage.removeItem("email")

LinkLogout.style.display = "none";
MsjBienvenida.style.display = "none";
Login.style.display = "block";
registroLogout.style.display = "block";

})