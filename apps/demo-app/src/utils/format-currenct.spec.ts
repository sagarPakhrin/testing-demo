import { formatCurrency } from './format-currency';
describe('Format Currency', () => {
  it('should format currency', () => {
    expect(formatCurrency(123456789)).toEqual('$123,456,789.00');
  });

  it('should show currency symbol ', () => {
    // \xa0 is &nbsp;
    expect(formatCurrency(123456789, 'code')).toEqual('USD\xa0123,456,789.00');
  });
});
