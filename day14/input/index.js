import { hasSpecialChar, lengthValid } from "./func.js";

const input = document.querySelector(".input");
const textNum = document.querySelector(".textNum");
const textCondition = document.querySelector(".textCondition");

input.addEventListener("input", () => {
  // textNum.innerText = input.value.length;
  // input.value.length > 10
  //   ? (textNum.style.color = "red")
  //   : (textNum.style.color = "black");

  // input.value.includes("!") ||
  // input.value.includes("@") ||
  // input.value.includes("#")
  //   ? (textCondition.style.color = "green")
  //   : (textCondition.style.color = "black");

  const { length } = input.value;
  textNum.innerText = length;
  textNum.style.color = lengthValid(length);
  textCondition.style.color = hasSpecialChar(input.value, "!@#");

  // textCondition.style.color = ["!", "@", "#"].some((x) =>
  //   input.value.includes(x)
  // )
  //   ? "green"
  //   : "black";
});

// 1. 숫자 10글자 넘으면 span 빨간색 아니면 검은색
// 2. 조건(!@#포함)이 합당하면 글씨색 초록색 아니면 검은색

// js
// 1. 변수
// 2. 데이터타입(기본/참조)
// 3. 연산자
// 4. 조건/반복
// 5. 함수
