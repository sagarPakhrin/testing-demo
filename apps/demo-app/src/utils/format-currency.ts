export const formatCurrency = (value, options) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: options?.currencyDisplay,
  });
  return formatter.format(value);
};
