function armStrong(num){
    let remainder;
    let sum=0;
    let temp=num;
    while(temp!=0){
        remainder= temp % 10;
        sum=sum+(remainder*remainder*remainder)
        temp= Math.floor(temp / 10); //The Math.floor() static method always rounds down and 
                                     //returns the largest integer less than or equal to a given number.
    }
        if(sum===num){
            console.log("Number is Armstrong",num)
        } else{
            console.log("Number is not Armstrong",num)
        }
   
}
armStrong(123)