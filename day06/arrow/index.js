// 일반 함수
function hello(x) {
  return x + "안녕";
}

// 화살표(람다) 함수
const hello1 = (x) => {
  return x + "안녕!";
};

// 화살표함수
// 1. add (x,y) // 더하기
// 2. oddEven(x) // 홀짝구분
// 3. changeWord(x) // 10글자 이상 대문자, 아니면 소문자

const add = (x, y) => {
  return x + y;
};
console.log(add(5, 10));

const oddEven = (x) => {
  return x % 2 ? "홀수!" : "짝수!";
};
console.log(oddEven(2));
console.log(oddEven(3));

const changeWord = (x) => {
  return x.length >= 10 ? x.toUpperCase() : x.toLowerCase();
};
console.log(changeWord("sdknkfsdfdkldfnfsdkl"));
console.log(changeWord("saddsa"));

// const let var(function)
