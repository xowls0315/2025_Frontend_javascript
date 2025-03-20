const hero__sentence = document.querySelectorAll(".hero__sentence > span");
const anytime = document.querySelector(".anytime");
const wantplace = document.querySelector(".wantplace");
const needtime = document.querySelector(".needtime");
const manycar = document.querySelector(".manycar");

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

hero__sentence.forEach((sentence) => observer.observe(sentence));
observer.observe(anytime);
observer.observe(wantplace);
observer.observe(needtime);
observer.observe(manycar);
