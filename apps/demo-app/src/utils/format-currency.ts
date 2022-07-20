export const formatCurrency = (value, currencyDisplay = 'symbol') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: currencyDisplay,
  });
  return formatter.format(value);
};
