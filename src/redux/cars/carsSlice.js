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
    },
    isLoading: false,
    isError: null,
    extraReducers: (builder) => {
        builder
            .addCase(getCars.fulfilled, handleCars)
            .addCase(getCars.pending, handlePandingCars)
            .addCase(getCars.rejected, handleCarsError);
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;