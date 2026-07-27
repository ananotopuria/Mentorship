# CSS Fundamentals — Student Guide

This guide introduces the most important CSS fundamentals. You will learn how to connect CSS to HTML, select elements, resolve conflicting styles, understand the box model, position elements, work with colors and backgrounds, and style links.

---

## Table of Contents

1. [What Is CSS?](#1-what-is-css)
2. [Anatomy of a CSS Rule](#2-anatomy-of-a-css-rule)
3. [Ways to Add CSS to HTML](#3-ways-to-add-css-to-html)
4. [CSS Selectors](#4-css-selectors)
5. [Resolving Conflicting Declarations](#5-resolving-conflicting-declarations)
6. [Inheritance](#6-inheritance)
7. [The Box Model](#7-the-box-model)
8. [Types of Boxes](#8-types-of-boxes)
9. [The `position` Property](#9-the-position-property)
10. [Working with Colors](#10-working-with-colors)
11. [Gradients](#11-gradients)
12. [CSS Backgrounds](#12-css-backgrounds)
13. [Creating and Styling Hyperlinks](#13-creating-and-styling-hyperlinks)
14. [Complete Practice Example](#14-complete-practice-example)
15. [Exercises](#15-exercises)
16. [Quick Summary](#16-quick-summary)

---

## 1. What Is CSS?

**CSS** stands for **Cascading Style Sheets**.

HTML creates the structure and content of a web page. CSS controls how that content looks.

- HTML creates a heading.
- CSS changes its color, size, spacing, and position.

```html
<h1>Welcome to My Website</h1>
```

```css
h1 {
  color: purple;
  font-size: 40px;
}
```

> HTML is the structure of a house. CSS is its paint, decoration, and design.

---

## 2. Anatomy of a CSS Rule

A CSS rule contains a **selector** and one or more **declarations**.

```css
p {
  color: blue;
  font-size: 18px;
}
```

- `p` — selector
- `color` — property
- `blue` — value
- `color: blue;` — declaration
- `{ }` — declaration block

The general syntax is:

```css
selector {
  property: value;
}
```

Important details:

- A colon `:` separates a property from its value.
- A semicolon `;` ends a declaration.
- Curly braces `{ }` contain all declarations for the selector.

---

## 3. Ways to Add CSS to HTML

There are three ways to add CSS to an HTML page.

### 3.1 Inline CSS

Inline CSS is written directly inside an HTML element using the `style` attribute.

```html
<p style="color: red;">This text is red.</p>
```

It can be useful for a very small test, but it is not recommended for styling a complete website.

### 3.2 Internal CSS

Internal CSS is written inside a `<style>` element in the `<head>`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Internal CSS</title>

    <style>
      p {
        color: green;
      }
    </style>
  </head>
  <body>
    <p>This text is green.</p>
  </body>
</html>
```

It is useful for a small, single-page example.

### 3.3 External CSS

External CSS is written in a separate `.css` file.

**index.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>External CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello CSS!</h1>
  </body>
</html>
```

**style.css**

```css
h1 {
  color: darkviolet;
}
```

External CSS is usually the best choice because:

- HTML and CSS stay organized.
- One CSS file can style several HTML pages.
- The code is easier to read and maintain.

> Remember: `<link>` is written inside the HTML `<head>`.

---

## 4. CSS Selectors

Selectors tell the browser which HTML elements should receive a style.

### 4.1 Element Selector

Selects every element with the given tag name.

```css
p {
  color: #333333;
}
```

This selects every `<p>` element.

### 4.2 Class Selector

A class selector begins with a dot `.`.

```html
<p class="important">Important information</p>
```

```css
.important {
  color: crimson;
  font-weight: bold;
}
```

The same class can be used on multiple elements.

```html
<h2 class="highlight">First title</h2>
<p class="highlight">Highlighted paragraph</p>
```

### 4.3 ID Selector

An ID selector begins with `#`.

```html
<h1 id="main-title">My Blog</h1>
```

```css
#main-title {
  color: navy;
}
```

An ID should be unique on the page.

### 4.4 Universal Selector

The universal selector `*` selects every element.

```css
* {
  box-sizing: border-box;
}
```

### 4.5 Grouping Selector

Use a comma to give the same style to several selectors.

```css
h1,
h2,
h3 {
  color: darkslateblue;
}
```

### 4.6 Descendant Selector

Selects elements located inside another element.

```html
<article>
  <p>This paragraph is inside the article.</p>
</article>

<p>This paragraph is outside the article.</p>
```

```css
article p {
  color: teal;
}
```

Only the paragraph inside `<article>` is selected.

### 4.7 Pseudo-class Selector

A pseudo-class selects an element in a particular state.

```css
a:hover {
  color: orange;
}
```

`:hover` means “when the mouse pointer is over the element.”

Other examples:

```css
input:focus {
  border-color: blue;
}

li:first-child {
  font-weight: bold;
}
```

---

## 5. Resolving Conflicting Declarations

Sometimes several CSS rules try to change the same property of the same element. The browser must decide which rule wins.

This decision is part of the **cascade**.

### Rule 1: Importance

A declaration with `!important` has very high priority.

```css
p {
  color: red !important;
}
```

Use `!important` carefully. It can make CSS difficult to manage.

### Rule 2: Specificity

A more specific selector usually wins.

The usual order is:

```text
Inline style > ID > Class or pseudo-class > Element
```

Example:

```html
<p id="message" class="note">Hello!</p>
```

```css
p {
  color: blue;
}

.note {
  color: green;
}

#message {
  color: red;
}
```

The text will be **red** because an ID selector is more specific.

### Rule 3: Source Order

If two selectors have equal specificity, the rule written later wins.

```css
p {
  color: blue;
}

p {
  color: purple;
}
```

The paragraph will be purple.

### A Helpful Specificity Comparison

| Selector | Type | Relative strength |
|---|---|---:|
| `p` | Element | Low |
| `.note` | Class | Medium |
| `#message` | ID | High |
| `style="..."` | Inline style | Very high |

> Prefer classes for most styling. Do not use IDs only to make selectors stronger.

---

## 6. Inheritance

Inheritance means that some CSS properties pass from a parent element to its children.

```html
<section class="intro">
  <h2>About Us</h2>
  <p>We are learning CSS.</p>
</section>
```

```css
.intro {
  color: darkgreen;
  font-family: Arial, sans-serif;
}
```

The `<h2>` and `<p>` inherit the text color and font from the `<section>`.

Properties that often inherit:

- `color`
- `font-family`
- `font-size`
- `line-height`
- `text-align`

Properties that usually do not inherit:

- `margin`
- `padding`
- `border`
- `width`
- `height`
- `background-color`

You can explicitly request inheritance:

```css
a {
  color: inherit;
}
```

This makes the link use the color of its parent.

---

## 7. The Box Model

The browser treats every HTML element like a rectangular box.

The box model has four layers:

1. **Content** — text, image, or other content
2. **Padding** — space inside the box, around the content
3. **Border** — line around the padding and content
4. **Margin** — space outside the box, separating it from other elements

```css
.card {
  width: 300px;
  padding: 20px;
  border: 4px solid purple;
  margin: 30px;
}
```

### Padding vs Margin

- `padding` creates space **inside** the element.
- `margin` creates space **outside** the element.
- The background color is visible behind the content and padding.
- The margin is transparent.

### Shorthand Values

One value applies to all four sides:

```css
padding: 20px;
```

Two values mean vertical and horizontal:

```css
padding: 10px 20px;
/* top/bottom: 10px, left/right: 20px */
```

Four values move clockwise:

```css
margin: 10px 20px 30px 40px;
/* top, right, bottom, left */
```

Think: **TRBL — Top, Right, Bottom, Left**.

### `box-sizing`

By default, `width` describes only the content area. Padding and border are added to it.

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

Actual total width:

```text
300 + 20 + 20 + 5 + 5 = 350px
```

With `border-box`, the padding and border are included inside the declared width:

```css
* {
  box-sizing: border-box;
}
```

Now `width: 300px` means the complete visible box is 300px wide.

---

## 8. Types of Boxes

The `display` property controls how an element behaves on the page.

### 8.1 Block Elements

Block elements:

- begin on a new line;
- normally take the available width;
- accept width, height, margin, and padding.

Examples include `<div>`, `<p>`, `<h1>`, `<section>`, and `<article>`.

```css
p {
  display: block;
}
```

### 8.2 Inline Elements

Inline elements:

- stay in the same line as surrounding text;
- take only as much width as their content needs;
- do not respond normally to `width` and `height`.

Examples include `<span>`, `<a>`, `<strong>`, and `<em>`.

```html
<p>Learn <span class="word">CSS</span> today.</p>
```

```css
.word {
  background-color: gold;
}
```

### 8.3 Inline-block Elements

`inline-block` combines useful parts of inline and block:

- elements can stay on the same line;
- width, height, padding, and margin can be applied.

```css
a {
  display: inline-block;
  padding: 10px 20px;
}
```

### Hiding an Element

```css
.hidden {
  display: none;
}
```

The element is removed from the page layout.

---

## 9. The `position` Property

The `position` property changes how an element is positioned.

Related properties are:

- `top`
- `right`
- `bottom`
- `left`
- `z-index`

### 9.1 `position: static`

This is the default position.

```css
.box {
  position: static;
}
```

The element follows the normal document flow. `top`, `right`, `bottom`, and `left` do not move a static element.

### 9.2 `position: relative`

The element keeps its original space but can be moved relative to its original position.

```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

The original space remains reserved.

### 9.3 `position: absolute`

An absolutely positioned element is removed from normal document flow.

It is positioned relative to its nearest positioned ancestor. A positioned ancestor usually has `position: relative`.

```html
<div class="card">
  <span class="badge">New</span>
  <h2>CSS Course</h2>
</div>
```

```css
.card {
  position: relative;
  width: 300px;
  padding: 30px;
  border: 1px solid #cccccc;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

Here, `.badge` is positioned relative to `.card`.

### 9.4 `position: fixed`

A fixed element is positioned relative to the browser window and stays in the same place while the page scrolls.

```css
.help-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
```

### 9.5 `position: sticky`

A sticky element behaves normally until it reaches a specified scroll position. Then it sticks.

```css
header {
  position: sticky;
  top: 0;
}
```

### `z-index`

When positioned elements overlap, `z-index` controls which one appears on top.

```css
header {
  position: sticky;
  top: 0;
  z-index: 10;
}
```

A larger `z-index` usually appears above a smaller one.

---

## 10. Working with Colors

CSS supports several color formats.

### 10.1 Named Colors

```css
h1 {
  color: purple;
}
```

Named colors are easy to read but offer limited choices.

### 10.2 HEX Colors

HEX colors begin with `#` and use hexadecimal digits:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

```css
h1 {
  color: #6c3baa;
}
```

The format is:

```text
#RRGGBB
```

- `RR` — red
- `GG` — green
- `BB` — blue

Examples:

```css
.red {
  color: #ff0000;
}

.green {
  color: #00ff00;
}

.blue {
  color: #0000ff;
}

.white {
  color: #ffffff;
}

.black {
  color: #000000;
}
```

Some HEX colors can be shortened:

```css
color: #ffffff; /* same as #fff */
color: #000000; /* same as #000 */
```

### 10.3 RGB and RGBA

RGB uses red, green, and blue values from `0` to `255`.

```css
p {
  color: rgb(108, 59, 170);
}
```

RGBA adds an alpha value for transparency:

```css
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
```

The alpha value ranges from:

- `0` — completely transparent
- `1` — completely opaque

### 10.4 HSL and HSLA

HSL means:

- **Hue** — position on the color wheel, from `0` to `360`
- **Saturation** — intensity of the color
- **Lightness** — how dark or light the color is

```css
h2 {
  color: hsl(266, 49%, 45%);
}
```

HSLA can include transparency:

```css
.box {
  background-color: hsla(266, 49%, 45%, 0.4);
}
```

### Text and Background Colors

```css
.message {
  color: #ffffff;
  background-color: #6c3baa;
}
```

Make sure there is enough contrast between the text and its background.

---

## 11. Gradients

A gradient is a smooth transition between two or more colors.

### 11.1 Linear Gradient

```css
.banner {
  background: linear-gradient(to right, #6c3baa, #ff69b4);
}
```

Common directions:

```css
background: linear-gradient(to right, red, blue);
background: linear-gradient(to bottom, red, blue);
background: linear-gradient(45deg, red, blue);
```

You can use more than two colors:

```css
.rainbow {
  background: linear-gradient(to right, red, orange, yellow, green, blue);
}
```

### 11.2 Radial Gradient

A radial gradient starts from a central point and spreads outward.

```css
.circle {
  background: radial-gradient(circle, white, lightblue, navy);
}
```

> A gradient is treated as a background image, so it is usually assigned to `background` or `background-image`.

---

## 12. CSS Backgrounds

### Background Color

```css
body {
  background-color: #f5f1ff;
}
```

### Background Image

```css
.hero {
  background-image: url("images/hero.jpg");
}
```

The path is relative to the CSS file.

### Background Repeat

By default, a small image repeats.

```css
.hero {
  background-repeat: no-repeat;
}
```

Other values:

```css
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
```

### Background Position

```css
.hero {
  background-position: center;
}
```

Other examples:

```css
background-position: top right;
background-position: bottom left;
```

### Background Size

```css
.hero {
  background-size: cover;
}
```

- `cover` fills the entire box. Some parts of the image may be cropped.
- `contain` shows the complete image. Empty space may remain.

### Complete Background Example

```css
.hero {
  min-height: 400px;
  background-image: url("images/hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

### Background Shorthand

Several background properties can be combined:

```css
.hero {
  background: #222222 url("images/hero.jpg") no-repeat center / cover;
}
```

For beginners, writing the properties separately is often easier to read.

---

## 13. Creating and Styling Hyperlinks

Create a hyperlink with the HTML `<a>` element:

```html
<a href="https://example.com">Visit Example</a>
```

Basic styling:

```css
a {
  color: #6c3baa;
  text-decoration: none;
}
```

### Link States

CSS provides pseudo-classes for different link states:

```css
a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:hover {
  color: orange;
}

a:active {
  color: red;
}
```

- `:link` — an unvisited link
- `:visited` — a visited link
- `:hover` — the mouse is over the link
- `:active` — the link is being clicked

A useful order is:

```text
:link → :visited → :hover → :active
```

### Styling a Link Like a Button

```html
<a class="button" href="about.html">Learn More</a>
```

```css
.button {
  display: inline-block;
  padding: 12px 24px;
  color: white;
  background-color: #6c3baa;
  border-radius: 6px;
  text-decoration: none;
}

.button:hover {
  background-color: #512a83;
}
```

Do not remove visual focus without providing an accessible replacement:

```css
.button:focus {
  outline: 3px solid orange;
  outline-offset: 3px;
}
```

---

## 14. Complete Practice Example

This example uses the topics from the guide without Flexbox or Grid.

### HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Practice Card</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="card">
      <span class="badge">New</span>

      <h1 class="card-title">Learn CSS</h1>

      <p>
        Practice selectors, colors, the box model, positioning, backgrounds,
        and links.
      </p>

      <a class="card-link" href="https://developer.mozilla.org/">
        Start Learning
      </a>
    </main>
  </body>
</html>
```

### CSS

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 40px 20px;
  color: #292333;
  background: linear-gradient(to right, #eee8ff, #ffe8f5);
  font-family: Arial, sans-serif;
}

.card {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
  border: 2px solid #cbb8ed;
  border-radius: 12px;
  background-color: white;
}

.card-title {
  margin-top: 0;
  color: #6c3baa;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 5px 10px;
  color: white;
  background-color: #e34d94;
  border-radius: 20px;
  font-size: 14px;
}

.card-link {
  display: inline-block;
  margin-top: 12px;
  padding: 12px 20px;
  color: white;
  background-color: #6c3baa;
  border-radius: 6px;
  text-decoration: none;
}

.card-link:hover {
  background-color: #512a83;
}

.card-link:focus {
  outline: 3px solid #ffb000;
  outline-offset: 3px;
}
```

### Why Do We Use `width` and `max-width` Together?

```css
.card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
```

- `width: 100%` allows the card to become smaller on a narrow screen.
- `max-width: 500px` stops it from becoming wider than 500px on a large screen.
- `margin: 0 auto` centers the card horizontally when free space is available.

In simple words:

> The card is flexible on small screens, but it does not become too wide on large screens.

---

## 15. Exercises

### Exercise 1 — CSS Rule

Create a paragraph and give it:

- a blue text color;
- a `20px` font size;
- a light gray background.

### Exercise 2 — Selectors

Create:

- one `<h1>` with the ID `main-title`;
- two paragraphs with the class `description`;
- one normal paragraph without a class.

Use CSS to give each selector a different color.

### Exercise 3 — Cascade

Predict the final color before opening the browser:

```html
<p id="text" class="message">What color am I?</p>
```

```css
p {
  color: blue;
}

.message {
  color: green;
}

#text {
  color: purple;
}
```

### Exercise 4 — Box Model

Create a card with:

- `width: 300px`;
- `padding: 20px`;
- a `3px` border;
- `margin: 30px`;
- `box-sizing: border-box`.

Use browser DevTools to inspect its box model.

### Exercise 5 — Position

Create a card with a “Sale” badge in its top-right corner. Use:

- `position: relative` on the card;
- `position: absolute` on the badge.

### Exercise 6 — Colors and Gradient

Create three boxes:

1. one with a HEX background;
2. one with an RGB background;
3. one with a linear gradient.

### Exercise 7 — Link Button

Create a link that looks like a button. Add styles for:

- normal state;
- `:hover`;
- `:focus`;
- `:active`.

---

## 16. Quick Summary

- CSS controls the visual appearance of HTML.
- A CSS rule contains a selector, property, and value.
- External CSS is usually the best way to organize styles.
- Classes are reusable; IDs should be unique.
- Conflicts are resolved by importance, specificity, and source order.
- Some text-related properties are inherited from parent elements.
- Every element has content, padding, border, and margin.
- `display` controls whether a box behaves like block, inline, or inline-block.
- `position` controls how an element is placed.
- CSS supports named, HEX, RGB(A), and HSL(A) colors.
- Gradients are generated background images.
- Background images can be sized, positioned, and repeated.
- Link pseudo-classes style different interaction states.

---

## Useful Reminder

When CSS does not work, check:

1. Is the CSS file connected correctly?
2. Is the selector written correctly?
3. Is the property name correct?
4. Is there a colon after the property?
5. Is there a semicolon after the value?
6. Are the curly braces closed?
7. Is another, more specific rule overriding the style?

