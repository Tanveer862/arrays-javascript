//The Utopian Tree goes through 2 cycles of growth every year.
 //Each spring, it doubles in height. Each summer, its height increases by 1 meter.
//A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring.
 //How tall will the tree be after n growth cycles?
function topianTree(n) {
    let height=0;
    for(let i=0;i<=n;i++){
        if(i%2===0){
    height++;
        }
        else if(i%2!==0){
            height=height*2;
        }
    }
   console.log(height)
}
topianTree(4)