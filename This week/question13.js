function extraLongFactorials(n) {
    let factorial=BigInt(1);
    for(let i=n;i>0;i--){
        factorial=factorial*BigInt(i);
    }
    console.log(factorial.toString());
}
extraLongFactorials(40)