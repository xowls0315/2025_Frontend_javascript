// 영화 티켓 예매 시스템
// 사용자로부터 영화 종류를 나타내는 정수 1~3과 나이를 입력받습니다. 각 영화와 가격은 다음과 같이 설정한다.
// 1: 액션 영화 - 10000원, 2: 로맨틱 코미디 - 8000원, 3: 공포 영화 - 9000원
// 나이에 따른 할인율은 다음과 같다.
// 13세 미만: 50% 할인, 60세 이상: 30% 할인
// 사용자의 나이와 선택한 영화에 따라 할인을 적용한 최종 티켓 가격을 계산하여 출력하는 프로그램을 작성하세요.

const movie_type = [
  { name: "액션영화", price: 10000 },
  { name: "로맨틱 코미디", price: 8000 },
  { name: "공포 영화", price: 9000 },
];

const movie = Number(prompt("영화 종류 입력: ")) - 1;
const age = Number(prompt("나이 입력: "));

if (movie >= 0 && movie < 3) {
  let ticketPrice = movie_type[movie].price;

  if (age < 13) {
    ticketPrice *= 0.5;
  } else if (age >= 60) {
    ticketPrice *= 0.7;
  }

  console.log(`${movie_type[movie].name}의 최종 티켓 가격: ${ticketPrice}원`);
} else {
  console.log("유효하지 않은 영화 번호입니다.");
}
