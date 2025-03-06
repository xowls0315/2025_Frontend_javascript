// 기본: number, string, boolean, null, undefined
// 참조: array, object

// 1. string <-> array
const a = [..."starbucks"];
console.log(a);
const b = "ice americano".split("");
console.log(b);
const c = Array.from("ice americano");
console.log(c);
