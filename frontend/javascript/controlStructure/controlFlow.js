// 3. Control Flow Keywords
// In addition to the basic control structures, there are keywords that help manage the flow of execution within loops and conditionals.

// a. break
// The break statement is used to exit a loop or switch statement prematurely.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exits the loop when i equals 5
    }
    console.log(i);
}

// b. continue
// The continue statement skips the current iteration and moves to the next iteration of the loop.
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skips even numbers
    }
    console.log(i); // prints only odd numbers
}
