export const generateAmountWrapper = (container, rest) => {
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

  /**
   * Amount input functionality
   */
  amount.addEventListener('input', (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/[^0-9]/gi, '');

    if (Number(e.target.value) >= rest) {
      e.target.value = rest;
      plus.classList.add('amountWrapper__changeAmountIcon_disabled');
    } else {
      plus.classList.remove('amountWrapper__changeAmountIcon_disabled');
    }
  });

  amount.addEventListener('change', (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/[^0-9]/gi, '');

    if (Number(e.target.value) <= 0) {
      e.target.value = 1;
      minus.classList.add('amountWrapper__changeAmountIcon_disabled');
    } else {
      minus.classList.remove('amountWrapper__changeAmountIcon_disabled');
    }
  });

  /**
   * Amount buttons functionality
   */
  minus.addEventListener('click', () => {
    let currentAmount = Number(amount.value);

    if (currentAmount > 1) {
      currentAmount--;
      if (currentAmount === 1) {
        minus.classList.add('amountWrapper__changeAmountIcon_disabled');
      }
      if (currentAmount < rest) {
        plus.classList.remove('amountWrapper__changeAmountIcon_disabled');
      }
    }

    amount.value = currentAmount;
  });

  plus.addEventListener('click', () => {
    let currentAmount = Number(amount.value);

    if (currentAmount < rest) {
      currentAmount++;
      if (currentAmount === rest) {
        plus.classList.add('amountWrapper__changeAmountIcon_disabled');
      }
      if (currentAmount > 1) {
        minus.classList.remove('amountWrapper__changeAmountIcon_disabled');
      }
    }

    amount.value = currentAmount;
  });
};
