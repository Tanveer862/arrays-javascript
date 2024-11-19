//Given an array of integers, find the total number of continuous subarrays whose sum equals a specific target, K.

function subarraySum(nums, k) {
    // Initialize variables
    let prefixSumCount = { 0: 1 }; // To handle cases where the subarray starts at index 0
    let currentSum = 0;
    let count = 0;

    // Iterate through the array
    for (let num of nums) {
        currentSum += num; // Update the running sum

        // Check if (currentSum - k) exists in the hashmap
        if (prefixSumCount[currentSum - k] !== undefined) {
            count += prefixSumCount[currentSum - k];
        }

        // Update the hashmap with the current running sum
        if (prefixSumCount[currentSum] === undefined) {
            prefixSumCount[currentSum] = 1;
        } else {
            prefixSumCount[currentSum]++;
        }
    }

    return count;
}

// Test the function
const nums = [1, 1, 1];
const k = 2;
console.log(subarraySum(nums, k)); // Output: 2
