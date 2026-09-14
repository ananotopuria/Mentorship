# JavaScript Fundamentals — Part 2

# Homework

თემები:

- Functions
- Parameters
- Arguments
- Return
- Arrays
- Array Methods
- `for`
- `while`
- Functions + Arrays + Loops

---

# Part 1 — Functions

## 1. Welcome User

შექმენი ფუნქცია:

```js
welcomeUser(name)
```

რომელიც დააბრუნებს ტექსტს:

```text
Welcome, Nino!
```

მაგალითად:

```js
console.log(welcomeUser("Nino"));
```

---

## 2. Multiply Numbers

შექმენი ფუნქცია:

```js
multiply(a, b)
```

რომელიც დააბრუნებს ორი რიცხვის ნამრავლს.

მაგალითად:

```js
console.log(multiply(5, 4));
```

შედეგი:

```text
20
```

---

## 3. Calculate Age

შექმენი ფუნქცია:

```js
calculateAge(birthYear)
```

ფუნქციამ `2026` წლის მიხედვით გამოთვალოს მომხმარებლის ასაკი.

მაგალითად:

```js
console.log(calculateAge(2000));
```

შედეგი:

```text
26
```

---

## 4. Check Number

შექმენი ფუნქცია:

```js
checkNumber(number)
```

თუ რიცხვი დადებითია, დააბრუნოს:

```text
Positive
```

თუ უარყოფითია:

```text
Negative
```

თუ არის `0`:

```text
Zero
```

---

# Part 2 — Arrays

## 5. Favorite Movies

შექმენი მასივი სახელად:

```js
favoriteMovies
```

მასივში ჩაწერე მინიმუმ **5 ფილმი**.

კონსოლში გამოიტანე:

1. მთელი მასივი
2. პირველი ფილმი
3. მესამე ფილმი
4. ბოლო ფილმი
5. მასივის სიგრძე

---

## 6. Shopping List

შექმენი:

```js
const shoppingList = [
  "Bread",
  "Milk",
  "Eggs"
];
```

შემდეგ:

- `push()` → დაამატე `"Cheese"`
- `unshift()` → დაამატე `"Water"`
- `pop()` → წაშალე ბოლო პროდუქტი
- გამოიტანე საბოლოო მასივი

---

## 7. Check Technology

მოცემულია:

```js
const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];
```

შეამოწმე არის თუ არა:

```text
JavaScript
```

მასივში.

შემდეგ შეამოწმე:

```text
Python
```

გამოიყენე `includes()`.

---

# Part 3 — For Loop

## 8. Numbers

`for` loop-ის გამოყენებით გამოიტანე რიცხვები:

```text
1-დან 20-მდე
```

---

## 9. Odd Numbers

`for` loop-ის გამოყენებით გამოიტანე მხოლოდ **კენტი რიცხვები** `1`-დან `20`-მდე.

მაგალითად:

```text
1
3
5
7
...
19
```

---

## 10. Multiplication Table

მოცემულია:

```js
const number = 5;
```

`for` loop-ის გამოყენებით შექმენი `5`-ის გამრავლების ტაბულა.

შედეგი:

```text
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

---

# Part 4 — While Loop

## 11. Countdown

`while` loop-ის გამოყენებით გამოიტანე:

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
Happy New Year!
```

---

## 12. Even Numbers with While

`while` loop-ის გამოყენებით გამოიტანე ლუწი რიცხვები:

```text
2-დან 20-მდე
```

---

# Part 5 — Arrays + Loops

## 13. Print All Students

მოცემულია:

```js
const students = [
  "Nino",
  "Giorgi",
  "Ana",
  "Luka",
  "Mariam"
];
```

`for` loop-ის გამოყენებით გამოიტანე:

```text
1. Nino
2. Giorgi
3. Ana
4. Luka
5. Mariam
```

> გაითვალისწინე, რომ Array index იწყება `0`-დან, მაგრამ სიის ნომრები უნდა იწყებოდეს `1`-დან.

---

## 14. Calculate Total Score

მოცემულია:

```js
const scores = [10, 20, 15, 25, 30];
```

`for` loop-ის გამოყენებით გამოთვალე ყველა ქულის ჯამი.

შედეგი:

```text
Total score: 100
```

---

## 15. Find Numbers Greater Than 20

მოცემულია:

```js
const numbers = [
  10,
  25,
  5,
  40,
  15,
  30
];
```

