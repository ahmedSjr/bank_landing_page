'use strict';
/* Update starter files */

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Dom Elements
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

//Event Delegation

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
//   console.log(
//     'Height and width',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//Scrolling
//   window.scrollTo(
//     s1coords.left + window.pageXOffset,
//     s1coords.top + window.pageYOffset
//   );

//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Testing the event listener');
//   //   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();

//   //stop prop
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// h1.onmouseenter = function (e) {
//   alert('Add: You are great again');
// };
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.section');

// const selectAll = document.querySelectorAll('.section');
// const header = document.querySelector('.header');

// console.log(selectAll);

// document.getElementById('section--1');
// const allbuttons = document.getElementsByTagName('button');

// console.log(allbuttons);

// console.log(document.getElementsByClassName('btn'));

// //Creating and inserting elements

// const cooki = document.createElement('div');
// cooki.classList.add('cookie-message');

// // cooki.textContent = '';

// cooki.innerHTML =
//   'We use cookies for improvements and better performance. <button class="btn btn-close-cookie">Got It!</button>';
// header.append(cooki);
// // header.append(cooki.cloneNode(true));

// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     cooki.remove();
//   });

// // Styles

// cooki.style.backgroundColor = '#37383d';
// cooki.style.width = '120%';

// console.log(cooki.style.backgroundColor);
// console.log(getComputedStyle(cooki).color);

// cooki.style.height =
//   Number.parseFloat(getComputedStyle(cooki).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orange');

// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// logo.alt = 'Nice Logo';
// console.log(logo.alt);
// console.log(logo.getAttribute('src'));
// console.log(logo.alt);

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attribute
// console.log(logo.dataset.versionNumber);

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
