const hamburger = document.getElementsByClassName('menu')[0];
const nav = document.getElementsByTagName('nav')[0];

function openClose() {
    if (hamburger.classList.contains('close-menu') || hamburger.classList.contains('open-menu')) {
        hamburger.classList.toggle('close-menu');
        hamburger.classList.toggle('open-menu');
    } else {
        hamburger.classList.add('open-menu');
    }

    if (hamburger.classList.contains('open-menu')) {
        nav.classList.remove('animateCloseMenu');
        nav.classList.add('animateOpenMenu');
    } else {
        nav.classList.remove('animateOpenMenu');
        nav.classList.add('animateCloseMenu');
    }
}

hamburger.addEventListener('click', openClose);