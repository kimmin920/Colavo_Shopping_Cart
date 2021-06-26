import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  count: number;
  name: string;
  price: number;
};

interface CartSliceState {
  items: Item[];
};

const initialState: CartSliceState = {
  items: [],
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
    },
    removeItem: (state, action: PayloadAction<string>) => {
        state.items = state.items.filter(({ id }) => id !== action.payload );
    },
    addDiscount: () => {},
    removeDiscount: () => {},
    clearCart: () => {},
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
