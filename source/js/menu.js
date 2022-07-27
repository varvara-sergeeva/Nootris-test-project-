"use strict";
const burgerToggle = document.querySelector('.navigation__burger');
const burgerMenu = document.querySelector('.navigation__menu');
const burgerBackStatic = document.querySelector('.page');
const onMediaTablet = window.matchMedia('(min-width: 992px)');

onMediaTablet.addEventListener('change', closeBurgerOnTablet);

burgerToggle.addEventListener('click', () => {
  burgerToggle.classList.toggle('navigation__burger--active');
  burgerMenu.classList.toggle('menu--active');
  burgerBackStatic.classList.toggle('page--burger');
});

function closeBurgerOnTablet(e) {
  if (e.matches) {
    burgerToggle.classList.remove('navigation__burger--active');
    burgerMenu.classList.remove('menu--active');
    burgerBackStatic.classList.remove('page--burger');
  }
};
