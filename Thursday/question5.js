//  Write a function that reverses the digits of an integer.
function reverseInteger(num) {
    let N1,N2,N3;
    N1=parseInt(num/100);
    num=parseInt(num%100);
    N2=parseInt(num/10);
    N3=parseInt(num%10);
    console.log(N3,N2,N1)
}
reverseInteger(123)