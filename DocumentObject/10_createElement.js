let div=document.createElement("div")
console.log(div)
div.className="main"
div.id="myId"
div.setAttribute("title","Jazba innovation ")
div.style.backgroundColor="green"
let addText=document.createTextNode("Jazba Innovation ")
div.appendChild(addText)
document.body.appendChild(div)
 let input=document.createElement("input")
 document.body.append(input)
 let label=document.createElement("label")
 document.body.append(label) 
 let btn=document.createElement("button")
 document.body.append(btn)
 btn.innerText="click me!"
 btn.style.backgroundColor="blue"
 btn.style.color="white"
 let para=document.createElement("p")
 para.innerText="A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points."
 let div2=document.createElement("div")
 div2.className="class-item"
 document.body.appendChild(div2)
 div2.appendChild(para)
 para.style.color="black"
 para.style.font="Arial"
 let div3=document.createElement("div")
 div3.className="list-item"
 document.body.append(div3)
 let list=document.createElement("ul")
 div3.appendChild(list)
 let li=document.createElement("li")
 li.innerText="Mango"
//  li.innerText="orange"
//  li.innerText="litchi"
//  li.innerText="apple"
 list.appendChild(li)