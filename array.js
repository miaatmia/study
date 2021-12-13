"use strict";

const fruits = ["🍌", "🍉", "🥝"];

// 배열을 출력하는 여러가지 방법들
console.log("A) for");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("B) for of");
for (let fruit of fruits) {
  console.log(fruit);
}

console.log("C) forEach()");
fruits.forEach((fruit) => console.log(fruit));

// 배열 삭제 OR 삽입
fruits.push("🫐");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("🫐");
console.log(fruits);

// 💡 shift, unshift 는 pop, push 보다 훨씬 느리다.

fruits.splice(1, 2, "🍑");
console.log(fruits);

// 배열 검색
// lastOfIndex : 동일한 값이 여러개 있을때 가장 마지막 값이 어딨는지
