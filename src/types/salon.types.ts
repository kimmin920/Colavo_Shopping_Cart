import { CurrencyCode, FetchStatus } from './global.types';

export interface Item {
  id: string;
  count: number;
  name: string;
  price: number;
}

export interface Items {
  [key: string]: Item;
}

export interface Discount {
  id: string;
  name: string;
  rate: number;
}

export interface Discounts {
  [key: string]: Discount;
}

export interface FetchError {
  message: string;
  code: number;
}

export interface SalonData {
  currencyCode: CurrencyCode;
  items: {
    [key: string]: Item;
  };
  discounts: {
    [key: string]: Discount;
  };
}

export interface SalonDataState {
  data: SalonData;
  status: FetchStatus;
  error: FetchError | null;
}
