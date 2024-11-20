// celsiusToFahrenheit    // fahrenheitToCelsius
function celsiusToFahrenheit(celsius) {
    let fahrenheit;
    fahrenheit=(celsius * 9/5) + 32;
    console.log("Temprature in Fahrenheit =",fahrenheit);
}


function fahrenheitToCelsius(fahrenheit) {
    let celsius;
    celsius= (fahrenheit - 32) * 5/9;
    console.log("Temprature in Celsius =",celsius);
}
celsiusToFahrenheit(56)
fahrenheitToCelsius(84)

