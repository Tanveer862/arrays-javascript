let parent= document.querySelector(".parent")
console.log(parent)
// console.log(parent.children[1].innerHTML)// display value of index 1 
for(let i=0; i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML)
}
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)
let dayOne=document.querySelector(".day")
console.log(dayOne)
console.log(dayOne.parentElement)
console.log(dayOne.nextElementSibling)