export const showSlide = (slide, direction) => {
  slide.classList.add('cards-container_new', direction);

  slide.addEventListener('animationend', () => {
    slide.classList.remove('cards-container_new', direction);
    slide.classList.add('cards-container_current');
  });
};
