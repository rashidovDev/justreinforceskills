import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : 1, name : "Anvar"},
    {id : 2, name : "John"},
    {id : 3, name : "Smith"},
]

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {

    }
})

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer