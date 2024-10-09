// document.getElementById("image").addEventListener('click',function(e){
//     console.log("Clicked inside the ul ")
// },true)
// document.getElementById("owl").addEventListener('click',function(e){
//     console.log("owl clicked ")
//     e.stopPropagation()
// }, true)
// ocument.getElementById("google").addEventListener('click',function(e){
//     e.preventDefault()
//     console.log("google clicked ")
//     e.stopPropagation()
// }, true)
document.querySelector("#image").addEventListener('click',function(e){
    console.log(e.target.parentNode)
    let removeIt = e.target.parentNode
    removeIt.remove()
})