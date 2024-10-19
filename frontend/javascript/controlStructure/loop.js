// Loops
// Loops are used to execute a block of code repeatedly until a specified condition is met.

// a. for Loop
// The for loop runs a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// b. while Loop
// The while loop executes a block of code as long as the specified condition is true.
let counts = 0;

while (counts < 5) {
    console.log("Count is: " + counts);
    counts++;
}

// c. do...while Loop
// The do...while loop is similar to the while loop, but it guarantees that the code 
// block will run at least once before checking the condition.
let count = 0;

do {
    console.log("Count is: " + count);
    count++;
} while (count < 5);

