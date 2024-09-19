function functionName(msg){
    console.log("I love Pkistan")
    console.log("I love javascript")
    console.log(msg)
}
functionName("Hello how are you ");
// return value to function
function sum(x,y){
    s=x+y;
    console.log("before return")
    return s;                   // written key word return value 
    console.log("After return ") // After return function cannot display any thing 

}
sum(7,9) 
//let val=sum(7,9) // The value in function store in variable then it display
//console.log(val) // variale display the value of sum function 
// Arrow function 
function mul(a,b){
    return a*b;
}
    const arrowMul=(a,b)=>{
            console.log(a*b)
        }
        arrowMul(10,40);
        /// count vowel
        function countVowel(str){
            let count=0;
            for(const char of str){
                if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
                    count++;
                }
            }
            
          console.log("Total vowel:",count)
        }
        countVowel("Tanveerhussain");