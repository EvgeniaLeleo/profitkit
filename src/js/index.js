import '../style.scss';
import { generateContent } from './generateContent';

document.addEventListener('DOMContentLoaded', () => {
  const screenContainer = document.querySelector('.screen-container');
  generateContent(screenContainer);
});
