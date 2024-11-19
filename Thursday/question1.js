//Given an array of numbers and a target sum, 
//find two numbers in the array that add up to the target and return their indexes!
function twoSum(arr, target) {
    let sum;
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            console.log(i,j)
            console.log(arr[i]+arr[j])
        }
        }
    }
    
}
twoSum([2, 7, 11, 15], 9)