const student={
    name:"Tanveer Hussain",
    marks:90.00,
    printMarks: function(){
        console.log("Marks=",this.marks)
    },
}
console.log(student.printMarks())
//.............prototype..........
// const emplee={
//     caltax(){
//         console.log("tax rate is  10%")
//     },
// };
// const karanArjun={
//     salary:50000,
// };
// karanArjun__proto__=emplee;
// console.log(karanArjun.caltax())
//...................nested object...........
 const regularUser={
    email:"tanveer@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Raza",
            lastName: "Ahmad "
        }
    }
 }
 console.log(regularUser.fullName.userFullName)
 //// ...........merge object........
 const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}
 const obj3=Object.assign(obj1,obj2)
 console.log(obj3)
 ///..................
 const tainderUser={}
 tainderUser.id=123
 tainderUser.name="Tanveer"
 tainderUser.email="tanveer@gmail.com"
 console.log(tainderUser)
 console.log(Object.keys(tainderUser))
 console.log(Object.values(tainderUser))