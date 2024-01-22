import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        make: '',
        price: {
            from: '',
            to: '',
        },
        mileage: {
            from: '',
            to: '',
        },
    },
    reducers: {
        filtersAdverts(state, action) {
            state.make = action.payload.make;
            state.price.from = action.payload.priceFrom;
            state.price.to = action.payload.priceTo;
            state.mileage.from = action.payload.mileageFrom;
            state.mileage.to = action.payload.mileageTo;
        },
    },
});

export const { filtersAdverts } = filtersSlice.actions;
export const carFilterReducer = filtersSlice.reducer;