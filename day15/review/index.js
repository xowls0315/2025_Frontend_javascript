const input = document.querySelector(".input");
const eye = document.querySelector(".eye");
const textNum = document.querySelector(".textNum");
const textCondition = document.querySelector(".textCondition");
const textLength = document.querySelector(".textLength");

eye.addEventListener("click", () => {
  const { type } = input;
  input.type = type == "text" ? "password" : "text";
  const { innerText } = eye;
  eye.innerText = innerText == "👓" ? "🥽" : "👓";
});

input.addEventListener("input", () => {
  textNum.style.color = [..."0123456789"].some((x) => input.value.includes(x))
    ? "green"
    : "#efefef";

  textCondition.style.color = [..."!@$%^*_+~"].some((x) =>
    input.value.includes(x)
  )
    ? "green"
    : "#efefef";

  textLength.style.color =
    input.value.length >= 8 && input.value.length <= 20 ? "green" : "#efefef";
});
