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

export const selectCart = (state: RootState) => state.cart.items;
export const selectSalon = (state: RootState) => state.salon;

export default store;
