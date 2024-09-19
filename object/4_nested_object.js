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