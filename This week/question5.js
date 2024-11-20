// find second largest number from array
function secondLargest(num){
    let temp;
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
    if(num[i]<num[j]){
        temp=num[i]
        num[i]=num[j]
        num[j]=temp;
    }
    }
}
console.log("Second largest number is=",num[1]);
}
secondLargest([12,45,98,100,108,86])