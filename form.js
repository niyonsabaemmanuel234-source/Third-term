const namee = document.getElementById("userName")
const password = document.getElementById("password")
const button = document.getElementById("button")
const message = document.getElementById("message")
const body = document.getElementById("body")


button.addEventListener("click", function event(){
    if(password.value.length === 0){
        message.textContent = "Password cannot be empty"
    }else if(password.value.length<=6){
        message.textContent = "weak password"
    }else if(namee.value.length === 0){
        message.textContent = "username cannot be empty"
    }else{
       message.textContent = "Strong password successfull accepted! Account created"
       body.style.backgroundColor="green"
    }
})zz