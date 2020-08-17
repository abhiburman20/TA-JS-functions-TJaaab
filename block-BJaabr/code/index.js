// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num) {
  return num+1;
}
// - Write a Function Expression
let addOne = function (num) {
  return num+1;
};
// - Write an Arrow Function without curly brackets(if possible)
let addOne = (num) => num+1;
// - Write an Arrow Function with curly brackets
let addOne = (num) => {
  return num+1;
};
// - Execute the function
addOne(5)
// - Execute the function and store the return value in a variable.
let returnaddOne = addOne(5);
// - What is the typeof returnValue
// Number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(num2) {
  return num2-1;
}
// - Write a Function Expression
let substractOne = function (num2) {
  return num2-1;
}
// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (num2) => num2-1;
// - Write an Arrow Function with curly brackets
let substractOne = (num2) => {
  return num2-1;
};
// - Execute the function
substractOne(5)
// - Execute the function and store the return value in a variable.
let returnsubstractOne = substractOne(5);
// - What is the typeof returnValue
// Number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA=0,numB=0) {
  return numA+numB;
}
// - Write a Function Expression
let sum = function(numA=0,numB=0){
  return numA+numB;
}
// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA=0,numB=0) => numA+numB;
// - Write an Arrow Function with curly brackets
let sum = (numA=0,numB=0) => {
  return numA+numB;
};
// - Execute the function
sum(5,5)
// - Execute the function and store the return value in a variable
let returnsum = sum(5,5)
// - What is the typeof returnValue
//Number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num3) {
  return num3**2;
}
// - Write a Function Expression
let square = function square(num3){
  return num3**2;
}
// - Write an Arrow Function without curly brackets(if possible)
let square = (num3) => num3**2;
// - Write an Arrow Function with curly brackets
let square = (num3) => {
  return num3**2;
};
// - Execute the function
square(5)
// - Execute the function and store the return value in a variable
let returnsquare = square(5);
// - What is the typeof returnValue
// Number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(number1=0,number2=0) {
  if (number1>number2){
    return true;
  } else {
    return false;
  }
}
// - Write a Function Expression
let isGreater = function (number1=0,number2=0) {
  if (number1>number2){
    return true;
  } else {
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (number1=0,number2=0) => (number1>number2) ? true : false;
// - Write an Arrow Function with curly brackets
let isGreater = (number1=0,number2=0) => {
  if (number1>number2){
    return true;
  } else {
    return false;
  }
};
// - Execute the function
isGreater(5,4)
// - Execute the function and store the return value in a variable
let returnisGreater = isGreater(5,4)
// - What is the typeof returnValue
// Boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number) {
  if (number%2 == 0) {
    return "Number is even"
  } else {
    return "Number is odd"
  }
}
// - Write an anonymous Function Expression
let oddOrEven = function(number) {
  if (number%2 == 0) {
    return "Number is even"
  } else {
    return "Number is odd"
  }
}
// - Write an named Function Expression
let oddOrEven = function evenorOdd(number) {
  if (number%2 == 0) {
    return "Number is even"
  } else {
    return "Number is odd"
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) => (number%2 == 0) ? "Number is even" : "Number is odd";
// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {
  if (number%2 == 0) {
    return "Number is even"
  } else {
    return "Number is odd"
  }
} 
// - Execute the function
oddOrEven(5)
// - Execute the function and store the return value in a variable
let returnoddorEven = oddOrEven(5);
// - What is the typeof returnValue
// String