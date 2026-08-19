console.log(2 + 4);

// value მნიშვნელობა რომელსაც პროგრამა იყენებს

console.log(4);
console.log(2 + 4);

const firstName = "Giorgi";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
// 1 camelCase

// userName
// productPrice
// isLoggedIn

// ასოებს, ციფრებს, ქვედა ტირეს (_), დონარის ნიშანს $

const firstName5 = "Giorgi";

// const const =

const PI = 3.14;
const TAX_RATE = 0.18;

// Descriptive names

const productPrice = 5;
const quantity = 25;
const totalPrice = productPrice * quantity;

console.log(totalPrice);

// Primitive Data types

//number

// const age = 22;
const price = 19.99;

// console.log(age, price);
console.log("22", "19.99");
// console.log(typeof age);

// string

const fisrtName1 = "Anano";
const message = "Hello World!";
console.log(typeof message);

// boolean (true/false)

const isLoggedIn = true;
console.log(typeof isLoggedIn);

const hasPermission = true;
console.log(typeof hasPermission);

if (hasPermission) {
  console.log("შენ შეგიძლია შესვლა");
} else {
  console.log("შენ არ შეგიძლია შესვლა");
}

// undefined

let userName;

console.log(userName);
console.log(typeof userName);

userName = "ia";
console.log(userName);

// null

const selectedProducts = null;
console.log(typeof selectedProducts);

// bigInt

const bigNumbers = 1232873978893479823478923978478923n;
console.log(typeof bigNumbers);

// symbol

const id = Symbol("id");
console.log(typeof id);

// let const var

let age = 30;
console.log(age);
age = 31;
console.log(age);

const x = 5;
const y = 25;
const z = x * y;

console.log(x + y);

const fullName = "Anano" + " " + "Topuria";

const name1 = "anano";
const surname = "topuria";
// Template literals

const fullNameTempl = `sdfsd jsdfks djklfsdjlfsjl dfjlsj ${surname}`;

console.log(fullName);
console.log(fullNameTempl);

console.log(x - y);
console.log(y / x);
console.log(x * y);

// const result = 10 % 3;
// console.log(result);

10 % 2; // luwia
7 % 2; // 1 kenti

const result = 2 ** 3;
console.log(result);

let count = 5;
count--;

console.log(count);

let price1 = 100;
price1 -= 20;

// price1 = price1 + 20;

console.log(price1);

// loose equality
console.log(5 == "5");

// strict equality
console.log(5 == "5");
console.log(5 === 5);

console.log(5 != "5");
console.log(5 !== "5");

console.log(5 > 5);
console.log(5 < 10);
console.log(5 > 25);

// logical operators
// && AND
const age1 = 6;
const hasTicket = false;

console.log(age1 >= 18 && hasTicket);

// age >= 18 && hasTicket;

// || OR

const isAdmin = false;
const isEditor = true;

console.log(isAdmin || isEditor);

console.log(!true);
console.log(!!!false);

// if else statement

const score = 100;

if (score >= 90) {
  console.log("Exelent");
} else if (score >= 70) {
  console.log("Good");
} else if (score >= 22) {
  console.log("Fail");
}

console.log(typeof NaN);
console.log(200 * "flddfsl");

// 0, "", null, NaN, undefined

if (0) {
  console.log("You are an adult");
} else {
  console.log("You arent an adult");
}
