import { generateContent } from './generateContent';
import { MEDIA_425 } from './constants';
import '../css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  window.app = {
    currentItems: [],
    isMobile: false,
  };

  const screenContainer = document.querySelector('.screen-container');
  generateContent(screenContainer);

  const mediaQuery = window.matchMedia(MEDIA_425);

  const handleWidthChange = (e) => {
    if (e.matches) {
      window.app.isMobile = true;
    }
  };

  mediaQuery.addListener(handleWidthChange);
  handleWidthChange(mediaQuery);
});
