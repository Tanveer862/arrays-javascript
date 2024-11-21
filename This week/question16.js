// arr[1,3,5,7,9]
//The minimum sum is 1+3+5+7=16  and the maximum sum is 3+5+7+9=24 . The function prints

function miniMaxSum(arr) {
    let temp;
    let maxSum=0;
    let minSum=0;
    for(let i=0; i<arr.length;i++){
        {
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                
                }
        }
    }
}
console.log(arr)
for(let k=0;k<arr.length;k++){
    if(k!=0){
        maxSum=maxSum+arr[k];
    }
    if(k!=arr.length-1){
        minSum=minSum+arr[k]
    }
}
// for(let k=0;k<arr.length;k++){
//     if(k==0){
//         minSum=minSum+arr[k]
//     } else if(k==arr.length-1){
//         maxSum=maxSum+arr[k];
//     }
//     else{
//         maxSum=maxSum+arr[k];
//         minSum=minSum+arr[k];
//     } 
// }
console.log(minSum,maxSum);
// for(let k=1;k<arr.length;k++){
//     maxSum=maxSum+arr[k]
// }

// for(let j=0;j<arr.length-1;j++){
//     minSum=minSum+arr[j]
// }
// console.log(minSum,maxSum);
}
miniMaxSum([1,2,3,4,5])