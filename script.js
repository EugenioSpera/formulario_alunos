// Criando a constante usando elementos do HTML

const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const passwordConfirmation = document.querySelector("#password-confirmation")

//adicionando um evento ao formulário do tipo submit
// lembre se que como o evento é do tipo submit iremos receber um event do próprio submit

form.addEventListener('submit', (event) => {
    //prevenindo o evento padrão que seria o formulário para algum lugar
    event.preventDefault();

    //alert("cadastro com sucesso")
    checkForm()  
})


 email.addEventListener('blur', () => {
    checkInputEmail();

})     

password.addEventListener('blur', () => {
    checkInputPassword
})    

passwordConfirmation.addEventListener('blur', () =>{
    checkInputPasswordConfirmation
    alert('A senha é diferente')
} )



function checkInputUsername() {

    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha um nome de usuário!")

    } else {
        const formItem = username.parentElement
        formItem.classList = 'form-content'
    }
}

function checkInputEmail() {
    const emailValue = email.value;
    if (emailValue === "") {

        errorInput(email, "Preencha um e-mail válido!")

    } else {
        const formItem = email.parentElement
        formItem.classList = 'form-content'
    }
}



function checkInputPassword() {
    const passwordValue = password.value;
    if (passwordValue === "") {

        errorInput(password, "Preencha com uma senha!")
        //lenght = propriedade que verifica quantos caracteres foram digitados

    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha deve conter no minimo 8 caracteres!")
    } else {
        const formItem = password.parentElement
        formItem.classList = 'form-content'
    }
}

function checkInputPasswordConfirmation() {
    const passwordConfirmationValue = passwordConfirmation.value;
    if (passwordConfirmationValue === "") {

        errorInput(passwordConfirmation, "Preencha com uma senha!")
        //lenght = propriedade que verifica quantos caracteres foram digitados

    } else if (passwordConfirmationValue.length < 8) {
        errorInput(passwordConfirmation, "A senha deve conter no minimo 8 caracteres!")
    } else {
        const formItem = passwordConfirmation.parentElement
        formItem.classList = 'form-content'
    }
}

function errorPassword() {
    
}

function errorInput(input, message) {
    //parentElemnet = seleciona o pai direto do elemento especificado
    const formItem = input.parentElement
    //formItem.querySelector("span") = seleciona o span que estiver dentro do formItem
    const textMessage = formItem.querySelector('span')

    textMessage.innerText = message;
    formItem.className = "form-content error"
}
errorInput(username, "Preencha o campo")

function checkForm() {
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()

    //querySelectorAll = seleciona todos os elementos com a class.form-content do formulário, guardando dentro de um array.
    const formItems = form.querySelectorAll('.form-content')


    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
        
    })
    
if (isValid) {
    alert('Cadastrado com sucesso!')
}
    console.log(isValid)    
}
