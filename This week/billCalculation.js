//Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume.
 //Brian gets the check and calculates Anna's portion. 
//You must determine if his calculation is correct.
//For example, assume the bill has the following prices:bill=[2,4,6] . 
//Anna declines to eat item  which costs k=bill[2] . If Brian calculates the bill correctly, Anna will pay(2+4)/2=3 .
 //If he includes the cost of , he will calculate(2+4+6)/2=6 . In the second case, he should refund 4 to Anna.

function bonAppetit(bill, k, b) {
    let actuallBill=0;
    let billCharged=0;
    let overCharge=0;
    let nonCustom=bill[k];
    for(let i=0;i<bill.length;i++){
        billCharged +=bill[i]
    }
    console.log("billcharged:",billCharged)
    actuallBill=billCharged/2;
    // console.log("actuall:",actuallBill)
    if(b===actuallBill){
        return("Bon Appetit")
    }else{
        overCharge=b-actuallBill;
        return("overcharge :",overCharge)
    }
    
    }