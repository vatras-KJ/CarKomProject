const menuIcons = document.querySelectorAll('.nav__menu__btn-element')
const menuNav = document.querySelector('.nav__menu')
const menuNavItem = document.querySelectorAll('.nav__menu__item')
const footerYear = document.querySelector('.footer__year')
const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie-btn')
const disclaimerBtn = document.querySelector('.disclaimer-btn')
const disclaimerText = document.querySelector('.disclaimer-text')

const switchIconMenu = () => {
	menuNav.classList.toggle('nav__menu-active')
}

menuIcons.forEach(btn => {
	btn.addEventListener('click', switchIconMenu)
})

menuNavItem.forEach(el => {
	el.addEventListener('click', switchIconMenu)
})

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	if (cookieEaten) {
		cookieBox.classList.add('hide-cookies')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide-cookies')
}

const handleCookieBoxDisclaimer = () => {
	disclaimerText.classList.toggle('hide-cookies')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

cookieBtn.addEventListener('click', handleCookieBox)
disclaimerBtn.addEventListener('click', handleCookieBoxDisclaimer)

showCookie()
handleCurrentYear()
AOS.init();