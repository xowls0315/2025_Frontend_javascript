// 복습 퀴즈
// 구글에 노스페이스 검색
// 헤더에 여성 긴팔티 클릭

const card = document.createElement("div");
card.style.border = "1px solid black";
card.style.width = "200px";
card.style.height = "400px";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.alignItems = "center";
document.body.appendChild(card);

const card__img = document.createElement("img");
card__img.style.width = "100%";
card__img.style.height = "40%";
card__img.style.marginBottom = "30px";
card__img.src =
  "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80A_NT7TQ80A_hover.jpg?browse";
card.appendChild(card__img);

const card__container = document.createElement("div");
card.appendChild(card__container);

const container__title = document.createElement("span");
container__title.innerText = "W'S VERDI L/S R/TEE";
container__title.style.fontSize = "18px";
card__container.appendChild(container__title);

container__title.appendChild(document.createElement("hr"));

const btnList = [
  {
    color: "black",
    src: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80A_NT7TQ80A_hover.jpg?browse",
  },
  {
    color: "beige",
    src: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80B_NT7TQ80B_hover.jpg?browse",
  },
  {
    color: "brown",
    src: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80C_NT7TQ80C_hover.jpg?browse",
  },
];

let previousImage = card__img.src;
btnList.forEach((x) => {
  const container__color = document.createElement("button");
  container__color.style.width = "30px";
  container__color.style.height = "30px";
  container__color.style.borderRadius = "9999px";
  container__color.style.marginTop = "20px";
  container__color.style.backgroundColor = x.color;
  container__color.style.border = `2px solid black`;
  container__color.style.marginRight = " 10px";

  // hover 상태일 때 이미지 변경
  container__color.addEventListener("mouseenter", () => {
    previousImage = card__img.src; // 현재 이미지를 저장 (hover 전에)
    card__img.src = x.src; // hover된 색상에 맞는 이미지로 변경
  });

  // hover를 벗어날 때 이전 이미지로 돌아가기
  container__color.addEventListener("mouseleave", () => {
    card__img.src = previousImage; // hover 벗어날 때 이전 이미지로 복원
  });

  // 클릭 시에도 이미지 변경
  container__color.addEventListener("click", () => {
    previousImage = x.src; // 클릭된 색상의 이미지로 설정
    card__img.src = x.src;
  });
  card__container.appendChild(container__color);
});
