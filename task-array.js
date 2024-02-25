// EXERCISE:
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There can be multiple solutions to each task, solve it as you see fit.
// You will work with array `numbers` which will be generated by code (code below) in every task.
// Write these functions:

// This block generates array with random length with values between 1-100
let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}

// a) Function which will print to console a whole array
const printArray = (numbers) => {
  // Your code:
  numbers.forEach(function(currentNumber)  {
    console.log(currentNumber);
  });
};

// b) Function which will print to console the length of array
const printLength = (numbers) => {
  // Your code:
  console.log(numbers.length);
};

// c) Function which will print to console the first element of array
const printFirstItem = (numbers) => {
  // Your code:
  console.log(numbers[0]);
};

// d) Function which will print to console the last element
const printLastItem = (numbers) => {
  // Your code:
  console.log(numbers[numbers.length - 1]);
};

// e) Function which will print to console the largest number (You can check Math functions)
const printLargestItem = (numbers) => {
  // Your code:
  console.log(Math.max(...numbers));
};

// f) Function which will print to console the smallest number (You can check Math functions)
const printSmallestItem = (numbers) => {
  // Your code:
  console.log(Math.min(...numbers));
};

// g) Function which will print to console the sum of all numbers in array (You can check reduce function)
const printSum = (numbers) => {
  // Your code:
  console.log(numbers.reduce((accumulator, item) => {
    return accumulator + item;
  }, 0));
};

// h) Function which will print to console the difference between the largest and the smallest number (You can check Math functions)
const printSALDifference = (numbers) => {
  // Your code:
  console.log(Math.max(...numbers) - Math.min(...numbers));
};

// i) Function which will print to console the average of all numbers (You can check reduce function)
const printAverage = (numbers) => {
  // Your code:
  console.log(numbers.reduce((accumulator, item) => {
    return accumulator + item;
  }, 0) / numbers.length);
};

// j) Function which will print to console the index of largest number (You can check Math functions)
const printLargestsIndex = (numbers) => {
  // Your code:
  console.log(numbers.findIndex(Math.max(...numbers)));
};

// k) Function which will print to console the even numbers (not the array of even numbers),
// if array doesn't contain any even number, show text "Even number isn't in array"
const printEvenNums = (numbers) => {
  // Your code:
  let modifiedNumbers = numbers.filter((currentNumber) => (currentNumber & 1) === 0);
  if (modifiedNumbers.length)  {
    modifiedNumbers.forEach(function(currentNumber)  {
      console.log(currentNumber);
    });
  } else  {
    console.log("Even number isn't in array");
  }
};

// l) Function which will multiple by 2 every number in array and print the array to console
// Example: printNumsMultipliedBy2([1,2,3]) -> [2,4,6]
const printNumsMultipliedBy2 = (numbers) => {
  // Your code:
  numbers.forEach(function(currentNumber, index)  {
    numbers[index] = currentNumber *= 2;
  });
  console.log(numbers);
};