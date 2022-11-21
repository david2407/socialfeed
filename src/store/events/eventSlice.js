import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        getEvents: (state) => {
            return state.value
        },
        setEvents: (state, action) => {
            state.value = action.payload
        },
        updateEvents : (state, action) => {
            state.value = [...state.value, ...action.payload]
        }
    }
})

export const { getEvents, setEvents, updateEvents } = eventSlice.actions

export default eventSlice.reducer