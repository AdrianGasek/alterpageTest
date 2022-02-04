import { solveAction } from './calculator/solveAction';

const blue = document.querySelectorAll<HTMLElement>('.blue');
const red = Array.from(document.querySelectorAll<HTMLElement>('.red'));
const yellow = Array.from(document.querySelectorAll<HTMLElement>('.yellow'));

Array.from(blue).forEach((item) => {
  item.addEventListener('click', (event) => {
    solveAction('multiply');
  });
});

Array.from(red).forEach((item) => {
  item.addEventListener('click', (event) => {
    solveAction('sum');
  });
});

Array.from(yellow).forEach((item) => {
  item.addEventListener('click', (event) => {
    solveAction('subtract');
  });
});
