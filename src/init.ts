import { KEYS } from './constants/constants';
import runCalculation from './runCalculation';

const runApp = () => {
  const symbolButtons = document.querySelectorAll('.calculator__button__symbol');
  const cleanButton = document.querySelector('.calculator__button__clean');
  const resultButton = document.querySelector('.calculator__button__result');
  const calculationField = document.querySelector('.calculator__calculation');
  const resultField = document.querySelector('.calculator__result');

  symbolButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      calculationField.textContent += event.target.textContent;
    });
  });

  cleanButton.addEventListener('click', () => {
    calculationField.textContent = '';
    resultField.textContent = '0';
  });

  resultButton.addEventListener('click', () => {
    resultField.textContent = runCalculation(calculationField.textContent);
  });

  document.addEventListener('keydown', (event) => {
    console.log('event.key: ', event.key);
    if (KEYS.includes(event.key)) {
      calculationField.textContent += event.key;
    } else if (event.key === 'Enter') {
      event.preventDefault();
      resultField.textContent = runCalculation(calculationField.textContent);
    } else if (event.key === 'Escape') {
      calculationField.textContent = '';
      resultField.textContent = '0';
    }
  });
};

export default runApp;
