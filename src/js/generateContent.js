import { generateSlide } from './generateSlide';
import { generateNav } from './generateNav';
import { generateArrow } from './generateArrow';
import { DATA, DIRECTION } from './constants';
import { slider } from './cardsSlider/slider';
import data from '../data/data.json';

export const generateContent = (container) => {
  container.innerHTML = '';
  generateNav({ container, data });

  const content = document.createElement('div');
  content.classList.add('content');
  container.appendChild(content);

  const slideContainer = document.createElement('div');
  slideContainer.classList.add('slide-container');

  generateArrow({ container: content, direction: DIRECTION.left });
  content.appendChild(slideContainer);
  generateArrow({ container: content, direction: DIRECTION.right });

  if (data[DATA.popular]) {
    const items = [...data[DATA.popular]].map(
      (id) => data.items.filter((item) => id === item.id)[0]
    );
    generateSlide({ data: items, type: 'current' });
    window.app.currentItems = items;
  }

  slider(window.app.currentItems);
};
