import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './CurrencySlice';

export const store = configureStore({
    reducer: {
        currency: currencyReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;