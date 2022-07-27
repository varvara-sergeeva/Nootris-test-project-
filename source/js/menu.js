"use strict";
const burgerToggle = document.querySelectorAll('.navigation__burger');
const burgerMenu = document.querySelector('.navigation__menu');
const burgerOptions = document.querySelector('.navigation__options');
const burgerBackStatic = document.querySelector('.page');
const onMediaTablet = window.matchMedia('(min-width: 992px)');
const closeBurger = n => {
  for(let toggle of burgerToggle) {
    toggle.classList.remove('navigation__burger--active');
  }
}

onMediaTablet.addEventListener('change', closeBurgerOnTablet);

burgerToggle.forEach(function (item) {
  item.addEventListener('click', () => {
    item.classList.toggle('navigation__burger--active');
    burgerMenu.classList.toggle('menu--active');
    burgerOptions.classList.toggle('navigation__options--burger');
    burgerBackStatic.classList.toggle('page--burger');
  })
});

function closeBurgerOnTablet(e) {
  if (e.matches) {
    closeBurger();
    burgerMenu.classList.remove('menu--active');
    burgerOptions.classList.remove('navigation__options--burger');
    burgerBackStatic.classList.remove('page--burger');
  }
};
