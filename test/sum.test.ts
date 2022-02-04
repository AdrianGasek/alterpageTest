import { calculateByContext } from './../src/calculator/calculate';

test('adds 1 + 2 to equal 3', () => {
  expect(calculateByContext('sum', [1, 2])).toBe(3);
});
