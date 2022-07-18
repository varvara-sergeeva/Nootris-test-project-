"use strict";
const burgerToggle = document.querySelectorAll('.navigation__burger');
const burgerMenu = document.querySelector('.navigation__menu');
const burgerOptions = document.querySelector('.navigation__options');
const burgerBackStatic = document.querySelector('.page');

burgerToggle.forEach(function (item) {
  item.addEventListener('click', () => {
    item.classList.toggle('navigation__burger--active');
    burgerMenu.classList.toggle('menu--active');
    burgerOptions.classList.toggle('navigation__options--burger');
    burgerBackStatic.classList.toggle('page--burger');
  })
});
