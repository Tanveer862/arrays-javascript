// console.log(window.document) // used to print elements 
// console.dir(window.document) // use  properties and methods and object 
// console.dir(document.body) // print body objects 
// console.log(document.body) // prints body tags 
// console.log(document.body.childNodes[1])
//.........
// let heading= document.getElementById("heading");
// console.log(heading.innerText)
// //........by class name
// let heading1= document.getElementsByClassName("java");
// console.log(heading1)
// //.......by tag name 
// let paragraph=document.getElementsByTagName("p")
// console.log(paragraph)
// /// by query selector 
// let firstElement=document.querySelector("p")
// console.log(firstElement)
// // All query selector 
// let allElement=document.querySelectorAll("p")
// console.log(allElement)
// let myClass=document.querySelectorAll(".java")
// console.log(myClass)
// let myClass1=document.querySelector(".java")
// let button=document.getElementById("btn")
// console.log(button.tagName)
//  let h2= document.querySelector("h2")
//  console.dir(h2.innerText)
//  h2=h2.innerText+"from jazba innovation "
//  console.dir(h2)
//  let divs =document.querySelectorAll(".box")
//  console.log(divs)
//  divs[0].innerText= "new unique value 1"
//  console.log(divs[0])
//  divs[1].innerText= "new unique value 2"
//  console.log(divs[1])
//  divs[2].innerText= "new unique value 3"
//  console.log(divs[2])
//  let div=window.document.querySelector("div")
//  console.log(div)
//  let value=div.getAttribute("id")
//  console.log(value)
//  let para=document.querySelectorAll("p")
//  console.log(para[0].getAttribute("class"))
//  console.log(para[1].getAttribute("class"))
//  console.log(para[2].getAttribute("class"))
//  console.log(para[0].setAttribute("class","newClass")) 
//  console.log(para[1].setAttribute("class","newClass"))
//  console.log(para[2].setAttribute("class","newClass"))
//  div.style.fontSize="30px"
//  div.style.backgroundColor="Blue"
//  div.style.textAlign="center"
//  div.style.color="white"
 let newBtn=document.createElement("button")
 newBtn.innerText="Click me!"
 console.log(newBtn)
 let div=document.querySelector("div")
 div.append(newBtn) // add last element
 div.prepend(newBtn) // starting element 
 div.before(newBtn)  /// div sy phly add krty hn
 div.after(newBtn) /// bad main add krty hn