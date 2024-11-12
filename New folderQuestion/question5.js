/// remove duplicate item from array
function removeDuplicate(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let index = i+1; index <= arr.length - 1; index++) {
      if (arr[i] === arr[index]) {
        arr.splice(index, 1);
        index--;
      }
    }
  }
  console.log(arr);
}

removeDuplicate([1, 2, 3, 4, 4, 5, 5, 6, 7]);
