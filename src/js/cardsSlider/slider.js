import { generateSlide } from '../generateSlide';
import { hideSlide } from './hideSlide';
import { showSlide } from './showSlide';

const arrowRightCallback = (items) => {
  const currentSlide = document.querySelector('.cards-container_current');

  hideSlide(currentSlide, 'to-left');

  if (items) {
    generateSlide(items, 'new');
  }

  const nextSlide = document.querySelector('.cards-container_new');

  showSlide(nextSlide, 'from-right');
};

const arrowLeftCallback = (items) => {
  const currentSlide = document.querySelector('.cards-container_current');

  hideSlide(currentSlide, 'to-right');

  if (items) {
    generateSlide(items, 'new');
  }

  const nextSlide = document.querySelector('.cards-container_new');
  showSlide(nextSlide, 'from-left');
};

export const slider = () => {
  const arrowRight = document.querySelector('.arrow_right');
  const arrowLeft = document.querySelector('.arrow_left');

  arrowRight.addEventListener('click', () =>
    arrowRightCallback(window.app.currentItems)
  );
  arrowLeft.addEventListener('click', () =>
    arrowLeftCallback(window.app.currentItems)
  );
};
