import { configureStore, createSlice } from '@reduxjs/toolkit'

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        originCurr: 'USD',
        destinationCurr: ''
    },
    reducers: {
        changeOriginCurrency: (state, action) => {
            state.originCurr = action.payload.orgCurr
        },
        changeDestinationCurr: (state, action) => {
            state.destinationCurr = action.payload.desCurr
        }
    }
})

export const store = configureStore({reducer: {currency: currencySlice.reducer}}) 

export const {changeOriginCurrency, changeDestinationCurr} = currencySlice.actions