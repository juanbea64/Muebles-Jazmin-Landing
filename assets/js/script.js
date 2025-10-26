let nombre = "Muebles Jazmin";
console.log(`Bienvenido a ${nombre}`);

document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.menu-toggle');
	const nav = document.querySelector('.main-nav');
	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			nav.classList.toggle('active');
		});
	}
});