// closure
// A closure is a feature in JavaScript where an inner function has 
// access to the variables of its outer function, even after the 
// outer function has finished executing.

function outerFunction() {
    const outerVariable = 'I am from the outer function!';
  
    function innerFunction() {
      console.log(outerVariable); // Accessing the outer variable
    }
  
    return innerFunction; // Returning the inner function
  }
  
  const closureFunction = outerFunction(); // outerFunction is executed
  closureFunction(); // Output: I am from the outer function!
  

function createCounter() {
    let counter = 0; // The outer variable
  
    // The inner function that increments the counter
    return function() {
      counter++; // Incrementing the outer variable
      return counter; // Returning the updated value
    };
  }
  
  const counterFunction = createCounter(); // Create the counter function
  
  console.log(counterFunction()); // Output: 1
  console.log(counterFunction()); // Output: 2
  console.log(counterFunction()); // Output: 3
  
function createCounter() {
    let counter = 0; // The outer variable
  
    // Return an object with two functions: increment and decrement
    return {
      increment: function() {
        counter++; // Increment the counter
        return counter; // Return the updated value
      },
      decrement: function() {
        counter--; // Decrement the counter
        return counter; // Return the updated value
      },
      getCount: function() {
        return counter; // Return the current value of the counter
      }
    };
  }
  
  const counterFunctions = createCounter(); // Create the counter functions
  
  console.log(counterFunctions.increment()); // Output: 1
  console.log(counterFunctions.increment()); // Output: 2
  console.log(counterFunctions.decrement()); // Output: 1
  console.log(counterFunctions.decrement()); // Output: 0
  console.log(counterFunctions.getCount());  // Output: 0
  


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter Example</title>
</head>
<body>
    <h1>Counter: <span id="countDisplay">0</span></h1>
    <button id="incrementButton">Increment</button>
    <button id="decrementButton">Decrement</button>

    <script src="script.js"></script>
</body>
</html>

function createCounter() {
    let counter = 0; // The outer variable

    return {
        increment: function() {
            counter++; // Increment the counter
            return counter; // Return the updated value
        },
        decrement: function() {
            counter--; // Decrement the counter
            return counter; // Return the updated value
        },
        getCount: function() {
            return counter; // Return the current value of the counter
        }
    };
}

const counterFunctions = createCounter(); // Create the counter functions

 Get references to the HTML elements
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

// Update the display function
function updateDisplay() {
    countDisplay.textContent = counterFunctions.getCount(); // Update the displayed count
}

// Event listeners for the buttons
incrementButton.addEventListener('click', () => {
    counterFunctions.increment(); // Increment the counter
    updateDisplay(); // Update the display
});

decrementButton.addEventListener('click', () => {
    counterFunctions.decrement(); // Decrement the counter
    updateDisplay(); // Update the display
});

 // Initial display
updateDisplay();  Show initial count