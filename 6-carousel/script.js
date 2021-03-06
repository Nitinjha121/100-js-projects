const box = document.querySelector(".box");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const imgSrc = [
  "./img/img-1.jpg",
  "./img/img-2.jpg",
  "./img/img-3.jpg",
  "./img/img-4.jpg",
  "./img/img-5.jpg",
];

let count = 0;

const curImg = (ind) => (box.style.backgroundImage = `url(${imgSrc[ind]})`);

curImg(count);

const nextImg = function () {
  count++;
  if (count >= imgSrc.length) {
    count = 0;
    curImg(count);
  }
  if (count < 0) {
    count += imgSrc.length;
    curImg(count);
  }
  curImg(count);
};

const prevImg = function () {
  count--;
  const index = imgSrc.length + count;
  if (count <= -imgSrc.length) {
    count = 0;
    curImg(count);
  }
  if (count < 0) return curImg(index);

  curImg(count);
};

btnRight.addEventListener("click", nextImg);

btnLeft.addEventListener("click", prevImg);
