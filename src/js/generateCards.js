import { generateCard } from './generateCard';

export function generateCards(container, data, numberOfCards) {
  for (let i = 0; i < numberOfCards; i++) {
    generateCard(container, data[i]);
  }
}
