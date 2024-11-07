let inputField=document.querySelector("#password")
let outputField=document.querySelector("#output")
inputField.addEventListener("input",()=>{
    let password=inputField.value ;
    if(password.length<8){
        outputField.innerHTML="password too short"
        outputField.style.color="red"
    }
    else{
        if(password.search(/[a-z]/)== -1){
            outputField.innerHTML="password is missing a lower letter"
            outputField.style.color="red"
        }
        else if(password.search(/[A-Z]/)== -1){
              outputField.innerHTML="password is missing a upper letter"
            outputField.style.color="red"
        }
        else if(password.search(/[0-9]/)== -1){
            outputField.innerHTML="password is missing a number "
          outputField.style.color="red"
      } else{
        outputField.innerHTML="password is strong "
        outputField.style.color="green"
      }
    }
})