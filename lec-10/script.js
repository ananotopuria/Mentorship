"use strict";

// const student = ["Lia", 22, "Tbilisi", true];

// const student = {
//   name: "Lia",
//   age: 22,
//   city: "Tbilisi",
//   isStudent: true,
// };

// console.log(student.name);

// const user = {
//   name: "nika",
//   age: 55,
//   isAdmin: false,
//   skills: ["Js", "React"],
// };

// console.log(user.skills[1]);

// const students1 = [
//   {
//     name: "nika",
//     age: 20,
//   },
//   {
//     name: "ana",
//     age: 66,
//   },
//   {
//     name: "giorgi",
//     age: 23,
//   },
// ];

// console.log(students1[0].name);

// var name = "nino";
// console.log(name);

// console.log(window.name);
// console.log(window);

let name = "Anano";

function sayHello() {
  console.log(name);
}

sayHello();

function sayHello1() {
  let message = "Hello";
  console.log(message);
}
sayHello1();
// console.log(message);

if (true) {
  let age = 22;
  const name = "natia";
}

// console.log(age);
console.log(name);

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i);

// hoisting

// console.log(name1);
// var name1 = "Anano";

// console.log(name1);
// let name1 = "Anano";

function sayHello1() {
  console.log("hi");
}

sayHello1();

// const sayHello2 = function () {
//   console.log("hiiii");
// };

// let sayHello2 = function () {
//   console.log("hiiii");
// };

// const sayHello2 = function () {
//   console.log("hiiii");
// };

// sayHello2();
// sayHello2();

// var sayHello2 = function () {
//   console.log("hiiii");
// };

console.log(sayHello2);

var sayHello2 = function () {
  console.log("hiiii");
};

let user = {
  name: "Giorgi",
  age: 25,
};

user.city = "Tbilisi";
console.log(user);

let user1 = user;
user1.name = "Lasha";
console.log(user.name);

let numbers1 = [1, 2, 3];
let numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1);
