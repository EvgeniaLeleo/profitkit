import { LABEL } from './constants';

export function generateImgLabel(container, labelText) {
  const label = document.createElement('div');
  label.classList.add('card__img-label');

  if (labelText === LABEL.hit) {
    label.textContent = 'хит';
    label.style.backgroundImage = 'url("../../static/icons/star-hit.svg")';
  }

  if (labelText === LABEL.new) {
    label.textContent = 'new';
    label.style.backgroundImage = 'url("../../static/icons/star-new.svg")';
  }

  container.appendChild(label);
}
