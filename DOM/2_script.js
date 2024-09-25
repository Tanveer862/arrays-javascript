let newBtn=document.createElement("button")
newBtn.innerText="click me!"
newBtn.style.backgroundColor="red"
newBtn.style.color="white"
document.querySelector("body").prepend(newBtn)
//........... Question No 2................
let para=document.querySelector("p")
para.getAttribute("class")
console.log(para)
// para.setAttribute("class","newClass")
para.classList
para.classList.add("newClass")
console.log(para)


