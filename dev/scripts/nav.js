const hamburger = document.getElementsByClassName('menu')[0];

function openClose() {
    if (hamburger.classList.contains('close-menu') || hamburger.classList.contains('open-menu')) {
        hamburger.classList.toggle('close-menu');
        hamburger.classList.toggle('open-menu');
    } else {
        hamburger.classList.add('open-menu');
    }
}

hamburger.addEventListener('click', openClose);