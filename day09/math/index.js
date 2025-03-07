// arr, set, obj, date, window, document, [math]
Math.abs(-10); // 10
Math.min(3, 1, 2, 3, 5, 5, 135); // 1
Math.max(3, 1, 23, 21, 412); // 412
Math.random(); // 0 ~ 1

// min~max 정수 랜덤하게 뽑는 함수
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max, min + 1) + min);
};
