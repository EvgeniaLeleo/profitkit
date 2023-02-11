import { generateCards } from './generateCards';
import { generateNav } from './generateNav';
import { DIRECTION, NUMBER_OF_CARDS } from './constants';
import data from '../data/data.json';
import { generateArrow } from './generateArrow';

export function generateContent(container) {
  container.innerHTML = '';
  generateNav(container);

  const content = document.createElement('div');
  content.classList.add('content');
  container.appendChild(content);

  const slideContainer = document.createElement('div');
  slideContainer.classList.add('slide-container');

  generateCards(slideContainer, data, Math.min(NUMBER_OF_CARDS, data.length));

  generateArrow(content, DIRECTION.left);
  content.appendChild(slideContainer);
  generateArrow(content, DIRECTION.right);
}
