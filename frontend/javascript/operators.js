// operators are special symbols that perform operations on one or more operands (values). 
// They can be categorized into several types based on their functionality. 

// 1. Arithmetic Operators
// These operators are used to perform basic mathematical operations.

// Addition (+): Adds two numbers.
let sum = 5 + 3; // sum is 8

// Subtraction (-): Subtracts the second number from the first.
let difference = 10 - 4; // difference is 6


// Multiplication (*): Multiplies two numbers.
let product = 7 * 6; // product is 42

// Division (/): Divides the first number by the second.
let quotient = 20 / 5; // quotient is 4

// Modulus (%): Returns the remainder of a division operation.
let remainder = 10 % 3; // remainder is 1

// Exponentiation (**): Raises the first number to the power of the second.
let power = 2 ** 3; // power is 8 (2^3)

// 2. Assignment Operators
// These operators assign values to variables.

// Assignment (=): Assigns the right operand's value to the left operand.
let x = 5; // x is assigned 5

// Addition Assignment (+=): Adds and assigns the result to the variable.
let y = 5;
y += 3; // y is now 8

// Subtraction Assignment (-=): Subtracts and assigns the result.
let z = 10;
z -= 4; // z is now 6

// 3. Comparison Operators
// These operators compare two values and return a boolean result (true or false).

// Equal (==): Checks if two values are equal (type coercion occurs).
console.log(5 == "5"); // true

// Strict Equal (===): Checks if two values are equal and of the same type.
console.log(5 === "5"); // false

// Not Equal (!=): Checks if two values are not equal (type coercion occurs)
console.log(5 != "5"); // false

// Strict Not Equal (!==): Checks if two values are not equal or not of the
console.log(5 !== "5"); // true

// Greater Than (>): Checks if the left operand is greater than the right.
console.log(10 > 5); // true

// Less Than (<): Checks if the left operand is less than the right
console.log(3 < 7); // true

// Greater Than or Equal (>=): Checks if the left operand is greater than or equal to the right.
console.log(5 >= 5); // true

// Less Than or Equal (<=): Checks if the left operand is less than or equal to the right.
console.log(4 <= 6); // true

// 4. Logical Operators
// These operators are used to combine multiple boolean expressions.

// Logical AND (&&): Returns true if both operands are true.
console.log(true && false); // false

// Logical OR (||): Returns true if at least one of the operands is true.
console.log(true || false); // true

// Logical NOT (!): Reverses the boolean value.
console.log(!true); // false

