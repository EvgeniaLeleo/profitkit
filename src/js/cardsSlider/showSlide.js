export const showSlide = ({ slide, direction }) => {
  if (!slide) return;

  slide.classList.add('cards-container_new', direction);

  slide.addEventListener('animationend', () => {
    slide.classList.remove('cards-container_new', direction);
    slide.classList.add('cards-container_current');
  });
};
