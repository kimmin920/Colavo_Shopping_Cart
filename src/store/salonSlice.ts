import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CurrencyCode, FetchStatus } from '../types/global.types';
import { FetchError, SalonData, SalonDataState } from '../types/salon.types';
import formatWithIds from '../utils/formatWithIds';

// TODO: check secodn arg;
export const fetchSalonData = createAsyncThunk<
    SalonData,
    void,
    { rejectValue: FetchError }
  >(
    'items/fetchSalonData',
    async (payload, thunkApi) => {
      const response = await fetch('https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData');

      if (response.status !== 200) {
        return thunkApi.rejectWithValue({
          message: 'Failed to fetch items.',
          code: response.status,
        });
      }

      const data = await response.json();

      return {
        currencyCode: data['currency_code'],
        items: formatWithIds(data.items),
        discounts: formatWithIds(data.discounts),
      } as unknown as SalonData;
    });

const initialState: SalonDataState = {
  data: {
    currencyCode: CurrencyCode.KRW,
    items: {},
    discounts: {},
  },
  status: FetchStatus.IDLE,
  error: null,
};

export const salonSlice = createSlice({
  name: 'salon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSalonData.pending, (state) => {
      state.status = FetchStatus.LOADING;
      state.error = null;
    });

    builder.addCase(fetchSalonData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = FetchStatus.SUCCESS;
    });

    builder.addCase(fetchSalonData.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }

      state.status = FetchStatus.FAIL;
    });
  },
});

export default salonSlice.reducer;
