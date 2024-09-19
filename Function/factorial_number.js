// calculate factorial passing through parameter 
function factorial(n){
    let f=1;
    for(let c=1;c<=n;c++){
        f=f*c;
    }
    console.log(f)
}
factorial(5)