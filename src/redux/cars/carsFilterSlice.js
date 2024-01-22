import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    make: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
  reducers: {
    filtersAdverts(state, action) {
      state.make = action.payload.make;
      state.price = action.payload.price;
      state.mileageFrom = action.payload.mileageFrom;
      state.mileageTo = action.payload.mileageTo;
    },
  },
});

export const carFilterReducer = filtersSlice.reducer;
export const { filtersAdverts } = filtersSlice.actions;