const prompt = require("prompt-sync")({ sigint: true });

// Function to perform calculations based on the operation
function calculate(firstNumber, secondNumber, operationSign) {
    if (operationSign === "+") {
        return firstNumber + secondNumber;
    } else if (operationSign === "-") {
        return firstNumber - secondNumber;
    } else if (operationSign === "*") {
        return firstNumber * secondNumber;
    } else if (operationSign === "/") {
        return secondNumber !== 0 ? firstNumber / secondNumber : "Error: Cannot divide by zero";
    } else {
        return "Invalid operation";
    }
}

// Function to get user input and perform operations
function startCalculator() {
    while (true) {
        // Asking for inputs
        const firstInput = prompt("Enter the first number (or type 'O' to quit): ");
        if (firstInput.toUpperCase() === "O") {
            console.log("Exiting the application. Goodbye!");
            break;
        }
        const firstNumber = parseFloat(firstInput);
        if (isNaN(firstNumber)) {
            console.log("Invalid input for the first number. Please try again.");
            continue;
        }

        const secondNumber = parseFloat(prompt("Enter the second number: "));
        if (isNaN(secondNumber)) {
            console.log("Invalid input for the second number. Please try again.");
            continue;
        }

        const operationSign = prompt("Enter the operation sign (+, -, *, /): ");
        const result = calculate(firstNumber, secondNumber, operationSign);
        console.log(`Result: ${result}`);

        // Ask if the user wants to continue
        const userChoice = prompt("Do you want to continue? (yes to continue, any other key to quit): ").toLowerCase();
        if (userChoice !== "yes") {
            console.log("Exiting the application. Goodbye!");
            break;
        }
    }
}

// Start the program
startCalculator();