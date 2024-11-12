// // reverse order find a string
function reverseString(str) {
    let str2 = '';
    for (let i = str.length - 1; i >= 0; i--) {
      str2 += str[i];
    }
    console.log (str2) ;
  }
  reverseString("hello")