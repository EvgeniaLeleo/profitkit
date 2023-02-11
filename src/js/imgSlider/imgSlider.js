export const imgSlider = (index, prevIndex, container, dataItem) => {
  if (index === prevIndex.value && !dataItem) return;

  const { photos, title } = dataItem;

  const imgPrev = container.querySelector('.card__img_current');
  imgPrev.classList.add(index > prevIndex.value ? 'to-left' : 'to-right');

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

  imgNext.classList.add(index > prevIndex.value ? 'from-right' : 'from-left');

  imgNext.addEventListener('animationend', () => {
    imgNext.classList.remove(
      index > prevIndex.value ? 'from-right' : 'from-left'
    );
    imgNext.classList.add('card__img_current');
  });

  prevIndex.value = index;
};
