// calculate sum of of two number
add=(num1,num2)=>{
return num1+num2
}
console.log(add(5,8))
// calculate square of number  
const Sqr= num=>{
    return num*num
}
console.log(Sqr(5))



////// passiing object
let myObject= (firstName,lastName)=>({
    firstName:firstName,
    lastName:lastName,
    fullName: firstName+""+lastName
})
console.log(myObject("Tanveer","Hussain"))