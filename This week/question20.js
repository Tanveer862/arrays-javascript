//There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, 
 //find and print the number of letter a's in the first  letters of the infinite string.
 function repeatedString(s, n) {
    const countInS = s.split('').filter(char => char === 'a').length;
    const fullRepetitions = Math.floor(n / s.length);
    const remainder = n % s.length;
    const countInRemainder = s.slice(0, remainder).split('').filter(char => char === 'a').length;
    return (fullRepetitions * countInS) + countInRemainder;
}
const s = 'abcac';
const n = 10;
console.log(repeatedString(s, n)); 
