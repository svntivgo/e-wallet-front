export const currencyHook = (amount: number) => {
  return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
