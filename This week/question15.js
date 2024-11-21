// print Staircase of n;
//   #
//  ##
// ###
//####

function staircase(n) {
    let i,j,k;
    
    for( i=1;i<=n;i++){
        let shape='';
        for(j=1;j<n-i;j++){
            shape+=' ';
        }
         for( k=1;k<=i;k++){
        shape+= "#";
    }
   
 console.log(shape)
}
}
staircase(4)


