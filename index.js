// ===== Introduction to Variables in Node.js =====
console.log("Welcome to Variables Tutorial!\n");

// Variable Declaration Methods
let personName = "John Doe";        // let - block scoped, can be reassigned
const personAge = 25;               // const - block scoped, cannot be reassigned
var personCountry = "USA";          // var - function scoped (avoid using)

// Display Variables
console.log("Name: " + personName);
console.log("Age: " + personAge);
console.log("Country: " + personCountry);
console.log("");

// Different Data Types
let number = 42;                    // Number
let decimal = 3.14;                 // Float
let isActive = true;                // Boolean
let userEmail = "john@example.com"; // String
let hobbies = ["Reading", "Gaming", "Coding"]; // Array
let userData = {                    // Object
  name: "John",
  age: 25,
  role: "Developer"
};

console.log("Number: " + number);
console.log("Decimal: " + decimal);
console.log("Is Active: " + isActive);
console.log("Email: " + userEmail);
console.log("Hobbies: " + hobbies.join(", "));
console.log("User Data: ", userData);
console.log("");

// Variable Reassignment
personName = "Jane Doe";  // This is allowed with let
console.log("Updated Name: " + personName);

// Basic operations
let x = 10;
let y = 20;
console.log("Sum: " + (x + y));
console.log("Product: " + (x * y));
