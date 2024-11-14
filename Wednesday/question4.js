// Number is prime are not 
function isPrime(num) {
   let x=0;
   for(let i=2;i<num;i++){
      if(num%i==0){
        x=1;
        console.log("Number is not prime =",num);
        break;
      }
      else{
        console.log("Number is Prime =",num);
        break;
      }
   }
    
}
isPrime(7)