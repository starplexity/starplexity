// --- Hero Slider ---
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;
let slideInterval;

// Show slide function
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

// Next/Prev slide functions
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide every 5s
function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}
function stopSlider() {
  clearInterval(slideInterval);
}

// Initialize
showSlide(currentIndex);
startSlider();

// Manual controls
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopSlider();
  startSlider();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  stopSlider();
  startSlider();
});

// --- Burger Menu (Mobile) ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
