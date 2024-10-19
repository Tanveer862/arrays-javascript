// let myUser=null;
let box1=document.getElementById("box1")
let box2=document.getElementById("box2")
let box3=document.getElementById("box3")
let box4=document.getElementById("box4")
let input=document.getElementById("input")
let addUser=document.getElementById("add")
let deleteUser=document.getElementById("del")
let moveYellow =document.getElementById("move")
let moveGreen=document.getElementById("green")
let moveBrown=document.getElementById("brown")
let moveChocolate=document.getElementById("chocolate")

function inputValue(){
 let myUser;
  if(myUser==null){
    let  myUser=document.createElement('div')
    myUser.setAttribute('id',"myId");
    myUser.className="myClass";
    myUser.innerHTML=input.value
    myUser.style.color="black"
    input.disabled=true;
    addUser.disabled=true;
    deleteUser.disabled=false;
    box1.append(myUser);

  }
}
   function deleteUserFromProject(){
  let myUser=document.getElementById("myId")
  if(myUser !=null){
    myUser.remove();
    input.disabled=false;
    addUser.disabled=false;
    deleteUser.disabled=true;
    input.value="";
    myUser=null;
  }
}
 function moveToYellow(){
  let myUser=document.getElementById("myId")
  if(myUser !=null){
    box1.append(myUser)
  }


 }
 function moveToGreen(){
  let myUser=document.getElementById("myId")
  box2.append(myUser)
 }
 function moveToBrown(){
  let myUser=document.getElementById("myId")
  box3.append(myUser)
  
 }
 function moveToChocolate(){
  let myUser=document.getElementById("myId")
  box4.append(myUser)
  
 }



addUser.addEventListener("click",inputValue)
deleteUser.addEventListener("click",deleteUserFromProject)
moveYellow.addEventListener("click",moveToYellow)
moveGreen.addEventListener("click",moveToGreen)
moveBrown.addEventListener("click",moveToBrown)
moveChocolate.addEventListener("click",moveToChocolate)