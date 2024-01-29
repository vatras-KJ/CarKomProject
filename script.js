const menuIcons = document.querySelectorAll('.nav__icons__element')
const menuNav = document.querySelector('.nav__menu')
const menuNavItem = document.querySelectorAll('.nav__menu__item')

const switchIconMenu = () => {
    menuIcons.forEach(icon => {
        icon.classList.toggle('nav__icons__element-hide')
    });
    menuNav.classList.toggle('nav__menu-active')
}

menuIcons.forEach(icon => {
    icon.addEventListener('click', switchIconMenu)
});

menuNavItem.forEach(item => {
    item.addEventListener('click', switchIconMenu)
});