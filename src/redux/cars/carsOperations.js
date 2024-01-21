import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65a954a7219bfa3718690b12.mockapi.io';

export const getCars = createAsyncThunk(
    'cars/getCars',
    async (_, thunkAPI) => {
        try {
            const currentPage = thunkAPI.getState().cars.currentPage;
            const perPage = thunkAPI.getState().cars.displayedCars;

            const { data } = await axios.get(`/api/car-info?page=${currentPage}&limit=${perPage}`);
            
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const filterCars = createAsyncThunk(
    'cars/filterCars',
    async (brand, thunkAPI) => {
        try {
            const { data } = await axios.get(`/api/car-info/catalog?make=${brand}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
