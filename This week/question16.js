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
for(let k=1;k<arr.length;k++){
    maxSum=maxSum+arr[k]
}

for(let j=0;j<arr.length-1;j++){
    minSum=minSum+arr[j]
}
console.log(minSum,maxSum);
}
miniMaxSum([1,2,3,4,5])