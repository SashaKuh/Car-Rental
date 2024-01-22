import { createSlice } from '@reduxjs/toolkit';

import { getCars } from './carsOperations';
import {
    handleCars,
    handleCarsError,
    handlePandingCars
} from './handlers.js'

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        displayedCars: 12,
        currentPage: 1,
        isLoading: false,
        isError: null,
        hasMoreData: true,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        updateCars: (state, action) => {
    const data = action.payload;

    if (data && Array.isArray(data)) {
      state.cars = data;
    } else {
      console.error('Invalid data received:', data);
    }
  },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCars.fulfilled, handleCars)
            .addCase(getCars.pending, handlePandingCars)
            .addCase(getCars.rejected, handleCarsError);
    },
});

export const { setCurrentPage, updateCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
