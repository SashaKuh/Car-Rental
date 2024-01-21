import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

import { carsReducer } from './cars/carsSlice';
import { carFilterReducer } from './cars/carsFilterSlice'
import {favoritesReducer} from './favoritesSlice'

const store = configureStore({
    reducer: {
        cars: carsReducer,
        filter: carFilterReducer,
        favorite: favoritesReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    ]
});

const persistor = persistStore(store);

export { store, persistor };