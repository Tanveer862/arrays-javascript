// Write a program in C to find the sum of the series 1 +11 + 111 + 1111 + .. n terms.
function sumOfSeries(n) {
    let term = 0; 
    let sum = 0;  
let arr=[]
    for (let i = 1; i <= n; i++) {
        term = term * 10 + 1; 
        sum += term;  
        console.log(`${term}+`)     
    }

    console.log(sum);
}
sumOfSeries(5)
