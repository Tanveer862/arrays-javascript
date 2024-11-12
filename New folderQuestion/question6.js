function isPalindrome(str) {
    let str1='';
    
    for(i=str.length-1;i>=0;i--){
        str1+=str[i]
    }
      if(str1==str){
      console.log("String is Palindrome")
      }
      else{
        console.log("String is not pailindrome")

      }

    }
    isPalindrome("This is a dog")