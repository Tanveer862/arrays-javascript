//Given an array of integers, calculate the ratios of its elements that are positive,
// negative, and zero. Print the decimal value of each fraction on a 
 //new line with  places after the decimal.
 function plusMinus(arr) {
    let positive=0;
    let negtive=0;
    let zero=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            positive=positive+1;
        }else if(arr[i]<0){
            negtive=negtive+1;
        }else{
            zero=zero+1;
        }
    }
    console.log("Negative Number:",negtive)
    console.log("Positive Number:",positive)
    console.log(" Zero :",zero)
   console.log((negtive/n).toFixed(6),)+ " ";
   console.log((positive/n).toFixed(6))+" ";
   console.log((zero/n).toFixed(6))+ " " ;
}
plusMinus([4,5,8,-2,-2,4,0])