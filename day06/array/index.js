// object paradigm
// 기본: str, num, bool, undefined, null
// 참조: arr, obj, func, window

const menu = ["americano", "latte", "mint"];

menu.push("cocoa"); // 역할: 맨뒤 추가하기
menu.pop(); // 역할: 맨뒤 삭제하기
menu.slice(0, 2); // 역할: 0~1까지 배열 잘라서 돌려줌

const num = [2, 4, 6, 8, 10];

// 역할: 요소 바꾸기
num.map((x) => {
  return x * 2;
});

// 역할: 조건이 참이면 살리고, 거짓이면 다 없애기
const a2 = num
  .filter((x) => {
    return x > 5;
  })
  .map((x) => {
    return x + 10;
  });

console.log(a2);

/* const double = (x) => {
  return x * 2;
};
const plus10 = (x) => {
  return x + 10;
};

const a1 = num.map(double); // map 역할: 안의 요소들을 바꿔주기!
const a2 = num.map(plus10);

// 10보다 작으면 *2, 10보다 크면 *3 해서 바꾸기!
 const q1 = (x) => {
  return x < 10 ? x * 2 : x * 3;
};
const a3 = num.map(q1);
console.log(a3); 

const a3 = num.map((x) => {
  return x < 10 ? x * 2 : x * 3;
});

const a4 = num.map((x) => {
  return "😁";
}); */
