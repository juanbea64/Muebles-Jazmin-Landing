console.log("Bienvenido a Muebles Jazmin");

// Menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".menu-toggle");
  const closeBtns = document.querySelectorAll(".nav-close");

  // When a hamburger is clicked, open the corresponding nav and hide that hamburger
  toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      const header = toggle.closest('.site-header');
      const nav = header ? header.querySelector('.main-nav') : document.querySelector('.main-nav');
      if (!nav) return;
      nav.classList.add('active');
      // hide this toggle while menu is open
      toggle.classList.add('hidden');
    });
  });

  // When a close button is clicked, close the nav and restore the hamburger
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const header = btn.closest('.site-header');
      const nav = header ? header.querySelector('.main-nav') : document.querySelector('.main-nav');
      if (!nav) return;
      nav.classList.remove('active');
      const toggle = header ? header.querySelector('.menu-toggle') : document.querySelector('.menu-toggle');
      if (toggle) toggle.classList.remove('hidden');
    });
  });
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