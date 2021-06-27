import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  calculateTotalPrice,
  calculateItemPrice,
  calculateTotalDiscounts,
} from '../utils/calculatePrice';

interface Item {
  id: string;
  count: number;
  name: string;
  price: number;
  totalPrice?: number;
  discount?: number;
};

interface Discount {
  id: string,
  name: string,
  rate: number,
  appliedItemIds?: string[],
  totalPrice?: number,
};

interface CartSliceState {
  items: Item[];
  discounts: Discount[];
  totalPrice: number;
};

const initialState: CartSliceState = {
  items: [],
  discounts: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      if (state.items.some(item => item.id === action.payload.id)) {
        return;
      }

      state.items.push(action.payload);
      state.totalPrice = calculateTotalPrice(state.items);
      // TODO: if there's discounts, need to push id to them.

      if (state.discounts.length > 0) {
        state.discounts.forEach((discount) => {
          discount.appliedItemIds?.push(action.payload.id);
        });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.items);
    },
    increaseItemCount: (state, action: PayloadAction<{ id: string, count: number }>) => {
      const targetIndex = state.items.findIndex(item => item.id === action.payload.id);
      const targetItem = state.items[targetIndex];

      targetItem.count += action.payload.count;
      targetItem.totalPrice = calculateItemPrice(targetItem);

      state.totalPrice = calculateTotalPrice(state.items);
    },
    decreaceItemCount: (state, action: PayloadAction<{ id: string, count: number }>) => {
      const targetIndex = state.items.findIndex(item => item.id === action.payload.id);
      const targetItem = state.items[targetIndex];

      targetItem.count -= action.payload.count;
      targetItem.totalPrice = calculateItemPrice(targetItem);

      state.totalPrice = calculateTotalPrice(state.items);
    },
    addDiscount: (state, action: PayloadAction<Discount>) => {
      const allItemIdsInCart = Object.values(state.items).map(item => item.id);

      if (allItemIdsInCart.length === 0) {
        // NOTE: no items// add handler
        return;
      }

      const newDiscount = {
        ...action.payload,
        appliedItemIds: allItemIdsInCart,
      };

      if (state.discounts.some(discount => discount.id === newDiscount.id)) {
        return;
      }

      state.discounts.push(newDiscount);
    },
    removeDiscount: () => {},
    clearCart: () => {},
    updateTotalPrice: (state) => {
      const totalItemPrice: number = calculateTotalPrice(state.items);
      const totalDiscount: number = calculateTotalDiscounts(state.discounts, state.items);

      state.totalPrice = totalItemPrice - totalDiscount;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemCount,
  decreaceItemCount,
  addDiscount,
  updateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
