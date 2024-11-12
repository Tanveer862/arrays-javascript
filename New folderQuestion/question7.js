function countVowels(str) {
    let vowel=0;
    for(let i=0;i<str.length-1;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||
            str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'
        ){
            vowel++
        }
    }

    console.log(vowel)
}
countVowels("This is a dog he is hungry usman Khan is a Good cricketer")