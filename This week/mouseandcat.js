//wo cats and a mouse are at various positions on a line. You will be given their starting positions. 
//Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed.
 //If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.
function catAndMouse(x, y, z) {
    let result=[];
let distanceOfA=Math.abs(x-z)
let distanceOfB=Math.abs(y-z)
  if(distanceOfA<distanceOfB){
    result.push("Cat A");
  }if(distanceOfB<distanceOfA){
    result.push("Cat B")
  } else{
    result.push("Mouse C")
  }
  console.log(result)
}
catAndMouse(1,3,2)