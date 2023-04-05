const FormatDecimal = (number) => number.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const currencyFormat = (number) => number.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const orderFormat = (number) => number.toLocaleString('pt-BR', {
  minimumIntegerDigits: 4,
  maximumIntegerDigits: 4,
  useGrouping: false,
});

export default FormatDecimal;
