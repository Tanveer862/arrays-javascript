// let btn1=document.querySelector("#btn")
// btn1.onclick=(event)=>{
//     console.log("button clicked")
//     alert("hello")
//     console.log(event.target)
//     console.log(event.type)
// }
// let div=document.querySelector('div')
// div.onmouseover= ()=>{
//   console.log("you are in side a div")
// }

let currentMode="light"
let body=document.querySelector("body")
let modeBtn=document.querySelector("#change-mode")
modeBtn.addEventListener('click',()=>{
if(currentMode==='light'){
  currentMode="dark"
  // document.querySelector('body').style.backgroundColor="blue"
  body.classList.add("dark")
  // body.remove("light")
}
else{
   currentMode="light"
  // document.querySelector('body').style.backgroundColor="green"
  body.classList.add("light")
  // body.classList.remove("dark")
}
}) 