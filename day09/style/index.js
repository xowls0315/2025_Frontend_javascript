// const btn = document.createElement("button");
// btn.innerHTML = "네이버~";
// btn.style.backgroundColor = "green";
// // btn.style.setProperty("backgroundColor", "green");

// document.body.appendChild(btn);

// 유저에게 원하는 버튼 배경색과 글씨색과 내용을 동시에 받고(띄어쓰기)
// 화면에 버튼을 구현하기

// const user = prompt("배경색, 글씨색, 내용 입력(띄어쓰기하기): ").split(" ");
// const user_background = user[0];
// const user_fontcolor = user[1];
// const user_content = user[2];

// const btn = document.createElement("button");
// btn.innerHTML = user_content;
// btn.style.backgroundColor = user_background;
// btn.style.color = user_fontcolor;
// document.body.appendChild(btn);

// const [backgroundColor, color, text] = prompt(
//   "배경색, 글씨색, 내용 입력(띄어쓰기하기): "
// ).split(" ");
// const user_background = backgroundColor;
// const user_fontcolor = color;
// const user_content = text;

// const btn = document.createElement("button");
// btn.innerHTML = user_content;
// btn.style.backgroundColor = user_background;
// btn.style.color = user_fontcolor;
// document.body.appendChild(btn);

// 유저에게 버튼 만들기 횟수를 물어보고,
// 횟수(ex: 3)만큼
// 빨강, 주황, 노랑, 초록, 파랑, 보라, 남색 // 내용과 글씨색이 일치
// 빨강, 주황, 노랑, 초록, 파랑, 보라, 남색 // 내용과 글씨색이 일치
// 빨강, 주황, 노랑, 초록, 파랑, 보라, 남색 // 내용과 글씨색이 일치
const user_num = Number(prompt("버튼 만들기 횟수 입력: "));

const colors = [
  { name: "빨강", color: "red" },
  { name: "주황", color: "orange" },
  { name: "노랑", color: "yellow" },
  { name: "초록", color: "green" },
  { name: "파랑", color: "blue" },
  { name: "남색", color: "navy" },
  { name: "보라", color: "purple" },
];

Array(user_num)
  .fill(0)
  .forEach(() => {
    colors.forEach((color) => {
      const tag = document.createElement("button");

      tag.style.color = color.color;
      tag.innerHTML = color.name;

      document.body.appendChild(tag);
    });
    document.body.appendChild(document.createElement("br"));
  });
