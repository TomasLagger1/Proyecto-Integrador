let userEmail = localStorage.getItem("email");
let registro = document.querySelector("#registroLink")
let login = document.querySelector("#loginLink")

if (userEmail == ""){
    login.style.display = "block"
    registro.style.display = "block" 
}
else if (userEmail == null){
    login.style.display = "block"
    registro.style.display = "block"      
}
else {
    document.querySelector(".bienvenida").innerHTML = "Bienvenido: " + userEmail +  `<ul class="header-links"> <li class="LOGOUT"> <a href = "#"> logout </a> </li> </article> </ul>`
    login.style.display = "none"
    registro.style.display = "none"

}