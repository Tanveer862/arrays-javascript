// change uppercase to word in sentence
function titleCase(sentence) {
    let word=sentence.split(" ");
    for(let i=0;i<word.length;i++){
        word[i]=word[i].toUpperCase();
    }
    console.log(word)
}
titleCase("this is my first job")