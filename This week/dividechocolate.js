
function countWaysToDivideChocolate(chocolate, month, day) {
    let count = 0; 
    let n = chocolate.length;  
    for (let i = 0; i <= n - month; i++) {
        let sum = 0; 
        for (let j = i; j < i + month; j++) {
            sum += chocolate[j];  
        }
        if (sum === day) {
            count++;  
        }
    }
    
    return count; 
}


let chocolate = [1, 2, 1, 3, 2];  
let month = 1;                   
let day = 2;                   

console.log(countWaysToDivideChocolate(chocolate, month, day)); 
