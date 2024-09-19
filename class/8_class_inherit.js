class Animal{
     weight=0;
     color =2
         constructor(w,c){
            this.weight=w;
            this.color=c
        console.log("Object oriented is created.....")
    }
    eats(){
        console.log(" Eating food")
    }
    jumps(){
        console.log("jumping again and again ")
    }
}
class lion extends Animal{
    constructor(h,w){
        super(h,w)
        console.log(h,w)
        
        console.log("object is created and he is a lion")
    }
    eats(){
        console.log(`Line of  ${this.color}  color is eating meats `)
    }
}
let Animal1=new Animal(20,'brown');
Animal1.eats()
let lion1=new lion( 10,'black');
lion1.eats()