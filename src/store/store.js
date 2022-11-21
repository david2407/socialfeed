import { configureStore } from "@reduxjs/toolkit";
import eventReducer from './events/eventSlice'

export const store = configureStore({
    reducer: {
        event: eventReducer,
    }
})