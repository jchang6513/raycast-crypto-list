export const formatNumber = (num: number, style = 'decimal') => {
  return new Intl.NumberFormat(
    'en-US',
    {
      style,
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  ).format(num);
}
