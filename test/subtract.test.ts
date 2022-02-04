import { calculateByContext } from './../src/calculator/calculate';

test('subtract 5 - 4 to equal 1', () => {
  expect(calculateByContext('subtract', [5, 4])).toBe(1);
});
