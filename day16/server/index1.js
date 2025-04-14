// 기본: string, number, bool, null, undefined
// 참조: obj, arr, document, element, ..., date, promise

/* const pokemon = (monster) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(monster);
    }, 2000);
  });

pokemon("라이츄").then((v) => console.log(v)); */

// Promise 타입을 돌려주는 함수를 정의하고
// 매개변수에 과일을 넣으면 5초뒤에 해당 과일이
// 콘솔로 ~~ 과일은 맛있따! 코드 만들기

/* const delicious = (fruit) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${fruit} 과일은 맛있따!`);
    }, 2000);
  });
delicious("🍎").then((v) => console.log(v)); */

// 피자라는 함수를 만들고 promise를 돌려줌
// 매개변수 name, sec를 받고 함수를 실행시키면
// sec초 뒤에 "name 피자 완성!" 콘솔로 나타내도록 코드 만들기!
/*const pizza = (name, sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${name} 피자 완성!`);
    }, sec);
  });
pizza("나폴리", 2000).then((v) => console.log(`${v} 너무 맛있어용`));*/

/* const dough = "피자 도우 만들기";
const cheese = "치즈 뿌리기";
const tomato = "토마토 뿌리기";
const bake = "피자 굽기";
const pizza = "피자 완성!!";

const test = (something, sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(something);
      resolve(something);
    }, sec);
  });

test(dough, 1000)
  .then((v) => test(cheese, 1000))
  .then((v) => test(tomato, 1000))
  .then((v) => test(bake, 1000))
  .then((v) => test(pizza, 1000)); */

// 치킨의 일생 코드 만들기 with promise
// 🥚🐣🐥🐓🍗

const egg = "🥚";
const eggHatch = "🐣";
const chick = "🐥";
const hen = "🐓";
const chicken = "🍗";

const chickenLife = (something, sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${something}의 탄생!!`);
      resolve(something);
    }, sec);
  });

chickenLife(egg, 1000)
  .then((v) => chickenLife(eggHatch, 1000))
  .then((v) => chickenLife(chick, 1000))
  .then((v) => chickenLife(hen, 1000))
  .then((v) => chickenLife(chicken, 1000));
