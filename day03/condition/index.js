// condition(조건)
// 조건문 문법: if, switch, 삼항(?)
const num = +prompt("숫자 입력");
if (num > 0) {
  console.log("양수!");
} else if (num == 0) {
  console.log("0!");
} else {
  console.log("음수!");
}
console.log("끝!");
