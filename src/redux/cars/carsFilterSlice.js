import { createSlice } from '@reduxjs/toolkit';

const carFilterSlice = createSlice({
  name: 'filter',
  initialState: {
    selectedBrand: '',
  },
  reducers: {
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    resetFilters: state => {
      state.selectedBrand = '';
    },
  },
});

export const { setSelectedBrand } = carFilterSlice.actions;
export const carFilterReducer = carFilterSlice.reducer;
