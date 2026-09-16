"use strict";

let userName = "Anano";

console.log(userName);

// function

function greet() {
  console.log("Hello!");
}

greet();
greet();
greet();
greet();
greet();
greet();

function greetUser(name, age) {
  console.log(`Hello! ${name} and i'm ${age} years old!`);
}

greetUser("Nino", 11);
greetUser("Giorgi", 33);

function addNumbers(a, b) {
  const result = a + b;
  return result;
}

const sum = addNumbers(1, 2);
console.log(sum);

// 1 function declaration

console.log(calculateDiscountDec(120, 20));

function calculateDiscountDec(price, discount) {
  return price - discount;
}

// 2 function expression

const calculateDiscount = function (price, discount) {
  return price - discount;
};

console.log(calculateDiscount(100, 20));

// 3 arrow function

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 5));

// Array

const fruit1 = "apple";
const fruit2 = "banana";
const fruit3 = "orange";

// 0 , 1 , 2 , 3 ....

const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length); // 3
console.log(fruits[fruits.length - 1]); // fruits[2]

// pop - ბოლო ელემენტს შლის

const students = ["Nino", "Giorgi", "Lia"];

students.pop();
// console.log(students.pop());

console.log(students);

// shift - თავიდან შლის ელემენტს

students.shift();

console.log(students);

// push - ამატებს მნიშვნელობას ბოლოს

students.push("luka");
console.log(students);

// unshift - თავში ამატებს მნიშვნელობას

students.unshift("Mariam");
console.log(students);

console.log(students.indexOf("luka"));
console.log(students.includes("nino"));
console.log(students.includes("Giorgi"));

// loops

// console.log("Helo");
// console.log("Helo");
// console.log("Helo");
// console.log("Helo");
// console.log("Helo");

for (let i = 0; i < 5; i++) {
  console.log("Helo");
}

// for (initialization; conditions; update)

for (let i = 10; i > 0; i--) {
  console.log(i);
}
