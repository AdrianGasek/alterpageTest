type actionContext = 'sum' | 'subtract' | 'multiply';

export function calculateByContext(context: actionContext, arr: number[]) {
  if (arr.length > 1) {
    switch (context) {
      case 'sum':
        return arr.reduce((a, b) => a + b);
      case 'subtract':
        return arr.reduce((a, b) => a - b);
      case 'multiply':
        return arr.reduce((a, b) => a * b);
      default:
        return 'Wrong input data';
    }
  } else {
    return 'Wrong input data';
  }
}
