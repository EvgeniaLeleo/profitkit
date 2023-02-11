export function generateAmountWrapper(container) {
  const amountWrapper = document.createElement('div');
  amountWrapper.classList.add('amountWrapper');

  const minus = document.createElement('div');
  minus.classList.add(
    'amountWrapper__changeAmountIcon',
    'amountWrapper__changeAmountIcon_left'
  );
  minus.innerHTML = '<img src="../../static/icons/minus.svg"></img>';
  amountWrapper.appendChild(minus);

  const amount = document.createElement('p');
  amount.classList.add('amountWrapper__amount');
  amount.textContent = '1';
  amountWrapper.appendChild(amount);

  const plus = document.createElement('div');
  plus.classList.add(
    'amountWrapper__changeAmountIcon',
    'amountWrapper__changeAmountIcon_right'
  );
  plus.innerHTML = '<img src="../../static/icons/plus.svg"></img>';
  amountWrapper.appendChild(plus);

  container.appendChild(amountWrapper);

  minus.addEventListener('click', () => {
    let currentAmount = Number(amount.textContent);
    if (currentAmount > 1) {
      amount.textContent = --currentAmount;
    }
  });

  plus.addEventListener('click', () => {
    let currentAmount = Number(amount.textContent);
    amount.textContent = ++currentAmount;
  });
}
