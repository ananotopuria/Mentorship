# JavaScript Fundamentals — Part 2

## Class Practice

Topics:

- Functions
- Parameters and Arguments
- `return`
- Arrays
- Array Methods
- `for` Loop
- `while` Loop
- Functions + Arrays + Loops

---

# 1. Functions

## Exercise 1 — Hello Function

შექმენი ფუნქცია სახელად `sayHello`.

ფუნქციამ კონსოლში უნდა გამოიტანოს:

```text
Hello JavaScript!
```

შემდეგ გამოიძახე ფუნქცია **3-ჯერ**.

```js
// Write your code here
```

---

## Exercise 2 — Greeting User

შექმენი ფუნქცია `greetUser`, რომელსაც ექნება ერთი parameter:

```text
name
```

ფუნქციამ უნდა გამოიტანოს:

```text
Hello Nino!
```

თუ ფუნქციას გამოვიძახებთ ასე:

```js
greetUser("Nino");
```

შემდეგ გამოიძახე ფუნქცია სხვადასხვა სახელით:

```js
greetUser("Nino");
greetUser("Giorgi");
greetUser("Ana");
```

---

## Exercise 3 — User Information

შექმენი ფუნქცია:

```js
introduceUser()
```

რომელსაც ექნება ორი parameter:

```text
name
age
```

მაგალითად:

```js
introduceUser("Nino", 22);
```

შედეგი:

```text
My name is Nino and I am 22 years old.
```

---

# 2. Return

## Exercise 4 — Add Two Numbers

შექმენი ფუნქცია:

```js
addNumbers()
```

რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.

მაგალითად:

```js
const result = addNumbers(10, 20);

console.log(result);
```

შედეგი:

```text
30
```

> გამოიყენე `return`.

---

## Exercise 5 — Calculate Product Price

ონლაინ მაღაზიაში გვინდა პროდუქტის სრული ფასის გამოთვლა.

შექმენი ფუნქცია:

```js
calculateTotal(price, quantity)
```

ფუნქციამ უნდა დააბრუნოს:

```text
price * quantity
```

მაგალითად:

```js
const total = calculateTotal(50, 3);

console.log(total);
```

შედეგი:

```text
150
```

---

## Exercise 6 — Adult or Minor

შექმენი ფუნქცია:

```js
checkAge(age)
```

თუ ასაკი არის `18` ან მეტი, ფუნქციამ დააბრუნოს:

```text
Adult
```

სხვა შემთხვევაში:

```text
Minor
```

მაგალითად:

```js
console.log(checkAge(22));
console.log(checkAge(15));
```

---

# 3. Arrays

## Exercise 7 — Create an Array

შექმენი `fruits` მასივი, რომელშიც იქნება:

```text
Apple
Banana
Orange
Mango
```

კონსოლში გამოიტანე:

1. მთელი მასივი
2. პირველი ელემენტი
3. მესამე ელემენტი
4. მასივის სიგრძე
5. ბოლო ელემენტი

```js
const fruits = [
  // ...
];
```

---

## Exercise 8 — Change an Array Element

მოცემულია:

```js
const colors = ["red", "green", "blue"];
```

შეცვალე:

```text
green
```

მნიშვნელობა:

```text
yellow
```

საბოლოოდ მასივი უნდა იყოს:

```js
["red", "yellow", "blue"]
```

---

# 4. Array Methods

## Exercise 9 — Student List

მოცემულია:

```js
const students = ["Nino", "Giorgi", "Ana"];
```

შეასრულე შემდეგი მოქმედებები:

1. `push()`-ით დაამატე `"Luka"`.
2. `unshift()`-ით დაამატე `"Mariam"`.
3. `pop()`-ით წაშალე ბოლო სტუდენტი.
4. `shift()`-ით წაშალე პირველი სტუდენტი.
5. გამოიტანე საბოლოო მასივი.

---

## Exercise 10 — Find a Student

მოცემულია:

```js
const students = [
  "Nino",
  "Giorgi",
  "Ana",
  "Luka"
];
```

შეამოწმე:

