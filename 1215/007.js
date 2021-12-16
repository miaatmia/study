"use strict";

const line = document.querySelector(".line");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const msg = document.querySelector(".msg");

const targetRect = target.getBoundingClientRect();
console.log(targetRect);
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

const msgRect = msg.getBoundingClientRect();
console.log(msgRect);

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  vertical.style.left = 0;
  horizontal.style.top = 0;
  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;

  target.style.left = 0;
  target.style.top = 0;
  target.style.transform = `translate(${x - targetHalfWidth}px, ${
    y - targetHalfHeight
  }px)`;

  msg.style.left = 0;
  msg.style.top = 0;
  msg.style.transform = `translate(${x}px, ${y}px)`;

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
