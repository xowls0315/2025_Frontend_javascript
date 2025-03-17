const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

// 🔑  🔒
btn.addEventListener("click", () => {
  // if (input.type === "text") {
  //   input.type = "password";
  //   btn.innerHTML = "🔒";
  // } else {
  //   input.type = "text";
  //   btn.innerHTML = "🔑";
  // }
  input.type === "text"
    ? ((input.type = "password"), (btn.innerHTML = "🔒"))
    : ((input.type = "text"), (btn.innerHTML = "🔑"));
});
