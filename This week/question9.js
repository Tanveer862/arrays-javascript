//  Rearrange the array such that all odd numbers appear before even numbers while maintaining their relative order

function reArrang(arr){
    let evenNumber=[];
    let oddNumber=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
         evenNumber.push(arr[i])
    }
    else{
       oddNumber.push(arr[i])
    }
}
console.log(oddNumber)
console.log(evenNumber)
let arr2= oddNumber.concat(evenNumber)
console.log(arr2)

}
reArrang([3, 1, 2, 4, 5, 7, 6])