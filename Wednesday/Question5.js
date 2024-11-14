// Write a function to calculate the power of a number
function power(base, exponent) {
  let result=1;
  while(exponent!=0){
    result=base*result;
    exponent--
  }
    console.log(result)
}
power(2, 3)