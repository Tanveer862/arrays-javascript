let data=" secrite information";
class user{
    constructor(name,email){
        this.name=name
        this.email=email
    }
    viewData(){
        console.log("Data:",data)
    }
}
let student1=new user("Tanveer","tanveer@gmail.com");
let student2=new user("Rehan","Rehan@gmail.com");
console.log(student1)
console.log(student2)
console.log(student1.viewData())
let teacher= new user("Saghir-Ur-Rehman","saghirtoor@gmail.com")
console.log(teacher)
console.log(teacher.viewData())
// inherit admin class to user class 
class Admin extends user{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        data="some new data";
        console.log("New data:",data)
    }
}
let Admin1= new Admin("Khawar Faraz","khawarfaraz@gmail.com");
console.log(Admin1)
console.log(Admin1.editData())