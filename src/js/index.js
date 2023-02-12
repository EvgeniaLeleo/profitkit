import { generateContent } from './generateContent';
import '../css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  window.app = {
    currentItems: [],
  };

  const screenContainer = document.querySelector('.screen-container');
  generateContent(screenContainer);
});
