// Находим кнопку
const btn = document.querySelector('#btn-mobile-nav');

// Находим картинку
const mobileBtnImg = document.querySelector('#mobile-nav-img');

// Находим мобильную навигацию
const mobileNav = document.querySelector('#mobile-nav');

// Находим шапку
const header = document.querySelector('#header');

// Добавляем событие по клику
btn.addEventListener('click', function() {
    btn.classList.toggle('open');
    mobileNav.classList.toggle('open');
    header.classList.toggle('header-white-bg');
    document.body.classList.toggle('no-scroll');

    if (btn.classList.contains('open')) {
        mobileBtnImg.src = './img/mobile-nav/nav-close.svg'
    } else {
        mobileBtnImg.src = './img/mobile-nav/nav-open.svg'
    }

})