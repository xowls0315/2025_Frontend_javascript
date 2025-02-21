// 1번 퀴즈
const weekend_work = prompt("주말에 할 일은?");
const weekend_food = prompt("주말에 먹고싶은 것은?");
console.log(
  `주말에 할 일: ${weekend_work}, 주말에 먹고 싶은 음식: ${weekend_food}`
);

// 2번 퀴즈
const age = prompt("당신의 나이는?");
const num_age = Number(age);
console.log(`${num_age}살 나이는 ${2025 - num_age + 1}년생 이군요!`);
