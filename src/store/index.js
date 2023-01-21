import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slice/counterSlice"
import modalSlice from "./slice/modalSlice"
import postsSlice from "./slice/postsSlice"
import userSlice from "./slice/userSlice"

export const store = configureStore({
    reducer : {
        posts : postsSlice,
        counter : counterSlice,
        users : userSlice,
        modal : modalSlice
    }
})
