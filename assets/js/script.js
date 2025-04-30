document.addEventListener('DOMContentLoaded', function () {
	var menuList = document.getElementById('lsm');
	menuList.style.display = 'none';
});

function toggleMenu() {
	var menuList = document.getElementById('lsm');
	if (menuList.style.display === 'none' || menuList.style.display === '') {
		menuList.style.display = 'flex';
	} else {
		menuList.style.display = 'none';
	}
};

function toggleoffMenu() {
	var menuList = document.getElementById('lsm');
	var close = document.getElementById('cmn');
	if (menuList.style.display === 'none' || menuList.style.display === '') {
		menuList.style.display = 'flex';
	} else {
		menuList.style.display = 'none';
	}
};