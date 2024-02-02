'use strict';
//підключення бургера//
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body-menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});




const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
   let a = window.scrollY;

   if (a > 0) {
      header.classList.add('scrolled');
   }
   else {
      header.classList.remove('scrolled')
   }
});

//підключення слайдера//
document.addEventListener('scroll', function () {
   if (window.innerWidth <= 768) {
      $('.menu__slider').slick('unslick');
      $('.galery__slider').slick({
         slidesToShow: 1,
         dots: true,
         arrows: false,
      });
   } else {
      $('.menu__slider').slick({
         slidesToShow: 4,
         centerMode: true,
      });
      $('.galery__slider').slick('unslick');
   }
});

const closeBtn = document.querySelectorAll('.close');
const popup = document.querySelector('.popup');
const openBtn = document.querySelectorAll('.openbtn');

openBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      popup.classList.add('open')
   })
})

closeBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      popup.classList.remove('open')
   })
})







