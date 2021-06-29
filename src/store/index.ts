import { configureStore } from '@reduxjs/toolkit';
import { CartItem, CartSliceState } from '../types/cart.types';
import { CurrencyCode } from '../types/global.types';
import { Discounts, Items } from '../types/salon.types';
import cartSlice from './cartSlice';
import salonSlice from './salonSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    salon: salonSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectCart = (state: RootState): CartSliceState => state.cart;
export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;

export const selectSalonItems = (state: RootState): Items => state.salon.data.items;
export const selectSalonDiscounts = (state: RootState): Discounts => state.salon.data.discounts;
export const selectSalonCurrency = (state: RootState): CurrencyCode => state.salon.data.currencyCode;

export default store;
