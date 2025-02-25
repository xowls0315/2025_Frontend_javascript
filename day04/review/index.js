// 1. 사용자로부터 음료의 종류를 나타내는 정수 1~3과 투입한 금액을 나타내는 양의 정수를 입력받는다. 각 음료와 그 가격은 다음과 같다.
// 1 아메리카노 - 3000원
// 2 레몬에이드 - 4000원
// 3 카페라떼 - 3500원
// 사용자가 선택한 음료의 이름과 투입한 금액에서 음료 가격을 뺀 잔돈을 출력하는 프로그램을 작성하세요.

const money = Number(prompt("갖고있는 금액: "));
const coffee = Number(prompt("선택한 음료: "));
if (coffee === 1 && money >= 3000)
  console.log(`선택한 음료: ${coffee}, 잔돈: ${money - 3000}`);
else if (coffee === 2 && money >= 4000)
  console.log(`선택한 음료: ${coffee}, 잔돈: ${money - 4000}`);
else if (coffee === 3 && money >= 3500)
  console.log(`선택한 음료: ${coffee}, 잔돈: ${money - 3500}`);
else console.log(`없는 음료이거나 금액이 적습니다.`);

// 2. 사용자로부터 버스 노선의 종류를 나타내는 정수와 승객의 나이를 입력받는다. 노선별 기본 요금은 다음과 같다.
// 1 시내버스 - 1200원, 2 광역버스 - 2000원, 3 마을버스 - 1000원
// 연령별 할인율은 다음과 같다.
// 어린이(7세 이하) - 무료, 청소년(8~19세) - 30% 할인, 노인(65세 이상) - 무료
// 사용자의 나이와 선택한 노선에 따라 할인을 적용한 최종 버스 요금을 계산하여 출력하는 프로그램을 작성하세요. 단 아무것도 입력하지 않으면 자동으로 시내버스와 성인으로 계산된다.

const age = Number(prompt("나이를 입력: "));
const average_age = age || 25;
const bus = prompt("버스 노선을 입력: ");
const bus_route = bus || "시내버스";
if (average_age <= 7) console.log(`버스 요금은 ${0}원 입니다.`);
else if (average_age <= 19 && bus_route === "시내버스")
  console.log(`버스 요금은 ${840}원 입니다.`);
else if (average_age <= 19 && bus_route === "광역버스")
  console.log(`버스 요금은 ${1400}원 입니다.`);
else if (average_age <= 19 && bus_route === "마을버스")
  console.log(`버스 요금은 ${700}원 입니다.`);
else if (average_age >= 65) console.log(`버스 요금은 ${0}원 입니다.`);
else if (average_age < 65 && bus_route === "시내버스")
  console.log(`버스 요금은 ${1200}원 입니다.`);
else if (average_age < 65 && bus_route === "광역버스")
  console.log(`버스 요금은 ${2000}원 입니다.`);
else if (average_age < 65 && bus_route === "마을버스")
  console.log(`버스 요금은 ${1000}원 입니다.`);
