// candles=[4,4,1,3]
///The maximum height candles are 4 units high. There are 2 of them, so return 2 .
function birthdayCakeCandles(candles) {
    let maxBirth=candles[0];
    let count=0;
    for(let i=1;i<candles.length;i++){
            if(candles[i]>maxBirth){
                maxBirth=candles[i]
            }
    }
    for(let k=0;k<candles.length;k++){
if(candles[k]===maxBirth){
    count++;
}
    }
 console.log(maxBirth)
console.log(count)
}
birthdayCakeCandles([3,4,5,6,9,9,6,7,])