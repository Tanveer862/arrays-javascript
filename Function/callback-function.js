function getdata(dataId,getNextData){
setTimeout(()=>{
    console.log("data",dataId)
    if(getNextData){
        getNextData()
    }
},2000);
}
function getNextData(){
    console.log("data",dataId)
}
getdata(1,()=>{
    getdata(2,()=>{
    getdata(3)
    })
})

/// call back function
function sum(a,b,add){
console.log("I am good")
console.log(add(a,b)) 
}
function add(a,b){
return a+b
 }
sum(4,10,add)