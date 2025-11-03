// Slider
let slides=document.querySelectorAll('.slides .slide');
let current=0;
function showSlide(n){
  slides.forEach(s=>s.classList.remove('active'));
  slides[n].classList.add('active');
}
function nextSlide(){
  current=(current+1)%slides.length;
  showSlide(current);
}
function prevSlide(){
  current=(current-1+slides.length)%slides.length;
  showSlide(current);
}
document.querySelector('.next').addEventListener('click',nextSlide);
document.querySelector('.prev').addEventListener('click',prevSlide);
setInterval(nextSlide,5000);

// Burger menu
const burger=document.querySelector('.burger');
const nav=document.querySelector('nav');
burger.addEventListener('click',()=>{nav.classList.toggle('active');burger.classList.toggle('toggle');});
