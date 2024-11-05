const notesContainer=document.querySelector(".Notes-container")
const CreateBtn=document.querySelector(".btn")
let notes=document.querySelectorAll("input-box")
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes")
}
showNotes()
function upDateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}
CreateBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p")
    let img=document.createElement("img")
        inputBox.className="input-box";
        inputBox.setAttribute("contenteditable","true")
        img.src="images\delete.png";
        notesContainer.appendChild(inputBox).appendChild(img)
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        upDateStorage()
    }
    else if(e.target.tagName==="p"){
        notes=document.querySelectorAll(".input-box")
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                upDateStorage()
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
    document.execCommand("insertLineBreak")
    event.preventDefault();
    }
})