import { configureStore } from "@reduxjs/toolkit"
import postsSlice from "./slice/postsSlice"

export const store = configureStore({
    reducer : {
        posts : postsSlice
    }
})
