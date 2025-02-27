// 기본: num, str, bool, null, undefined
// 참조: arr, obj, function

const bakery = {
  sale: 0,
  sellBread: function () {
    console.log("빵팔기 함수!");
    this.sale = this.sale + 1000;
  },
};
console.log(bakery.sale);
bakery.sellBread();
bakery.sellBread();
bakery.sellBread();
console.log(bakery.sale);

// cgv
// 영화 [미키17 - 10000, 퇴마록 - 9000, 캡틴 아메리카 - 8000]
// 매출: 0
// 영화 팔기 함수 => 번호를 받으면 ~~영화가 판매되었습니다! console

const cgv = {
  movie: [
    { name: "미키 17", price: 10000 },
    { name: "퇴마록", price: 9000 },
    { name: "캡틴 아메리카", price: 8000 },
  ],
  sale: 0,
  sellMovie: function (x) {
    console.log(`${this.movie[x - 1].name} 영화가 판매되었습니다!`);
    console.log(
      `총 매출은 ${(this.sale += this.movie[x - 1].price)}원 입니다!`
    );
  },
};

cgv.sellMovie(1);
cgv.sellMovie(2);
cgv.sellMovie(3);

// 어떤 것을 함수 ??
// 동사면 함수, 명사면 기본이나 배열, 객체

// 자동차라는 object
// 현재속도, 속도 올리기, 속도 내리기, 현재 속도 나타내기

const car = {
  velocity: 0,
  velocityUp: function (x) {
    console.log(
      `속력이 ${this.velocity}에서 ${this.velocity + x}으로 올랐습니다!`
    );
    this.velocity += 100;
  },
  velocityDown: function (x) {
    console.log(
      `속력이 ${this.velocity}에서 ${this.velocity - x}으로 올랐습니다!`
    );
    this.velocity -= 100;
  },
  velocityCheck: function () {
    console.log(`현재 속력은 ${this.velocity} 입니다!`);
  },
};

car.velocity;
car.velocityUp(100);
car.velocityUp(100);
car.velocityDown(100);
car.velocityCheck();

// obj & function
