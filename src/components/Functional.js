let sliderWrapper = document.querySelector('.slider-wrapper');
let images = document.querySelectorAll('.slider-wrapper img');
let imageCount = images.length;
let currentIndex = 0;
let interval = 15000;

setInterval(() => {
  if (currentIndex < imageCount - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  sliderWrapper.style.transform = `translateX(-${currentIndex * (100 / imageCount)}%)`;
}, interval);
