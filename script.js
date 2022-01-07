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

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.section');

const selectAll = document.querySelectorAll('.section');
const header = document.querySelector('.header');

console.log(selectAll);

document.getElementById('section--1');
const allbuttons = document.getElementsByTagName('button');

console.log(allbuttons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements

const cooki = document.createElement('div');
cooki.classList.add('cookie-message');

// cooki.textContent = '';

cooki.innerHTML =
  'We use cookies for improvements and better performance. <button class="btn btn-close-cookie">Got It!</button>';
header.prepend(cooki);
// header.append(cooki.cloneNode(true));

document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    cooki.remove();
  });
