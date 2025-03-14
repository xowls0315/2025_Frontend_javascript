const dentBtn = document.querySelector(".dent");
const goldBtn = document.querySelector(".gold");
const exchangeBtn = document.querySelector(".exchange");

dentBtn.addEventListener("click", () => {
  dentBtn.classList.toggle("checked");
  goldBtn.classList.remove("checked");
  exchangeBtn.classList.remove("checked");
});
goldBtn.addEventListener("click", () => {
  goldBtn.classList.toggle("checked");
  dentBtn.classList.remove("checked");
  exchangeBtn.classList.remove("checked");
});
exchangeBtn.addEventListener("click", () => {
  exchangeBtn.classList.toggle("checked");
  dentBtn.classList.remove("checked");
  goldBtn.classList.remove("checked");
});
