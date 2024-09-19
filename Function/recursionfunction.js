
// function reverse(num){
//     if(num==0){
//         return 1;
//     }
//   console.log(num)
//     reverse(num-1)
  
  
//     console.log("Demo class")
    
// } 
// reverse(5) 
/// conuting 1 to five using recursion function
function counting(num){
  if(num>5){
    return 1;
  }
  console.log(num)
  counting(num+1)
}
counting(1)

// sum calculate using recursion function 
let sum=0;
function printSum(i,n,sum){
  if(i==n)
  {
    sum=sum+i
    console.log(sum)
    return 
  }
sum=sum+i
printSum(i+1,n,sum)
}
printSum(1,10,0)
/// calculate factorial of number
function factorial(n){
if(n==1){
  return 1
}
  let fact_n=factorial(n-1)
  fact_n= n*fact_n
  return fact_n
}
let ans=factorial(5)
console.log(ans)
/// 
