"use strict";

//===================== WebpCss =====================

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});;

//===================== Burger ======================

const burger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.menu__link');
const socialLinks = document.querySelectorAll('.social__link');
const logoLink = document.querySelector('.header__logo>a');

function burgerActive() {
   burger.classList.toggle('active');
   menuBody.classList.toggle('active');
   body.classList.toggle('lock');
   header.classList.toggle('active');
}
function burgerRemoveActive() {
   burger.classList.remove('active');
   menuBody.classList.remove('active');
   body.classList.remove('lock');
   header.classList.remove('active');
}

burger.addEventListener('click', burgerActive);
logoLink.addEventListener('click', burgerRemoveActive);

for (let i = 0; i < navLinks.length; i++) {
   navLinks[i].addEventListener('click', burgerRemoveActive);
}
for (let i = 0; i < socialLinks.length; i++) {
   socialLinks[i].addEventListener('click', burgerRemoveActive);
}

//====================== Slider ============================

const swiper = new Swiper('.slider__items', {
   loop: true,
   slidesPerView: 4,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      200: {
         slidesPerView: 1,
      },
      300: {
         slidesPerView: 2,
      },
      400: {
         slidesPerView: 3,
      },
      570: {
         slidesPerView: 4,
      },
      900: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      }
   }
});

