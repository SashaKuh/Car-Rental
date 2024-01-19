import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65a954a7219bfa3718690b12.mockapi.io';

export const getCars = createAsyncThunk(
    'cars/getCars',
    async (_, thunckAPI) => {
        try {
            const { data } = await axios.get('/api/car-info');
            
            return data
        } catch (error) {
            return thunckAPI.rejectWithValue(error.message)
        }
    }
);

// Пагінація сторінок !!!!!!!