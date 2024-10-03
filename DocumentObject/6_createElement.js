let newBtn=document.createElement("button")
newBtn.innerText="Click me!"
newBtn.style.backgroundColor="blue"
newBtn.style.color="white"
let div=document.querySelector("div")
div.append(newBtn)
let heading=document.createElement("h1")
heading.innerHTML="Hy i am new "
document.querySelector("body").prepend(heading)
heading.style.color="blue"
heading.style.font="bold"
let list=document.querySelectorAll("li")
console.log(list)
list[0].style.color="green"
list[1].style.color="green"
list[2].style.color="green"
let input=document.createElement("input")
document.querySelector("body").prepend(input)
