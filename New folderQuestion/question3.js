// // find the fibnocci series 
function series(n){
    let a,b,temp;
    a=0;
    b=1;
    console.log(a,b);
    for(let i=0; i<=n; i++){
        temp=a+b;
        a=b;
        b=temp;
        console.log(temp)
    }
}
series(5)