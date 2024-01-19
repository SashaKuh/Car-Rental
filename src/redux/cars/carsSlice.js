import { createSlice } from '@reduxjs/toolkit';

import { getCars } from './carsOperations';
import { handleCars, handlePandingCars, handleCarsError } from './handlers';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        isLoading: false,
        isError: null,
    },
    extraReducers: builder => {
        builder
            .addCase(getCars.fulfilled, handleCars)
            .addCase(getCars.pending, handlePandingCars)
            .addCase(getCars.rejected, handleCarsError)
    }
});

export const carsReducer = carsSlice.reducer

// Filter car
