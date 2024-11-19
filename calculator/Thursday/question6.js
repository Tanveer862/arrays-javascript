// Given an array of integers, find the total number of continuous subarrays whose sum equals a specific target, K.
function subarraySum(nums, k) {
  let result = 0;
  let sum=0;
  let arr1=[];
  let arr2=[];
  for (let s = 0; s < nums.length; s++) {
    for (let e = 0; e < nums.length; e++) {
      sum = sum + nums[e];
      if (sum == k) {
    arr1.push(nums[e])
    arr1.push(nums[s])
      }
    }
  }
  console.log(arr1);

}

subarraySum([1, 1, 1,4,2], 2);
