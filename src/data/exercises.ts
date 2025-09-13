export const exercises = [
  {
    id: 1,
    title: "Two Sum",
    description: "Given an array of integers and a target sum, return the indices of two numbers that add up to the target.",
    difficulty: 'Easy' as const,
    category: 'Arrays',
    estimatedTime: '10 min',
    points: 100,
    startingCode: `function twoSum(nums, target) {
  // Your code here
  // Return an array of two indices
}

// Test your function
console.log(twoSum([2, 7, 11, 15], 9)); // Should return [0, 1]`,
    testCases: [
      { input: '[2, 7, 11, 15], 9', expected: '[0, 1]' },
      { input: '[3, 2, 4], 6', expected: '[1, 2]' },
      { input: '[3, 3], 6', expected: '[0, 1]' }
    ]
  },
  {
    id: 2,
    title: "Reverse String",
    description: "Write a function that reverses a string. The input string is given as an array of characters.",
    difficulty: 'Easy' as const,
    category: 'Strings',
    estimatedTime: '5 min',
    points: 75,
    startingCode: `function reverseString(s) {
  // Your code here
  // Modify the array in-place
}

// Test your function
let testArray = ["h", "e", "l", "l", "o"];
reverseString(testArray);
console.log(testArray); // Should print ["o", "l", "l", "e", "h"]`,
    testCases: [
      { input: '["h","e","l","l","o"]', expected: '["o","l","l","e","h"]' },
      { input: '["H","a","n","n","a","h"]', expected: '["h","a","n","n","a","H"]' }
    ]
  },
  {
    id: 3,
    title: "FizzBuzz",
    description: "Write a program that prints numbers 1 to n, but for multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', and for multiples of both print 'FizzBuzz'.",
    difficulty: 'Easy' as const,
    category: 'Logic',
    estimatedTime: '8 min',
    points: 90,
    startingCode: `function fizzBuzz(n) {
  // Your code here
  // Return an array of strings
}

// Test your function
console.log(fizzBuzz(15)); // Should return ["1","2","Fizz","4","Buzz",...]`,
    testCases: [
      { input: '3', expected: '["1","2","Fizz"]' },
      { input: '5', expected: '["1","2","Fizz","4","Buzz"]' },
      { input: '15', expected: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]' }
    ]
  },
  {
    id: 4,
    title: "Valid Palindrome",
    description: "A phrase is a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.",
    difficulty: 'Medium' as const,
    category: 'Strings',
    estimatedTime: '12 min',
    points: 150,
    startingCode: `function isPalindrome(s) {
  // Your code here
  // Return true if palindrome, false otherwise
}

// Test your function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Should return true`,
    testCases: [
      { input: '"A man, a plan, a canal: Panama"', expected: 'true' },
      { input: '"race a car"', expected: 'false' },
      { input: '" "', expected: 'true' }
    ]
  },
  {
    id: 5,
    title: "Binary Tree Traversal",
    description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    difficulty: 'Hard' as const,
    category: 'Trees',
    estimatedTime: '20 min',
    points: 250,
    startingCode: `// Definition for a binary tree node
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function inorderTraversal(root) {
  // Your code here
  // Return an array of values in inorder
}

// Test your function
let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inorderTraversal(root)); // Should return [1, 3, 2]`,
    testCases: [
      { input: '[1,null,2,3]', expected: '[1,3,2]' },
      { input: '[]', expected: '[]' },
      { input: '[1]', expected: '[1]' }
    ]
  }
];