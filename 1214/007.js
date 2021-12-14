"use strict";

const screen = document.querySelector(".screen");
const line = document.querySelector(".line");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const msg = document.querySelector(".msg");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  msg.style.left = `${x}px`;
  msg.style.top = `${y}px`;
  msg.innerHTML = `x: ${x}, y: ${y}`;
});

document.addEventListener("click", (e) => {
  vertical.style.backgroundColor = "red";
  horizontal.style.backgroundColor = "red";
  msg.innerHTML = "Got ya!💥";

  document.addEventListener("mousemove", (e) => {
    vertical.style.backgroundColor = "#fff";
    horizontal.style.backgroundColor = "#fff";
  });
});
