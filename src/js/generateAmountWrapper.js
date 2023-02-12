import { amountFunctionality } from './amountFunctionality';

export const generateAmountWrapper = ({ container, rest }) => {
  const amountWrapper = document.createElement('div');
  amountWrapper.classList.add('amount-wrapper');

  const minus = document.createElement('div');
  minus.classList.add(
    'amount-wrapper__change-amount-icon',
    'amount-wrapper__change-amount-icon_minus',
    'amount-wrapper__change-amount-icon_disabled'
  );
  minus.innerHTML =
    '<img src="../../static/icons/minus.svg" alt="Меньше"></img>';
  amountWrapper.appendChild(minus);

  const amount = document.createElement('input');
  amount.value = '1';
  amount.classList.add('amount-wrapper__amount');
  amountWrapper.appendChild(amount);

  const plus = document.createElement('div');
  plus.classList.add(
    'amount-wrapper__change-amount-icon',
    'amount-wrapper__change-amount-icon_plus'
  );
  plus.innerHTML = '<img src="../../static/icons/plus.svg" alt="Больше"></img>';
  amountWrapper.appendChild(plus);

  container.appendChild(amountWrapper);
  amountFunctionality({ amount, rest, plus, minus });
};
