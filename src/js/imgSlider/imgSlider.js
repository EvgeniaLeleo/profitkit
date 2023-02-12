import { DIRECTION } from '../constants';

export const imgSlider = (index, prevIndex, container, dataItem) => {
  let prev = prevIndex.value;

  if (index === prev || !dataItem) return;

  const { photos, title } = dataItem;

  const imgPrev = container.querySelector('.card__img_current');
  imgPrev.classList.add(index > prev ? DIRECTION.toLeft : DIRECTION.toRight);

  imgPrev.addEventListener('animationend', () => {
    container.removeChild(imgPrev);
  });

  const imgNext = document.createElement('img');
  imgNext.classList.add('card__img', 'card__img_new');
  imgNext.src = photos[index]
    ? photos[index]
    : '../../../static/img/no-photo.jpg';
  imgNext.alt = title ? title : 'No title';
  container.appendChild(imgNext);

  imgNext.classList.add(
    index > prev ? DIRECTION.fromRight : DIRECTION.fromLeft
  );

  imgNext.addEventListener('animationend', () => {
    imgNext.classList.remove(
      index > prev ? DIRECTION.fromRight : DIRECTION.fromLeft
    );
    imgNext.classList.add('card__img_current');
  });

  prevIndex.value = index;
};
