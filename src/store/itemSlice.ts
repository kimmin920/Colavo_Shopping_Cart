import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ItemError {
  message: string;
  code: number;
};

interface Item {
  id: number;
  count: number;
  name: string;
  price: number;
};

// TODO: second arg?
export const fetchItems = createAsyncThunk<Item, {}, { rejectValue: ItemError }>(
  'items/fetchItems',
  async (payload, thunkApi) => {
    const response = await fetch('https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData');

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch items.',
        code: response.status,
      } as ItemError);
    }

    return (await response.json()) as Item;
});

interface ItemState {
  items: Item[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  // TODO: check the type below
  error: ItemError | null;
};

const initialState: ItemState = {
  items: [],
  status: 'idle',
  error: null,
};

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchItems.fulfilled, (state, { payload }) => {
      // TODO: check;
      state.items = [payload];
      state.status = 'idle';
    });

    builder.addCase(fetchItems.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }

      state.status = 'failed';
    });
  },
});

export default itemSlice.reducer;
