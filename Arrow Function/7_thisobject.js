// const user={
//     userName:"Tanveer",
//     price:1000,
//     welcomMessage:function(){
//         console.log(`${this.userName}, welcom to website`)
//         console.log(this)
//     }
// }
// user.welcomMessage()
// user.userName="Raza"
// user.welcomMessage()
//...............................................
function display(){
    let userName="tanveer"
    console.log(this.userName)
}
display()

//  display=()=>{
//     let userName="tanveer"
//     console.log(this.userName)
// }
// display()