// // fetch() -> return
// const coffee = fetch("https://api.sampleapis.com/coffee/hot")
//   .then((v) => v.json())
//   .then((v) => console.log(v));
// console.log(coffee);

// const getCoffee = async () => {
//   const response = await fetch("https://api.sampleapis.com/coffee/hot");
//   const data = await response.json();
//   return data;
// };

// const getBeer = async () => {
//   const response = await fetch("https://api.sampleapis.com/beers/ale");
//   const data = await response.json();
//   return data;
// };

// const getWine = async () => {
//   const response = await fetch("https://api.sampleapis.com/wines/reds");
//   const data = await response.json();
//   return data;
// };

// sync: 동기 코드, async: 비동기 코드
// 동기 코드 모두 실행 후에 비동기 코드 처리!

const API = [
  "https://api.sampleapis.com/coffee/hot",
  "https://api.sampleapis.com/beers/ale",
  "https://api.sampleapis.com/wines/reds",
];

const getSomething = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// async await 사용한 함수는 무조건 Promise 객체를 돌려줌

const getAlldrinks = async () => {
  const [coffee, beer, wine] = await Promise.all([
    API.forEach((v) => getSomething(v)),
  ]); // 동시에 시작하므로 총 5초밖에 안걸림!
  return { coffee, beer, wine };
  // const coffee = await getCoffee(); // 2초
  // const beer = await getBeer(); // 5초
  // const wine = await getWine(); // 5초 => 총 12초
  // return { coffee, beer, wine };
};

getAlldrinks().then((v) => console.log(v));

// console.log(getAlldrinks());
