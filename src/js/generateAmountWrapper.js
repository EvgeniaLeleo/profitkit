export function generateAmountWrapper(container, rest) {
  const amountWrapper = document.createElement('div');
  amountWrapper.classList.add('amountWrapper');

  const minus = document.createElement('div');
  minus.classList.add(
    'amountWrapper__changeAmountIcon',
    'amountWrapper__changeAmountIcon_left',
    'amountWrapper__changeAmountIcon_disabled'
  );
  minus.innerHTML = '<img src="../../static/icons/minus.svg"></img>';
  amountWrapper.appendChild(minus);

  const amount = document.createElement('p');
  amount.textContent = '1';
  amount.classList.add('amountWrapper__amount');
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
      currentAmount--;
      if (currentAmount === 1) {
        minus.classList.add('amountWrapper__changeAmountIcon_disabled');
      }
      if (currentAmount < rest) {
        plus.classList.remove('amountWrapper__changeAmountIcon_disabled');
      }
    }

    amount.textContent = currentAmount;
  });

  plus.addEventListener('click', () => {
    let currentAmount = Number(amount.textContent);

    if (currentAmount < rest) {
      currentAmount++;
      if (currentAmount === rest) {
        plus.classList.add('amountWrapper__changeAmountIcon_disabled');
      }
      if (currentAmount > 1) {
        minus.classList.remove('amountWrapper__changeAmountIcon_disabled');
      }
    }

    amount.textContent = currentAmount;
  });
}
