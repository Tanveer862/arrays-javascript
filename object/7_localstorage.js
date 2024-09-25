const bank={
    acount:{
        acountNumber:244215619,
        ownerName:"Tanveer",
        balance:20000,
        transaction:{
            date:"10-09-2023",
            amount:10000, 
        },
    }
    }
    let stringValue=JSON.stringify(bank)
 localStorage.setItem("testing",stringValue)
console.log(localStorage.getItem("testing"))
 let a=JSON.parse(localStorage.getItem("testing"))
 console.log(a.acount.transaction.date)
