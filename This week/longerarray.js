function pickingNumbers(a) {
    let maxLength=0;
    let maxSubArray=[];
    let currentSubArray=[];
    for(let i=0;i<a.length;i++){
        currentSubArray=[a[i]]
        for(let j=i+1;j<a.length;j++){
            if((a[j]-a[i])<=1){  
                currentSubArray.push(a[j])
            }else{
                break;
            }
        }
        if(currentSubArray.length>maxLength){
            maxSubArray=currentSubArray;
            maxLength=currentSubArray.length;
           
        }
        
    }
    console.log(maxSubArray)
    console.log(maxLength)
    }
    pickingNumbers([1,1,2,2,4,4,5,5,5])