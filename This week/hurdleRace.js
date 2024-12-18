//A video player plays a game in which the character competes in a hurdle race. 
//Hurdles are of varying heights, and the characters have a maximum height they can jump. 
//There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose.
 //How many doses of the potion must the character take to be able to jump all of the hurdles 0.
  //If the character can already clear all of the hurdles, return 0.
function hurdleRace(k, height) {
    let doses=0;
    let maximumHeight=[0];
    for(let i=0;i<height.length;i++){
     for(let j=i+1;j<height.length;j++){
         if(height[j]>maximumHeight){
             maximumHeight=height[j]
         }
     }
    }
    console.log(maximumHeight)
    if(maximumHeight-k<=0){
        return 0;
    }else{
   doses=Math.abs(maximumHeight-k);
   console.log(doses)
    }
 }
 hurdleRace(7, [2,5,4,5,2])