console.log('Bienvenido a Muebles Jazmin');

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const closeBtn = document.querySelector('.nav-close');
  const burguer = toggle ? toggle.querySelector('img') : null;
  
  // Crear backdrop si no existe
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  // Abrir menú
  const openMenu = () => {
    nav.classList.add('active');
    backdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';
     if (burguer) burguer.style.display = 'none';
  };

  // Cerrar menú
  const closeMenu = () => {
    nav.classList.remove('active');
    backdrop.classList.remove('visible');
    document.body.style.overflow = '';
    if (burguer) burguer.style.display = '';
  };

  // Event listeners
  if (toggle) toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);
});