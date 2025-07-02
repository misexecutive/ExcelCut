const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
const totalImages = carouselImages.length;

function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100; // Move by 100% of the container width
  carousel.style.transform = `translateX(${offset}%)`;
}

// Example: Auto-slide every 3 seconds
setInterval(showNextImage, 3000);

// You'd also need functions for previous/next buttons if desired.
