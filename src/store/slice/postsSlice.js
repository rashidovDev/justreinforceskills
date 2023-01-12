import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people : [
        {id : 1, name : "Anvar", age : "23"},
        {id : 2, name : "Ruslan", age : "24"},
    ]
}

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {}
})

export default postsSlice.reducer