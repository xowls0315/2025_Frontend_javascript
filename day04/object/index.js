// key - value
// 문자, 정수 - 아무타입 가능
const coffee = {
  name: "아메리카노",
  price: 2500,
  shots: 2,
  hascaffein: true,
  ingredients: ["물", "커피콩"],
};

coffee["price"]; // 2500
coffee.price; // 2500

console.log(`샷: ${coffee.shots}, 성분: ${coffee.ingredients[1]}`);

// 자동차를 오브젝트 타입으로 만들기!
// 회사:
// 차이름:
// 옵션:
// 연식:
// 연비:
const car = {
  company: "현대",
  model: "소나타",
  options: ["내비게이션", "후방 카메라", "스마트 키"],
  year: 2023,
  fuelEfficiency: 15.5, // km/l
};
console.log(
  `차량 정보: ${car.company} ${car.model}, 연식: ${car.year}, 연비: ${car.fuelEfficiency} km/l`
);
console.log(`옵션: ${car.options.join(", ")}`);

// car.coffee // undefined

car.people = 4; // people: 4 - 추가
delete car.options; // 삭제
car.fuelEfficiency = 20; // fuelEfiiciency: 20 - 변경
