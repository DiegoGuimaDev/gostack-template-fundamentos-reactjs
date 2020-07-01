const formatValue = (value: number): string => {
  return `R$ ${Intl.NumberFormat().format(value)}`;
};

export default formatValue;
