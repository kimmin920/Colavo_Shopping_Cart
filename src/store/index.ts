import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectCart = (state: RootState) => state.cart.items;

export default store;
