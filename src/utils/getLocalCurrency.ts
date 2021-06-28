import { CurrencyCode } from '../types/global.types';

export default function getLocalCurrency(
  number: number,
  currencyCode: string,
): string {
  switch(currencyCode) {
    case CurrencyCode.KRW:
      return new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: currencyCode,
      }).format(number);
    case CurrencyCode.USD:
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currencyCode,
      }).format(number);
    default:
      return 'UNKNOWN CURRENCY';
  }
}
