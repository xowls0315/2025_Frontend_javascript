// 9개의 버튼이 있음

// box 높이와 넓이
// small, medium, large 버튼
// wh: 100px, wh: 200px, wh: 300px

// box의 배경색상
// red, blue, green 버튼

// box 모서리 둥근정도
// square, ellipse, circle 버튼
// border-radius: 0px, 10px, 9999px

const box = document.createElement("div");
box.style.border = "1px solid black";
document.body.appendChild(box);

const btn1List = [
  { name: "small", size: "100px" },
  { name: "medium", size: "200px" },
  { name: "large", size: "300px" },
];
btn1List.forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x.name;
  button.addEventListener("click", () => {
    box.style.width = `${x.size}`;
    box.style.height = `${x.size}`;
  });
  document.body.appendChild(button);
});
document.body.appendChild(document.createElement("br"));

const btn2List = [
  { name: "빨강", color: "red" },
  { name: "파랑", color: "blue" },
  { name: "초록", color: "green" },
];
btn2List.forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x.name;
  button.addEventListener("click", () => {
    box.style.backgroundColor = x.color;
  });
  document.body.appendChild(button);
});
document.body.appendChild(document.createElement("br"));

const btn3List = [
  { name: "square", size: "0px" },
  { name: "ellipse", size: "10px" },
  { name: "circle", size: "9999px" },
];
btn3List.forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x.name;
  button.addEventListener("click", () => {
    box.style.borderRadius = `${x.size}`;
  });
  document.body.appendChild(button);
});
