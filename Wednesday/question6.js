
// Write a function to merge two sorted arrays into a single sorted array.
function mergeSortedArrays(arr1, arr2) {
  let merge=[]; 
  let i=0; j=0;
  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        merge.push(arr1[i]);
        i++
    }else{
        merge.push(arr2[j]);
        j++
    }

  }

    console.log(merge)
}
mergeSortedArrays([1, 3, 5], [2, 4, 6])