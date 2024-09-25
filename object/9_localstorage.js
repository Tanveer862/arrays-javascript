const school={
    teacher:{
        teacherName:"Akbar Ali",
        age:27,
        email:"akbarali@gmail.com",
    },
    student:{
        studentName:"Rashid",
        class:"Second year ",
        rollNo:25,
        fatherName:"Abdur-ur-Rehman",
    },
}
let getvalue=JSON.stringify(school)
localStorage.setItem("data",getvalue)
console.log(localStorage.getItem("data"))
let Store=JSON.parse(localStorage.getItem("data"))
console.log(Store.student)