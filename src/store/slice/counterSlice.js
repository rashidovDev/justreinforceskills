import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        inc : (state) => {
            state.count += 1
        },
        dec : (state) => {
            state.count -= 1
        },
        incByAmount : (state, action) => {
            state.count += action.payload
        },
        reset : (state) => {
            state.count = 0
        }
    }
})

export const {inc, dec, incByAmount, reset} = counterSlice.actions
export default counterSlice.reducer