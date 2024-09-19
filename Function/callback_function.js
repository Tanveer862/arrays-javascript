function calculate(a,b,operation){
    return operation(a,b)
}
function additon(num1,num2){
    return num1+num2
}
console.log(calculate(6,78,additon))
// call back function calculate multiplication

function muliplication(n1,n2){
    return n1*n2
}
console.log(calculate(10,20,muliplication))
///  Subtraction 
function Subtraction(x,y){
     return x-y
}
console.log(calculate(80,10,Subtraction))
////
function division(t ,h){
    return t/h
}
console.log(calculate(60,5,division))