// string pailindrom are note 
function isPalindrome(str) {
    let str1='';
    check = false;
    
    for(i=str.length-1;i>=0;i--){
        str1+=str[i]
    }
      if(str1==str){
        return check = true
      }
      else{
        return check = false

      }
    }
    isPalindrome("good")