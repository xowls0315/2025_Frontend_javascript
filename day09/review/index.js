// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution1 함수를 완성해주세요.

const my_string = prompt("문자열을 입력: ");

const solution1 = [...my_string]
  .map((x) => {
    if (x === x.toUpperCase()) return x.toLowerCase();
    else if (x === x.toLowerCase()) return x.toUpperCase();
  })
  .join("");

console.log(solution1);

// 정수가 담긴 리스트 num_list가 주어질 때,
// 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을,
// 리스트의 길이가 10 이하이면 모든 원소의 곱을 return하도록 solution2 함수를 완성하라.
const num_list1 = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];
// result => 51
const num_list2 = [2, 3, 4, 5];
// result => 120

const solution2 = (list) => {
  if (list.length >= 11) return list.reduce((a, c) => a + c);
  else return list.reduce((a, c) => a * c);
};

console.log(solution2(num_list1));
console.log(solution2(num_list2));
