export const generateSliderButtons = (container, numberOfButtons) => {
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('card__buttonsWrapper');
  container.appendChild(buttonsWrapper);

  for (let i = 0; i < numberOfButtons; i++) {
    const button = document.createElement('div');
    button.classList.add('card__img-button');
    buttonsWrapper.appendChild(button);
  }

  const buttons = container.querySelectorAll('.card__img-button');
  if (buttons && buttons.length) {
    buttons[0].classList.add('card__img-button_active');
  }

  container.appendChild(buttonsWrapper);
};
