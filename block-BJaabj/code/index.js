/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/
function sayHello() {
  alert(`Hello World!`);
}
/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/
function fullName() {
  let firstName = prompt("What is your first name ?"), lastName = prompt("What is your last name ?"),
   fullName = firstName + " " + lastName;
  alert (fullName);
}
/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/
function addTwoNumbers() {
  let firstNum = Number(prompt("What is your first number ?")), secondNum = Number(prompt("What is your second number ?")),
  sum = firstNum + secondNum;
  alert(sum);
}
/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9

  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/
function getTable() {
  let num = Number(prompt("Enter a number!"));
  let mul = 1 ;
  for(let i = 1; i<=10; i += 1) {
  mul = num * i;
  console.log(`${num} * ${i} = ${mul}`);
  }
}
/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/
function isLeapYear() {
  let year = Number(prompt("Enter a year!"));
  switch (true) {
    case year%4==0:
      alert("The year is a leap year");
    break;
    default:
      alert("The year is not a leap year");  
  } 
}
/*
6. Create a function named `getFactorial` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`

*/
function getFactorial() {
  let number = Number(prompt("Enter a number"));
  let factorial = 1;
  for(let i=1;i<=number;i+=1 ){
    factorial = i * factorial;
  }
  alert(`The factorial of ${number} is ${factorial}`);
}
// Function - Call

//sayHello();
//fullName()
//addTwoNumbers()
//getTable()
//isLeapYear()
//getFactorial()