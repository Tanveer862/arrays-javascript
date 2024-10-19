let myUser='';

let box1=document.getElementById("box1")
let box2=document.getElementById("box2")
let box3=document.getElementById("box3")
let box4=document.getElementById("box4")
let input=document.getElementById("input")
let addUser=document.getElementById("add")
let deleteUser=document.getElementById("del")
let moveYellow =document.getElementById("move")
let moveGreen=document.getElementById("green")
let amoveBrown=document.getElementById("brown")
let moveChocolate=document.getElementById("chocolate")

function inputValue(){
  let myUser=document.createElement('div')
  myUser.setAttribute('id',"myId");
  myUser.className="myClass";
  myUser.innerHTML=input.value
  myUser.style.color="black"
  box1.append(myUser);
}
addUser.addEventListener("click",inputValue)