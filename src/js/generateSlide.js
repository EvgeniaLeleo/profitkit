import { generateCard } from './generateCard';
import { NUMBER_OF_CARDS } from './constants';

export const generateSlide = ({ data, type }) => {
  if (!data.length) return;

  const slideContainer = document.querySelector('.slide-container');

  const newSlide = document.createElement('div');
  newSlide.classList.add('cards-container', `cards-container_${type}`);

  slideContainer.appendChild(newSlide);

  const numberOfItems = Math.min(NUMBER_OF_CARDS, data.length);

  for (let i = 0; i < numberOfItems; i++) {
    if (data[i]) {
      generateCard({ container: newSlide, dataItem: data[i] });
    }
  }
};
