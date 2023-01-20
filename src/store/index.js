import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slice/counterSlice"
import postsSlice from "./slice/postsSlice"
import userSlice from "./slice/userSlice"

export const store = configureStore({
    reducer : {
        posts : postsSlice,
        counter : counterSlice,
        users : userSlice
    }
})
