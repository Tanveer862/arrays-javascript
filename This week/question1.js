// find factorial of number using function 
function factorial(n) {
  let f=1;
  for(let i=1; i<=n; i++){
    f=f*i;
  }
  console.log("Factorial =", f)
}

factorial(5); 
