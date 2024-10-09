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
let modeBtn=document.querySelector("#change-mode")
modeBtn.addEventListener('click',()=>{
if(currentMode==='light'){
  currentMode="dark"
  document.querySelector('body').style.backgroundColor="blue"
}
else{
   currentMode="light"
  document.querySelector('body').style.backgroundColor="green"
}
})