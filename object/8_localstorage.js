const person={
name:"Tahir Ali Anjum",
age:35,
adress:"Tehsil dunyapur distric lodhran",
email:"tahiranjum@gmail.com",
phone:"03459469862",
}
let information=JSON.stringify(person)
localStorage.setItem("value",information)
console.log(localStorage.getItem("value"))
let person1=JSON.parse(localStorage.getItem("value"))
console.log(person1.email)
console.log(person1.phone)