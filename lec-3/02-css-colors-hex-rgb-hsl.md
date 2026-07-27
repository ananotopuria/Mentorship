# CSS Colors: HEX, RGB, and HSL

## Learning Objectives

By the end of this lesson, you will be able to:

- explain how screens create colors with red, green, and blue light;
- read and write HEX colors;
- use RGB and RGBA colors;
- use HSL and HSLA colors;
- add transparency to colors;
- convert simple colors between HEX and RGB;
- choose an appropriate CSS color format.

## Table of Contents

1. [How Screens Create Color](#1-how-screens-create-color)
2. [Ways to Write Colors in CSS](#2-ways-to-write-colors-in-css)
3. [Hexadecimal Basics](#3-hexadecimal-basics)
4. [HEX Colors](#4-hex-colors)
5. [Reading HEX Colors](#5-reading-hex-colors)
6. [Short HEX Notation](#6-short-hex-notation)
7. [HEX with Transparency](#7-hex-with-transparency)
8. [RGB Colors](#8-rgb-colors)
9. [RGBA and Transparency](#9-rgba-and-transparency)
10. [HEX and RGB Comparison](#10-hex-and-rgb-comparison)
11. [HSL Colors](#11-hsl-colors)
12. [Hue](#12-hue)
13. [Saturation](#13-saturation)
14. [Lightness](#14-lightness)
15. [HSLA and Transparency](#15-hsla-and-transparency)
16. [Which Format Should You Use?](#16-which-format-should-you-use)
17. [CSS Example](#17-css-example)
18. [Common Mistakes](#18-common-mistakes)
19. [Summary](#19-summary)
20. [Practice](#20-practice)

---

## 1. How Screens Create Color

Screens create colors by mixing three types of light:

- **Red**
- **Green**
- **Blue**

This is called the **RGB color model**.

Different amounts of red, green, and blue produce different colors:

```text
Red + Green = Yellow
Red + Blue = Magenta
Green + Blue = Cyan
Red + Green + Blue at maximum = White
No light = Black
```

This may feel different from mixing paint. Screens mix **light**, not physical paint.

---

## 2. Ways to Write Colors in CSS

CSS supports several color formats:

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: hsl(0, 100%, 50%);
```

All four declarations represent red.

| Format | Example |
|---|---|
| Named color | `red` |
| HEX | `#ff0000` |
| RGB | `rgb(255, 0, 0)` |
| HSL | `hsl(0, 100%, 50%)` |

This lesson focuses on HEX, RGB, and HSL.

---

## 3. Hexadecimal Basics

Hexadecimal is a number system with 16 symbols. It is also called **base 16**.

It uses:

```text
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
```

The letters are numerical values:

| HEX | Decimal |
|---:|---:|
| `A` | 10 |
| `B` | 11 |
| `C` | 12 |
| `D` | 13 |
| `E` | 14 |
| `F` | 15 |

Counting in hexadecimal:

```text
0, 1, 2, ... 8, 9, A, B, C, D, E, F, 10
```

HEX `10` equals Decimal `16`.

### Why does `FF` equal 255?

```text
F = 15
```

In `FF`, the first digit is in the sixteens place and the second is in the ones place:

```text
(15 × 16) + (15 × 1)
= 240 + 15
= 255
```

Therefore:

```text
HEX FF = Decimal 255
```

Two HEX digits can represent values from:

```text
00 to FF
0 to 255
```

---

## 4. HEX Colors

A six-digit HEX color has this structure:

```text
#RRGGBB
```

- `RR` — amount of red;
- `GG` — amount of green;
- `BB` — amount of blue.

The `#` tells CSS that the value is a HEX color.

Each pair ranges from `00` to `FF`:

- `00` — no intensity;
- `FF` — maximum intensity.

Example:

```text
#FF0000
  │ │ │
  │ │ └── Blue: 00
  │ └──── Green: 00
  └────── Red: FF
```

This color contains maximum red and no green or blue, so it is pure red.

---

## 5. Reading HEX Colors

Always divide a six-digit HEX value into three pairs:

```text
#7A3FF2 → 7A | 3F | F2
```

These pairs represent:

```text
Red:   7A
Green: 3F
Blue:  F2
```

Because the blue value is the strongest, blue has a large influence on the final color.

### Common colors

| Color | HEX | Explanation |
|---|---|---|
| Black | `#000000` | No red, green, or blue |
| White | `#FFFFFF` | Maximum red, green, and blue |
| Red | `#FF0000` | Maximum red only |
| Green | `#00FF00` | Maximum green only |
| Blue | `#0000FF` | Maximum blue only |
| Yellow | `#FFFF00` | Red + green |
| Magenta | `#FF00FF` | Red + blue |
| Cyan | `#00FFFF` | Green + blue |

### Gray colors

When all three pairs are equal, the result is a shade of gray:

```css
color: #202020; /* dark gray */
color: #808080; /* medium gray */
color: #d0d0d0; /* light gray */
```

The closer all values are to `00`, the darker the color.

The closer all values are to `FF`, the lighter the color.

> HEX letters are case-insensitive: `#FF0000` and `#ff0000` are the same color.

---

## 6. Short HEX Notation

A six-digit HEX color can sometimes be shortened to three digits.

```css
#ff0000 → #f00
#ffffff → #fff
#000000 → #000
#00ff00 → #0f0
#aabbcc → #abc
```

Each short digit is repeated:

```text
#abc → #aabbcc
```

Shortening is only possible when the two digits in every pair are identical.

This color cannot be shortened:

```text
#f12a04
```

Its pairs are `F1`, `2A`, and `04`, and the digits in each pair are not identical.

---

## 7. HEX with Transparency

HEX can include an alpha channel:

```text
#RRGGBBAA
```

The last pair, `AA`, controls transparency:

- `00` — fully transparent;
- `FF` — fully opaque;
- `80` — approximately 50% opacity.

Examples:

```css
background-color: #ff0000ff; /* opaque red */
background-color: #ff000080; /* approximately 50% transparent red */
background-color: #ff000000; /* fully transparent red */
```

The four-digit short form is also possible when every pair repeats:

```text
#RGBA
```

Example:

```css
background-color: #f008; /* expands to #ff000088 */
```

---

## 8. RGB Colors

RGB colors directly show the decimal intensity of red, green, and blue:

```css
color: rgb(red, green, blue);
```

Each value ranges from `0` to `255`:

- `0` — no intensity;
- `255` — maximum intensity.

Examples:

```css
color: rgb(255, 0, 0);       /* red */
color: rgb(0, 255, 0);       /* green */
color: rgb(0, 0, 255);       /* blue */
color: rgb(0, 0, 0);         /* black */
color: rgb(255, 255, 255);   /* white */
color: rgb(128, 128, 128);   /* gray */
```

RGB is useful when decimal numbers feel easier to read than hexadecimal.

Modern CSS also supports a space-separated form:

```css
color: rgb(255 0 0);
```

---

## 9. RGBA and Transparency

RGBA adds an **alpha** value to RGB.

```css
color: rgba(red, green, blue, alpha);
```

The traditional alpha value ranges from `0` to `1`:

- `0` — fully transparent;
- `0.5` — 50% opacity;
- `1` — fully opaque.

Examples:

```css
background-color: rgba(255, 0, 0, 1);
background-color: rgba(255, 0, 0, 0.5);
background-color: rgba(255, 0, 0, 0);
```

Modern CSS can also write the alpha value with a slash:

```css
background-color: rgb(255 0 0 / 50%);
```

This means red with 50% opacity.

### Alpha is not the same as brightness

```css
rgb(128, 0, 0)          /* darker red */
rgb(255 0 0 / 50%)      /* bright red, but partially transparent */
```

Transparency lets the background show through. Reducing RGB values changes the color itself.

---

## 10. HEX and RGB Comparison

HEX and RGB can describe exactly the same colors.

| HEX | RGB | Color |
|---|---|---|
| `#FF0000` | `rgb(255, 0, 0)` | Red |
| `#00FF00` | `rgb(0, 255, 0)` | Green |
| `#0000FF` | `rgb(0, 0, 255)` | Blue |
| `#FFFFFF` | `rgb(255, 255, 255)` | White |
| `#000000` | `rgb(0, 0, 0)` | Black |

The relationship is:

```text
HEX 00 = Decimal 0
HEX FF = Decimal 255
```

Therefore:

```text
#FF0000 = rgb(255, 0, 0)
```

HEX is a compact base-16 representation. RGB shows the same channels with decimal numbers.

---

## 11. HSL Colors

HSL describes colors in a way that is often more intuitive for humans.

HSL stands for:

- **H** — Hue;
- **S** — Saturation;
- **L** — Lightness.

Syntax:

```css
color: hsl(hue, saturation, lightness);
```

Example:

```css
color: hsl(0, 100%, 50%);
```

This represents pure red.

---

## 12. Hue

**Hue** selects the basic color on a color wheel.

It is measured in degrees from `0` to `360`.

| Hue | Basic color |
|---:|---|
| `0°` | Red |
| `60°` | Yellow |
| `120°` | Green |
| `180°` | Cyan |
| `240°` | Blue |
| `300°` | Magenta |
| `360°` | Red again |

Examples:

```css
color: hsl(0, 100%, 50%);   /* red */
color: hsl(60, 100%, 50%);  /* yellow */
color: hsl(120, 100%, 50%); /* green */
color: hsl(240, 100%, 50%); /* blue */
```

The color wheel is circular, so `0°` and `360°` point to the same hue.

---

## 13. Saturation

**Saturation** controls how strong or colorful the color is.

It is written as a percentage:

- `0%` — no color intensity; the result is gray;
- `100%` — full color intensity.

Example:

```css
color: hsl(240, 100%, 50%); /* strong blue */
color: hsl(240, 50%, 50%);  /* less saturated blue */
color: hsl(240, 0%, 50%);   /* gray */
```

Changing saturation does not select a new position on the color wheel. It changes how vivid the selected hue appears.

---

## 14. Lightness

**Lightness** controls how dark or light the color is.

It is also written as a percentage:

- `0%` — black;
- `50%` — normal color;
- `100%` — white.

Example:

```css
color: hsl(0, 100%, 20%); /* dark red */
color: hsl(0, 100%, 50%); /* pure red */
color: hsl(0, 100%, 80%); /* light red/pink */
```

At `0%` lightness, every hue becomes black.

At `100%` lightness, every hue becomes white.

---

## 15. HSLA and Transparency

HSL can also include an alpha value:

```css
color: hsla(0, 100%, 50%, 0.5);
```

This means red with 50% opacity.

Modern CSS also supports:

```css
color: hsl(0 100% 50% / 50%);
```

Examples:

```css
background-color: hsl(220 80% 50% / 100%);
background-color: hsl(220 80% 50% / 50%);
background-color: hsl(220 80% 50% / 0%);
```

---

## 16. Which Format Should You Use?

All three formats are valid. Choose the one that makes the code easiest to understand and maintain.

| Format | Strength |
|---|---|
| HEX | Compact and very common in designs |
| RGB | Clearly shows red, green, and blue values |
| HSL | Easy to adjust hue, saturation, and lightness |

HEX may be convenient when copying colors from a design:

```css
color: #6c5ce7;
```

RGB may be convenient when working directly with screen channels:

```css
color: rgb(108, 92, 231);
```

HSL may be convenient when creating related shades:

```css
--primary: hsl(247, 74%, 63%);
--primary-dark: hsl(247, 74%, 43%);
--primary-light: hsl(247, 74%, 83%);
```

Only lightness changed, so the colors remain visually related.

---

## 17. CSS Example

### HTML

```html
<section class="palette">
  <article class="card card--hex">
    <h2>HEX</h2>
    <p>#6c5ce7</p>
  </article>

  <article class="card card--rgb">
    <h2>RGB</h2>
    <p>rgb(0, 184, 148)</p>
  </article>

  <article class="card card--hsl">
    <h2>HSL</h2>
    <p>hsl(24, 100%, 60%)</p>
  </article>
</section>
```

### CSS

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: hsl(210, 20%, 96%);
  font-family: Arial, sans-serif;
}

.palette {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  width: 220px;
  padding: 2rem;
  border-radius: 1rem;
  color: #ffffff;
  text-align: center;
}

.card--hex {
  background-color: #6c5ce7;
}

.card--rgb {
  background-color: rgb(0, 184, 148);
}

.card--hsl {
  background-color: hsl(24, 100%, 60%);
}
```

---

## 18. Common Mistakes

### Mistake 1: Forgetting `#` before a HEX color

```css
color: ff0000;  /* incorrect */
color: #ff0000; /* correct */
```

### Mistake 2: Using values outside the RGB range

```css
color: rgb(300, 0, 0);   /* do not rely on out-of-range values */
color: rgb(255, 0, 0);   /* clear and correct */
```

### Mistake 3: Forgetting percentage signs in HSL

```css
color: hsl(0, 100, 50);     /* incorrect */
color: hsl(0, 100%, 50%);   /* correct */
```

Saturation and lightness require percentages.

### Mistake 4: Confusing alpha with lightness

- Alpha controls transparency.
- HSL lightness controls how dark or light the color itself is.

### Mistake 5: Assuming `rgb(0, 0, 0)` is white

On a screen:

- no light produces black;
- maximum red, green, and blue produces white.

### Mistake 6: Incorrectly shortening HEX

```text
#aabbcc → #abc    correct
#ab12cd → #a1c    incorrect
```

---

## 19. Summary

### HEX

```text
#RRGGBB
00 = minimum
FF = maximum
```

Example:

```css
color: #ff0000;
```

### RGB

```text
rgb(red, green, blue)
Each channel: 0–255
```

Example:

```css
color: rgb(255, 0, 0);
```

### HSL

```text
hsl(hue, saturation, lightness)
Hue: 0–360 degrees
Saturation: 0%–100%
Lightness: 0%–100%
```

Example:

```css
color: hsl(0, 100%, 50%);
```

These are the same color:

```css
color: #ff0000;
color: rgb(255, 0, 0);
color: hsl(0, 100%, 50%);
```

Transparency can be written as:

```css
color: #ff000080;
color: rgba(255, 0, 0, 0.5);
color: hsl(0 100% 50% / 50%);
```

---

## 20. Practice

### A. Identify the colors

What basic color does each value create?

1. `#000000`
2. `#FFFFFF`
3. `#FF0000`
4. `#00FF00`
5. `#0000FF`
6. `rgb(255, 255, 0)`
7. `hsl(240, 100%, 50%)`

### B. Complete the code

1. Write pure red as RGB.
2. Write pure green as HEX.
3. Write pure blue as HSL.
4. Write 50% transparent black using RGBA.
5. Shorten `#AABBCC`.
6. Expand `#F0A`.

### C. Explain

1. What do the three pairs in `#RRGGBB` represent?
2. Why does each RGB channel range from 0 to 255?
3. What is the difference between HSL saturation and lightness?
4. What does an alpha value control?
5. Why are HEX and RGB able to represent the same colors?

### D. Mini project: Color palette

Create a page containing at least six color cards:

- two colors written with HEX;
- two colors written with RGB;
- two colors written with HSL;
- one card with transparency;
- one dark and one light version of the same HSL hue.

Each card should display:

- the color format name;
- the exact CSS color value;
- white or black text with readable contrast.

### Answer key

#### A

1. Black
2. White
3. Red
4. Green
5. Blue
6. Yellow
7. Blue

#### B

```css
/* 1 */
color: rgb(255, 0, 0);

/* 2 */
color: #00ff00;

/* 3 */
color: hsl(240, 100%, 50%);

/* 4 */
color: rgba(0, 0, 0, 0.5);
```

```text
5. #AABBCC → #ABC
6. #F0A → #FF00AA
```
