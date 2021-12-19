"use strict";

// 1) Real time timestamp
const current = new Date();
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const date =
  current.getFullYear() +
  "." +
  (current.getMonth() + 1) +
  "." +
  current.getDate() +
  " " +
  week[current.getDay()] +
  " ";
const time =
  current.getMinutes() < 10
    ? current.getHours() + ":" + "0" + current.getMinutes()
    : current.getHours() + ":" + current.getMinutes();

document.querySelector(".timestamp").innerHTML = date + time;

// 2) Add a book to list(haven't read)
const input = document.querySelector(".input");
const lists = document.querySelector(".lists");
const btnAdd = document.querySelector(".add");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const list = createList(text);

  lists.appendChild(list);

  list.scrollIntoView();

  input.value = "";
  input.focus();
}

function createList(text) {
  const lists = document.createElement("ul");
  lists.setAttribute("class", "lists");

  const list = document.createElement("li");
  list.setAttribute("class", "list");

  const title = document.createElement("span");
  title.setAttribute("class", "title");
  title.innerText = text;

  // 3) Delete & Check a list

  const btnCheck = document.createElement("button");
  btnCheck.setAttribute("class", "btn check");
  btnCheck.innerHTML = '<i class="far fa-check-circle"></i>';
  btnCheck.addEventListener("click", () => {
    title.classList.toggle("checked");
  });

  const btnDel = document.createElement("button");
  btnDel.setAttribute("class", "btn del");
  btnDel.innerHTML = '<i class="far fa-trash-alt"></i>';
  btnDel.addEventListener("click", () => {
    list.remove();
  });

  list.appendChild(title);
  list.appendChild(btnCheck);
  list.appendChild(btnDel);
  return list;
}

btnAdd.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") onAdd();
});

// 4) Night screen mode (from 6PM to 6AM)
const paper = document.querySelector(".paper");
const body = document.querySelector("body");
const night = document.querySelector(".night");

if (current.getHours() < 6 || current.getHours() > 17) {
  night.innerHTML = '<i class="fas fa-moon"></i>';
  paper.style.backgroundColor = "#FFDC73";
  body.style.backgroundColor = "rgb(44, 51, 155)";
}
