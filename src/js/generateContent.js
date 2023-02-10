import { generateCards } from './generateCards';
import { generateNav } from './generateNav';
import { NUMBER_OF_CARDS } from '../constants';
import data from '../data/data.json';

export function generateContent(container) {
  container.innerHTML = '';
  generateNav(container);
  generateCards(container, data, Math.min(NUMBER_OF_CARDS, data.length));
}
