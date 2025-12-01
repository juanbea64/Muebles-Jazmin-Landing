// Modal Carrusel para Portafolio
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const modalTitle = modal.querySelector(".modal-title");
  const carouselTrack = modal.querySelector(".modal-carousel-track");
  const dotsContainer = modal.querySelector(".modal-carousel-dots");
  const closeBtn = modal.querySelector(".modal-close");
  const prevBtn = modal.querySelector(".modal-carousel-btn.prev");
  const nextBtn = modal.querySelector(".modal-carousel-btn.next");
  const projects = document.querySelectorAll(".project[data-project]");

  let currentSlide = 0;
  let totalSlides = 0;
  let images = [];

  // Abrir modal al hacer click en un proyecto
  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const projectId = project.getAttribute("data-project");
      const projectName = project.querySelector("h3").textContent;
      const projectImages = JSON.parse(project.getAttribute("data-images") || "[]");

      openModal(projectName, projectImages);
    });
  });

  // Función para abrir el modal
  function openModal(title, imageArray) {
    images = imageArray;
    totalSlides = images.length;
    currentSlide = 0;

    // Actualizar título
    modalTitle.textContent = title;

    // Generar slides
    carouselTrack.innerHTML = "";
    images.forEach((src, index) => {
      const slide = document.createElement("div");
      slide.className = `modal-carousel-slide ${index === 0 ? "active" : ""}`;
      slide.innerHTML = `<img src="${src}" alt="${title} - Imagen ${index + 1}">`;
      carouselTrack.appendChild(slide);
    });

    // Generar dots
    dotsContainer.innerHTML = "";
    images.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = `modal-dot ${index === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Ir a imagen ${index + 1}`);
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    // Mostrar/ocultar controles si solo hay una imagen
    if (totalSlides <= 1) {
      prevBtn.classList.add("hidden");
      nextBtn.classList.add("hidden");
      dotsContainer.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      dotsContainer.classList.remove("hidden");
    }

    // Mostrar modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Función para cerrar el modal
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Función para ir a un slide específico
  function goToSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    // Actualizar slides
    const slides = carouselTrack.querySelectorAll(".modal-carousel-slide");
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });

    // Actualizar dots
    const dots = dotsContainer.querySelectorAll(".modal-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  // Event listeners para navegación
  prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

  // Cerrar modal
  closeBtn.addEventListener("click", closeModal);

  // Cerrar al hacer click fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar con tecla Escape y navegación con flechas
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;

    switch (e.key) {
      case "Escape":
        closeModal();
        break;
      case "ArrowLeft":
        goToSlide(currentSlide - 1);
        break;
      case "ArrowRight":
        goToSlide(currentSlide + 1);
        break;
    }
  });

  // Soporte para gestos táctiles (swipe)
  let touchStartX = 0;
  let touchEndX = 0;

  carouselTrack.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselTrack.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe izquierda - siguiente
        goToSlide(currentSlide + 1);
      } else {
        // Swipe derecha - anterior
        goToSlide(currentSlide - 1);
      }
    }
  }
});
