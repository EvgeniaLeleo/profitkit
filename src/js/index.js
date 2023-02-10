import { generateContent } from './generateContent';
import '../css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const screenContainer = document.querySelector('.screen-container');
  generateContent(screenContainer);
});
