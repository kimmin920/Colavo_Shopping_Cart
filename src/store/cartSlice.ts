import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calculateTotal from '../utils/calculateTotalPrice';

interface Item {
  id: string;
  count: number;
  name: string;
  price: number;
};

interface CartSliceState {
  items: Item[];
  totalPrice: number;
};

const initialState: CartSliceState = {
  items: [],
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
      state.totalPrice = calculateTotal(state.items);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.totalPrice = calculateTotal(state.items);
    },
    increaseItemCount: (state, action: PayloadAction<{ id: string, count: number }>) => {
      const targetIndex = state.items.findIndex(item => item.id === action.payload.id);

      state.items[targetIndex].count += action.payload.count;
      state.totalPrice = calculateTotal(state.items);
    },
    decreaceItemCount: (state, action: PayloadAction<{ id: string, count: number }>) => {
      const targetIndex = state.items.findIndex(item => item.id === action.payload.id);

      state.items[targetIndex].count -= action.payload.count;
      state.totalPrice = calculateTotal(state.items);
    },
    addDiscount: () => {},
    removeDiscount: () => {},
    clearCart: () => {},
  },
});

export const {
  addItem,
  removeItem,
  increaseItemCount,
  decreaceItemCount,
} = cartSlice.actions;

export default cartSlice.reducer;
