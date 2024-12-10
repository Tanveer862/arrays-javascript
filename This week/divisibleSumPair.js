//Given an array of integers and a positive integer k , determine the number of  pairs where i<j  and arr[i] +arr[j]  is divisible by .
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i <=n; i++) {
      for (let j = i + 1; j <=n; j++) {
          if ((ar[i] + ar[j]) % k === 0) {
            count++;
          }
        }
      }
      console.log(count);
    }

  divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
  