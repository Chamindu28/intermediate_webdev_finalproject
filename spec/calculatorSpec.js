const { calculate } = require('../js/script');

describe('Interest Rate Calculator', () => {
  it('calculates simple interest and total amount correctly', () => {
    expect(calculate(10000, 5, 2)).toEqual({ interest: 1000, total: 11000 });
  });

  it('converts numeric input strings to numbers before calculating', () => {
    expect(calculate('2000', '10', '3')).toEqual({ interest: 600, total: 2600 });
  });
});
