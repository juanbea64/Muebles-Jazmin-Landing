console.log("Bienvenido a Muebles Jazmin");

// Menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const closeBtn = document.querySelector(".nav-close");

  if (toggle) toggle.addEventListener("click", () => nav.classList.add("active"));
  if (closeBtn) closeBtn.addEventListener("click", () => nav.classList.remove("active"));
});

// Carrusel infinito
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(n) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  
  if (n >= slides.length) current = 0;
  else if (n < 0) current = slides.length - 1;
  else current = n;
  
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

// Botones prev/next
document.querySelectorAll(".carousel-btn.prev").forEach(btn => {
  btn.addEventListener("click", () => showSlide(current - 1));
});

document.querySelectorAll(".carousel-btn.next").forEach(btn => {
  btn.addEventListener("click", () => showSlide(current + 1));
});

// Dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// Auto-play cada 5 segundos
setInterval(() => showSlide(current + 1), 5000);