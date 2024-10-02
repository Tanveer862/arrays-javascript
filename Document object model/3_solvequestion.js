let divs=document.querySelectorAll("div")
console.log(divs)
 console.log(divs[0])
 divs[0]
 let index=0
 for(div of divs){
    div.innerText=`New unique value ${index}`
    index++
 }
//  divs[0].innerText="New unique value"
//  divs[1].innerText="New unique value1"
//  divs[2].innerText="New unique value2"



 