const prompt = require("prompt-sync")({ sigint: true });

function questNumber() {
    let guestNumber2 = prompt("Enter the secretNumber that lie between 1 and 100: ");
}

function userInput() {
    let guestNumber = prompt("Enter the secretNumber that lie between 1 and 100: ");
    let secretNumber = 40;
    if (guestNumber == secretNumber) {
        console.log("You Entered The Correct Secret Number: ");
    } else {
        let trailAttempt = 0
        while (trailAttempt < 3) {
            questNumber();
            trailAttempt++;
        }
    }
}
userInput();