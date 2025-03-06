// 문자열 "myString"이 주어진다.
// "myString"에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고,
// "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return하는 solution 함수를 완성하세요.

// "abstract algebra" -> "AbstrAct AlgebrA"
// "PrOgRaMmErs" -> "progrAmmers"

const myString = prompt("문자열을 입력: ");

// const a = [...myString];
const solution = [...myString]
  .map((x) => {
    if (x == "a") return "A";
    if (x !== "A" && x === x.toUpperCase()) return x.toLowerCase();
    return x;
  })
  .join("");

console.log(solution);

// 오늘 해야 할 일이 담긴 문자열 배열 todo_list와
// 각각의 일을 지금 마쳤는지를 나타내는 boolean
// 배열 finished가 매개변수로 주어질때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return하는 solution2 함수를 작성하라

const todo_list = ["problemsolving", "practiceguitar", "swim", "studygraph"];
const finished = [true, false, true, false];
// result => ["praticeguitar", "studygraph"]

const solution2 = (todo_list, finished) =>
  todo_list.filter((x, i) => !finished[i]);

console.log(solution2(todo_list, finished));

// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서 있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때,
// 앞에서부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 하는 solution3 함수를 작성해라.
// 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함한다.

const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];
// result => ["nami", "vex"]

const solution3 = (names) => names.filter((x, i) => i % 5 == 0);
console.log(solution3(names));

// 정수 start_num과 end_num이 주어질때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution4 함수를 작성해라.

// start_num = 10;
// end_num = 3;
// result => [10, 9, 8, 7, 6, 5, 4, 3]

// const solution4 = (start_num, end_num) => {
//   const result = [];
//   for (let i = start_num; i >= 3; i--) {
//     result.push(i);
//   }
//   return result;
// };

const solution4 = (start_num, end_num) =>
  Array(start_num - end_num + 1)
    .fill(0)
    .map((x, i) => start_num - i);

console.log(solution4(10, 3));
