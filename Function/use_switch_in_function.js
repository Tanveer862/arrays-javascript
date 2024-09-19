function operator(a, op, b) {
    let sum;
    let mul;
    let sub;
    let div
    switch (op) {
        case '+':
            sum = a + b
            console.log("sum is:", sum)
            break;
        case '-':
            sub = a - b
            console.log("subtraction is:", sub)
            break;
        case '*':
            mul = a * b
            console.log("Multiplication is:", mul)
            break;
        case '/':
            div = a / b
            console.log("division is:", div)
            break;
    }
}
operator(20, '*', 30)