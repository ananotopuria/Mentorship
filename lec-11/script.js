"use strict";

// Destructuring

const arr = [1, 2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

console.log(a, b, c, d);

const [count, y, z, q] = arr;

console.log(count);

const university = {
  name: "Tech Academy",
  location: "Tbilisi",
  studentsCount: 500,

  courses: ["JavaScript", "React", "Node.js", "Python"],

  teachers: ["Nika", "Mariam", "Giorgi"],
};

console.log(university.name);

const { location: universityLocation, name } = university;

let [firstCourse, secondCourse] = university.courses;
console.log(firstCourse);
console.log(secondCourse);

[secondCourse, firstCourse] = [firstCourse, secondCourse];

console.log(firstCourse);
console.log(secondCourse);

// spead operator

const number = [7, 8, 9];

const newNumbers = [1, 2, number[0], number[1], number[2]];

console.log(newNumbers);

const newNumbers1 = [1, 2, ...number];
console.log(newNumbers1);

console.log(...number);

const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "lemon"];

console.log(["kiwi", ...fruits1, ...fruits2]);

const nums = [10, 20, 30, 40, 50];

const [first, second, ...rest] = nums;

console.log(rest);

// shot circuiting

// || &&

// 0 , "", undefind, null, NaN

// || OR
// pirvel truth mnishvnelobas

// And &&

console.log(true || false);
console.log(3 || "Hello");
console.log(0 || "Hello");
console.log("" || "Hello");
console.log(undefined || 0 || 23 || "Hello");

console.log(true && false);
console.log(3 && "Hello");
console.log(0 && "Hello");
console.log("" && "Hello");
console.log(undefined || 0 || 23 || "Hello");

console.log(0 || "Hello"); // hello

console.log("JavaScript" || "React"); // "js"

console.log("" || "Default"); // "defaulg"

console.log(null || 25); // 25

console.log(undefined || "Guest"); // guest

console.log(false || 100); // 100

console.log(5 || 10); // 5

console.log(null || undefined || "Found"); // "found"

console.log(0 || "" || false || "Last"); // last

console.log(undefined || null || 0 || "JS" || "React"); //js

console.log("Hello" && 5); //5

console.log(10 && "JavaScript"); // js

console.log(0 && "Hello"); // 0

console.log("React" && ""); //""

console.log(true && 100); //100

console.log("Hello" && null); //null

console.log(5 && 10 && 20); // 20

console.log("JS" && true && 0 && "React"); // 0

console.log(10 && "Hello" && undefined && 50); //undefined

console.log(true && "JS" && 25 && "Last"); // last

console.log(0 || null || "Apple" || 50); //"apple"

console.log("Cat" && 12 && false && "Dog"); //false

console.log(undefined || "" || 100 || null); //100

console.log(true && "Hello" && 0); //0

console.log(null || (5 && "JS")); //js

console.log("" || (10 && "React")); //"react"

console.log("A" && "B" && "C"); //c

console.log(false || null || undefined || "End"); //  "end"