`for` loop-ის გამოყენებით გამოიტანე მხოლოდ ის რიცხვები, რომლებიც `20`-ზე მეტია.

შედეგი:

```text
25
40
30
```

---

# Part 6 — Functions + Arrays + Loops

## 16. Calculate Total

შექმენი ფუნქცია:

```js
calculateTotal(prices)
```

რომელიც მიიღებს ფასების მასივს.

მაგალითად:

```js
const prices = [
  20,
  50,
  30,
  100
];
```

ფუნქციამ უნდა:

1. გაიაროს მასივის ყველა ელემენტი.
2. შეკრიბოს ფასები.
3. `return`-ით დააბრუნოს სრული ფასი.

გამოიძახე:

```js
const result = calculateTotal(prices);

console.log(result);
```

---

## 17. Find Maximum Number

შექმენი ფუნქცია:

```js
findMax(numbers)
```

მოცემულია:

```js
const numbers = [
  10,
  55,
  20,
  90,
  35
];
```

ფუნქციამ `for` loop-ის გამოყენებით უნდა იპოვოს ყველაზე დიდი რიცხვი.

შედეგი:

```text
90
```

### შეზღუდვა

ამ დავალებაში არ გამოიყენო:

```js
Math.max()
```

---

## 18. Count Passing Students

მოცემულია სტუდენტების ქულები:

```js
const scores = [
  80,
  45,
  92,
  30,
  67,
  55
];
```

სტუდენტი გამოცდას აბარებს თუ აქვს მინიმუმ:

```text
50 ქულა
```

შექმენი ფუნქცია:

```js
countPassedStudents(scores)
```

ფუნქციამ უნდა დააბრუნოს რამდენმა სტუდენტმა ჩააბარა გამოცდა.

---

# Challenge 1 — Average Score

შექმენი ფუნქცია:

```js
calculateAverage(scores)
```

მაგალითად:

```js
const scores = [
  80,
  70,
  90,
  60,
  100
];
```

ფუნქციამ უნდა:

1. `for` loop-ით შეკრიბოს ყველა ქულა.
2. მიღებული ჯამი გაყოს სტუდენტების რაოდენობაზე.
3. `return`-ით დააბრუნოს საშუალო ქულა.

გამოიტანე:

```text
Average score: 80
```

---

# Challenge 2 — Online Shop

მოცემულია პროდუქტების ფასები:

```js
const productPrices = [
  50,
  120,
  30,
  80,
  25
];
```

შექმენი ფუნქცია:

```js
calculateCartTotal(prices)
```

რომელიც დააბრუნებს პროდუქტების საერთო ფასს.

შემდეგ შექმენი მეორე ფუნქცია:

```js
checkDelivery(total)
```

თუ სრული ფასი არის `200` ან მეტი:

```text
Free delivery
```

სხვა შემთხვევაში:

```text
Delivery costs 10 GEL
```

---

# Final Challenge — Student Grade Analyzer

მოცემულია:

```js
const scores = [
  95,
  82,
  47,
  73,
  60,
  35,
  88
];
```

შექმენი ფუნქცია:

```js
analyzeScores(scores)
```

ფუნქციამ `for` loop-ის გამოყენებით უნდა გამოთვალოს:

- ყველა ქულის ჯამი
- საშუალო ქულა
- რამდენმა სტუდენტმა ჩააბარა (`>= 50`)
- რამდენმა სტუდენტმა ვერ ჩააბარა (`< 50`)

საბოლოოდ კონსოლში გამოიტანე დაახლოებით ასეთი ინფორმაცია:

```text
Total score: 480
Average score: ...
Passed students: ...
Failed students: ...
```

## Bonus

ასევე იპოვე ყველაზე მაღალი ქულა.

არ გამოიყენო:

```js
Math.max()
```

---

# Bonus — Think Before You Run

კოდის გაშვებამდე დაწერე, შენი აზრით რას გამოიტანს თითოეული მაგალითი.

### Example 1

```js
const fruits = [
  "Apple",
  "Banana",
  "Orange"
];

console.log(fruits[0]);
console.log(fruits.length);
```

### Example 2

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

### Example 3

```js
function add(a, b) {
  return a + b;
}

const result = add(5, 10);

console.log(result);
```

### Example 4

```js
const numbers = [10, 20, 30];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total);
```