function countPalindromicSubstrings(s) {
    /**
     * Count the number of palindromic substrings in a given string.
     *
     * @param {string} s - Input string
     * @return {number} - Number of palindromic substrings
     */

    function expandAroundCenter(left, right) {
        let count = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // Count odd-length palindromes (single character as center)
        count += expandAroundCenter(i, i);
        // Count even-length palindromes (two consecutive characters as center)
        count += expandAroundCenter(i, i + 1);
    }

    return count;
}

// Example test cases
const testCases = ["abba", "level", "racecar", "abc", "a"];

testCases.forEach((test) => {
    console.log(`Input: '${test}', Palindromic Substrings Count: ${countPalindromicSubstrings(test)}`);
});
countPalindromicSubstrings("abba")