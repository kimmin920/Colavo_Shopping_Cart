import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import salonSlice from './salonSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    salon: salonSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectCart = (state: RootState) => state.cart;

export const selectSalonItems = (state: RootState) => state.salon.data.items;
export const selectSalonDiscounts = (state: RootState) => state.salon.data.discounts;
export const selectSalonCurrency = (state: RootState) => state.salon.data.currencyCode;

export default store;
