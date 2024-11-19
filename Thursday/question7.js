// Write a function to rotate elements in an array to the right by a given number of steps.


function rotate(nums,k){
 for(let i=0;i<k;i++){
  nums.unshift(nums.pop()); // unshift method adds the specified elements beginning of array 
 }                           // pop method remove element end of array 
 console.log(nums)
}
rotate([1,2,3,4,5,6,7], 4)    
