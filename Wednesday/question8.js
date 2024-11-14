// Write a function to find the median of two sorted arrays.

function findMedianSortedArrays(nums1, nums2) {
let temp;
let min;
let mid;
for (i = 0; i <nums1.length-1; i++) {
    min = i;
    for (j = i + 1; j <nums1.length; j++)
    if (nums1[j] < nums1[min])
    min = j;
    temp = nums1[i];
    nums1[i] = nums1[min];
    nums1[min] = temp;
 }
 console.log(nums1.length)
 if(nums1.length %2==0){
    let mid1=nums1.length/2-1;
    let middleValue=nums1[mid1]
    console.log("Middle Value",middleValue)
    let mid2=mid1+1;
    let middleValue2=nums1[mid2]
    console.log("mid2",middleValue2)
    let median=middleValue+middleValue2/2;
    console.log("Medean Value", median)
 }


 console.log("Sorted Array",nums1 )
    }
  

findMedianSortedArrays([1,2,8,4,9,3])