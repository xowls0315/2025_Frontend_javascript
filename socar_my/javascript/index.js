const heroContents = document.querySelector(".hero > .contents");
const anytime = document.querySelector(".anytime");
const wantplace = document.querySelector(".wantplace");
const needtime = document.querySelector(".needtime");
const manycar = document.querySelector(".manycar");
const skewer = document.querySelector(".startsocar__skewer");
const download = document.querySelector(".download");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("fade-out");
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.5 }
);
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("fade-out-right");
        entry.target.classList.add("fade-in-left");
      }
    });
  },
  { threshold: 0.5 }
);
observer.observe(heroContents);
observer2.observe(anytime);
observer2.observe(wantplace);
observer2.observe(needtime);
observer2.observe(manycar);
observer2.observe(skewer);
observer2.observe(download);

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
