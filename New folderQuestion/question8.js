
// find missing number in array
function findMissingNumber(arr) {
  let missingNumbers = [];
  let t = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    
    if (arr[i] !== t) {
      console.log(arr[i], t,i);
      missingNumbers.push(t);
      i--;
    }
    t++;

  }
  console.log("Missing array", missingNumbers);
}
findMissingNumber([1, 3, 4, 7, 8]);
