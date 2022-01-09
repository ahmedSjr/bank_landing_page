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

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
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

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

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
