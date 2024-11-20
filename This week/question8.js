function moveZeroesToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
   console.log(arr)
}
moveZeroesToEnd([0, 1, 2, 0, 3, 0, 5, 6]);

