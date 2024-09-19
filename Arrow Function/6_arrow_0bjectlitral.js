const person=(firstName,lastName)=>({first:firstName,last:lastName})
console.log(person("Tanveer","Hussain"))
//................................
let compute=(a,b)=>{
    let sum=a+b;
    let product=a*b;
  console.log(sum);
console.log(product);
return {sum,product};
};
compute(50,50)
///..................
