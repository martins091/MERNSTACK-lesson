// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(3, 4)); // Output: 7


const greet = (name) => {
    const greeting = `Hello, ${name}!`;
    return greeting;
};

console.log(greet("Martins")); // Output: "Hello, Martins!"
