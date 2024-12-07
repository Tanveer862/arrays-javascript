function kangaroo(x1, v1, x2, v2) {
    if(v1===v2){
       return x1===x2 ? "yes": "No"
   }
   // in ki position in ki raftar per divide hota ha agr ye condition puri hoti ha to ye apas main milain gy
     if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) > 0)// agr second condtion puri hoti ha to matlb 2 no ak dosri ki tarf harkat kr rhi hn 
                                                                   // teez harkat krny wali susat harkat krny wali ko pakar rhi ha 
     {
        // if no remainder means meet some point 
       console.log("yes")
     }else{
       console.log("No")
     }
   }
   kangaroo(1,2,3,3)