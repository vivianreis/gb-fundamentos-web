let nome = window.document.getElementById("nome")  
let email = document.getElementById("#email")  
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txt = document.querySelector("#txtNome")
    if(nome.value.length <= 2){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".")){
         txtEmail.innerHTML = "E-mail inválido"
         txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
         txtEmail.style.color = "green"
    }
}