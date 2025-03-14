const wholeBtn = document.querySelector(".whole-i");
const firstBtn = document.querySelector(".first-i");
const secondBtn = document.querySelector(".second-i");
const thirdBtn = document.querySelector(".third-i");
const fourthBtn = document.querySelector(".fourth-i");
const fifthBtn = document.querySelector(".fifth-i");
const sixthBtn = document.querySelector(".sixth-i");
const realBtn = document.querySelector(".btn");

function checkRealBtn() {
  if (
    firstBtn.classList.contains("checked") &&
    secondBtn.classList.contains("checked") &&
    thirdBtn.classList.contains("checked") &&
    fourthBtn.classList.contains("checked")
  ) {
    realBtn.classList.add("on");
  } else {
    realBtn.classList.remove("on");
  }
}

wholeBtn.addEventListener("click", () => {
  wholeBtn.classList.toggle("checked");
  firstBtn.classList.add("checked");
  secondBtn.classList.add("checked");
  thirdBtn.classList.add("checked");
  fourthBtn.classList.add("checked");
  fifthBtn.classList.add("checked");
  sixthBtn.classList.add("checked");
  checkRealBtn();
});
firstBtn.addEventListener("click", () => {
  firstBtn.classList.toggle("checked");
  checkRealBtn();
});
secondBtn.addEventListener("click", () => {
  secondBtn.classList.toggle("checked");
  checkRealBtn();
});
thirdBtn.addEventListener("click", () => {
  thirdBtn.classList.toggle("checked");
  checkRealBtn();
});
fourthBtn.addEventListener("click", () => {
  fourthBtn.classList.toggle("checked");
  checkRealBtn();
});
fifthBtn.addEventListener("click", () => {
  fifthBtn.classList.toggle("checked");
});
sixthBtn.addEventListener("click", () => {
  sixthBtn.classList.toggle("checked");
});
