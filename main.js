const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMemu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click',togglemobileMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu() {
    mobileMemu.classList.toggle('inactive');
}