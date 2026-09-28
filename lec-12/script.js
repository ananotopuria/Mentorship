"use strict";

// Default value

const enrollments = [];

const createEnrollment = function (
  studentName,
  course = "Js",
  lesson = 10,
  price = 50,
) {
  // || &&

  // old way
  //   course = course || "Js";
  //   lesson = lesson || 10;
  //   price = price || 50;

  const enrollment = {
    studentName,
    course,
    lesson,
    price,
  };

  console.log(enrollment);
  enrollments.push(enrollment);
};

createEnrollment("nino");
createEnrollment("Giorgi", "react", 20, 100);
createEnrollment("Nika", undefined, 20, 0);

// function as values

const greet = function () {
  console.log("Hello");
};

greet();

const sayHello = greet;
sayHello();

const student = {
  name: "Nino",
  age: 20,
  introduce: function () {
    console.log("hi im nino");
  },
};

console.log(student.name);
console.log(student.age);
student.introduce();

const user = {
  name: "Giorgi",
  age: 20,
  introduce() {
    console.log("hi im giorgi");
  },
};

user.introduce();

// function vs function call

const getName = function () {
  return "Nino";
};

const functionValue = getName;
const returnedValue = getName();

console.log(functionValue);
console.log(returnedValue);
////
// passing function to another function

const greetUser = function () {
  console.log("hi");
};

const execute = function (fn) {
  fn();
};

execute(greetUser);

const sayHi = function () {
  console.log("hi");
};

const sayGoodbye = function () {
  console.log("bye");
};

const run = function (fn) {
  fn();
};

run(sayHi);
run(sayGoodbye);

// callback

const greetStudent = function (name) {
  console.log(`Hello, ${name}`);
};

const processStudent = function (callback) {
  const studentName = "eka";
  callback(studentName);
};

processStudent(greetStudent);

const calculate = function (a, b, fn) {
  return fn(a, b);
  //   return subtract(12,23)
};

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};

console.log(calculate(1, 2, add));
console.log(calculate(12, 23, add));
console.log(calculate(12, 23, subtract));

const result = calculate(20, 4, (a, b) => {
  return a / b;
});

console.log(result);

// strings

const language = "JavaScript";
const framework = "React";

console.log(language);
console.log(framework);

// accessing characters

console.log(language[0]);
console.log(language[1]);
console.log(framework[1]);

// length
console.log(language.length);
console.log(framework.length);
console.log("frontend".length);

// last symbol

console.log(language[language.length - 1]);

// არსებული ინდექსი

console.log(language[100]);

// strings are immutable

let technology = "React";
// technology[0] = "X";
console.log(technology);

technology = "Node";

console.log(technology);

// concatenation

const firstName = "mariami";
const lastName = "beridze";

const fullName = firstName + " " + lastName;
console.log(fullName);

// Template literals

const studentName = "Nika";
const course = "React";

console.log(`${studentName} is learning ${course}`);

console.log(typeof "Mariam");
console.log(typeof new String("Mariam"));

const programmingLanguage = "JavaScript";
console.log(programmingLanguage.toLowerCase());
console.log(programmingLanguage.toUpperCase());

// indexOf

const company = "Georgian Academy";
console.log(company.indexOf("e"));
console.log(company.lastIndexOf("e"));
console.log(company.indexOf(" "));

// slice

console.log(company.slice());
console.log(company.slice(9));
console.log(company.slice(9, 15));

const tech = "JavaScript";
console.log(tech.slice(-3));
console.log(tech.slice(1, -1));

const checkProducts = function (code) {
  const category = code.slice(-1);

  if (category === "E") {
    console.log("Electornic product");
  } else {
    console.log("Other products");
  }
};

checkProducts("1sdfsdfsf2dsfsfsdf3fsdsfE");
checkProducts("123b");
checkProducts("123d");
checkProducts("123E");

// includes

const description = "JavaScript is a programming language";
console.log(description.includes("is"));
console.log(description.includes("JavaScript"));
console.log(description.includes("React"));

// startsWith()  endsWith()

console.log(description.startsWith("JavaScript"));
console.log(description.endsWith("ge"));

// Replace

const message = "i js love js";
console.log(message.length);
console.log(message.padEnd(22, "*"));

console.log(message.replace("js", "react"));
// console.log(message);

console.log(message.replaceAll("js", "react"));

// Split

// const technologies = "HTML+CSS+JS+REACT+NODE";
const technologies = "HTML CSS JS REACT NODE";

console.log(technologies.split(" "));

const [firstName1, surname] = "Anano Topuria".split(" ");
console.log(firstName1);
console.log(surname);

// Join

const languages = ["js", "ts", "py"];

console.log(languages.join(" "));
console.log(languages.join(" - "));
console.log(languages.join(" , "));

const [firstName2, surname2] = "eka beridze".split(" ");
const newName = ["Mrs.", firstName2, surname2].join(" ");
console.log(newName);

const word = "mariam";

console.log(word.toUpperCase());

const correctWord = word[0].toUpperCase() + word.slice(1);

// m -> M + ariam

console.log(correctWord);
