'use strict';

// Adding 'animationend' event trigger so the animation triggers on hover till the end

const [plane1, plane2] = document.querySelectorAll('.plane');

plane1.addEventListener('animationend', () => {
  plane1.classList.remove('animated');
  plane1.classList.add('get-back');
});

plane1.addEventListener('mouseover', () => {
  plane1.classList.remove('get-back');
  plane1.classList.add('animated');
});