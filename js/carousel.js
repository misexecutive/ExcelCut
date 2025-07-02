// 🚀 Auto Image Carousel Slider
let currentSlide = 0;
const images = document.querySelectorAll(".carousel-image");

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  showSlide(currentSlide);
}

// Start slider
setInterval(nextSlide, 4000); // Change image every 4 seconds

// Show first image on load
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
