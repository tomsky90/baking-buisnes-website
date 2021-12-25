/*hamburger manu*/
const bodyScroll = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const coverDiv = document.querySelector(".blur");
function change() {
  bodyScroll.classList.toggle("noScroll");
  hamburger.classList.toggle("hamburger-active");
  mobileNav.classList.toggle("m-nav-active");
  coverDiv.classList.toggle("active");
}

hamburger.addEventListener("click", change);

// baner picture
const welcomPicture = document.querySelector(".welcom img");

const welcomH1 = document.querySelector(".welcom h1");

//arrays with element to swap

const banerPicterToSwap = [
  "img/coffee-shop-1209863_640.jpg",
  "img/cake-1850011_640.jpg",
  "img/chocolate-cake-2872128_640.jpg",
];

const welcomH1ToSwap = [
  "Welcom to our Bakery",
  "We Love Baking",
  "Check out our offer",
];
/*baner animation*/
let activeElement = 0;

function banerAnimation() {
  activeElement++;
  if (activeElement === banerPicterToSwap.length) {
    activeElement = 0;
  }
  welcomPicture.src = banerPicterToSwap[activeElement];
  welcomH1.textContent = welcomH1ToSwap[activeElement];
  changeDot();
}
let intervalIndex = setInterval(banerAnimation, 4000);

const dots = [...document.querySelectorAll(".dots span")];

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    clearInterval(intervalIndex);
    welcomH1.textContent = welcomH1ToSwap[e.target.id];
    activeElement = e.target.id;
    welcomPicture.src = banerPicterToSwap[e.target.id];
    changeDot();
    intervalIndex = setInterval(banerAnimation, 4000);
  });
});

function changeDot() {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[activeElement].classList.add("active");
}
