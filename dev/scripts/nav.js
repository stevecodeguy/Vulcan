const hamburger = document.getElementsByClassName('menu')[0];
const navContainer = document.getElementsByClassName('svg-nav-container')[0];

function openClose() {
    if (hamburger.classList.contains('close-menu') || hamburger.classList.contains('open-menu')) {
        hamburger.classList.toggle('close-menu');
        hamburger.classList.toggle('open-menu');
    } else {
        hamburger.classList.add('open-menu');
    }

    if (hamburger.classList.contains('open-menu')) {
        navContainer.classList.remove('animateCloseMenu');
        navContainer.classList.add('animateOpenMenu');
    } else {
        navContainer.classList.remove('animateOpenMenu');
        navContainer.classList.add('animateCloseMenu');
    }
}

hamburger.addEventListener('click', openClose);