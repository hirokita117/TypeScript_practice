import { Dollar } from '../../../entities/currency/Dollar';

describe('Dollar test', () => {
  test('times' , () => {
    const dollar = new Dollar(10);
    const result = dollar.times(10);
    expect(result).toBe(100);
  });
});