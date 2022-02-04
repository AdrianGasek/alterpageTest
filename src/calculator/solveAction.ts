import { calculateByContext } from './calculate';

type actionContext = 'sum' | 'subtract' | 'multiply';
export function solveAction(context: actionContext) {
  const inputData = document.querySelectorAll<HTMLInputElement>('.input_data');
  const inputValues = Array.from(inputData)
    .map((el) => parseInt(el.value))
    .filter((el) => !isNaN(el));
  let result;
  switch (context) {
    case 'sum':
      result = calculateByContext('sum', inputValues);
      break;
    case 'subtract':
      result = calculateByContext('subtract', inputValues);
      break;
    case 'multiply':
      result = calculateByContext('multiply', inputValues);
      break;
    default:
            result = 'Wrong input data';
  }
  document.querySelector<HTMLInputElement>('#output').setAttribute('value', `${result}`);
}
