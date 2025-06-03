const prompt = require("prompt-sync")({ sigint: true });

function welcomeMessage() {
    console.log("Welcome To UBANK");
    console.log("Press C to createAccount");
    console.log("Press L To Login");
    console.log("Press O to Cancel");
    makeSelection();
}

// CreateAccount
function createAccount() {
    let username = prompt("Enter Your userName:");
    let email = prompt("Enter Your Email:");
    let password = prompt("Enter Your Password:");
    if (username && email && password) {
        console.log("Account Created Successfully. You can Now Login");
        userLogin();
    } else {
        console.log("Account Cannot Be Empty");
        makeSelection();
    }
}
// Login
function userLogin() {
    let userNameLogin = toString(prompt("Enter Your userNameLogin:"));
    let emailLogin = toString(prompt("Enter Your emailLogin:"));
    let passwordLogin = toString(prompt("Enter Your passwordLogin:"));
    let tryAttempt = 0;
    while (tryAttempt < 3) {
        console.log("The number Trials are:");
        if (userNameLogin === username && emailLogin === password && passwordLogin === password) {
            console.log('Login successful. Welcome back, ' + username + '!');
        } else {
            console.log('Invalid username or password. Please create an account.');
            createAccount();
        }
        tryAttempt++;
    }

}

// makeSelection
function makeSelection() {
    let choice = prompt("Make Your Selection:");
    if (choice.toUpperCase === 'C') {
        console.log('Create Your Account using Your userName, Email and  Password');
    } else if (choice.toUpperCase === 'L') {
        console.log('Login using Your userName, Email and Password');
    } else if (choice.toUpperCase === 'O') {
        console.log('Thank You For Using My APP Good Bye');
    } else {
        console.log('Invalid selection. Please try again.');
        welcomeMessage();
    }
}
welcomeMessage();