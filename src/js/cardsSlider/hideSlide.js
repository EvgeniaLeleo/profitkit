export const hideSlide = ({ slide, direction }) => {
  if (!slide) return;

  const slideContainer = document.querySelector('.slide-container');
  slide.classList.add(direction);

  slide.addEventListener('animationend', () => {
    const current = document.body.querySelector('.cards-container_current');
    slideContainer.removeChild(current);
  });
};
