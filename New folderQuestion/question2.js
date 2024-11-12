//   find the factorial of number 
function factorial(n){
    let f=1;
    for(let i=n;i>=1;i--){
        f=f*i;
    }
    console.log(f)
}
factorial(5)