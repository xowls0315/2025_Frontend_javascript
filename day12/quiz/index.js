const americanoButton = document.querySelector(".americano");
const latteButton = document.querySelector(".latte");
const mintButton = document.querySelector(".mint");
const totalPrice = document.querySelector(".totalPrice");
let total = 0;

americanoButton.addEventListener("click", () => {
  console.log("아메리카노(2000원)을 구매했습니다.");
  total += 2000;
  totalPrice.innerHTML = `총 금액: ${total} 원`;
});
latteButton.addEventListener("click", () => {
  console.log("라떼(3000원)을 구매했습니다.");
  total += 3000;
  totalPrice.innerHTML = `총 금액: ${total} 원`;
});
mintButton.addEventListener("click", () => {
  console.log("민트(3500원)을 구매했습니다.");
  total += 3500;
  totalPrice.innerHTML = `총 금액: ${total} 원`;
});

const resetButton = document.querySelector(".reset");
const buyButton = document.querySelector(".buy");

resetButton.addEventListener("click", () => {
  console.log("구매를 초기화했습니다.");
  total = 0;
  totalPrice.innerHTML = `총 금액: ${total} 원`;
});
buyButton.addEventListener("click", () => {
  alert(`총 구매금액은 ${total}원 입니다!`);
});
