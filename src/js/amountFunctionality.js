export const amountFunctionality = ({ amount, rest, plus, minus }) => {
  /**
   * Amount input functionality
   */
  amount.addEventListener('input', (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/[^0-9]/gi, '');

    if (Number(e.target.value) >= rest) {
      e.target.value = rest;
      plus.classList.add('amount-wrapper__change-amount-icon_disabled');
    } else {
      plus.classList.remove('amount-wrapper__change-amount-icon_disabled');
    }
  });

  amount.addEventListener('change', (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/[^0-9]/gi, '');

    if (Number(e.target.value) <= 1) {
      e.target.value = 1;
      minus.classList.add('amount-wrapper__change-amount-icon_disabled');
    } else {
      minus.classList.remove('amount-wrapper__change-amount-icon_disabled');
    }
  });

  /**
   * Amount buttons functionality
   */

  const handleDecrease = () => {
    let currentAmount = Number(amount.value);

    if (currentAmount === 1) {
      minus.classList.add('amount-wrapper__change-amount-icon_disabled');
    }

    if (currentAmount > 1) {
      currentAmount--;

      if (currentAmount < rest) {
        plus.classList.remove('amount-wrapper__change-amount-icon_disabled');
      }
    }

    amount.value = currentAmount;
  };

  const handleIncrease = () => {
    let currentAmount = Number(amount.value);

    if (currentAmount === rest) {
      plus.classList.add('amount-wrapper__change-amount-icon_disabled');
    }

    if (currentAmount < rest) {
      currentAmount++;

      if (currentAmount > 1) {
        minus.classList.remove('amount-wrapper__change-amount-icon_disabled');
      }
    }

    amount.value = currentAmount;
  };

  amount.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp') return handleIncrease();
    if (e.code === 'ArrowDown') return handleDecrease();
  });

  minus.addEventListener('click', handleDecrease);
  plus.addEventListener('click', handleIncrease);
};
