function addLanguage(langName){
    let li=document.createElement("li");
    li.innerHTML=`${langName}`;
    document.querySelector(".list").appendChild(li)

}
addLanguage("python")
addLanguage("typeScript")
addLanguage("Object oriented")
// second method 
function addOptimize(langName){
    let li=document.createElement("li");
li.appendChild(document.createTextNode(langName))
    document.querySelector(".list").appendChild(li)
}
addOptimize("Rubi")
addOptimize("Fotran")
// Edit element 
const secondLanguage=document.querySelector("li:nth-child(2)")
//secondLanguage.innerHTML="Mojo"
const newli=document.createElement("li")
newli.textContent="Mojo"
secondLanguage.replaceWith(newli)
//replace first child
const firstLang=document.querySelector("li:first-child")
firstLang.outerHTML="<li> Cobal</li>"
// Remove Element 
const lastElement=document.querySelector("li:last-child")
lastElement.remove()