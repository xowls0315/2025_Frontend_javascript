const box = document.querySelector(".box");
const circle = document.querySelector(".circle");

const action = (entry) => {
  entry.forEach((x) => {
    if (x.isIntersecting) console.log("들어왔땅");
  });
};
const action2 = (entry) => {
  entry.forEach((x) => {
    if (x.isIntersecting) x.target.style.backgroundColor = "pink";
  });
};

const observer = new IntersectionObserver(action, {
  threshold: 1,
});
const observer2 = new IntersectionObserver(action2, {
  threshold: 0.5,
});

observer.observe(box);
observer2.observe(circle);
