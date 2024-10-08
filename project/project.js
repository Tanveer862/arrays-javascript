let newBtn=document.querySelectorAll(".button")
let body=document.querySelector("body")
newBtn.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id==="grey"){
            body.style.backgroundColor="grey"
        }
        if(event.target.id==="white"){
            body.style.backgroundColor="white"
        }
        if(event.target.id==="blue"){
            body.style.backgroundColor="blue"
        }
        if(event.target.id==="yellow"){
            body.style.backgroundColor="yellow"
        }
    })
})