// Убираем класс no-js
if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

// Скрипт для меню
const menu = document.querySelector('.main-navigation');
const menuBtn = document.querySelector('.main-navigation__toggle');
const body = document.querySelector('body');

if (document.querySelector('.no-js')) {
  body.classList.remove('no-js');
}

if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('main-navigation--open');
  })
}


async function supportWEBP() {
  const WEBP = new Image();
  await (WEBP.onload = WEBP.onerror = function () {
    if (WEBP.height == 2) {
      window.detectWebp = true;
      document.body.classList.add('webp')
      return true
    }
  })
  await (WEBP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAABQAQCdASoDAAIAAgA2JQBOgC6gAP73M8eLuxHGTv3eIAAA');
};
supportWEBP();
