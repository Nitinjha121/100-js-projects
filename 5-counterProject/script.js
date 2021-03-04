const number = document.querySelector(".number");
const btnLower = document.querySelector(".btn-lower");
const btnUpper = document.querySelector(".btn-upper");
let count = 0;

const colorChanger = function () {
  if (number.innerHTML > 0) {
    number.style.color = "#00FF00";
  } else if (number.innerHTML < 0) {
    number.style.color = "	#FF0000";
  } else {
    number.style.color = "#000";
  }
};

btnLower.addEventListener("click", () => {
  count--;
  number.innerHTML = count;
  colorChanger();
});

btnUpper.addEventListener("click", () => {
  count++;
  number.innerHTML = count;
  colorChanger();
});
