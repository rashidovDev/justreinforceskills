import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slice/counterSlice"
import postsSlice from "./slice/postsSlice"

export const store = configureStore({
    reducer : {
        posts : postsSlice,
        counter : counterSlice
    }
})
