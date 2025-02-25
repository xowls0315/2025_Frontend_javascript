// 1. x를 넣으면 x라서 럭키비키잖아~

function lucky(x) {
  return x + "라서 럭키비키잖아~";
}
console.log(lucky("학생이"));

// 2. x를 넣으면 뒤에 😁+x+😁를 돌려주기
const smile = function (x) {
  return "😁+" + x + "+😁";
};
console.log(smile("하하"));

// 3. x를 넣으면 해당 숫자의 두 배를 돌려주기
const double = (x) => {
  return x * 2;
};
console.log(double(5));

// 4. x가 홀수면 두 배 돌려주고, 짝수면 세 배 돌려주기
const oddeven = (x) => {
  if (x % 2 === 1) return x * 2;
  else return x * 3;
};
console.log(oddeven(1));
console.log(oddeven(2));

// 5. x가 3의 배수 또는 5의 배수이면 제곱을 돌려주고, 아니면 10 더해서 돌려주기
const three_five = (x) => {
  if (x % 3 === 0 || x % 5 === 0) return x ** 2;
  else return x + 10;
};
console.log(three_five(3));
console.log(three_five(5));
console.log(three_five(4));

// 6. x, y가 들어오면 x의 y제곱해서 돌려주기
const three_square = (x, y) => {
  return x ** y;
};
console.log(three_square(2, 3));

// 7. 배열이 들어오면 첫 번째 인덱스에 사탕으로 바꿔주기
const arrayfunction = (x) => {
  return (x[0] = "사탕");
};

console.log(arrayfunction(["라면", "짬뽕", "짜장면"]));
