# CSS Flexbox — Student Guide

Flexbox is a CSS layout system used to arrange elements in a row or a column.

It is especially useful for:

- navigation bars;
- cards;
- buttons and icons;
- centering content;
- spacing elements;
- responsive layouts.

---

## Table of Contents

1. [What Is Flexbox?](#1-what-is-flexbox)
2. [Flex Container and Flex Items](#2-flex-container-and-flex-items)
3. [Main Axis and Cross Axis](#3-main-axis-and-cross-axis)
4. [`flex-direction`](#4-flex-direction)
5. [`justify-content`](#5-justify-content)
6. [`align-items`](#6-align-items)
7. [`gap`](#7-gap)
8. [`flex-wrap`](#8-flex-wrap)
9. [`align-content`](#9-align-content)
10. [Flex Item Properties](#10-flex-item-properties)
11. [How to Center an Element](#11-how-to-center-an-element)
12. [Common Layout Examples](#12-common-layout-examples)
13. [Responsive Flexbox](#13-responsive-flexbox)
14. [Common Mistakes](#14-common-mistakes)
15. [Practice Tasks](#15-practice-tasks)
16. [Quick Reference](#16-quick-reference)

---

## 1. What Is Flexbox?

Without Flexbox, block elements usually appear one below another:

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: steelblue;
}
```

To activate Flexbox, add `display: flex` to their parent:

```css
.container {
  display: flex;
}
```

The boxes now appear next to each other in a row.

> `display: flex` controls the direct children of the element.

---

## 2. Flex Container and Flex Items

Consider this HTML:

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

- `.container` is the **flex container**.
- `.box` elements are the **flex items**.

```css
.container {
  display: flex;
}
```

Most layout properties are written on the parent:

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

Some properties are written on individual children:

```css
.box {
  flex: 1;
}
```

### Important

Flexbox affects only direct children.

```html
<div class="container">
  <div class="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
</div>
```

Here, `.card` is a flex item. The `<h2>` and `<p>` are not flex items unless
`.card` also receives `display: flex`.

---

## 3. Main Axis and Cross Axis

Flexbox works with two imaginary axes:

- **main axis** — the main direction of the flex items;
- **cross axis** — the direction across the main axis.

When `flex-direction: row`:

- main axis: left to right;
- cross axis: top to bottom.

When `flex-direction: column`:

- main axis: top to bottom;
- cross axis: left to right.

This is important because:

- `justify-content` works on the **main axis**;
- `align-items` works on the **cross axis**.

> The axes can change. Do not memorize that `justify-content` always means
> horizontal and `align-items` always means vertical.

---

## 4. `flex-direction`

`flex-direction` chooses the direction in which flex items are placed.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

### `row`

Items are placed from left to right.

```css
flex-direction: row;
```

This is the default value.

### `row-reverse`

Items are placed in a reversed row.

```css
flex-direction: row-reverse;
```

### `column`

Items are placed from top to bottom.

```css
flex-direction: column;
```

### `column-reverse`

Items are placed in a reversed column.

```css
flex-direction: column-reverse;
```

---

## 5. `justify-content`

`justify-content` aligns and distributes items along the **main axis**.

```css
.container {
  display: flex;
  justify-content: center;
}
```

### Common values

```css
justify-content: flex-start;
```

Places items at the beginning of the main axis.

```css
justify-content: flex-end;
```

Places items at the end of the main axis.

```css
justify-content: center;
```

Places items in the center.

```css
justify-content: space-between;
```

Places the first item at the beginning and the last item at the end. The
remaining space is added between the items.

```css
justify-content: space-around;
```

Adds space around every item. The outer space is smaller than the space between
two items.

```css
justify-content: space-evenly;
```

Creates equal space between items and around the outer edges.

---

## 6. `align-items`

`align-items` aligns flex items along the **cross axis**.

The container needs extra height to make vertical alignment visible:

```css
.container {
  display: flex;
  height: 300px;
  align-items: center;
}
```

### Common values

```css
align-items: stretch;
```

The default value. Items stretch across the cross axis when they do not have a
fixed size in that direction.

```css
align-items: flex-start;
```

Places items at the beginning of the cross axis.

```css
align-items: flex-end;
```

Places items at the end of the cross axis.

```css
align-items: center;
```

Places items in the center of the cross axis.

```css
align-items: baseline;
```

Aligns items according to the baseline of their text.

---

## 7. `gap`

`gap` creates space between flex items:

```css
.container {
  display: flex;
  gap: 20px;
}
```

You can also set row and column gaps separately:

```css
.container {
  display: flex;
  row-gap: 20px;
  column-gap: 30px;
}
```

Why use `gap` instead of margins?

- It only adds space between items.
- It does not add unwanted space around the container.
- It keeps the layout easier to manage.

---

## 8. `flex-wrap`

By default, Flexbox tries to keep all items on one line:

```css
flex-wrap: nowrap;
```

This can make items shrink or overflow when there is not enough space.

Allow items to move to a new line:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

Available values:

```css
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;
```

### Shorthand

`flex-flow` combines `flex-direction` and `flex-wrap`:

```css
.container {
  display: flex;
  flex-flow: row wrap;
}
```

---

## 9. `align-content`

`align-content` controls the spacing between multiple flex lines.

It works only when:

1. `flex-wrap: wrap` is active;
2. there is more than one line;
3. the container has extra space on the cross axis.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 500px;
}
```

Common values:

```css
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

### `align-items` vs `align-content`

- `align-items` aligns items inside each line.
- `align-content` distributes the lines inside the container.

---

## 10. Flex Item Properties

The following properties are written on flex items, not on the container.

### `flex-grow`

Controls how an item uses available free space:

```css
.box {
  flex-grow: 1;
}
```

If every item has `flex-grow: 1`, they share the available space equally.

```css
.box-1 {
  flex-grow: 1;
}

.box-2 {
  flex-grow: 2;
}
```

`.box-2` receives twice as much of the available free space as `.box-1`.

### `flex-shrink`

Controls how much an item can shrink when there is not enough space:

```css
.box {
  flex-shrink: 1;
}
```

Prevent an item from shrinking:

```css
.box {
  flex-shrink: 0;
}
```

### `flex-basis`

Sets the item's initial size along the main axis:

```css
.card {
  flex-basis: 250px;
}
```

### `flex` shorthand

`flex` combines `flex-grow`, `flex-shrink`, and `flex-basis`:

```css
.box {
  flex: 1 1 200px;
}
```

This means:

```css
.box {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 200px;
}
```

A common shortcut is:

```css
.box {
  flex: 1;
}
```

This is often used to create equal-width flexible items.

### `align-self`

Changes the cross-axis alignment of one specific item:

```css
.special-box {
  align-self: flex-end;
}
```

It overrides the container's `align-items` value for that item.

### `order`

Changes the visual order of a flex item:

```css
.box-1 {
  order: 2;
}

.box-2 {
  order: 1;
}
```

The default value is `0`. Smaller values appear first.

> Use `order` carefully. The HTML order should still be logical for keyboard
> users and screen readers.

---

## 11. How to Center an Element

To center an item horizontally and vertically:

```html
<div class="container">
  <div class="box">Centered</div>
</div>
```

```css
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Why are both properties necessary?

- `justify-content: center` centers on the main axis.
- `align-items: center` centers on the cross axis.

---

## 12. Common Layout Examples

### Navigation bar

```html
<header class="header">
  <a class="logo" href="#">Logo</a>

  <nav class="navigation">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>
```

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.navigation {
  display: flex;
  gap: 24px;
}
```

The header is one flex container, and the navigation is another flex container.

### Card row

```html
<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</section>
```

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.card {
  flex: 1 1 250px;
  padding: 24px;
  border: 1px solid #cccccc;
  border-radius: 12px;
}
```

Each card:

- starts with a preferred width of `250px`;
- can grow when extra space exists;
- can shrink when necessary;
- moves to a new line when it no longer fits.

### Image and text section

```html
<section class="about">
  <img src="team.jpg" alt="Our team working together" />

  <div>
    <h2>About Us</h2>
    <p>We build simple and accessible websites.</p>
  </div>
</section>
```

```css
.about {
  display: flex;
  align-items: center;
  gap: 32px;
}

.about img {
  width: 50%;
  max-width: 500px;
}
```

---

## 13. Responsive Flexbox

Flexbox can be combined with media queries.

Desktop layout:

```css
.about {
  display: flex;
  align-items: center;
  gap: 32px;
}
```

Mobile layout:

```css
@media (max-width: 768px) {
  .about {
    flex-direction: column;
  }

  .about img {
    width: 100%;
  }
}
```

On larger screens, the image and text appear next to each other. On smaller
screens, they appear one below another.

You can also create a wrapping responsive card layout without a media query:

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 280px;
}
```

---

## 14. Common Mistakes

### Mistake 1: Adding Flexbox to the child

Incorrect:

```css
.box {
  display: flex;
}
```

This controls the content inside `.box`, not the position of `.box` inside its
parent.

Correct:

```css
.container {
  display: flex;
}
```

### Mistake 2: Confusing the axes

With `flex-direction: row`:

```css
justify-content: center; /* horizontal */
align-items: center;     /* vertical */
```

With `flex-direction: column`:

```css
justify-content: center; /* vertical */
align-items: center;     /* horizontal */
```

### Mistake 3: Expecting vertical centering without height

This may look like it does nothing:

```css
.container {
  display: flex;
  align-items: center;
}
```

If the container has no extra height, there is no visible vertical space in
which to move the items.

```css
.container {
  min-height: 300px;
  display: flex;
  align-items: center;
}
```

### Mistake 4: Forgetting `flex-wrap`

If items do not fit, allow them to move to a new line:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### Mistake 5: Using `align-content` for a single line

Use `align-items` for the items on one line. `align-content` is for multiple
wrapped lines.

---

## 15. Practice Tasks

### Task 1 — Basic row

Create three boxes and:

- place them in one row;
- add a `20px` gap;
- center them horizontally.

### Task 2 — Full-page centering

Create a login card and place it in the exact center of the page.

Hint:

```css
min-height: 100vh;
```

### Task 3 — Navigation

Create a navigation bar with:

- a logo on the left;
- three links on the right;
- vertically centered content;
- equal space between the links.

### Task 4 — Responsive cards

Create four cards. Each card should:

- have a preferred width of `250px`;
- grow when extra space is available;
- move to a new line when there is not enough space.

### Task 5 — Responsive section

Create a section containing an image and text:

- show them in a row on desktop;
- show them in a column below `768px`;
- make the image `width: 100%` on mobile.

---

## 16. Quick Reference

### Flex container properties

```css
.container {
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  align-content: center;

  gap: 20px;
}
```

### Flex item properties

```css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 200px;

  /* Shorthand */
  flex: 1 1 200px;

  align-self: center;
  order: 1;
}
```

### Remember

1. Add `display: flex` to the parent.
2. `flex-direction` decides the main axis.
3. `justify-content` works on the main axis.
4. `align-items` works on the cross axis.
5. Use `gap` for space between items.
6. Use `flex-wrap: wrap` when items should move to a new line.

---

## Final Mini Challenge

Build a responsive team section with:

- a section title;
- four team member cards;
- an image, name, role, and button inside every card;
- equal spacing between cards;
- wrapping cards;
- a minimum card width of approximately `250px`;
- buttons aligned at the bottom of cards with different text lengths.

Try to solve it using Flexbox before checking any external example.
