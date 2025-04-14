// 피자 만들기
const makeDough = (next) => {
  console.log("피자 도우 만들기");
  next();
};
const makeCheese = (next) => {
  console.log("치즈 뿌리기");
  next();
};
const makeTomato = (next) => {
  console.log("토마토 뿌리기");
  next();
};
const makeBake = () => {
  console.log("피자 굽기");
};

// 콜백지옥
/* makeDough(() => {
  setTimeout(() => {
    makeCheese(() => {
      setTimeout(() => {
        makeTomato(() => {
          setTimeout(() => {
            makeBake();
          }, 1000);
        });
      }, 3000);
    });
  }, 2000);
}); */

/* setTimeout(() => {
  makeDough();
}, 2000);
setTimeout(() => {
  makeCheese();
}, 4000);
setTimeout(() => {
  makeTomato();
}, 7000);
setTimeout(() => {
  makeBake();
}, 9000); */

/* makeDough(() => {
  makeCheese(() => {
    makeTomato(() => {
      makeBake();
    });
  });
}); */

// 🥚🐣🐥🐓🍗
// 각각 함수를 만들고
// 1 2 2 1 2초 별로 순서 보장되면서
// 콘솔로그에 찍기
const egg = (next) => {
  console.log("🥚");
  next();
};
const eggHatch = (next) => {
  console.log("🐣");
  next();
};
const chick = (next) => {
  console.log("🐥");
  next();
};
const hen = (next) => {
  console.log("🐓");
  next();
};
const chicken = () => {
  console.log("🍗");
};

egg(() => {
  setTimeout(() => {
    eggHatch(() => {
      setTimeout(() => {
        chick(() => {
          setTimeout(() => {
            hen(() => {
              setTimeout(() => {
                chicken();
              }, 2000);
            });
          }, 2000);
        });
      }, 2000);
    });
  }, 2000);
});
