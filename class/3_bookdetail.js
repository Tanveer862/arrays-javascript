class book{
    price(price){
     this.price=price
     console.log("Price of book:",price)
    }
    title(bookName){
        this.name=bookName
        console.log("Book Name :",bookName)
    }
    auther(name){
        this.name=name
        console.log("Auther of book :",name)
    }
    year(years){
        this.years=years
        console.log("Publish in:",years)

    }
}
let book1=new book();
book1.auther("Tanveer")
book1.title("Web development")
book1.price(1500);
book1.year(2021);