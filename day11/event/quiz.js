// w: 300, h: 300 box가 있습니다.
// 빨강버튼, 파랑버튼, 노랑버튼
// 버튼을 누르면 box의 배경색이 해당 버튼의 색깔로 바뀜
const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
box.style.border = "1px solid black";
document.body.appendChild(box);

const btnList = [
  { name: "빨강", color: "red" },
  { name: "파랑", color: "blue" },
  { name: "노랑", color: "yellow" },
];

btnList.forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x.name;
  button.addEventListener("click", () => {
    box.style.backgroundColor = x.color;
  });
  document.body.appendChild(button);
});
