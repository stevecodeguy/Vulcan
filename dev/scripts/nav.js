const hamburger = document.getElementById('hamburger-container');
const navContainer = document.getElementsByTagName('nav')[0];

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