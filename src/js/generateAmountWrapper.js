import { amountFunctionality } from './amountFunctionality';

export const generateAmountWrapper = ({ container, rest }) => {
  const amountWrapper = document.createElement('div');
  amountWrapper.classList.add('amountWrapper');

  const minus = document.createElement('div');
  minus.classList.add(
    'amountWrapper__changeAmountIcon',
    'amountWrapper__changeAmountIcon_minus',
    'amountWrapper__changeAmountIcon_disabled'
  );
  minus.innerHTML =
    '<img src="../../static/icons/minus.svg" alt="Меньше"></img>';
  amountWrapper.appendChild(minus);

  const amount = document.createElement('input');
  amount.value = '1';
  amount.classList.add('amountWrapper__amount');
  amountWrapper.appendChild(amount);

  const plus = document.createElement('div');
  plus.classList.add(
    'amountWrapper__changeAmountIcon',
    'amountWrapper__changeAmountIcon_plus'
  );
  plus.innerHTML = '<img src="../../static/icons/plus.svg" alt="Больше"></img>';
  amountWrapper.appendChild(plus);

  container.appendChild(amountWrapper);
  amountFunctionality({ amount, rest, plus, minus });
};
