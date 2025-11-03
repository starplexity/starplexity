// Simple slider rotation
const slides = document.querySelectorAll('.slides img');
let current = 0;

function showSlide() {
  slides.forEach((img,i)=> img.style.display = i===current ? 'block':'none');
  current = (current+1) % slides.length;
}

showSlide();
setInterval(showSlide, 5000);
