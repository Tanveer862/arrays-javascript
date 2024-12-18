//An integer d is a divisor of an integer n if the remainder of n/d=0 .
//Given an integer, for each digit that makes up the integer determine whether it is a divisor.
 //Count the number of divisors occurring within the integer.
 function findDigits(n) {
    let isDivisor=0;
let digit=n.toString();
let digitSPlit=digit.split("");
console.log(digitSPlit)
for(let digits of digitSPlit){
    let intDigit=parseInt(digits)
    if(intDigit!==0 && n%intDigit===0){
        isDivisor++
    }
}
console.log(isDivisor)
}
findDigits(129)