
// number guess game 
function guessGameNumber(number){
const numbers = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== numbers) {
    // guess = parseInt(prompt("Guess the number between 1 and 100:"));
    guess=parseInt(number)
    attempts++;
    if (guess > numbers) {
        console.log("Too high! Try again.");
    } else if (guess < numbers) {
        console.log("Too low! Try again.");
    } else {
        console.log(`Correct! It took you ${attempts} attempts.`);
    }
}
}
guessGameNumber(10)