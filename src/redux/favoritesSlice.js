import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavoriteAdverts(state, action) {
      if (state.items.includes(action.payload)) {
        const newArray = state.items.filter(item => item !== action.payload);
        state.items = newArray;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { toggleFavoriteAdverts } = favoritesSlice.actions;