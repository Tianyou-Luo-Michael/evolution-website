const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const audio = new Audio();
audio.src = "/audio/bruh.mp3"

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})