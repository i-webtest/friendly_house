// const width = document.documentElement.clientWidth;

// const imageSlider = document.querySelector('.help__image-slider');
// const imageWrapper = document.querySelector('.help__image-wrapper');
// const image1 = document.querySelector('.help__image-01');
// const image2 = document.querySelector('.help__image-02');
// const image3 = document.querySelector('.help__image-03');

// const swiperOn = () => {
//   imageSlider.classList.add('swiper1');
//   imageWrapper.classList.add('swiper-wrapper');
//   image1.classList.add('swiper-slide');
//   image2.classList.add('swiper-slide');
//   image3.classList.add('swiper-slide');

//   image1.style.width = 200 + 'px';
//   image2.style.width = 193 + 'px';
//   image3.style.width = 170 + 'px';

//   new Swiper('.swiper1', {
//     slidesPerView: 'auto',
//     spacebetween: 10,
//     freeMode: true,
//     keyboard: {
//       enabled: true,
//     },
//   });
// };

// const helpSlider = document.querySelector('.help__slider');
// const sliderWrapper = document.querySelector('.help__slider-wrapper');

// const slider1 = document.querySelector('.help__slide-01');
// const slider2 = document.querySelector('.help__slide-02');
// const slider3 = document.querySelector('.help__slide-03');

// const swiperOn2 = () => {
//   helpSlider.classList.add('swiper2');
//   sliderWrapper.classList.add('swiper-wrapper');
//   slider1.classList.add('swiper-slide');
//   slider2.classList.add('swiper-slide');
//   slider3.classList.add('swiper-slide');

//   slider1.style.width = 130 + 'px';
//   slider2.style.width = 225 + 'px';
//   slider3.style.width = 218 + 'px';

//   new Swiper('.swiper2', {
//     slidesPerView: 'auto',
//     spacebetween: 10,
//     freeMode: true,
//     keyboard: {
//       enabled: true,
//     },
//   });
// };

// if (width <= 620) {
//   swiperOn();
//   swiperOn2();
// }

// /* --- pets --- */

// const petsSlider = document.querySelector('.pets__slider');
// const petsGrid = document.querySelector('.pets__grid');
// const petsSlides = document.querySelectorAll('.pets__item');

// const petsSwiper = () => {
//   petsSlider.classList.add('swiper3');
//   petsGrid.classList.add('swiper-wrapper');
//   petsSlides.forEach((slide) => {
//     slide.classList.add('swiper-slide');
//     // slide.style.width = 540 + 'px';
//   });

//   new Swiper('.swiper3', {
//     slidesPerView: '1',
//     spacebetween: 20,
//     centeredSlides: true,
//     // freeMode: true,
//     // loop: true,
//     keyboard: {
//       enabled: true,
//     },

//     navigation: {
//       nextEl: '.pets-button-next',
//       prevEl: '.pets-button-prev',
//     },

//     effect: 'fade',
//     fadeEffect: {
//       crossFade: true,
//     },
//   });
// };

// if (width <= 1023) petsSwiper();
