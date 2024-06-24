let userEmail = localStorage.getItem("email");
let registro = document.querySelector("#registroLink")
let login = document.querySelector("#loginLink")
let logout = document.querySelector(".LOGOUT")

console.log(userEmail);
console.log(registro);
console.log(login);
console.log();

if (userEmail == ""){
    login.style.display = "block"
    registro.style.display = "block"
    logout.style.display = "none";
}
else if (userEmail == null){
    login.style.display = "block"
    registro.style.display = "block"
    logout.style.display = "none";    
}
else {
    document.querySelector(".bienvenida").innerHTML = "Bienvenido: " + userEmail
    login.style.display = "none"
    registro.style.display = "none"
    logout.style.display = "block";
  
}