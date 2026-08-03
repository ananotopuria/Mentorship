# CSS Units: `px`, `%`, `em`, `rem`, `vw`, and `vh`

CSS units tell the browser **how large an element should be**.

We use them for:

- width and height;
- font size;
- margin and padding;
- border radius;
- gaps between elements;
- positioning.

---

## Table of Contents

1. [Absolute and Relative Units](#1-absolute-and-relative-units)
2. [`px` — Pixels](#2-px--pixels)
3. [`%` — Percentage](#3----percentage)
4. [`em` — Relative to the Current Context](#4-em--relative-to-the-current-context)
5. [`rem` — Relative to the Root Element](#5-rem--relative-to-the-root-element)
6. [`vw` and `vh` — Viewport Units](#6-vw-and-vh--viewport-units)
7. [Comparison Table](#7-comparison-table)
8. [Practical Example](#8-practical-example)
9. [Which Unit Should I Use?](#9-which-unit-should-i-use)
10. [Media Queries and Relative Units](#10-media-queries-and-relative-units)
11. [Common Mistakes](#11-common-mistakes)
12. [Practice Tasks](#12-practice-tasks)
13. [Quick Quiz](#13-quick-quiz)

---

## 1. Absolute and Relative Units

CSS units can be divided into two main groups.

### Absolute unit

An absolute unit has a fixed CSS size.

```css
p {
  font-size: 16px;
}
```

Here, the paragraph has a font size of `16px`.

### Relative units

Relative units calculate their size from another value, such as:

- the parent element;
- the root element;
- the viewport width;
- the viewport height.

Examples:

```css
width: 50%;
font-size: 1.5rem;
padding: 1em;
height: 100vh;
```

Relative units are useful when we create **responsive layouts**.

---

## 2. `px` — Pixels

`px` means **pixel**. It is a CSS absolute unit.

```css
.card {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
}
```

The values do not depend directly on the parent element or viewport size.

### When is `px` useful?

- thin borders;
- small icons;
- exact details;
- minimum or maximum sizes;
- values that should remain visually stable.

```css
button {
  border: 2px solid black;
  border-radius: 8px;
}
```

> `px` is not “bad,” but using only fixed pixel values can make a layout less flexible.

---

## 3. `%` — Percentage

Percentage is usually calculated relative to the size of another element.

For `width`, it normally refers to the **parent element's content width**.

```html
<div class="container">
  <div class="box">50% wide</div>
</div>
```

```css
.container {
  width: 600px;
}

.box {
  width: 50%;
}
```

Calculation:

```text
50% of 600px = 300px
```

The `.box` will be `300px` wide.

### Another example

```css
img {
  width: 100%;
}
```

The image uses the full available width of its parent.

### Important

Percentage does not always behave identically for every CSS property. For
example, a percentage height usually needs the parent to have a defined height.

```css
.parent {
  height: 400px;
}

.child {
  height: 50%; /* 200px */
}
```

---

## 4. `em` — Relative to the Current Context

`em` is a relative unit.

For `font-size`, `em` is calculated from the **parent element's font size**.

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;
}
```

Calculation:

```text
1.5 × 20px = 30px
```

The child text will be `30px`.

### `em` with padding and margin

For properties such as `padding`, `margin`, and `border-radius`, `em` is based
on the **font size of the element itself**.

```css
button {
  font-size: 20px;
  padding: 0.5em 1em;
}
```

Calculations:

```text
Vertical padding:   0.5 × 20px = 10px
Horizontal padding: 1 × 20px = 20px
```

This is useful because the button's padding grows when its text grows.

### Be careful with nesting

`em` values can multiply inside nested elements.

```css
.parent {
  font-size: 1.5em;
}

.child {
  font-size: 1.5em;
}
```

If the starting font size is `16px`:

```text
Parent: 1.5 × 16px = 24px
Child:  1.5 × 24px = 36px
```

This is sometimes useful, but it can also cause unexpected sizes.

---

## 5. `rem` — Relative to the Root Element

`rem` means **root em**.

It is calculated from the font size of the root `<html>` element, not from each
element's parent.

Browsers normally use `16px` as the default root font size.

```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem;
}

p {
  font-size: 1rem;
}
```

Calculations:

```text
1rem = 16px
2rem = 32px
```

### The `62.5%` technique

You may see this code:

```css
html {
  font-size: 62.5%;
}
```

If the browser's default font size is `16px`:

```text
62.5% of 16px = 10px
```

Therefore:

```text
1rem   = 10px
1.6rem = 16px
2.4rem = 24px
3.2rem = 32px
```

This makes conversion easy, but it is only a convention—not a requirement.
Keeping the normal root size and using `1rem = 16px` is also completely valid.

### Why is `rem` useful?

- sizes stay consistent across the page;
- parent nesting does not multiply the value;
- users can change their browser's preferred font size;
- it is useful for typography, spacing, and accessible layouts.

```css
.card {
  padding: 1.5rem;
  border-radius: 0.75rem;
}

.card h2 {
  font-size: 2rem;
}
```

---

## 6. `vw` and `vh` — Viewport Units

The **viewport** is the visible area of the browser window.

### `vw` — Viewport Width

```text
1vw = 1% of the viewport width
```

If the viewport is `1200px` wide:

```text
1vw  = 12px
50vw = 600px
```

```css
.hero {
  width: 80vw;
}
```

The hero takes `80%` of the viewport width.

### `vh` — Viewport Height

```text
1vh = 1% of the viewport height
```

If the viewport is `800px` high:

```text
1vh   = 8px
100vh = 800px
```

```css
.hero {
  min-height: 100vh;
}
```

The hero will be at least as tall as the visible browser area.

### `%` versus `vw`

```css
.box-one {
  width: 50%;
}

.box-two {
  width: 50vw;
}
```

- `50%` means 50% of the containing block's available width.
- `50vw` means 50% of the browser viewport's width.

They are not necessarily the same.

### Modern mobile viewport units

On mobile browsers, toolbars can change the visible height. Modern CSS also
provides units such as `dvh`, `svh`, and `lvh`.

```css
.hero {
  min-height: 100dvh;
}
```

For a full-screen mobile section, `100dvh` can be more accurate than `100vh`.

---

## 7. Comparison Table

| Unit | Relative to | Example | Common use |
| --- | --- | --- | --- |
| `px` | A fixed CSS reference unit | `border: 1px` | Borders and precise details |
| `%` | Usually the containing block | `width: 80%` | Fluid container widths |
| `em` | Current context/font size | `padding: 1em` | Component-relative spacing |
| `rem` | Root `<html>` font size | `font-size: 1.5rem` | Typography and page spacing |
| `vw` | 1% of viewport width | `width: 50vw` | Viewport-based layouts |
| `vh` | 1% of viewport height | `min-height: 100vh` | Full-screen sections |

---

## 8. Practical Example

### HTML

```html
<main class="page">
  <article class="card">
    <h1>CSS Units</h1>
    <p>Relative units help us build flexible layouts.</p>
    <button>Learn More</button>
  </article>
</main>
```

### CSS

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.page {
  min-height: 100vh;
  padding: 2rem;
  background-color: #f2f2f2;
}

.card {
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  background-color: white;
}

.card h1 {
  font-size: 2rem;
}

.card p {
  font-size: 1rem;
  line-height: 1.6;
}

.card button {
  font-size: 1rem;
  padding: 0.75em 1.5em;
  border: 0;
  border-radius: 0.5em;
}
```

### Why were these units chosen?

- `100vh` makes the page at least as tall as the viewport.
- `2rem` creates consistent page spacing.
- `90%` allows the card to shrink on a small screen.
- `max-width: 40rem` prevents the card from becoming too wide.
- `1px` creates a thin border.
- `em` makes the button padding follow its own font size.

---

## 9. Which Unit Should I Use?

There is no rule that says one unit must be used everywhere. Real projects
usually combine several units.

### A simple beginner-friendly guide

- Use `rem` for most font sizes and general spacing.
- Use `%` for flexible widths relative to a container.
- Use `px` for thin borders and small exact details.
- Use `em` when a component's spacing should follow its own text size.
- Use `vw` and `vh` when a size must follow the browser window.
- Combine `width` with `max-width` to keep content flexible and readable.

Example:

```css
.container {
  width: 90%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 1rem;
}
```

---

## 10. Media Queries and Relative Units

You can write media query breakpoints with `em`:

```css
@media (min-width: 48em) {
  .card {
    display: flex;
  }
}
```

In media queries, `em` and `rem` are based on the browser's **initial font
size**, which is usually `16px`. They do not use a custom `font-size` set on the
`html` element for the breakpoint calculation.

With the usual initial size:

```text
48em × 16px = 768px
```

Therefore, `48em` is usually equivalent to a `768px` breakpoint.

---

## 11. Common Mistakes

### Mistake 1: Thinking `%` always refers to the viewport

```css
.child {
  width: 50%;
}
```

This usually refers to its containing block, not automatically to the viewport.

### Mistake 2: Thinking `em` always refers to the root

`em` depends on the current context. `rem` refers to the root element.

### Mistake 3: Forgetting that nested `em` values can multiply

Check the computed styles in browser DevTools when a nested element becomes
larger than expected.

### Mistake 4: Giving a child `height: 100%` without defining the parent's height

```css
.child {
  height: 100%;
}
```

This may not work as expected if the parent's height is `auto`.

### Mistake 5: Using only `vw` for text

```css
h1 {
  font-size: 8vw;
}
```

The text may become extremely small or extremely large. A safer responsive
solution is:

```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

This means:

- minimum: `2rem`;
- preferred responsive value: `5vw`;
- maximum: `4rem`.

---

## 12. Practice Tasks

Create a simple profile card.

### Requirements

1. Give the page a minimum height of one full viewport.
2. Give the card a width of `90%`.
3. Prevent the card from growing wider than `35rem`.
4. Use `rem` for the card's padding and text sizes.
5. Make the profile image use `100%` of its image container.
6. Use a `1px` border.
7. Use `em` for the button's padding.
8. Add a media query at `48em`.

### Starter HTML

```html
<main class="page">
  <article class="profile-card">
    <img src="profile.jpg" alt="Student profile" />
    <h1>Alex Smith</h1>
    <p>Frontend development student</p>
    <button>View Profile</button>
  </article>
</main>
```

### Bonus task

Use `clamp()` to make the heading responsive without allowing it to become too
small or too large.

---

## 13. Quick Quiz

1. What is `1rem` relative to?
2. If a parent is `800px` wide, how wide is a child with `width: 50%`?
3. If an element has `font-size: 20px`, how much is `2em`?
4. What does `100vh` represent?
5. What is the main difference between `50%` and `50vw`?
6. Why can nested `em` values produce unexpected results?

<details>
<summary>Show answers</summary>

1. The root `<html>` element's font size.
2. `400px`.
3. `40px`.
4. The full viewport height.
5. `50%` depends on the containing block, while `50vw` depends on the viewport.
6. Each nested value can be calculated from an already changed parent font
   size, so the sizes multiply.

</details>

---

## Summary

- `px` is useful for fixed visual details.
- `%` usually depends on the containing block.
- `em` depends on the current font-size context.
- `rem` depends on the root element's font size.
- `vw` depends on viewport width.
- `vh` depends on viewport height.
- Good responsive design usually combines different units.

