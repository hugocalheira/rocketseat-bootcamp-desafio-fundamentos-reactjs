const formatValue = (value: number): string =>
  Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL'
  }).format(value); // TODO
// Intl.NumberFormat("pt-BR").format(value); // TODO

export default formatValue;
