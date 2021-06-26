import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type Item = { id?: string, count: number, name: string, price: number };
type Discount = { id?: string, name: string, rate: number };

interface FetchError {
  message: string;
  code: number;
};

interface SalonData {
  // TODO: to constants or types
  currencyCode: 'KRW' | 'USD';
  items: {
    [key: string]: Item;
  };
  discounts: {
    [key: string]: Discount;
  };
};

// TODO: check secodn arg;
export const fetchSalonData = createAsyncThunk<SalonData, void, { rejectValue: FetchError }>(
  'items/fetchSalonData',
  async (payload, thunkApi) => {
    const response = await fetch('https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData');

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch items.',
        code: response.status,
      });
    }

    interface ObjectWithKeys {
      [key: string]: Item | Discount;
    };

    // TODO: seperate to util & Rename
    function toHaveIdFromKey(object: ObjectWithKeys) {
      const result: ObjectWithKeys = {};

      const keys = Object.keys(object);

      keys.forEach(key => {
        result[key] = {
          ...object[key],
          id: key,
        };
      });

      return result;
    }

    const data = await response.json();

    return {
      currencyCode: data['currency_code'],
      items: toHaveIdFromKey(data.items),
      discounts: toHaveIdFromKey(data.discounts),
    } as unknown as SalonData;
});

interface SalonDataState {
  data: SalonData;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  // TODO: check the type below
  error: FetchError | null;
};

const initialState: SalonDataState = {
  data: {
    currencyCode: 'KRW',
    items: {},
    discounts: {},
  },
  status: 'idle',
  error: null,
};

export const salonSlice = createSlice({
  name: 'salon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSalonData.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchSalonData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = 'succeeded';
    });

    builder.addCase(fetchSalonData.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }

      state.status = 'failed';
    });
  },
});

export default salonSlice.reducer;
