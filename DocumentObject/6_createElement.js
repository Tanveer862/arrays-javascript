let newBtn=document.createElement("button")
newBtn.innerText="Click me!"
let div=document.querySelector("div")
div.append(newBtn)
let heading=document.createElement("h1")
heading.innerHTML="Hy i am new "
document.querySelector("body").prepend(heading)
