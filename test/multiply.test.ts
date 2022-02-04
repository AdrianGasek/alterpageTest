import { calculateByContext } from './../src/calculator/calculate';

test('multiply 1 * 2 * 3 to equal 6', () => {
  expect(calculateByContext('multiply', [1, 2, 3])).toBe(6);
});
