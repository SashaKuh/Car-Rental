import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        likedCars: JSON.parse(localStorage.getItem('likedCars')) || [],
    },
    reducers: {
        toggleLikedCar: (state, action) => {
            const carId = action.payload;
            if (state.likedCars.includes(carId)) {
                state.likedCars = state.likedCars.filter(id => id !== carId);
            } else {
                state.likedCars.push(carId);
            }
        },
    },
});

export const favoritesReducer = favoriteSlice.reducer;
export const { toggleLikedCar } = favoriteSlice.actions;