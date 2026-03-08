// Generate a random number between 1 and 9
let randomNumber = Math.floor(Math.random() * 9) + 1;

// Ask the user to guess the number
let userGuess = parseInt(prompt("Guess a number between 1 and 9:"));

// Check the user's guess
if (userGuess < randomNumber) {
    alert("Too low! The number was " + randomNumber);
} else if (userGuess > randomNumber) {
    alert("Too high! The number was " + randomNumber);
} else if (userGuess === randomNumber) {
    alert("Exactly right! Congratulations!");
} else {
    alert("Invalid input. Please enter a number between 1 and 9.");
}