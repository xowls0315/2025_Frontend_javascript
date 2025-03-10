// box(1px solid red) 클래스명을 가진 div에
// 세로로 유저에게 입력 받은 숫자만큼
// 넓이 100%, 높이 50px, 테두리 1px solid black
// 을 가진 mini_box 만들어서 넣기

const user_num = Number(prompt("숫자 입력: "));

const div = document.createElement("div");
div.className = "box";

Array(user_num)
  .fill()
  .forEach(() => {
    const div2 = document.createElement("div");
    div2.className = "mini_box";
    div.appendChild(div2);
  });

document.body.appendChild(div);
