import { CurrencyCode, FetchStatus } from './global.types';

export interface Item {
  id: string;
  count: number;
  name: string;
  price: number;
}

export interface Discount {
  id: string;
  name: string;
  rate: number;
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

export interface ObjectHavingKeys {
  [key: string]: Item | Discount;
}

export interface ObjectValueHavingIds {
  [key: string]: {
    id: string,
  };
}
