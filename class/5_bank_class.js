class bankAcount{
    deposit(money){
        this.money=money
        console.log("Your deposit money :",money)
    }
    withdrwal(money){
        this.money=money
        console.log("your withdraw money:",money)
    }
    currentMoney(balance){
        this.balance=balance
        console.log("Your current balance is :",balance)
    }
}
let bankAcount1=new bankAcount();
bankAcount1.deposit(3000)
bankAcount1.withdrwal(5000)
bankAcount1.currentMoney(20000)