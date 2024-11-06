let scrollContainer=document.querySelector(".gallary");
let backBtn=document.querySelector("#backBtn")
let nextBtn=document.querySelector("#nextBtn")
scrollContainer.addEventListener("wheel",function(event){
    event.preventDefault();
    scrollContainer.scrollLeft+=event.deltay;
    scrollContainer.style.scrollBehavior="auto";

})
nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft +=900;
})
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -=900;
})