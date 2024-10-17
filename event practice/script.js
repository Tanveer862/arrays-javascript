
let body=document.querySelector('body')
let input=document.createElement('button')
input.append('body')

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



let  boxes=document.querySelectorAll(".box")
  boxes.forEach(function(box){
    console.log(box)
    inputBtn.addEventListener("click",function(event){
          box.style.backgroundColor="blue"
         box.style.color="white"

    })
  })
  // function inputField(){
//   let input=document.createElement("input")
//    input.prepend('body')
// }
// inputBtn.addEventListener("click",inputField)
  



 