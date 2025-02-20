// // quiz.html + quiz.js

// // 1. 프롬프트로 당신의 자주가는 커피점은?
// // 2. 프롬프트로 당신이 자주 시키는 커피는?
// // 3. 프롬프트로 당신이 자주 시키는 사이즈는?
// // 4. 프롬프트로 당신이 좋아하는 원두는?

// // => alert으로 ~~커피숍에 ~~사이즈 ~~커피를 시키고
// //    원두를 ~~으로 즐겨 마시는 당신은 커피 애호가!

// const shop = prompt("자주가는 커피점은?");
// const coffee = prompt("자주 시키는 커피는?");
// const size = prompt("자주 시키는 사이즈는?");
// const bean = prompt("좋아하는 원두는?");

// alert(
//   `${shop} 커피점에 ${size} 사이즈 ${coffee} 커피를 시키고 원두를 ${bean}으로 즐겨 마시는 당신은 커피 애호가?`
// );

// 자기소개 프롬프트

// 1. 당신의 이름은
// 2. 당신의 전공은?
// 3. 당신의 생년월일은?
// 4. 당신의 MBTI는?
// alert으로 이름: ~~, 전공: ~~, 생년월일: ~~, MBTI: ~~
// const name = prompt("your 이름은?");
// const major = prompt("your 전공은?");
// const birth = prompt("your 생년월일은?");
// const mbti = prompt("your MBTI는?");

// alert(`이름: ${name}, 전공: ${major}, 생년월일: ${birth}, MBTI: ${mbti}`);

// 배민 프롬프트
// 1. 주로 시키는 메뉴는?
// 2. 주로 시키는 프렌차이즈는?
// 3. 주로 시키는 배달 방식은?
// 4. 주로 걸리는 시간은?
// alert으로 ~~ 메뉴에서 ~~ 프렌차이즈 점에서 ~~ 방식으로 시키시는데 ~~ 시간이 걸리는군여
const menu = prompt("주로 시키는 메뉴는?");
const franchise = prompt("주로 시키는 프렌차이즈는?");
const way = prompt("주로 시키는 배달 방식은?");
const time = prompt("주로 걸리는 시간은?");
alert(
  `${menu} 메뉴를 ${franchise} 프렌차이즈 점에서 ${way} 방식으로 시키는데, ${time} 시간이 걸리는군여`
);
