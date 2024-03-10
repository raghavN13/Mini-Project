import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchConversionRates = createAsyncThunk(
    'currency/fetchConversionRates',
    async (apiKey: string) => {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        const data = await response.json();
        return data.conversion_rates;
    }
);

interface CurrencyState {
    conversionRates: number | null;
    loading: boolean;
    error: string | null;
}

const initialState: CurrencyState = {
    conversionRates: null,
    loading: false,
    error: null,
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversionRates.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchConversionRates.fulfilled, (state, action) => {
                state.loading = false;
                state.conversionRates = action.payload;
            })
            .addCase(fetchConversionRates.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            });
    },
});

export default currencySlice.reducer;