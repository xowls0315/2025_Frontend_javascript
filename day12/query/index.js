// 자바스크립트로 html 생성, 스타일꾸미기, 내용넣기,
// html[기본구조], css[스타일], js[이벤트, 동적]

// 찾아줘 함수
const pikaButton = document.querySelector(".pika");
pikaButton.addEventListener("click", () => {
  alert("피카피카");
});

const pilButton = document.querySelector(".pil");
pilButton.addEventListener("click", () => {
  alert("파이파이");
});

const smileButton = document.querySelector(".smile");
smileButton.addEventListener("click", () => {
  smileButton.innerHTML === "😀"
    ? (smileButton.innerHTML = "😁")
    : (smileButton.innerHTML = "😀");
});
