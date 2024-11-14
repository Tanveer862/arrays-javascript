//Write a function that takes a sentence (string) and finds the longest word.

//Input: "The quick brown fox jumps over the lazy dog"
//Output: "quick"
function longestWord(sentence) {
//    sentence="The quick brown fox jumps over the lazy dog";
  let words=sentence.split(" ");
  let longword='';
  console.log(words)   
  for(let word of words){
    if(word.length>longword.length){
       longword=word;
    }
   
  }
  console.log(longword)
}
longestWord("The quick brown fox jumps over the lazy dog")