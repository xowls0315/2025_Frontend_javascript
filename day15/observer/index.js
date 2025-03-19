// entries 주시 대상 리스트
/* new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("화면에 보임~", entry.target);
      }
    });
  },
  { threshold: 0.5, rootMargin: "50px" }
); */

const box = document.querySelector(".box");
const hello = document.querySelector(".hello");

const action = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("box")) {
        entry.target.classList.remove("fade-out");
        entry.target.classList.add("fade-in");
        entry.target.addEventListener("transitionend", () => {
          hello.classList.remove("fade-out");
          hello.classList.add("fade-in");
        });
      }
    }
  });
};

const observer = new IntersectionObserver(action, { threshold: 1 });

observer.observe(box);
observer.observe(hello);
