let body=document.getElementById('body')
let div=document.createElement("div")
div.setAttribute("id","toDoList")
body.append(div)
let input=document.createElement("input")
input.setAttribute("id","input")
body.append(input)
let AddButton=document.createElement("button")
AddButton.innerHTML="Add list"
body.append(AddButton)
let listItem=[]
AddButton.addEventListener("click",function(){
 let input =document.getElementById("input")
 listItem.push(input.value)
 console.log(listItem)
 div.innerHTML=""
 listItem.forEach((item)=> {
    console.log(item)
    let para=document.createElement("p")
    let sp=document.createElement("span")
    let btn=document.createElement("button")
    btn.setAttribute("id","btnId")
    sp.innerHTML=item
    btn.innerHTML="x"
    para.append(sp)
    para.append(btn)
    div.append(para)
    btn.addEventListener("click",function(){
        listItem = listItem.filter((i) => i !== item);
        div.innerHTML=""
 listItem.forEach((item)=> {
    console.log(item)
    let para=document.createElement("p")
    let sp=document.createElement("span")
    let btn=document.createElement("button")
    btn.setAttribute("id","btnId")
    sp.innerHTML=item
    btn.innerHTML="x"
    para.append(sp)
    para.append(btn)
    div.append(para)
    btn.addEventListener("click",function(){
        listItem = listItem.filter((i) => i !== item);
    })
});
    })
});
} )


