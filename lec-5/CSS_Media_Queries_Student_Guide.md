# 📱 CSS Media Queries – Student Guide

> **Goal:** Learn how to make websites look good on every screen size (desktop, tablet, and mobile).

---

# 📚 Table of Contents

1. What are Media Queries?
2. Why do we use them?
3. Syntax
4. Mobile First vs Desktop First
5. Common Breakpoints
6. Examples
7. Combining Conditions
8. Responsive Units
9. Best Practices
10. Common Mistakes
11. Practice Tasks

---

# What are Media Queries?

A **Media Query** is a CSS feature that allows us to apply different styles depending on the user's device.

For example:

- 💻 Desktop
- 📱 Phone
- 📲 Tablet

The HTML stays the same.

Only the CSS changes.

Think about a website like YouTube.

On desktop:

```text
☰ Logo              Search                 Profile
---------------------------------------------------
Sidebar | Videos Videos Videos
```

On mobile:

```text
☰ Logo      Search

Video
Video
Video
```

Same website. Different CSS.

---

# Why do we use them?

Without Media Queries:

- ❌ Text becomes too small
- ❌ Images overflow
- ❌ Buttons are hard to tap
- ❌ Users need to zoom

Media Queries solve these problems.

---

# Basic Syntax

```css
@media (max-width: 768px) {
  h1 {
    color: red;
  }
}
```

Meaning:

> If the screen width is **768px or smaller**, apply these styles.

---

# max-width vs min-width

## max-width

```css
@media (max-width:768px)
```

Works on **768px and smaller**.

## min-width

```css
@media (min-width:768px)
```

Works on **768px and larger**.

---

# Mobile First

```css
.card{
  width:100%;
}

@media (min-width:768px){
  .card{
    width:50%;
  }
}

@media (min-width:1200px){
  .card{
    width:25%;
  }
}
```

Start with mobile, then enhance for larger screens.

---

# Desktop First

```css
.card{
  width:25%;
}

@media (max-width:1200px){
  .card{
    width:50%;
  }
}

@media (max-width:768px){
  .card{
    width:100%;
  }
}
```

---

# Common Breakpoints

| Device | Width |
|---------|------:|
| Small Phone | 480px |
| Phone | 576px |
| Tablet | 768px |
| Small Laptop | 992px |
| Desktop | 1200px |
| Large Monitor | 1400px |

---

# Example

```css
.box{
  width:400px;
}

@media (max-width:768px){
  .box{
    width:100%;
  }
}
```

---

# Multiple Media Queries

```css
.card{
  width:25%;
}

@media(max-width:992px){
  .card{
    width:50%;
  }
}

@media(max-width:768px){
  .card{
    width:100%;
  }
}
```

Desktop → 25%

Tablet → 50%

Phone → 100%

---

# Combining Conditions

```css
@media (min-width:768px) and (max-width:992px){

}
```

Applies styles only between **768px** and **992px**.

---

# Orientation

```css
@media (orientation: landscape){

}
```

Runs only when the device is in landscape mode.

---

# Responsive Images

```css
img{
  width:100%;
  max-width:600px;
}
```

---

# Best Practices

- ✅ Prefer Mobile First
- ✅ Use flexible layouts
- ✅ Test on different screen sizes
- ✅ Keep breakpoints consistent
- ✅ Avoid unnecessary media queries

---

# Common Mistakes

❌ Forgetting:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

❌ Using fixed widths everywhere.

Prefer:

```css
width:100%;
max-width:900px;
```

---

# Practice

1. Change the background colour below 768px.
2. Make the heading smaller on phones.
3. Hide the sidebar on mobile.
4. Make images `width:100%`.
5. Change a 3-column layout into a 1-column layout on phones.

---

# Summary

Media Queries make websites responsive.

The two most common rules are:

```css
@media(max-width:768px)
```

and

```css
@media(min-width:768px)
```

Remember:

> **HTML creates the content. CSS styles the content. Media Queries make the design responsive.**
