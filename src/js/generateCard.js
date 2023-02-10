import { LABEL } from './constants';
import { generateImgLabel } from './generateImgLabel';
import { generateSliderButtons } from './generateSliderButtons';

export function generateCard(container, data) {
  const { title, price, oldPrice, photos, label } = data;

  const card = document.createElement('div');
  card.classList.add('card');

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('card__img-wrapper');
  if (photos) {
    photos.length && data.photos[0]
      ? (imgWrapper.style.backgroundImage = `url(${data.photos[0]})`)
      : (imgWrapper.textContent = 'нет фото');
  }

  if (!photos) {
    imgWrapper.textContent = 'нет фото';
  }
  card.appendChild(imgWrapper);

  const itemTitle = document.createElement('p');
  itemTitle.classList.add('card__title');
  itemTitle.textContent = title;
  card.appendChild(itemTitle);

  const priceWrapper = document.createElement('div');
  priceWrapper.classList.add('card__priceWrapper');
  card.appendChild(priceWrapper);

  const itemPrice = document.createElement('p');
  itemPrice.classList.add('card__price');
  itemPrice.textContent = price.toLocaleString() + ' ₽';
  priceWrapper.appendChild(itemPrice);

  if (oldPrice) {
    const itemOldPrice = document.createElement('p');
    itemOldPrice.classList.add('card__price', 'card__price_old');
    itemOldPrice.textContent = oldPrice.toLocaleString() + ' ₽';
    priceWrapper.appendChild(itemOldPrice);
  }

  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card__footer');
  card.appendChild(cardFooter);

  const amountWrapper = document.createElement('div');
  amountWrapper.classList.add('amountWrapper');

  const minus = document.createElement('div');
  minus.classList.add(
    'amountWrapper__changeAmountIcon',
    'amountWrapper__changeAmountIcon_left'
  );
  minus.innerHTML = '<img src="../../static/icons/minus.svg"></img>';
  amountWrapper.appendChild(minus);

  const amount = document.createElement('p');
  amount.classList.add('amountWrapper__amount');
  amount.textContent = '1';
  amountWrapper.appendChild(amount);

  const plus = document.createElement('div');
  plus.classList.add(
    'amountWrapper__changeAmountIcon',
    'amountWrapper__changeAmountIcon_right'
  );
  plus.innerHTML = '<img src="../../static/icons/plus.svg"></img>';
  amountWrapper.appendChild(plus);

  const button = document.createElement('button');
  button.classList.add('card__button');
  button.innerHTML =
    '<div class="button__content"><img src="../../static/icons/cart.svg"></img><span>В корзину</span></div>';

  cardFooter.appendChild(amountWrapper);
  cardFooter.appendChild(button);

  const iconsWrapper = document.createElement('div');
  iconsWrapper.classList.add('card__iconsWrapper');
  card.appendChild(iconsWrapper);

  const favorite = document.createElement('div');
  favorite.classList.add('card__icon');
  favorite.innerHTML = '<img src="../../static/icons/heart.svg"></img>';
  iconsWrapper.appendChild(favorite);

  const scales = document.createElement('div');
  scales.classList.add('card__icon');
  scales.innerHTML = '<img src="../../static/icons/scales.svg"></img>';
  iconsWrapper.appendChild(scales);

  const labelText = label.hit ? LABEL.hit : label.new ? LABEL.new : '';
  if (labelText) {
    generateImgLabel(imgWrapper, labelText);
  }
  generateSliderButtons(imgWrapper, photos ? photos.length : 0);

  container.appendChild(card);
}
