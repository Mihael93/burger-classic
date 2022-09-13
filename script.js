document.addEventListener('DOMContentLoaded', function () {
   let headerBurger = document.querySelector('.header__burger');
   let headerMenu = document.querySelector('.header__menu');
   let headerList = document.querySelector('.header__list');
   let bodySelector = document.querySelector('body');

   headerBurger.onclick = function () {
      headerBurger.classList.toggle('active');
      headerMenu.classList.toggle('active');
      bodySelector.classList.toggle('lock');
   }

   headerList.onclick = function () {
      headerList.classList.remove('active');
      bodySelector.classList.toggle('lock');
   }
});