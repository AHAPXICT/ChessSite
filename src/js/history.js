let title;
let menuContainer;

window.addEventListener('resize', function () {
	if (window.innerWidth > 700) {
		title.removeEventListener('click', titleClick)
		hide('inline-block', 'active')
	}
	if (window.innerWidth <= 700) {
		title.addEventListener('click', titleClick)
		hide('none', undefined)
	}
});

window.addEventListener('load', () => {
	title = document.getElementById('left-menu-title');
	menuContainer = document.querySelector('.left-find-menu');
	if (window.innerWidth <= 700) {
		title.addEventListener('click', titleClick)
		hide('none', undefined)
	}
});

const titleClick = () => {
	if (title.tag === 'active') {
		hide('none', undefined)
	} else {
		hide('inline-block', 'active');
	}
}

function hide(display, tag) {
	menuContainer.childNodes.forEach((item) => {
		if (item.nodeName === 'SPAN' || item.nodeName === 'SELECT') {
			item.style.display = display;
		}
		title.tag = tag
	})
}
