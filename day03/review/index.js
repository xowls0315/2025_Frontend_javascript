// 1. 유저에게 프롬프트로 두 숫자를 입력 받고
// 두 숫자의 합, 차, 곱, 제곱, 나누기에서 정수화 하는거까지 콘솔로 나타내기
const num1 = Number(prompt("첫 번째 숫자 입력: "));
const num2 = Number(prompt("두 번째 숫자 입력: "));
console.log(
  `두 수의 합: ${num1 + num2}, 두 수의 차: ${num1 - num2}, 두 수의 곱: ${
    num1 * num2
  }, 두 수의 제곱: ${num1 ** num2}, 두 수의 나누기: ${num1 / num2}`
);

// 2. 유저에게 프롬프트로 하나의 숫자를 입력 받고 홀수 또는 짝수인지 콘솔로 알려주기
const number = Number(prompt("숫자를 입력: "));
const oddeven = number % 2 == 0 ? "짝수" : "홀수";
console.log(`당신이 입력한 숫자는 ${oddeven} 입니다.`);

// 3. 유저에게 프롬프트로 양의 정수를 입력 받고 분:초 형태로 나타내기
const num = Number(prompt("양의 정수를 입력: "));
const min_num = Math.floor(num / 60);
const sec_num = num % 60;
console.log(`당신이 입력한 양의 정수는 ${min_num}분 ${sec_num}초 입니다.`);
