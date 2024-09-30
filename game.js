let randomNumber = randomInt();
let guesses = [];
let guessNumber = document.getElementById("guessnumber");
let guessesSpan = document.querySelector(".guesses");
let lastResultSpan = document.querySelector(".lastResult");
let loworhighSpan = document.querySelector(".loworhigh");
let guessCount = 1;
let maxGuesses = 10;
let resetButton = document.getElementById("resetButton");
let guessButton = document.getElementById("guessnumber-submit"); 

function checkGuess() {
    let userGuess = Number(guessNumber.value);
    guesses.push(userGuess);
    guessesSpan.textContent = "Previous guesses: " + guesses.join(", ");
    if (guessCount <= maxGuesses){
        resetButton.style.display = "block";
        if (userGuess == randomNumber) {
            lastResultSpan.textContent = "Congratulations! You got it!";
            loworhighSpan.textContent = "";
            resetButton.style.display = "block";
            guessButton.disabled = true;
        }else{
            lastResultSpan.textContent = "Wrong!";
            if (userGuess < randomNumber) {
                loworhighSpan.textContent = "Last guess was too low!";
            } else if (userGuess > randomNumber) {
                loworhighSpan.textContent = "Last guess was too high!";
            }
            guessCount++;
        }
    }else{
        lastResultSpan.textContent = "!!!GAME OVER!!!";
        resetButton.style.display = "block";
        guessButton.disabled = true;
    }
}

function resetGame() {
    guessCount = 1;
    randomNumber = randomInt();
    guesses = [];
    guessesSpan.textContent = "Previous guesses: ";
    lastResultSpan.textContent = "";
    lastResultSpan.style.backgroundColor = "";
    loworhighSpan.textContent = "";
    resetButton.style.display = "none";
    guessButton.disabled = false;
    guessNumber.value = "";
    guessNumber.focus();
}