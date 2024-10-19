// Control structures in JavaScript are essential for controlling the flow of 
// execution in your code. They allow you to dictate how your program should 
// respond based on conditions or the repetition of certain tasks. 
// The primary types of control structures include conditional statements and loops.



// Conditional Statements
// Conditional statements execute different code blocks based on whether a specified 
// condition is true or false.

// a. if Statement
// The if statement executes a block of code if the specified condition evaluates to true.
let temperatures = 30;

if (temperatures > 25) {
    console.log("It's a hot day!");
}

// b. if...else Statement
// The if...else statement executes one block of code if the condition is true and another block if it’s false.
let temperatur = 20;

if (temperatur > 25) {
    console.log("It's a hot day!");
} else {
    console.log("It's a nice day!");
}

// c. if...else if...else Statement
// This structure allows for multiple conditions to be checked sequentially.
let temperature = 15

if (temperature > 25) {
    console.log("It's a hot day!");
} else if (temperature < 15) {
    console.log("It's a cold day!");
} else {
    console.log("It's a pleasant day!");
}

// d. switch Statement The switch statement evaluates an expression and matches 
// it against multiple cases. It’s a cleaner alternative to many if...else statements 
// when checking the same variable against different values.
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("It's a banana!");
        break;
    case "apple":
        console.log("It's an apple!");
        break;
    default:
        console.log("Unknown fruit.");
}

