 // Find Maximum Number from array
 
 function findMax(arr) {
let maximum;
maximum=arr[0];
for(let i=0;i<arr.length;i++){   
    if(arr[i]>maximum){
        maximum=arr[i]
    }
}
   console.log(maximum) 
}
findMax([1,8,6,10,100,76,109,54,90])