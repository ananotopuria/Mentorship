# HTML Fundamentals — Complete Study Guide

This guide will help you understand the foundations of HTML and build your first structured web page.

## Table of Contents

1. [What Is HTML?](#1-what-is-html)
2. [Create Your First HTML File](#2-create-your-first-html-file)
3. [How to Create a Website](#3-how-to-create-a-website)
4. [Basic HTML Document Structure](#4-basic-html-document-structure)
5. [Tags, Elements, and Content](#5-tags-elements-and-content)
6. [Headings and Paragraphs](#6-headings-and-paragraphs)
7. [Text Formatting](#7-text-formatting)
8. [Attributes](#8-attributes)
9. [Hyperlinks](#9-hyperlinks)
10. [Images](#10-images)
11. [File Paths](#11-file-paths)
12. [Lists](#12-lists)
13. [Parent, Child, and Nested Elements](#13-parent-child-and-nested-elements)
14. [Semantic HTML](#14-semantic-html)
15. [HTML Tables](#15-html-tables)
16. [HTML Forms](#16-html-forms)
17. [HTML Comments](#17-html-comments)
18. [Block and Inline Elements](#18-block-and-inline-elements)
19. [Special Characters](#19-special-characters)
20. [Open the Page in a Browser](#20-open-the-page-in-a-browser)
21. [Inspect HTML with DevTools](#21-inspect-html-with-devtools)
22. [Common Beginner Mistakes](#22-common-beginner-mistakes)
23. [Practice Project — Personal Profile Page](#23-practice-project--personal-profile-page)
24. [Extra Practice Tasks](#24-extra-practice-tasks)
25. [Knowledge Check](#25-knowledge-check)
26. [Final Checklist](#26-final-checklist)
27. [Useful Resources](#useful-resources)

## 1. What Is HTML?

HTML stands for **HyperText Markup Language**.

It is used to create the **structure and content** of a web page.

- HTML creates the structure.
- CSS controls the design.
- JavaScript adds behavior and interactivity.

HTML is a **markup language**, not a programming language. It uses tags to describe content such as headings, paragraphs, links, images, and lists.

## 2. Create Your First HTML File

1. Create a new folder named `html-practice`.
2. Open the folder in VS Code.
3. Create a file named `index.html`.
4. Type `!` and press `Enter` to generate the basic HTML structure.

`index.html` is commonly used as the main page of a website.

## 3. How to Create a Website

A basic website can be created with these steps:

1. Create a project folder.
2. Open the folder in VS Code.
3. Create an `index.html` file.
4. Add the basic HTML document structure.
5. Add content inside the `<body>` element.
6. Save the file.
7. Open it in a browser or run it with Live Server.
8. Use DevTools to inspect and test the page.

A website can contain multiple HTML pages:

```text
my-website/
├── index.html
├── about.html
├── contact.html
└── images/
    └── profile.jpg
```

Connect the pages with hyperlinks:

```html
<nav>
  <a href="./index.html">Home</a>
  <a href="./about.html">About</a>
  <a href="./contact.html">Contact</a>
</nav>
```

At this stage, the website will be static. Its content only changes when a developer edits the HTML file.

## 4. Basic HTML Document Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Website</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

- `<!DOCTYPE html>` tells the browser to use modern HTML5.
- `<html>` is the root element of the document.
- `lang="en"` defines the main language of the page.
- `<head>` contains information about the page.
- `<meta charset="UTF-8">` supports different characters and languages.
- `<meta name="viewport">` helps the page display correctly on mobile devices.
- `<title>` appears in the browser tab.
- `<body>` contains everything displayed on the page.

Use `lang="ka"` when the main content of the page is in Georgian.

## 5. Tags, Elements, and Content

```html
<p>Hello, students!</p>
```

- `<p>` is the opening tag.
- `Hello, students!` is the content.
- `</p>` is the closing tag.
- The complete line is an HTML element.

Some elements do not wrap content and do not need a closing tag:

```html
<img src="photo.jpg" alt="A student learning HTML" />
<br />
<hr />
```

## 6. Headings and Paragraphs

HTML provides six heading levels:

```html
<h1>Main Page Title</h1>
<h2>Main Section</h2>
<h3>Section Topic</h3>
<p>This is a paragraph of text.</p>
```

Use headings in a logical order. Do not choose a heading only because of its visual size.

Usually, a page should have one main `<h1>` that describes its primary topic.

## 7. Text Formatting

```html
<p>I am learning <strong>HTML</strong>.</p>
<p>This information is <em>important</em>.</p>
```

- `<strong>` gives text strong importance.
- `<em>` adds emphasis.

These elements also give meaning to the content. They are not only visual formatting tools.

## 8. Attributes

Attributes provide additional information about an element.

```html
<a href="https://developer.mozilla.org" target="_blank">Learn HTML</a>
```

In this example:

- `href` defines the destination of the link.
- `target="_blank"` opens the link in a new tab.

Attributes are written inside the opening tag:

```html
<tag attribute="value">Content</tag>
```

## 9. Hyperlinks

### External link

```html
<a href="https://www.google.com">Visit Google</a>
```

### Link to another page in the project

```html
<a href="./about.html">About Us</a>
```

### Link to a section on the same page

```html
<a href="#contact">Go to Contact</a>

<section id="contact">
  <h2>Contact</h2>
</section>
```

### Email and phone links

```html
<a href="mailto:student@example.com">Send an Email</a>
<a href="tel:+995555123456">Call Us</a>
```

## 10. Images

```html
<img
  src="./images/profile.jpg"
  alt="A student working on a laptop"
  width="300"
/>
```

- `src` defines the image path.
- `alt` provides a text description of the image.
- `width` defines the image width.

The `alt` attribute is important for accessibility and is displayed when the image cannot load.

Do not write `alt="image"`. Describe what is meaningful in the image.

## 11. File Paths

Assume the project has this structure:

```text
html-practice/
├── index.html
├── about.html
└── images/
    └── profile.jpg
```

Use these relative paths:

```html
<a href="./about.html">About</a>
<img src="./images/profile.jpg" alt="Profile photo" />
```

- `./` means the current folder.
- `../` means one folder up.

## 12. Lists

Use an unordered list when order is not important:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Use an ordered list when sequence is important:

```html
<ol>
  <li>Create a project folder.</li>
  <li>Create an index.html file.</li>
  <li>Write the HTML structure.</li>
</ol>
```

`<li>` represents one list item and must be placed inside `<ul>` or `<ol>`.

## 13. Parent, Child, and Nested Elements

```html
<section>
  <h2>About Me</h2>
  <p>I am learning web development.</p>
</section>
```

- `<section>` is the parent.
- `<h2>` and `<p>` are its children.
- The child elements are nested inside the parent.

Close nested elements in the reverse order in which you opened them.

```html
<!-- Correct -->
<p>I am learning <strong>HTML</strong>.</p>

<!-- Incorrect -->
<p>I am learning <strong>HTML.</p></strong>
```

## 14. Semantic HTML

Semantic elements describe the purpose of their content.

```html
<header>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>

<main>
  <section id="about">
    <h1>My Portfolio</h1>
    <p>Welcome to my website.</p>
  </section>
</main>

<footer>
  <p>&copy; 2026 My Website</p>
</footer>
```

Common semantic elements:

- `<header>` — introductory content or the top part of a page
- `<nav>` — navigation links
- `<main>` — the main content of the page
- `<section>` — a thematic section
- `<article>` — independent content
- `<footer>` — footer information

`<div>` is a general container. Use a semantic element when it clearly describes the content.

## 15. HTML Tables

Tables display related data in rows and columns.

```html
<table>
  <caption>Student Progress</caption>
  <thead>
    <tr>
      <th scope="col">Student</th>
      <th scope="col">Course</th>
      <th scope="col">Status</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Nino</td>
      <td>HTML</td>
      <td>Completed</td>
    </tr>
    <tr>
      <td>Mariam</td>
      <td>HTML</td>
      <td>In Progress</td>
    </tr>
  </tbody>
</table>
```

- `<table>` creates the table.
- `<caption>` describes the table.
- `<thead>` groups the header rows.
- `<tbody>` groups the main table data.
- `<tr>` creates a table row.
- `<th>` creates a header cell.
- `<td>` creates a data cell.
- `scope="col"` connects a header with its column for accessibility.

Use a table for structured data, not for positioning or designing a page layout.

### Cells that span multiple columns or rows

```html
<table>
  <tr>
    <th colspan="2">Contact Information</th>
  </tr>
  <tr>
    <td>Email</td>
    <td>student@example.com</td>
  </tr>
</table>
```

- `colspan` makes a cell span multiple columns.
- `rowspan` makes a cell span multiple rows.

### Table practice

Create a weekly learning schedule with the columns **Day**, **Topic**, and **Duration**. Add at least three rows of data.

## 16. HTML Forms

Forms collect information from users.

```html
<form action="/submit" method="post">
  <div>
    <label for="full-name">Full Name</label>
    <input
      type="text"
      id="full-name"
      name="fullName"
      placeholder="Enter your full name"
      required
    />
  </div>

  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>

  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5"></textarea>
  </div>

  <button type="submit">Send</button>
</form>
```

- `<form>` wraps the form controls.
- `action` defines where the submitted data is sent.
- `method` defines how the data is sent.
- `<label>` describes an input.
- `<input>` creates a form field.
- `<textarea>` creates a multi-line text field.
- `<button type="submit">` submits the form.
- `name` identifies the value when form data is submitted.
- `required` prevents submission when the field is empty.

Connect every label to its input. The label's `for` value must match the input's `id`:

```html
<label for="username">Username</label>
<input type="text" id="username" name="username" />
```

### Common input types

```html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" />
<input type="date" />
<input type="checkbox" />
<input type="radio" />
<input type="file" />
```

### Select menu

```html
<label for="topic">Choose a topic</label>
<select id="topic" name="topic">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">JavaScript</option>
</select>
```

The visible text and submitted value can be different. For example, the user sees `HTML`, while the form submits `html`.

### Radio buttons

Radio buttons must share the same `name` when the user should select only one option:

```html
<fieldset>
  <legend>Choose your experience level</legend>

  <input type="radio" id="beginner" name="level" value="beginner" />
  <label for="beginner">Beginner</label>

  <input type="radio" id="intermediate" name="level" value="intermediate" />
  <label for="intermediate">Intermediate</label>
</fieldset>
```

`<fieldset>` groups related form controls, and `<legend>` describes the group.

### Important form note

HTML can create and validate the visible form, but saving or emailing submitted information usually requires a backend or an external form service.

### Form practice

Create a registration form with:

- Full name
- Email
- Password
- Birth date
- Experience level
- Course selection
- Terms and conditions checkbox
- Submit button

## 17. HTML Comments

```html
<!-- This comment is not displayed on the page. -->
```

Comments can explain code or temporarily hide part of it. Do not place passwords or private information in comments.

## 18. Block and Inline Elements

Block elements usually begin on a new line and take the available width.

Examples: `<h1>`, `<p>`, `<div>`, `<section>`, `<ul>`.

Inline elements remain within the same line of text.

Examples: `<a>`, `<strong>`, `<em>`, `<span>`.

```html
<p>Visit <a href="https://developer.mozilla.org">MDN</a> to learn more.</p>
```

## 19. Special Characters

Some characters are written with HTML entities:

```html
<p>&copy; 2026 My Website</p>
<p>HTML uses &lt;tags&gt; to structure content.</p>
```

- `&copy;` displays ©
- `&lt;` displays `<`
- `&gt;` displays `>`

## 20. Open the Page in a Browser

You can open `index.html` directly in a browser or use the **Live Server** extension in VS Code.

With Live Server:

1. Open `index.html` in VS Code.
2. Click **Go Live**.
3. Save your file after every change.
4. The browser will update automatically.

## 21. Inspect HTML with DevTools

1. Open your page in Chrome.
2. Right-click an element.
3. Select **Inspect**.
4. Open the **Elements** tab.

You can temporarily edit the HTML inside DevTools. These changes only exist in your browser and disappear after refresh.

## 22. Common Beginner Mistakes

### Incorrect file extension

```text
index.html.txt
```

The correct filename is:

```text
index.html
```

### Missing closing tag

```html
<!-- Incorrect -->
<p>Hello

<!-- Correct -->
<p>Hello</p>
```

### Incorrect nesting

```html
<!-- Incorrect -->
<p><strong>Hello</p></strong>

<!-- Correct -->
<p><strong>Hello</strong></p>
```

### Missing quotation marks

```html
<!-- Avoid -->
<a href=https://example.com>Website</a>

<!-- Recommended -->
<a href="https://example.com">Website</a>
```

### Incorrect file path or filename

`profile.jpg` and `Profile.jpg` may be treated as different filenames. Check spelling, capitalization, folders, and extensions.

## 23. Practice Project — Personal Profile Page

Create this folder structure:

```text
personal-profile/
├── index.html
└── images/
    └── profile.jpg
```

Add the following code to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Profile</title>
  </head>
  <body>
    <header>
      <h1>Your Name</h1>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#goals">Goals</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>About Me</h2>
        <img
          src="./images/profile.jpg"
          alt="Profile photo of Your Name"
          width="200"
        />
        <p>I am learning web development and this is my first website.</p>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <ul>
          <li>HTML</li>
          <li>Problem Solving</li>
          <li>Communication</li>
        </ul>
      </section>

      <section id="goals">
        <h2>My Learning Goals</h2>
        <ol>
          <li>Learn HTML.</li>
          <li>Learn CSS.</li>
          <li>Build a complete website.</li>
        </ol>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>

        <form action="/submit" method="post">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div>
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Your Name</p>
    </footer>
  </body>
</html>
```

Replace the sample information with your own content.

## 24. Extra Practice Tasks

1. Add a link to your GitHub profile.
2. Make the external link open in a new tab.
3. Add another section called **Hobbies**.
4. Add at least three hobbies in an unordered list.
5. Add a second page named `about.html`.
6. Link `index.html` and `about.html` to each other.
7. Add meaningful `alt` text to every image.
8. Inspect your page using DevTools.
9. Add a table showing your weekly learning schedule.
10. Add a contact form with correctly connected labels and inputs.

## 25. Knowledge Check

Answer these questions without looking at the guide:

1. What does HTML stand for?
2. Is HTML a programming language?
3. What is the difference between `<head>` and `<body>`?
4. Where does the `<title>` text appear?
5. What is an HTML attribute?
6. What do `href`, `src`, and `alt` do?
7. When should you use `<ol>` instead of `<ul>`?
8. What is the difference between a parent and a child element?
9. Why is semantic HTML useful?
10. What is the difference between `<section>` and `<div>`?
11. Which elements create a row, a header cell, and a data cell in a table?
12. Why should tables not be used for page layout?
13. Why must a label's `for` value match an input's `id`?
14. What is the purpose of the `name` attribute in a form control?
15. What is the difference between a form's `action` and `method` attributes?

## 26. Final Checklist

Before finishing your page, check that:

- The main file is named `index.html`.
- The document contains `<!DOCTYPE html>`.
- The `<html>` element has the correct `lang` attribute.
- All visible content is inside `<body>`.
- Headings follow a logical order.
- Tags are correctly nested and closed.
- Links have correct `href` values.
- Images have correct paths and meaningful `alt` text.
- Lists contain `<li>` elements.
- Semantic elements are used where appropriate.
- Tables contain meaningful headings and are only used for structured data.
- Every form control has an appropriate label and `name` attribute.
- Related radio buttons share the same `name`.
- The page works after saving and refreshing the browser.

## Useful Resources

- MDN HTML Guide: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content
- MDN HTML Elements Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
- HTML Validator: https://validator.w3.org/

Keep practicing by building small pages. HTML becomes easier when you write it yourself instead of only reading about it.
