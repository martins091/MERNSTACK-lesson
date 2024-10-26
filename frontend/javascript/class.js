// Lesson Plan: Understanding Classes in JavaScript
// Objective:
// By the end of this lesson, learners will understand what classes are in JavaScript, how to create and use them, and the concept of inheritance.

// Introduction (5 minutes)
// What is a Class?
// A class is a blueprint for creating objects with specific properties and methods. Classes help organize code and make it more reusable.
// Key Concepts (10 minutes)
// Syntax of Classes:

// Classes are defined using the class keyword followed by the class name.
// Constructor:

// The constructor method is a special method for creating and initializing objects created with the class.
// Methods:

// Methods can be defined within a class to perform actions or manipulate data.
// Basic Example of a Class (15 minutes)
// Creating a Simple Class



class Dog {
    // Constructor method
    constructor(name, breed) {
      this.name = name; // Property
      this.breed = breed; // Property
    }
  
    // Method to display dog info
    bark() {
      console.log(`${this.name} says woof!`);
    }
  
    // Method to display breed
    displayBreed() {
      console.log(`${this.name} is a ${this.breed}.`);
    }
  }
  
  // Creating an instance of the Dog class
  const myDog = new Dog('Buddy', 'Golden Retriever');
  
  // // Using the methods
  // myDog.bark(); // Output: Buddy says woof!
  // myDog.displayBreed(); // Output: Buddy is a Golden Retriever.
  // Explanation:
  // Class Definition (Dog):
  
  // The class Dog is defined with a constructor that initializes name and breed properties.
  // Methods:
  
  // bark: A method that outputs a message indicating the dog is barking.
  // displayBreed: A method that outputs the dog's breed.
  // Creating an Instance:
  
  // An instance of the Dog class is created using the new keyword.
  // Method Invocation:
  
  // The methods bark and displayBreed are called on the instance.
  // Inheritance (10 minutes)
  // Creating a Subclass
  
  
  
  class Puppy extends Dog {
    // Constructor method
    constructor(name, breed, age) {
      super(name, breed); // Call the parent constructor
      this.age = age; // Additional property
    }
  
    // Method to display puppy age
    displayAge() {
      console.log(`${this.name} is ${this.age} months old.`);
    }
  }
  
  // // Creating an instance of the Puppy class
  const myPuppy = new Puppy('Charlie', 'Labrador', 6);
  
  // // Using methods from both the Puppy and Dog classes
  myPuppy.bark(); // Output: Charlie says woof!
  // myPuppy.displayBreed(); // Output: Charlie is a Labrador.
  // myPuppy.displayAge(); // Output: Charlie is 6 months old.
  // Explanation:
  // Subclass Definition (Puppy):
  
  // The Puppy class extends the Dog class, inheriting its properties and methods.
  // Constructor with super:
  
  // The super keyword is used to call the parent class’s constructor, ensuring the inherited properties are initialized.
  // New Method:
  
  // displayAge: A method specific to the Puppy class that outputs the puppy’s age.
  // Creating an Instance:
  
  // An instance of the Puppy class is created, demonstrating that it can use methods from both the Dog and Puppy classes.
  // Practice Exercises (10 minutes)
  // Create a Car class with properties like make, model, and methods to display its details.
  // Create a SportsCar subclass that extends the Car class and adds a method for turbo boost.
  // Conclusion (5 minutes)
  // Recap:
  // Classes in JavaScript provide a way to create objects with shared properties and methods.
  // Inheritance allows subclasses to extend and customize the functionality of parent classes.
  // Additional Resources
  // MDN Web Docs: JavaScript Classes
  // JavaScript.info: Classes
  
  
  // class Animal {
  //     constructor(name) {
  //       this.name = name; // Property
  //     }
    
  //     speak() {
  //       console.log(`${this.name} makes a noise.`); // Method
  //     }
  //   }
    
  //   const dog = new Animal('Dog');
  //   dog.speak(); // Output: Dog makes a noise.
    