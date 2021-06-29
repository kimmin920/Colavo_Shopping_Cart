import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState } from '../types/cart.types';
import { Discount, Item } from '../types/salon.types';
import {
  calculateTotalPrice,
  calculateItemPrice,
  calculateTotalDiscounts,
} from '../utils/calculatePrice';

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

      // TODO: delete totalPrice / discount if not needed;
      state.items.push({
        ...action.payload,
        totalPrice: 0,
        discount: 0,
      });

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
        // TODO: check correct price
        totalPrice: 0,
      };

      if (state.discounts.some(discount => discount.id === newDiscount.id)) {
        return;
      }

      state.discounts.push(newDiscount);
    },
    removeDiscount: (state, action: PayloadAction<string>) => {
      state.discounts = state.discounts.filter((discount) => discount.id !== action.payload);
    },
    removeDiscountItem: (state, action: PayloadAction<{ discountId: string, itemId: string }>) => {
      const targetIndex = state.discounts.findIndex((discount) => discount.id === action.payload.discountId);
      const targetDiscount = state.discounts[targetIndex];

      if (targetDiscount) {
        state.discounts[targetIndex].appliedItemIds
        = targetDiscount.appliedItemIds.filter((id) => id !== action.payload.itemId);
      }
    },
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
  removeDiscount,
  removeDiscountItem,
  updateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
