const header = document.querySelector("header");
const logo = document.querySelector("#logo");
const upbar = document.querySelector(".upBar");
const downbar = document.querySelector(".downBar");

window.addEventListener("scroll", () => {
  const { scrollY } = window;
  if (scrollY > 0) {
    logo.src = "https://www.socar.kr/images/logo-blue.svg";
    header.classList.add("act");
    upbar.classList.add("blue");
    downbar.classList.add("blue");
    upbar.classList.remove("white");
    downbar.classList.remove("white");
  } else {
    logo.src = "https://www.socar.kr/images/logo-w.svg";
    header.classList.remove("act");
    upbar.classList.add("white");
    downbar.classList.add("white");
    upbar.classList.remove("blue");
    downbar.classList.remove("blue");
  }
});

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  upbar.classList.toggle("upbarX");
  downbar.classList.toggle("downbarX");
});

window.addEventListener("wheel", (e) => {
  const { deltaY } = e;
  if (deltaY > 0) {
    header.classList.add("onHidden");
    header.classList.remove("onShow");
  } else {
    header.classList.add("onShow");
    header.classList.remove("onHidden");
  }
});

const concept__card = document.querySelectorAll(".concept__card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("fadeOut");
        entry.target.classList.add("fadeIn");
      }
    });
  },
  { threshold: 0.5 }
);
concept__card.forEach((card) => observer.observe(card));

const banner = document.querySelector(".banner");
const skewer = document.querySelector(".skewer");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skewer.style.transform = "skew(-30deg) translateX(0px)";
      }
    });
  },
  { threshold: 0 }
);
observer2.observe(banner);
observer2.observe(skewer);
