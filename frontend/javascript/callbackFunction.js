// Definition: A callback is a function passed into 
// another function as an argument, which is then 
// invoked inside the outer 
// function to complete some kind of routine or action.
// Function definition with a callback parameter

function sayHello(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // This calls the callback function after saying hello
  }
  
  // Definition of the callback function
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Calling the sayHello function and passing sayGoodbye as the callback
  sayHello("Alice", sayGoodbye);
  
  
  // A simple callback example with arrow functions
  const sayHello = (name, callback) => {
    console.log(`Hello, ${name}!`);
    callback(); // This calls the callback function after saying hello
  };
  
  const sayGoodbye = () => {
    console.log("Goodbye!");
  };
  
  sayHello("Alice", sayGoodbye);
  
  
  // Higher-order function that takes a callback
  function greetUser(greetingFunction) {
    const userName = "John";
    return greetingFunction(userName); // Calling the callback function
  }
  
  // Callback function
  function sayHello(name) {
    return `Hello, ${name}!`;
  }
  
  // Using the higher-order function
  const greetingMessage = greetUser(sayHello);
  console.log(greetingMessage); // Output: Hello, John!