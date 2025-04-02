import Search from "./components/Search.jsx";

document.addEventListener('DOMContentLoaded', function () {
	const burgerBtn = document.querySelector('.burger-btn');
	const navMenu = document.querySelector('.nav-menu');

	burgerBtn.addEventListener('click', function () {
		this.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	document.addEventListener('click', function (e) {
		if (e.target.closest('.nav-menu') || e.target.closest('.burger-btn')) return;
		burgerBtn.classList.remove('active');
		navMenu.classList.remove('active');
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 970) {
			burgerBtn.classList.remove('active');
			navMenu.classList.remove('active');
		}
	});

	document.querySelectorAll('.nav-list a').forEach(link => {
		link.addEventListener('click', () => {
			burgerBtn.classList.remove('active');
			navMenu.classList.remove('active');
		});
	});
});