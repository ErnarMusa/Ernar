const burgerButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger__menu');
const body = document.body;

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger__menu--open');
  body.classList.toggle('no-scroll');
});

