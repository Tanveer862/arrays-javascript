//There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
//The elements of the first array are all factors of the integer being considered
//The integer being considered is a factor of all elements of the second array
//These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
function getTotalX(a, b){

    let count = 0;
    
    for (let x = 1; x <= 100; x++) {
        let isFactorOfX = true; 
        for (let i = 0; i < a.length; i++) {
            if (x % a[i] !== 0) {
                isFactorOfX = false;
                break; 
            }
        }
        let isFactorOfB = true; 
        for (let i = 0; i < b.length; i++) {
            if (b[i] % x !== 0) {
                isFactorOfB = false; 
                break;
            }
        }
        if (isFactorOfX && isFactorOfB) {
            count++;
        }
     
    }
    console.log(count);
    }
     getTotalX([2,6], [24,36])
    