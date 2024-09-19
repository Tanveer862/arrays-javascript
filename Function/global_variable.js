// global variable can access any where in the program 
let x=20
let y=30
function add( ){
    let sum=x+y;
    console.log(sum)
}
add( );
// Multiplication of two number with global variale 

function multiplication(){
    let mul=x*y
    console.log(mul)
}
multiplication()
// Division of two number with global variable 
function division(){
    
    let div=x/y;
    console.log(div)
}
division()