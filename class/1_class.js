class ToyotaCar{
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}
let furtuner= new ToyotaCar();
console.log(furtuner)
///  ...........................................   
class person{
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
}
class engineer extends person{
    work(){
        console.log("solve problems and build something")
    }
}
let obj= new engineer();
console.log(obj.work())
//........................class...............

///.................

//..................car model