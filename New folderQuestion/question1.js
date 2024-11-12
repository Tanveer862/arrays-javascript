function longestWord(sentence) {
  let word = sentence.split(" ");
  let largestWord = word[0];
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i].length > largestWord.length) {
      largestWord = word[i];
    }
  }
  console.log(largestWord);
}
longestWord("The quick brown fox jumps over the lazy dog");
