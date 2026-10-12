"use strict";

console.log(document);
console.log(document.body);

const title = document.getElementById("title");
const description = document.querySelector(".description");
console.log(title);
// const changeButton = document.querySelector("#change-button");
const changeButton1 = document.querySelector(".missing");
console.log(changeButton1);

const buttons = document.querySelectorAll("button");
console.log(buttons);

for (const button of buttons) {
  console.log(button.textContent);
}

title.textContent = "Domით შეცვლილი სათაური";
description.textContent = "Domით შეცვლილი სათაური";
title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("highlight");
title.classList.toggle("highlight");
title.classList.toggle("highlight");

const changeButton = document.querySelector("#change-button");
const changeTheme = document.querySelector("#theme-button");

changeTheme.addEventListener("keydown", function () {
  title.classList.toggle("highlight");
});

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const message = document.querySelector(".message");

const taskList = document.querySelector("#task-list");
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  console.log(taskText);
  if (taskText === "") {
    message.textContent = "ჯერ შეიყვანე დავალება";
    return;
  }
  const item = document.createElement("li");
  const text = document.createElement("span");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  text.textContent = taskText;
  completeBtn.textContent = "შესრულებულია";
  deleteBtn.textContent = "წაშლა";
  completeBtn.type = "button";
  deleteBtn.type = "button";

  completeBtn.addEventListener("click", function () {
    text.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    item.remove();
  });

  item.append(text, completeBtn, deleteBtn);
  taskList.append(item);

  taskInput.value = "";
  message.textContent = "დავალება დაემატა";
});

const student = {
  name: "lika",
  score: 70,
  introduce() {
    console.log(`im ${this.name}`);
  },
  addPoints(points) {
    this.score += points;
  },
};

student.introduce();
student.addPoints(10);
console.log(student.score);

class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  introduce() {
    console.log(`im ${this.name}`);
  }
  addPoints(point) {
    this.score += point;
  }
}

const student1 = new Student("lika", 70);
const student2 = new Student("beka", 85);

student1.introduce();
student2.introduce();
student1.addPoints(10);
student1.addPoints(10);
student1.addPoints(10);
console.log(student1.score);

console.log(student1 === student2);

console.log(student1 instanceof Student);

// console.log("1");
// console.log("2");
// console.log("3");

console.log("1");
setTimeout(function () {
  console.log("2");
}, 2000);
console.log("3");

console.log("A");

setTimeout(function () {
  console.log("B");
}, 0);

Promise.resolve().then(function () {
  console.log("C");
});

console.log("D");

// https://jsonplaceholder.typicode.com/users

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);

  const userList = document.getElementById("users");

  users.forEach(function (user) {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
  });
}
getUsers();

// https://jsonplaceholder.typicode.com/photos?_limit=8
