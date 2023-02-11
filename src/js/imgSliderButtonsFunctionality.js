import { imgSlider } from './imgSlider/imgSlider';

export const imgSliderButtonsFunctionality = (container, dataItem) => {
  const buttons = container.querySelectorAll('.card__img-button');

  if (buttons && buttons.length) {
    buttons[0].classList.add('card__img-button_active');
    const prevIndex = { value: 0 };

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        buttons.forEach((button) => {
          button.classList.remove('card__img-button_active');
        });

        imgSlider(index, prevIndex, container, dataItem);

        button.classList.add('card__img-button_active');
      });
    });
  }
};
