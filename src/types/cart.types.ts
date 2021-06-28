import { Item, Discount } from './salon.types';

export interface CartItem extends Item {
  totalPrice: number;
  discount: number;
}

export interface CartDiscount extends Discount {
  appliedItemIds: string[];
  totalPrice: number;
}

export interface CartSliceState {
  items: CartItem[];
  discounts: CartDiscount[];
  totalPrice: number;
}
