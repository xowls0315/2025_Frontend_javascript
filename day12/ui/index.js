const btn = document.querySelector(".btn");
const aside = document.querySelector("aside");

btn.addEventListener("click", () => {
  aside.classList.toggle("close");
});
