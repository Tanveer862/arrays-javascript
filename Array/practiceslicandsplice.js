// Remove first company 
// Remove uber and add Ola in its place
// Add amazon at the end 


let arr=["Bloomberg","Microsoft","Uber","google","IBM","Netflex"]
console.log("Original Array=",arr)
arr.shift()
console.log( "Array after deleting Bloomberg=",arr)
arr.splice(1,1,"Ola")
console.log("Array after Replacing uber=",arr)
arr.push("Amazon")
console.log("Array After adding amazon at end of Array=",arr)