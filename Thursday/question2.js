// Write a function to validate whether a given string is a valid email address.
function isValidEmail(email) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 if(email.match(pattern)){
    console.log(email)
 } else {
    console.log("wrong pattern try again =",email)
 }
}
isValidEmail("tanveer.hussain@gmail.com")