const heroContents = document.querySelector(".hero > .contents");
const anytime = document.querySelector(".anytime");
const wantplace = document.querySelector(".wantplace");
const needtime = document.querySelector(".needtime");
const manycar = document.querySelector(".manycar");

const header = document.querySelector("header");

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

observer.observe(heroContents);
observer.observe(anytime);
observer.observe(wantplace);
observer.observe(needtime);
observer.observe(manycar);

window.addEventListener("scroll", () => {
  header.scrollY != 0
    ? (header.style.backgroundColor = "white")
    : (header.style.backgroundColor = "transparent");
});
