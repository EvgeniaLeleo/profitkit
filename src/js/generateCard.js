import { LABEL } from './constants';
import { generateAmountWrapper } from './generateAmountWrapper';
import { generateImgLabel } from './generateImgLabel';
import { generateImgSliderButtons } from './generateImgSliderButtons';

export const generateCard = (container, dataItem) => {
  const { title, price, oldPrice, photos, label, rest } = dataItem;

  const card = document.createElement('div');
  card.classList.add('card');

  const imgAndTitleWrapper = document.createElement('div');
  card.appendChild(imgAndTitleWrapper);
  imgAndTitleWrapper.style.width = '100%';

  const priceAndFooterWrapper = document.createElement('div');
  priceAndFooterWrapper.classList.add('card__price-footer-wrapper');
  card.appendChild(priceAndFooterWrapper);
  priceAndFooterWrapper.style.width = '100%';

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('card__img-wrapper');

  const img = document.createElement('img');
  img.classList.add('card__img', 'card__img_current');
  imgWrapper.appendChild(img);

  if (photos && photos.length && photos[0]) {
    img.src = photos[0];
    img.alt = title ? title : 'No title';
  } else {
    img.src = '../../../static/img/no-photo.jpg';
    img.alt = title ? title : 'No photo';
  }

  imgAndTitleWrapper.appendChild(imgWrapper);

  const itemTitle = document.createElement('p');
  itemTitle.classList.add('card__title');
  itemTitle.textContent = title;
  imgAndTitleWrapper.appendChild(itemTitle);

  const priceWrapper = document.createElement('div');
  priceWrapper.classList.add('card__priceWrapper');
  priceAndFooterWrapper.appendChild(priceWrapper);

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
  priceAndFooterWrapper.appendChild(cardFooter);

  const button = document.createElement('button');
  button.classList.add('card__button');
  button.innerHTML =
    '<div class="button__content"><img src="../../static/icons/cart.svg"></img><span>В корзину</span></div>';

  generateAmountWrapper(cardFooter, rest);
  cardFooter.appendChild(button);

  const iconsWrapper = document.createElement('div');
  iconsWrapper.classList.add('card__iconsWrapper');
  card.appendChild(iconsWrapper);

  const favorite = document.createElement('div');
  favorite.classList.add('card__icon');
  favorite.innerHTML =
    '<img src="../../static/icons/heart.svg" alt="В избранное"></img>';
  iconsWrapper.appendChild(favorite);

  const scales = document.createElement('div');
  scales.classList.add('card__icon');
  scales.innerHTML =
    '<img src="../../static/icons/scales.svg" alt="Сравнить"></img>';
  iconsWrapper.appendChild(scales);

  const labelText = label.hit ? LABEL.hit : label.new ? LABEL.new : '';
  if (labelText) {
    generateImgLabel(imgWrapper, labelText);
  }

  generateImgSliderButtons(imgWrapper, photos ? photos.length : 0, dataItem);

  container.appendChild(card);
};
