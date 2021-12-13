"use strict";
const box = document.getElementById("box");

function updateBox() {
  box.innerHTML = `
  window.screen: ${window.screen.width}, ${window.screen.height}<br>
  window.outer: ${window.outerWidth}, ${window.outerHeight}<br>
  window.inner: ${window.innerWidth}, ${window.outerHeight}<br>
  documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
  `;
}

window.addEventListener("resize", () => {
  updateBox();
});
