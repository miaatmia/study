"use strict";

// 1) Display a timestamp on top
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
const time = current.getHours() + ":" + current.getMinutes();

document.querySelector(".timestamp").innerHTML = date + time;

// 2) Add a book to list that haven't read
const btn = document.querySelector("button");
const li = document.querySelector("li");
const listsNotRead = document.querySelector(".not-read ul");
const input = document.querySelector("input");

// 2-1 function to make a list
const addList = () => {
  const createList = document.createElement("li");
  listsNotRead.appendChild(createList);

  const txt = document.createTextNode(input.value);
  createList.appendChild(txt);
};

// 2-2) Add list when press the (+) button
btn.addEventListener("click", addList);

// 2-3) input창 입력내용 삭제

// 2-4) 엔터 누르면 버튼 클릭

// 3) Remove or Move to other list
// 3-1) remove from read book list

// 4) Night shift during 6PM - 6AM
const paper = document.querySelector(".paper");
const body = document.querySelector("body");

if (current.getHours() < 6 || current.getHours() > 17) {
  document.querySelector(".night").innerHTML = "🌙";
  paper.style.backgroundColor = "#FFDC73";
  body.style.backgroundColor = "rgb(44, 51, 155)";
}
