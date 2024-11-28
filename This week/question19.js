function maxSubsetSize(k, s) {
    const remainders = Array(k).fill(0);
    for (let num of s) {
        remainders[num % k]++;
    }
    let count = Math.min(remainders[0], 1);
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i === k - i) {
            count += Math.min(remainders[i], 1);
        } else {
            count += Math.max(remainders[i], remainders[k - i]);
        }
    }

    return count;
}
const k = 3;
const s = [1, 7, 2, 4];
console.log(maxSubsetSize(k, s)); 