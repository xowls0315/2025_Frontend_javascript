// makeFood라는 함수를 만들고
// 요리준비!
// 요리함수실행!
// 요리끝!

// makeTaco
// 1. 또띠아 준비
// 2. 야채넣기
// 3. 고기넣기
// 4. 말기

const makeFood = (recipe) => {
  console.log("손씻기");
  console.log("요리준비!");
  console.log("불 준비");
  recipe();
  console.log("요리끝!");
};

const makeTaco = (x) => {
  console.log("1. 또띠아 준비");
  console.log("2. 야채넣기");
  console.log(`3. ${x}넣기`);
  console.log("4. 말기");
};

const makeRamen = (x) => {
  console.log("1. 물끓이기");
  console.log("2. 스프넣기");
  console.log("3. 면넣기");
  console.log(`4. ${x}넣기`);
};

const makeKimchiRice = () => {
  console.log("1. 밥 볶기");
  console.log("2. 김치 볶기");
  console.log("3. 참기름");
  console.log("4. 섞기");
};

const makeSomething = () => {
  console.log("아무 요리!");
};

// makeFood(makeTaco);
// makeFood(makeRamen);
// makeFood(makeTaco()); X

// makeFood(makeKimchiRice);

// 익명함수(일회성)
/* makeFood(() => {
  makeTaco();
  makeRamen();
}); */

/* makeFood(() => {
  makeTaco("🍳");
});

const makeTacoWithRamen = () => {
  makeTaco("🍢");
  makeRamen();
};

makeFood(makeTacoWithRamen); */

const makeFry = () => {
  console.log("계란 꺼내기");
  console.log("계란 깨기");
  console.log("후라이만들기");
};

makeFood(() => {
  makeTaco("🧇");
});

makeFood(() => {
  makeRamen("🥐");
});
