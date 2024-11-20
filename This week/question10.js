function majorityElement(arr) {
    let n = arr.length;  
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > n / 2) {
            console.log(arr[i]);
        }
    }
    return -1;
}

majorityElement( [1, 1, 2, 1, 3, 5, 1])