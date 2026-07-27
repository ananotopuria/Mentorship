# Binary, Decimal, Character Sets, and Character Encoding

## Learning Objectives

By the end of this lesson, you will be able to:

- explain the difference between decimal and binary;
- identify bits and bytes;
- convert small binary numbers to decimal;
- explain why computers use binary;
- describe the purpose of character sets;
- explain the difference between ASCII, Unicode, and UTF-8;
- use UTF-8 correctly in an HTML document.

## Table of Contents

1. [Decimal Numbers](#1-decimal-numbers)
2. [Binary Numbers](#2-binary-numbers)
3. [Bits and Bytes](#3-bits-and-bytes)
4. [Binary Place Values](#4-binary-place-values)
5. [Converting Binary to Decimal](#5-converting-binary-to-decimal)
6. [Leading Zeros](#6-leading-zeros)
7. [LSB and MSB](#7-lsb-and-msb)
8. [From Characters to Binary](#8-from-characters-to-binary)
9. [Character Sets](#9-character-sets)
10. [ASCII](#10-ascii)
11. [Unicode](#11-unicode)
12. [Character Encoding](#12-character-encoding)
13. [UTF-8](#13-utf-8)
14. [UTF-8 in HTML](#14-utf-8-in-html)
15. [Common Mistakes](#15-common-mistakes)
16. [Summary](#16-summary)
17. [Practice](#17-practice)

---

## 1. Decimal Numbers

The number system we use in everyday life is called the **decimal system**.

It uses ten digits:

```text
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

Because it has ten possible digits, decimal is also called **base 10**.

The value of a digit depends on its position:

| Number | Hundreds | Tens | Ones |
|---|---:|---:|---:|
| `352` | 3 | 5 | 2 |
| Place value | 100 | 10 | 1 |

Therefore:

```text
352 = (3 × 100) + (5 × 10) + (2 × 1)
```

These place values are powers of 10:

```text
10² = 100
10¹ = 10
10⁰ = 1
```

> Positions are counted from right to left, starting at zero.

---

## 2. Binary Numbers

Computers use the **binary system**. Binary uses only two digits:

```text
0 and 1
```

It is therefore called **base 2**.

We can imagine these two values as two states of a switch:

- `0` — off;
- `1` — on.

Computers represent text, images, sound, video, and instructions using combinations of these two values.

| System | Base | Available digits |
|---|---:|---|
| Decimal | 10 | `0–9` |
| Binary | 2 | `0, 1` |

The same written digits can mean different values in different number systems:

```text
Binary 10 = Decimal 2
Decimal 10 = Decimal 10
```

---

## 3. Bits and Bytes

A **bit** is the smallest unit of digital information.

One bit can contain one of two values:

```text
0 or 1
```

Eight bits grouped together form one **byte**:

```text
1 byte = 8 bits
```

Example of one byte:

```text
01000001
```

Common units:

| Unit | Meaning |
|---|---|
| 1 bit | One `0` or `1` |
| 1 byte | 8 bits |
| 1 KB | Approximately 1,000 bytes |
| 1 MB | Approximately 1,000 KB |
| 1 GB | Approximately 1,000 MB |

> Storage units can also be calculated using powers of 2. For this introductory lesson, the approximate decimal values are enough.

---

## 4. Binary Place Values

Decimal place values are powers of 10. Binary place values are powers of 2.

Starting from the right:

```text
2⁰, 2¹, 2², 2³, 2⁴, 2⁵...
```

Their values are:

```text
1, 2, 4, 8, 16, 32...
```

For the binary number `1011`:

| Binary digit | 1 | 0 | 1 | 1 |
|---|---:|---:|---:|---:|
| Position | 3 | 2 | 1 | 0 |
| Power of 2 | 2³ | 2² | 2¹ | 2⁰ |
| Place value | 8 | 4 | 2 | 1 |

A simple rule:

> Start from the right with `1`. Each place to the left has double the value: `1, 2, 4, 8, 16...`

---

## 5. Converting Binary to Decimal

Let us convert `1011` to decimal.

### Method 1: Using powers of 2

```text
1 × 2³ = 8
0 × 2² = 0
1 × 2¹ = 2
1 × 2⁰ = 1
```

Add the results:

```text
8 + 0 + 2 + 1 = 11
```

Therefore:

```text
Binary 1011 = Decimal 11
```

### Method 2: Using place values

```text
Binary digits:  1   0   1   1
Place values:   8   4   2   1
```

- Keep the place value when the binary digit is `1`.
- Ignore the place value when the binary digit is `0`.

```text
8 + 2 + 1 = 11
```

This second method is often easier for beginners.

### Another example: `11001`

| Binary digit | 1 | 1 | 0 | 0 | 1 |
|---|---:|---:|---:|---:|---:|
| Place value | 16 | 8 | 4 | 2 | 1 |

```text
16 + 8 + 1 = 25
```

Therefore:

```text
Binary 11001 = Decimal 25
```

---

## 6. Leading Zeros

A **leading zero** is a zero written before the first non-zero digit.

For numeric value, leading zeros do not change the result:

```text
101 = 0101 = 00000101
```

All three represent Decimal `5`.

However, leading zeros can show a fixed size:

```text
00000101
```

This representation contains eight bits, so it fills one byte.

For example:

```text
A → Decimal 65 → Binary 01000001
```

The shorter binary number `1000001` has the same numeric value, but `01000001` clearly shows all eight positions of the byte.

> Important: leading zeros may matter in text. The strings `"5"`, `"05"`, and `"005"` are different sequences of characters.

---

## 7. LSB and MSB

Consider the binary number:

```text
1011
```

### Least Significant Bit — LSB

The **least significant bit** is the rightmost bit. It has the smallest place value.

```text
101[1] → place value 1
```

### Most Significant Bit — MSB

The **most significant bit** is the leftmost significant bit. It has the largest place value in the number.

```text
[1]011 → place value 8
```

In simple words:

- LSB — rightmost bit, smallest value;
- MSB — leftmost significant bit, largest value.

---

## 8. From Characters to Binary

Computers do not directly understand letters such as:

```text
A
Hello
გამარჯობა
```

They process numbers stored as binary. Therefore, computers need agreed rules that connect characters with numbers.

A simplified path is:

```text
Character → code point → encoded bytes → bits
```

For the Latin letter `A`:

```text
A → 65 → 01000001
```

This works because a standard assigns a number to `A`, and an encoding defines how that number is stored.

---

## 9. Character Sets

A **character set** is a collection of characters and their assigned numerical values.

For example:

| Character | Assigned number |
|---|---:|
| `A` | 65 |
| `B` | 66 |
| `C` | 67 |

Think of a character set as a class register:

- every student has a unique number;
- every character has an assigned number.

Two important standards are ASCII and Unicode.

---

## 10. ASCII

**ASCII** stands for **American Standard Code for Information Interchange**.

Standard ASCII contains 128 values and mainly includes:

- uppercase English letters;
- lowercase English letters;
- digits;
- punctuation;
- control characters such as a new line.

Examples:

| Character | ASCII decimal value | Binary |
|---|---:|---|
| `A` | 65 | `01000001` |
| `B` | 66 | `01000010` |
| `a` | 97 | `01100001` |
| `0` | 48 | `00110000` |

ASCII does not contain Georgian letters, most world writing systems, or emoji. A larger universal standard was needed.

---

## 11. Unicode

**Unicode** is an international standard that assigns a unique code point to characters from many writing systems.

It includes:

- Latin characters;
- Georgian characters;
- Arabic characters;
- Chinese characters;
- mathematical symbols;
- emoji;
- many other symbols.

Examples:

```text
A
ა
你
😀
```

A Unicode code point is commonly written with `U+`:

```text
A → U+0041
```

ASCII characters are also included in Unicode. This means ASCII is a small subset of Unicode.

> Unicode answers: “Which number belongs to this character?”

---

## 12. Character Encoding

A **character encoding** defines how character code points are converted into bytes for storage or transmission.

The difference is:

| Concept | Question it answers |
|---|---|
| Character set / Unicode | Which number represents this character? |
| Character encoding | How is that number stored as bytes? |

A useful analogy:

- Unicode is a dictionary that gives every character an ID;
- an encoding is a packing method that stores those IDs as bytes.

Unicode can be encoded in different ways, including UTF-8, UTF-16, and UTF-32.

---

## 13. UTF-8

**UTF-8** is the most common character encoding used on the web.

It can represent Unicode characters using between one and four bytes:

| Character type | Typical UTF-8 size |
|---|---:|
| ASCII character | 1 byte |
| Many non-Latin characters | Multiple bytes |
| Many emoji | Often 4 bytes |

ASCII characters use the same byte values in UTF-8 as they do in ASCII. This makes UTF-8 backward-compatible with ASCII.

Examples:

- `A` needs one byte in UTF-8;
- a Georgian character needs more than one byte;
- many emoji need four bytes.

Using more bytes does not mean that one language is better or worse. It only describes how the character is encoded.

---

## 14. UTF-8 in HTML

An HTML document should declare its character encoding:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Character Encoding</title>
  </head>
  <body>
    <h1>Hello — გამარჯობა — 你好 👋</h1>
  </body>
</html>
```

This line tells the browser to decode the document as UTF-8:

```html
<meta charset="UTF-8" />
```

If bytes are decoded with the wrong encoding, the page may show incorrect or strange characters. This is sometimes called **mojibake**.

The original text may still exist, but the program is interpreting its bytes using the wrong rules.

---

## 15. Common Mistakes

### Mistake 1: Thinking binary `10` means decimal ten

```text
Binary 10 = Decimal 2
```

The meaning depends on the number system.

### Mistake 2: Thinking a byte and a bit are the same

```text
1 byte = 8 bits
```

### Mistake 3: Thinking Unicode and UTF-8 are identical

- Unicode assigns code points.
- UTF-8 encodes those code points into bytes.

### Mistake 4: Thinking ASCII supports every language

ASCII mainly covers English characters. Unicode supports a much wider range of writing systems and symbols.

### Mistake 5: Removing leading zeros from fixed-width binary

Removing them does not change the numeric value, but it can hide the intended number of bits.

---

## 16. Summary

- Decimal is base 10 and uses digits `0–9`.
- Binary is base 2 and uses digits `0` and `1`.
- One binary digit is one bit.
- Eight bits form one byte.
- Binary place values are `1, 2, 4, 8, 16...`.
- Leading zeros do not change a binary number's numeric value.
- Character sets assign numbers to characters.
- ASCII is small and mainly covers English.
- Unicode includes characters from many languages and symbol systems.
- UTF-8 converts Unicode code points into one to four bytes.
- HTML pages should declare `<meta charset="UTF-8" />`.

The complete idea:

```text
Human-readable character
        ↓
Unicode code point
        ↓
UTF-8 encoded bytes
        ↓
Binary bits stored by the computer
```

---

## 17. Practice

### A. Convert binary to decimal

1. `101`
2. `1000`
3. `1111`
4. `10110`
5. `00101010`

### B. Short-answer questions

1. How many possible values can one bit hold?
2. How many bits are in one byte?
3. Why is binary called base 2?
4. Do leading zeros change a binary number's numeric value?
5. What is the difference between ASCII and Unicode?
6. What is the difference between Unicode and UTF-8?
7. Why should HTML documents declare UTF-8?

### C. HTML task

Create an `index.html` file that:

1. declares UTF-8;
2. has a correct HTML document structure;
3. displays text in English and Georgian;
4. includes at least one emoji;
5. explains in one paragraph why UTF-8 is important.

### Answer key

Binary conversions:

1. `101` = 5
2. `1000` = 8
3. `1111` = 15
4. `10110` = 22
5. `00101010` = 42

