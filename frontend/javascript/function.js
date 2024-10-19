// function is a reusable block of code that performs a specific task. Functions
// allow you to encapsulate logic, making your code modular, organized, and easier 
// to read and maintain. You can define a function, call it, and pass arguments to it.

// Defining Functions
// There are several ways to define functions in JavaScript:

// 1. Function Declaration
// This is the most common way to define a function. It begins with the function keyword, 
// followed by the name of the function, parentheses for parameters, and a block of code.
function greet(name) {
    console.log("Hello, " + name + "!");
}

// 2. Function Expression
// A function expression defines a function as part of a larger expression, such as an assignment. 
// It can be anonymous (without a name) or named.
const greet = function(name) {
    console.log("Hello, " + name + "!");
};

// 3. Arrow Function
// Arrow functions are a more concise syntax introduced in ES6. 
// They use the => syntax and do not have their own this context
const greet = (name) => {
    console.log("Hello, " + name + "!");
};

// Calling Functions
// Once a function is defined, you can call it by using its name followed by parentheses. 
// If the function accepts parameters, you can pass the arguments inside the parentheses.
greet("Alice"); // Output: Hello, Alice!

// Parameters and Arguments
// Functions can accept parameters (placeholders for values) and can be called with 
// arguments (actual values passed to the function).

function add(a, b) {
    return a + b;
}

let sum = add(5, 3); // sum is 8
console.log(sum);

// Default Parameters
// You can define default values for function parameters, which are used if no argument is provided.
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Guest!
greet("Bob"); // Output: Hello, Bob!

// Higher-Order Functions
// In JavaScript, functions can take other functions as arguments or return them. This allows for 
// powerful functional programming techniques.
function executeFunction(fn) {
    fn();
}

executeFunction(() => {
    console.log("This is a higher-order function!");
});
