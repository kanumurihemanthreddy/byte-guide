export const tutorials = [
  {
    title: "JavaScript Fundamentals",
    description: "Learn the basics of JavaScript programming including variables, functions, and control flow.",
    difficulty: 'Beginner' as const,
    steps: [
      {
        id: 1,
        title: "Variables and Data Types",
        content: `Welcome to JavaScript! Let's start with variables and data types.

In JavaScript, you can declare variables using 'let', 'const', or 'var':
- Use 'let' for variables that can change
- Use 'const' for constants that won't change
- Avoid 'var' in modern JavaScript

JavaScript has several data types:
- String: text data
- Number: numeric data
- Boolean: true/false
- Array: collections of data
- Object: key-value pairs`,
        code: `// Variables
let name = "Alice";
const age = 25;
let isStudent = true;

// Arrays
let colors = ["red", "green", "blue"];

// Objects
let person = {
  name: "Bob",
  age: 30,
  city: "New York"
};

console.log(name);
console.log(age);
console.log(person.name);`,
        objective: "Understand how to declare variables and work with different data types in JavaScript.",
        hint: "Try changing the values and running the code to see how different data types work!"
      },
      {
        id: 2,
        title: "Functions",
        content: `Functions are reusable blocks of code that perform specific tasks.

There are several ways to create functions in JavaScript:
1. Function declarations
2. Function expressions
3. Arrow functions

Functions can take parameters and return values.`,
        code: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Function with default parameter
const multiply = (x, y = 1) => x * y;

// Using the functions
console.log(greet("World"));
console.log(add(5, 3));
console.log(multiply(4));
console.log(multiply(4, 2));`,
        objective: "Learn how to create and use functions to organize your code.",
        hint: "Try creating your own function that takes two numbers and returns their difference!"
      },
      {
        id: 3,
        title: "Control Flow",
        content: `Control flow statements help you make decisions and repeat actions in your code.

Key control flow statements:
- if/else: make decisions
- for loops: repeat actions a specific number of times
- while loops: repeat actions while a condition is true
- switch: handle multiple cases`,
        code: `// If/else statement
let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else {
  console.log("C grade or below");
}

// For loop
console.log("Counting to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Array iteration
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}`,
        objective: "Master conditional statements and loops to control program flow.",
        hint: "Try modifying the score variable or adding more fruits to the array!"
      }
    ]
  },
  {
    title: "DOM Manipulation",
    description: "Learn how to interact with HTML elements using JavaScript to create dynamic web pages.",
    difficulty: 'Intermediate' as const,
    steps: [
      {
        id: 1,
        title: "Selecting Elements",
        content: `The Document Object Model (DOM) allows JavaScript to interact with HTML elements.

Common methods to select elements:
- getElementById(): selects by ID
- querySelector(): selects by CSS selector
- querySelectorAll(): selects all matching elements
- getElementsByClassName(): selects by class name`,
        code: `// Selecting elements (simulated for demo)
// In a real browser environment:
// let title = document.getElementById('title');
// let buttons = document.querySelectorAll('.btn');
// let firstParagraph = document.querySelector('p');

// For demonstration:
console.log("Selecting elements:");
console.log("- By ID: document.getElementById('title')");
console.log("- By class: document.querySelectorAll('.btn')");
console.log("- By tag: document.querySelector('p')");

// Example of what you might do with selected elements
let exampleText = "Hello, DOM!";
console.log("Setting text content:", exampleText);`,
        objective: "Understand how to select HTML elements using JavaScript.",
        hint: "In a real web page, you would use these methods to select actual HTML elements!"
      }
    ]
  }
];