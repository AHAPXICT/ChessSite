document.addEventListener('DOMContentLoaded', function () {
	const burgerBtn = document.querySelector('.burger-btn');
	const navMenu = document.querySelector('.nav-menu');
	const body = document.querySelector('body');
	const leftHeader = document.querySelector('.left-header');

	const res = function() {
		if (window.innerWidth > 991) {
			burgerBtn.classList.remove('active');
			navMenu.classList.remove('active');
			leftHeader.appendChild(navMenu);
		}
		if (window.innerWidth <= 991) {
			body.appendChild(navMenu);
		}
	}

	res()
	burgerBtn.addEventListener('click', function () {
		this.classList.toggle('active');
		navMenu.classList.toggle('active');
	});

	document.addEventListener('click', function (e) {
		if (e.target.closest('.nav-menu') || e.target.closest('.burger-btn')) return;
		burgerBtn.classList.remove('active');
		navMenu.classList.remove('active');
	});

	window.addEventListener('resize', res);

	document.querySelectorAll('.nav-list a').forEach(link => {
		link.addEventListener('click', () => {
			burgerBtn.classList.remove('active');
			navMenu.classList.remove('active');
		});
	});
});