function fibnoci(n){
    let n1=0
     let n2=1
     console.log("The series is :",n1)
     console.log("The series is :",n2)
     let n3;
     for(let i=0;i<=n;i++){
        n3=n1+n2
        console.log("The series is :",n3)
        n1=n2
        n2=n3
     }
}
fibnoci(10)