import { generateSlide } from '../generateSlide';
import { hideSlide } from './hideSlide';
import { showSlide } from './showSlide';
import { DIRECTION } from '../constants';

const arrowRightCallback = (items) => {
  const currentSlide = document.querySelector('.cards-container_current');

  hideSlide(currentSlide, DIRECTION.toLeft);

  if (items) {
    generateSlide(items, 'new');
  }

  const nextSlide = document.querySelector('.cards-container_new');

  showSlide(nextSlide, DIRECTION.fromRight);
};

const arrowLeftCallback = (items) => {
  const currentSlide = document.querySelector('.cards-container_current');

  hideSlide(currentSlide, DIRECTION.toRight);

  if (items) {
    generateSlide(items, 'new');
  }

  const nextSlide = document.querySelector('.cards-container_new');
  showSlide(nextSlide, DIRECTION.fromLeft);
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
