const library={
    list_of_book:"javascript,object oriented,",
    list_of_member:"abubakar, Raheel,younas",
    borrow:"book",
    return:"book",
    book:{
        book: "Web development",
        author:"Iftikhar Ahhmad",
        isbn:1234,
        availAble_status: "Yes",
    },
    member:{
        name:"Tanveer",
        memberId:40,
        lastBorrow:"20-08-2024",
    },
   
    featur:{
        add:"Adding",
        remove:"Removing ",
        searching:"Search book",
        register:"register new member",
        allow:"Borrow and return books ",
    },
}
console.log(library.featur)
console.log(library.book)
///............................................
let Name=localStorage.setItem("Name","Tanveer")
let Email=localStorage.setItem("Email","tanveer.hussain0227@gmail.com")
console.log(localStorage)
  let name1="Ali"
  let email="razaali@gmail.com"
  localStorage.setItem("uname",name1)
  localStorage.setItem("email",email)
  console.log(`My name is ${localStorage.getItem("uname")} ,My email is ${localStorage.getItem("email")}`)
