import { generateCard } from './generateCard';
import { NUMBER_OF_CARDS } from './constants';

export function generateCards(data) {
  const slideContainer = document.querySelector('.slide-container');
  slideContainer.innerHTML = '';

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
      generateCard(slideContainer, data[i]);
    }
  }
}
