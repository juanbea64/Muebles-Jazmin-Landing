// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer para animaciones al scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Opcional: dejar de observar después de animar
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos los elementos con clase animate-on-scroll
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach(el => observer.observe(el));

  // Animación de conteo para números de estadísticas
  const statNumbers = document.querySelectorAll(".stat-number");
  
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;
        const hasPlus = text.includes("+");
        const hasPercent = text.includes("%");
        const number = parseInt(text.replace(/[^0-9]/g, ""));
        
        if (!isNaN(number) && !target.classList.contains("counted")) {
          target.classList.add("counted");
          animateCount(target, number, hasPlus, hasPercent);
        }
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => countObserver.observe(el));

  function animateCount(element, target, hasPlus, hasPercent) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      let display = Math.floor(current);
      if (hasPlus) display = "+" + display;
      if (hasPercent) display = display + "%";
      
      element.textContent = display;
    }, stepTime);
  }

  // Efecto parallax suave en el hero
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const heroOverlay = hero.querySelector(".hero-overlay");
      if (heroOverlay && scrolled < window.innerHeight) {
        heroOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    });
  }

  // Animación del header al hacer scroll
  const header = document.querySelector(".site-header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.background = "rgba(11, 22, 30, 0.95)";
      header.style.backdropFilter = "blur(10px)";
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    } else {
      header.style.background = "transparent";
      header.style.backdropFilter = "none";
      header.style.boxShadow = "none";
    }
    
    lastScroll = currentScroll;
  });

  // Efecto hover mejorado para las tarjetas de material
  const materialItems = document.querySelectorAll(".material-item");
  materialItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
      this.style.zIndex = "10";
    });
    item.addEventListener("mouseleave", function() {
      this.style.zIndex = "1";
    });
  });

  // Animación suave al cargar la página
  document.body.classList.add("loaded");
});

// Agregar clase al body cuando la página carga completamente
window.addEventListener("load", () => {
  document.body.classList.add("fully-loaded");
});
