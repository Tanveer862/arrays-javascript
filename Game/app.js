let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")
let newBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let turnO=true
const winPatrren=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetGame=()=>{
    turnO=true;
    enable();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked ");
        if(turnO){
            box.innerHTML="O"
            turnO=false
        }
        else{
            box.innerHTML="X"
            turnO=true
        }
        box.disabled=true
        checkWinner()
    });
});
const enable=()=>{
    for( let box of boxes){
   box.disabled=false
   box.innerHTML=""
    }}

const disable=()=>{
    for( let box of boxes){
   box.disabled=true;
    }
}
const checkWinner=()=>{
for(let patrren of winPatrren){
    let pos1val=boxes[patrren[0]].innerHTML
    let pos2val=boxes[patrren[1]].innerHTML
    let pos3val=boxes[patrren[2]].innerHTML
    if(pos1val!=""&& pos2val !="" && pos3val != ""){
        if(pos1val===pos2val && pos2val=== pos3val){
            console.log("winner")
            disable()
        }
    }
}
}
newBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)