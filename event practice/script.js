
let body=document.getElementsByTagName('body')

let text=document.getElementById("text")
function changeColor(){
   
    text.style.backgroundColor="yellow"
    text.style.font="20px"
}
let newBtn=document.getElementById("newBtn")
newBtn.addEventListener("click",changeColor)
let draw=document.getElementById("draw")
function drawBox(){
    
    draw.style.height='100px'
    draw.style.width='100px'
    draw.style.backgroundColor="blue"
    draw.append('body')
}
draw.addEventListener("click",drawBox)

let inputBtn=document.getElementById("inputBtn")
function inputField(){
  let input=document.createElement('input')
    input.prepend('body')
}
inputBtn.addEventListener("click",inputField)
