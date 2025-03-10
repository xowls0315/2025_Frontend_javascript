// 퀴즈
// 1. 유저에게 좋아하는 아이돌 그룹 멤버들을 입력 받고,
// 아이돌 멤버의 버튼만큼 화면에 만들기
const user_idol_member = prompt("좋아하는 아이돌 그룹 멤버들을 입력: ").split(
  " "
);
user_idol_member.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  document.body.appendChild(btn);
});

document.body.appendChild(document.createElement("br"));

// 2. 유저에게 좋아하는 색상 5가지 영어로 입력 받고,
// 그 색상을 가진 버튼들을 화면에 만들기
const user_color = prompt("좋아하는 색상 5가지를 영어로 입력: ").split(" ");
user_color.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerHTML = "버튼";
  btn.style.backgroundColor = x;
  document.body.appendChild(btn);
});
