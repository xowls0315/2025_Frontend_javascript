// 1. 홀수 또는 짝수를 알려주는 함수 만들기
const odd_even = (x) => {
  return x % 2 ? "홀수입니당" : "짝수입니당";
};

console.log(odd_even(1));
console.log(odd_even(2));

// 2. icecream 또는 coffee를 입력 받으면 "디저트" 돌려주고 아니면 "음식"을 돌려주는 함수 만들기
const dessert = (x) => {
  if (x === "icecream" || x === "coffee") return "디저트";
  else return "음식";
};

console.log(dessert("icecream"));
console.log(dessert("coffee"));
console.log(dessert("food"));

// 3. 함수와 오브젝트와 배열을 사용해서 아래 구현하기!
// 사용자로부터 영화 종류와 팝콘 종류를 입력받습니다.
// 각 영화, 팝콘의 가격은 다음과 같이 설정합니다

// 1: 액션영화 - 10000원, 2: 로맨틱 코미디 - 8000원, 3: 공포 영화 - 9000원
// 1: 치즈 팝콘 - 6000원, 2: 카라멜 팝콘 - 5000원, 3: 일반 팝콘 - 5000원

// 유저에게 영화와 팝콘을 입력을 받고
// 구매한 영화 내용, 팝콘의 이름 그리고 총 계산을 출력하는 프로그램을 구현하세요

const movie_program = (movieChocie, popcornChoice) => {
  const movies = [
    { name: "액션영화", price: 10000 },
    { name: "로맨틱코미디", price: 8000 },
    { name: "공포영화", price: 9000 },
  ];
  const popcorns = [
    { name: "치즈팝콘", price: 6000 },
    { name: "카라멜팝콘", price: 5000 },
    { name: "일반팝콘", price: 5000 },
  ];

  const movie = movies[movieChocie - 1];
  const popcorn = popcorns[popcornChoice - 1];

  const totalPrcie = movie.price + popcorn.price;

  return `구매한 영화: ${movie.name}, 구매한 팝콘: ${popcorn.name}, 총 계산: ${totalPrcie}원`;
};

console.log(movie_program(1, 2));
console.log(movie_program(2, 3));
console.log(movie_program(3, 1));

// 4. 유저에게 태어난 년도를 물어보고, 띠를 알려주는 함수 만들기!

// 2000 -> 용띠, 2001 -> 뱀띠, 1994 -> 개띠

const twelveYear = (year) => {
  // if (x % 12 === 0) return "당신은 원숭이띠";
  // else if (x % 12 === 1) return "당신은 닭띠";
  // else if (x % 12 === 2) return "당신은 개띠";
  // else if (x % 12 === 3) return "당신은 돼지띠";
  // else if (x % 12 === 4) return "당신은 쥐띠";
  // else if (x % 12 === 5) return "당신은 소띠";
  // else if (x % 12 === 6) return "당신은 호랑이띠";
  // else if (x % 12 === 7) return "당신은 토끼띠";
  // else if (x % 12 === 8) return "당신은 용띠";
  // else if (x % 12 === 9) return "당신은 뱀띠";
  // else if (x % 12 === 10) return "당신은 말띠";
  // else if (x % 12 === 11) return "당신은 양띠";

  const animal = [
    "원숭이띠",
    "닭띠",
    "개띠",
    "돼지띠",
    "쥐띠",
    "소띠",
    "호랑이띠",
    "토끼띠",
    "용띠",
    "뱀띠",
    "말띠",
    "양띠",
  ];
  return animal[year % 12];
};

console.log(twelveYear(2001));
console.log(twelveYear(2000));
console.log(twelveYear(2004));
console.log(twelveYear(2010));

// 유저에게 mbti묻기 (4번 묻기)
// 1. e 또는 i
// 2. s 또는 n
// 3. t 또는 f
// 4. j 또는 p
// 콘솔로 당신의 성격은 ~~적, ~~적, ~~적, ~~적 입니다!

const EorI = prompt("e 또는 i 입력: ");
const SorN = prompt("s 또는 n 입력: ");
const TorF = prompt("t 또는 f 입력: ");
const JorP = prompt("j 또는 p 입력: ");

// const first = EorI === "e" ? "외향적" : "내향적";
// const second = SorN === "s" ? "감각적" : "직관적";
// const third = TorF === "t" ? "사고적" : "감정적";
// const fourth = JorP === "j" ? "판단적" : "인식적";

const mbti = {
  e: "외향적",
  i: "내향적",
  s: "감각적",
  n: "직관적",
  t: "사고적",
  f: "감정적",
  j: "판단적",
  p: "인식적",
};

console.log(
  `당신은 ${mbti[EorI]}이고, ${mbti[SorN]}이고, ${mbti[TorF]}이고, ${mbti[JorP]} 입니다!`
);
