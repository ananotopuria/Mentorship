# BEM Methodology in CSS

## Table of Contents

1. [What Is BEM?](#what-is-bem)
2. [Why Use BEM?](#why-use-bem)
3. [The Three Parts of BEM](#the-three-parts-of-bem)
4. [BEM Naming Syntax](#bem-naming-syntax)
5. [Complete Example](#complete-example)
6. [Block or Element?](#block-or-element)
7. [Using Modifiers](#using-modifiers)
8. [BEM with Nested HTML](#bem-with-nested-html)
9. [Common Mistakes](#common-mistakes)
10. [When Should You Use BEM?](#when-should-you-use-bem)
11. [Practice Task](#practice-task)
12. [Quick Summary](#quick-summary)

## What Is BEM?

**BEM** stands for:

- **B**lock
- **E**lement
- **M**odifier

BEM is a CSS class-naming methodology. It gives us a clear and consistent way to name classes.

BEM is **not** a library or framework. You do not need to install anything. It is simply a naming approach that helps keep CSS organized and understandable.

```css
.card {}
.card__title {}
.card--featured {}
```

## Why Use BEM?

Without a naming system, class names can become unclear:

```html
<article class="box">
  <h2 class="title">HTML and CSS</h2>
  <button class="button blue">Read more</button>
</article>
```

What does `title` belong to? What is `blue`, and what does it change?

BEM makes the relationship more obvious:

```html
<article class="card card--featured">
  <h2 class="card__title">HTML and CSS</h2>
  <button class="card__button">Read more</button>
</article>
```

BEM helps us:

- understand what a class represents;
- see which component an element belongs to;
- avoid class-name conflicts;
- reuse components;
- maintain larger projects more easily.

## The Three Parts of BEM

### 1. Block

A **block** is an independent, reusable component.

Examples:

```css
.card {}
.navbar {}
.form {}
.button {}
```

A block name should describe **what the component is**, not how it looks.

```css
/* Good */
.button {}
.product-card {}

/* Avoid */
.blue-box {}
.left-section {}
```

Colors and positions can change, so names based on purpose are easier to maintain.

### 2. Element

An **element** is a part of a block. It does not usually make sense as an independent component.

Use two underscores between the block and element names:

```css
.block__element {}
```

Examples:

```css
.card__image {}
.card__title {}
.card__description {}
.card__button {}
```

All these elements belong to the `card` block.

### 3. Modifier

A **modifier** represents a different state, style, or version of a block or element.

Use two hyphens before the modifier name:

```css
.block--modifier {}
.block__element--modifier {}
```

Examples:

```css
.button--primary {}
.button--disabled {}
.card--featured {}
.card__title--large {}
```

The base class should normally remain in the HTML together with the modifier:

```html
<button class="button button--primary">Save</button>
```

- `button` provides the basic button styles.
- `button--primary` adds or changes only the primary version's styles.

## BEM Naming Syntax

```text
block
block__element
block--modifier
block__element--modifier
```

| Type | Syntax | Example |
| --- | --- | --- |
| Block | `.block` | `.card` |
| Element | `.block__element` | `.card__title` |
| Block modifier | `.block--modifier` | `.card--featured` |
| Element modifier | `.block__element--modifier` | `.card__title--large` |

Remember:

- `__` means “this element belongs to this block.”
- `--` means “this is a different version or state.”

## Complete Example

### HTML

```html
<article class="profile-card profile-card--featured">
  <img
    class="profile-card__image"
    src="profile.jpg"
    alt="Portrait of Anna"
  />

  <h2 class="profile-card__name">Anna Smith</h2>
  <p class="profile-card__role">Frontend Developer</p>

  <a class="profile-card__link" href="#">View profile</a>
</article>
```

### CSS

```css
.profile-card {
  width: 300px;
  padding: 24px;
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  background-color: white;
}

.profile-card--featured {
  border-color: #7c3aed;
  box-shadow: 0 8px 20px rgb(0 0 0 / 10%);
}

.profile-card__image {
  width: 100%;
  border-radius: 8px;
}

.profile-card__name {
  margin-top: 16px;
  font-size: 24px;
}

.profile-card__role {
  margin-top: 8px;
  color: #666;
}

.profile-card__link {
  display: inline-block;
  margin-top: 16px;
  color: #7c3aed;
}
```

The class names tell us immediately that the image, name, role, and link belong to `profile-card`.

## Block or Element?

Ask these questions:

1. Can this component exist and be reused independently?
2. Would it still make sense outside its parent?

If the answer is **yes**, it can be a block.

```html
<article class="card">
  <h2 class="card__title">Learn CSS</h2>
  <button class="button button--primary">Start course</button>
</article>
```

Here, `button` is its own block because it can be reused outside the card.

Do not automatically name everything as a card element:

```html
<!-- Less reusable -->
<button class="card__button">Start course</button>

<!-- More reusable when button is a separate component -->
<button class="button button--primary">Start course</button>
```

Both can be valid. Choose based on whether the button is intended to be an independent reusable component.

## Using Modifiers

### Different visual version

```html
<button class="button button--primary">Save</button>
<button class="button button--danger">Delete</button>
```

```css
.button {
  padding: 10px 18px;
  border: 0;
  border-radius: 6px;
}

.button--primary {
  background-color: royalblue;
  color: white;
}

.button--danger {
  background-color: crimson;
  color: white;
}
```

### Different state

```html
<button class="button button--disabled" disabled>Submit</button>
```

```css
.button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
```

### Modified element

```html
<h2 class="card__title card__title--large">Featured article</h2>
```

```css
.card__title--large {
  font-size: 32px;
}
```

## BEM with Nested HTML

HTML nesting does not mean that every class name must become longer.

```html
<article class="card">
  <header class="card__header">
    <h2 class="card__title">BEM Basics</h2>
  </header>
</article>
```

Use:

```css
.card__title {}
```

Avoid:

```css
.card__header__title {}
```

In standard BEM naming, elements belong directly to the block. We do not reproduce the complete HTML structure in the class name.

## Common Mistakes

### Mistake 1: Forgetting the base class

```html
<!-- Avoid -->
<button class="button--primary">Save</button>

<!-- Better -->
<button class="button button--primary">Save</button>
```

### Mistake 2: Using a modifier for a child element

```css
/* Wrong: title is a part of the card, not a version of it */
.card--title {}

/* Correct */
.card__title {}
```

### Mistake 3: Using an element as a standalone class

```html
<!-- The element should be used inside its block -->
<h2 class="card__title">Title</h2>
```

If it needs to be completely independent and reusable, consider making it a new block.

### Mistake 4: Describing appearance instead of purpose

```css
/* Avoid */
.button--red {}

/* Usually clearer */
.button--danger {}
```

`danger` describes the meaning. The design can later change from red to another color without requiring a new class name.

### Mistake 5: Writing unnecessarily dependent selectors

```css
/* Avoid */
.card .card__title {}

/* Prefer */
.card__title {}
```

The BEM class is already specific and clear.

### Mistake 6: Styling with IDs

```css
/* Avoid for reusable component styling */
#card-title {}

/* Prefer */
.card__title {}
```

Classes are reusable, while an ID must be unique on a page.

## When Should You Use BEM?

BEM is useful when:

- a project contains reusable components;
- several developers work on the same project;
- CSS is becoming difficult to understand;
- you want a predictable naming convention.

For a very small one-page exercise, full BEM may feel unnecessary. However, learning it early helps you develop good organization habits.

You can use BEM with regular CSS, Sass, React, or other frontend tools.

## Practice Task

Create a product card containing:

- product image;
- product title;
- price;
- description;
- “Add to cart” button;
- a featured version of the card;
- an out-of-stock version of the button.

Suggested class names:

```text
product-card
product-card--featured
product-card__image
product-card__title
product-card__price
product-card__description
button
button--primary
button--disabled
```

Example structure:

```html
<article class="product-card product-card--featured">
  <img
    class="product-card__image"
    src="headphones.jpg"
    alt="Black wireless headphones"
  />
  <h2 class="product-card__title">Wireless Headphones</h2>
  <p class="product-card__price">$99</p>
  <p class="product-card__description">
    Comfortable wireless headphones with clear sound.
  </p>
  <button class="button button--primary">Add to cart</button>
</article>
```

## Quick Summary

```css
/* Independent component */
.card {}

/* A part of the component */
.card__title {}

/* A different version of the component */
.card--featured {}

/* A different version of an element */
.card__title--large {}
```

The easiest way to remember BEM is:

> Block is the component, element is a part of it, and modifier is a different version or state.
