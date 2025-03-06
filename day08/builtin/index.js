// 컴퓨터: 휴지통, 내 pc, 계산기
// 아이폰: 설정, ...
// built-in Object:
// Number, String, Boolean
// Array, Object, Date, Set

// const a = new Date();
// console.log(a.toLocaleString());

const a = new Set(); // 중복 허용 안됨
a.add(1);
a.add(2);
a.add(3);
a.add(1);
console.log(a);

// 배열에서 중복 제거 로직
const b = [...new Set([1, 2, 3, 1, 2])];
console.log(b);
