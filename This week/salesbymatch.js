function sockMerchant(n, ar) {
    let count={};
    let pairs=0;
    for(let socks of ar){
      count[socks]=(count[socks]||0)+1;
      if(count[socks] %2===0){
        pairs++;
      }
    }
    console.log(pairs)
    }
    sockMerchant(9,[1,3,4,5,4,2,1,2,3,3])