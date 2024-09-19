// in nested function the value of outer funcion access in inner function but value of inner variable cannot access in outer function 
function show(){
    let k="I am a local variable of outer function"
    console.log(k)
    function innerFun(){
        let j="I am local function of inner function"
        console.log(j)
        console.log(k)
    }
    innerFun()
}
show()