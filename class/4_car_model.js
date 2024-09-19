class car{
    make(make){
        this.make=make
        console.log("This car is made by:",make)
    }
    color(color){
        this.color=color
        console.log("Color of Car :",color)
    }
    speed(speed){
        this.speed=speed
        console.log("Current speed of car:",speed)
    }
    acclerate(increment){
        this.speed +=increment
        console.log("Accelerate: current speed ",increment)
    }
    barking(decrement){
        this.speed -=decrement
        console.log("Barking current speed:",decrement)

    }
}
let car1=new car();
car1.make("Toyota corola")
car1.color("black")
car1.speed(100)
car1.acclerate(50)
car1.barking(20)