```text
არის თუ არა "Ana" მასივში?
```

შემდეგ შეამოწმე:

```text
არის თუ არა "Dato" მასივში?
```

გამოიყენე:

```js
includes()
```

---

# 5. For Loop

## Exercise 11 — Numbers 1–10

`for` loop-ის გამოყენებით გამოიტანე რიცხვები:

```text
1
2
3
4
5
6
7
8
9
10
```

---

## Exercise 12 — Countdown

`for` loop-ის გამოყენებით გამოიტანე:

```text
10
9
8
7
6
5
4
3
2
1
```

შემდეგ:

```text
Go!
```

---

## Exercise 13 — Even Numbers

`for` loop-ის გამოყენებით გამოიტანე მხოლოდ ლუწი რიცხვები `1`-დან `20`-მდე.

სავარაუდო შედეგი:

```text
2
4
6
8
10
12
14
16
18
20
```

> გაიხსენე `%` remainder operator.

---

# 6. Arrays + For Loop

## Exercise 14 — Technologies

მოცემულია:

```js
const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];
```

`for` loop-ის გამოყენებით გამოიტანე თითოეული ტექნოლოგია ცალ-ცალკე.

შედეგი:

```text
HTML
CSS
JavaScript
React
```

---

## Exercise 15 — Students

მოცემულია:

```js
const students = [
  "Nino",
  "Giorgi",
  "Ana",
  "Luka"
];
```

გამოიტანე:

```text
Student: Nino
Student: Giorgi
Student: Ana
Student: Luka
```

გამოიყენე:

- `for`
- Array `length`
- Template literal

---

## Exercise 16 — Calculate Total

მოცემულია პროდუქტების ფასები:

```js
const prices = [20, 30, 15, 50];
```

შექმენი:

```js
let total = 0;
```

შემდეგ `for` loop-ის გამოყენებით შეკრიბე ყველა ფასი.

საბოლოო შედეგი:

```text
Total: 115 GEL
```

---

# 7. While Loop

## Exercise 17 — Numbers with While

`while` loop-ის გამოყენებით გამოიტანე რიცხვები:

```text
1
2
3
4
5
```

---

## Exercise 18 — Countdown with While

`while` loop-ის გამოყენებით გამოიტანე:

```text
5
4
3
2
1
Go!
```

---

# 8. Functions + Loops

## Exercise 19 — Print Numbers

შექმენი ფუნქცია:

```js
printNumbers(limit)
```

რომელიც გამოიტანს რიცხვებს `1`-დან გადაცემულ `limit`-მდე.

მაგალითად:

```js
printNumbers(5);
```

შედეგი:

```text
1
2
3
4
5
```

---

## Exercise 20 — Sum Numbers

შექმენი ფუნქცია:

```js
sumNumbers(numbers)
```

რომელიც მიიღებს რიცხვების მასივს.

მაგალითად:

```js
const numbers = [10, 20, 30, 40];
```

ფუნქციამ `for` loop-ის გამოყენებით უნდა შეკრიბოს ყველა რიცხვი და `return`-ით დააბრუნოს შედეგი.

```js
const result = sumNumbers(numbers);

console.log(result);
```

შედეგი:

```text
100
```

---

# Final Class Challenge — Shopping Cart

გვაქვს პროდუქტების ფასები:

```js
const cart = [50, 25, 100, 30, 45];
```

შექმენი ფუნქცია:

```js
calculateCartTotal(cart)
```

ფუნქციამ უნდა:

1. მიიღოს მასივი parameter-ის სახით.
2. შექმნას `total` ცვლადი.
3. `for` loop-ით გაიაროს ყველა ფასი.
4. შეკრიბოს ფასები.
5. `return`-ით დააბრუნოს სრული ფასი.

შემდეგ:

```js
const total = calculateCartTotal(cart);

console.log(`Cart total: ${total} GEL`);
```

### Bonus

თუ სრული ფასი არის `200` ლარზე მეტი, გამოიტანე:

```text
You have free delivery!
```

სხვა შემთხვევაში:

```text
Delivery costs 10 GEL.
```