/** @format */

let slider = document.getElementById("slider");
let packet = document.getElementById("packet");
let btnRight = document.getElementById("slide-right");
let btnLeft = document.getElementById("slide-left");
btnLeft.addEventListener("click", () => {
  slider.scrollLeft -= 125;
});
btnRight.addEventListener("click", () => {
  slider.scrollLeft += 125;
});

const maxScroll = slider.scrollWidth - slider.clientWidth;
function autoplay() {
  if (slider.scrollLeft > maxScroll - 1) {
    slider.scrollLeft -= maxScroll;
  } else {
    slider.scrollLeft += 1;
  }
}
let play = setInterval(autoplay, 50);

