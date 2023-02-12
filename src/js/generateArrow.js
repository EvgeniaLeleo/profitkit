import { DIRECTION } from './constants';

export const generateArrow = ({ container, direction }) => {
  const arrowWrapper = document.createElement('div');
  arrowWrapper.classList.add('arrow-wrapper', `arrow_${direction}`);

  const arrow = document.createElement('img');
  arrowWrapper.appendChild(arrow);

  if (direction === DIRECTION.left) {
    arrow.src = '../../static/icons/arrow-left.svg';
    arrow.alt = 'swipe left';
  }

  if (direction === DIRECTION.right) {
    arrow.src = '../../static/icons/arrow-right.svg';
    arrow.alt = 'swipe right';
  }

  container.appendChild(arrowWrapper);
};
