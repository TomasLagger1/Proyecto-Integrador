let registroForm = document.querySelector("#Registroform")
let registroMail = document.querySelector("#mail")
let registroPass = document.querySelector("#pass")
let registroPassretry = document.querySelector("#passretry")

registroForm.addEventListener('submit', function(e){
    e.preventDefault()
 if (registroMail.value == ""){}

 else if (registroPass.value == ""){
}
else if (registroPass.value.length < 6){

}
else if (registroPass.value!=registroPassretry.value){

}
else {
    registroForm.submit()
}
console.log(registroForm.value);
})

