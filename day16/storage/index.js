// localStorage.setItem("coffee", "latte");
// localStorage.setItem("cookie", "strawberry");
// localStorage.setItem("bread", JSON.stringify(["salt", "melon"]));

// // const a = localStorage.getItem("bread");
// // alert(a);

// // bread를 브라우저에
// // ul > li salt, li melon으로 나타내기
// const a = localStorage.getItem("bread");
// const b = JSON.parse(a);

// const ul = document.createElement("ul");

// b.forEach((v) => {
//   const li = document.createElement("li");
//   li.innerText = v;
//   ul.appendChild(li);
// });
// document.body.appendChild(ul);

// // localStorage.setItem(
// //   "menu",
// //   JSON.stringify({ name: "아메리카노", price: 2500 })
// // );

// 로컬스토리지에 todo value값이 저장되도록 하기

const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const { value } = input;
  localStorage.setItem("todo", JSON.stringify(value));
});
