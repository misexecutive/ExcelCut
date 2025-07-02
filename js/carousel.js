const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function updateCarousel() {
  const imageWidth = carouselImages[0].clientWidth;
  const offset = -currentIndex * imageWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel();
}

window.addEventListener('load', () => {
  updateCarousel();
  setInterval(showNextImage, 3000);
});
