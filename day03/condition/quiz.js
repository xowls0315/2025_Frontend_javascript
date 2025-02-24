// 유저에게 월[month]을 입력 받고
// 3,4,5를 입력받으면 봄!
// 6,7,8을 입력받으면 여름!
// 9,10,11를 입력받으면 가을!
// 12,1,2를 입력받으면 겨울!
// 그 외는 그런 계절 없어요 출력
const month = Number(prompt("월을 입력: "));
if (month === 3 || month === 4 || month === 5) console.log("봄!");
else if (month === 6 || month === 7 || month === 8) console.log("여름!");
else if (month === 9 || month === 10 || month === 11) console.log("가을!");
else if (month === 12 || month === 1 || month === 2) console.log("겨울!");
else console.log("그런 계절 없습니다.");

// 유저에게 나이를 입력 받고
// 7살 이하면 유치원생!
// 8~13 이면 초등학생!
// 14~19 이면 중고등학생!
// 그 외는 성인!
const age = Number(prompt("나이를 입력: "));
if (age <= 7) console.log("유치원생!");
else if (age <= 13) console.log("초등학생!");
else if (age <= 19) console.log("중고등학생!");
else console.log("성인!");

// 유저에게 숫자를 입력받고
// 양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수, 0
const num = Number(prompt("숫자를 입력: "));
if (num > 0 && num % 2 === 1) console.log("양의 홀수");
else if (num > 0 && num % 2 === 0) console.log("양의 짝수");
else if (num < 0 && num % 2 === -1) console.log("음의 홀수");
else if (num < 0 && num % 2 === 0) console.log("음의 짝수");
else console.log("0!");
