// for of loop count vowel in string
let myArray=["t","a","n","v","e","e","r"]
console.log(myArray)
for(let i=0;i<myArray.length;i++){
    console.log(myArray)
}
let str=myArray.toString();
let count=0;
for(const char of str){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++
    }
}
console.log(count)