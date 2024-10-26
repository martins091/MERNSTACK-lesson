// Adding to the end
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]

// Adding to the beginning
fruits.unshift("Elderberry");
console.log(fruits); // ["Elderberry", "Apple", "Banana", "Cherry", "Date"]

// 4. Removing Elements from an Array
// Explain methods like pop, shift, and splice for removing elements.

// Removing from the end
fruits.pop();
console.log(fruits); // ["Elderberry", "Apple", "Banana", "Cherry"]

// Removing from the beginning
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// Removing from a specific position
fruits.splice(1, 1); // Removes 1 element at index 1
console.log(fruits); // ["Apple", "Cherry"]

// 5. Modifying Elements
// Show how to change elements in an array.

fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry"]

// 6. Iterating Over Arrays
// Introduce different ways to loop through arrays.

// Using for Loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 7. Common Array Methods
// Explain some useful array methods like map, filter, reduce, find, and includes.

// map
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // ["APPLE", "BLUEBERRY"]

// filter
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["Blueberry"]

// reduce
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + ' ' + fruit);
console.log(concatenatedFruits); // "Apple Blueberry"

// find
let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit); // "Apple"

// includes
let hasCherry = fruits.includes("Cherry");
console.log(hasCherry); // false

// 8. Combining Arrays
// Show how to concatenate arrays using concat.
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Blueberry", "Fig", "Grape"]

// 9. Sorting Arrays
// Explain how to sort arrays with sort.
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // ["Apple", "Blueberry", "Fig", "Grape"]

// 10. Reversing Arrays
// Show how to reverse arrays with reverse.
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); // ["Grape", "Fig", "Blueberry", "Apple"]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenDoubled = numbers.filter(number => number % 2 === 0).map(number => number * 2);
console.log(evenDoubled); // [4, 8, 12, 16, 20]

// Array of objects representing people


// Original array
const numbers2 = [1, 2, 3, 4, 5];

// Using map to create a new array with each element doubled
const doubledNumbers = numbers2.map(number => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// Using map to create a new array with just the names of the people
const names = people.map(person => person.name);

console.log(names); // ["Alice", "Bob", "Charlie"]
