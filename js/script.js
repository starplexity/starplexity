let slides = document.querySelectorAll('.slide');
let current = 0;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index){
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Initialize first slide
showSlide(current);

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Auto slide every 5 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);
