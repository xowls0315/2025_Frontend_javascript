// 랜덤한 배경색상을 가진 버튼을 10개 만들기
// 컨텐츠는 "버튼"

const color = [..."1234567890abcdef"];

// min~max 정수 랜덤하게 뽑는 함수
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max, min + 1) + min);
};

const getColorRandom = () =>
  "#" + Array(6).fill(color[getRandom(0, color.length)]).join("");
// color[getRandom(0, color.length)];

Array(10)
  .fill(0)
  .forEach(() => {
    const tag = document.createElement("button");

    tag.style.backgroundColor = getColorRandom();
    tag.innerHTML = "버튼";

    document.body.appendChild(tag);
  });
