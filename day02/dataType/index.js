// // 1. 프롬프트로 한 변의 길이를 입력 받고
// // 콘솔로 정사각형의 둘레와 넓이 나타내기
// // answer) ~~길이는 둘레:~~, 넓이: ~~ 입니다.
// const side = prompt("한 변의 길이는?(cm)");
// const num_side = Number(side);
// console.log(
//   `정사각형의 한 변의 길이가 ${num_side}cm라면, 둘레: ${
//     4 * num_side
//   }cm, 넓이: ${num_side * num_side}cm2`
// );

// // 2. 프롬프트로 달러를 입력 받고 ex) 100$
// // 콘솔로 원화로 변환된 값으로 나타내기
// // answer) ~~ 달러는 ~~원 입니다.
// const dollar = prompt("달러를 입력하세요");
// const num_dollar = parseInt(dollar);
// console.log(`${num_dollar} 달러는 ${num_dollar * 1432.26} 원 입니다.`);

// // 3. 프롬프트로 출생년도를 물어보고 ~~년생 받고
// // 콘솔로 해당 출생년도의 나이를 출력하기
// // answer) ~~년생은 ~~살입니다.
// const birth = prompt("당신의 출생년도는?");
// const num_birth = parseInt(birth);
// console.log(`${num_birth}년생은 ${2026 - num_birth}살 입니다.`);

// 4. 프롬프트로 첫 번째 숫자 입력
// 프롬프트로 두 번째 숫자 입력
// 콘솔로 두 수의 합 나타내기
const first = +prompt("첫 번째 숫자 입력: ");
const second = +prompt("두 번째 숫자 입력: ");
console.log(`두 수의 합은 ${first + second}`);
