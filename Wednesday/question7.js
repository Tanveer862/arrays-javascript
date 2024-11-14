///Write a function to find the intersection of two arrays.


function arrayIntersection(arr1, arr2) {
  let intrsection=[];
  {
    for(let i=0;i<arr1.length;i++){
      for(let j=0;j<arr2.length;j++)
        if(arr1[i]==arr2[j]){
          intrsection.push(arr1[i])
      }
    }
  }
    console.log(intrsection)
}
arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6])