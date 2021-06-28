const LOCALE_CODE = {
  KRW: 'KRW',
  USD: 'USD',
};

export default function getLocalCurrency(number: number, currencyCode: string) {
  switch(currencyCode) {
    case LOCALE_CODE.KRW:
      return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(number);
    case LOCALE_CODE.USD:
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(number);
    default:
      return number;
  }
}
