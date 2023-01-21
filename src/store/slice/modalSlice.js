import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isModal : false 
}

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
    setModal : (state) => {
        state.isModal = !state.isModal
    }
    }
})

export const {setModal} = modalSlice.actions;
export default modalSlice.reducer;