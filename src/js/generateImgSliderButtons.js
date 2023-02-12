import { imgSliderButtonsFunctionality } from './imgSliderButtonsFunctionality';

export const generateImgSliderButtons = ({
  container,
  numberOfButtons,
  dataItem,
}) => {
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('card__buttonsWrapper');
  container.appendChild(buttonsWrapper);

  for (let i = 0; i < numberOfButtons; i++) {
    const button = document.createElement('div');
    button.classList.add('card__img-button');
    buttonsWrapper.appendChild(button);
  }

  imgSliderButtonsFunctionality({ container, dataItem });

  container.appendChild(buttonsWrapper);
};
