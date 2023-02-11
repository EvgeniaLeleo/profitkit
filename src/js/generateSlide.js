import { generateCard } from './generateCard';
import { NUMBER_OF_CARDS } from './constants';

export const generateSlide = (data, type) => {
  const slideContainer = document.querySelector('.slide-container');

  const newSlide = document.createElement('div');
  newSlide.classList.add('cards-container', `cards-container_${type}`);

  slideContainer.appendChild(newSlide);

  if (!data.length) {
    const warning = document.createElement('div');
    warning.textContent = 'Пока здесь ничего нет';
    warning.classList.add('warning');
    slideContainer.appendChild(warning);
    return;
  }

  const numberOfItems = Math.min(NUMBER_OF_CARDS, data.length);

  for (let i = 0; i < numberOfItems; i++) {
    if (data[i]) {
      generateCard(newSlide, data[i]);
    }
  }
};
