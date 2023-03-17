export function FormatCurrency(value: number | undefined): string {
  if (typeof value === 'number') {
    const renderValue = value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
    return renderValue;
  }
  return '-';
}
