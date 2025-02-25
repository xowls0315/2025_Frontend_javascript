// function => 함수 => 기능 => 마술상자
// [input -> output]

function hello(x) {
  return x + " 안녕!";
}

const a = hello("강사");
console.log(a);

function add(x, y) {
  return x + y;
}
function minus(x, y) {
  return x - y;
}

console.log(minus(add(10, 10), add(3, 3))); // 14

function isAdult(x) {
  if (x > 19) return "성인";
  else return "미성년자";
}
